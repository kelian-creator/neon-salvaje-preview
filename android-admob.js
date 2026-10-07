(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ../../workspace/neon-salvaje/node_modules/@capacitor/core/dist/index.js
  var ExceptionCode, CapacitorException, getPlatformId, createCapacitor, initCapacitorGlobal, Capacitor, registerPlugin, WebPlugin, encode, decode, CapacitorCookiesPluginWeb, CapacitorCookies, readBlobAsBase64, normalizeHttpHeaders, buildUrlParams, buildRequestInit, CapacitorHttpPluginWeb, CapacitorHttp, SystemBarsStyle, SystemBarType, SystemBarsPluginWeb, SystemBars;
  var init_dist = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor/core/dist/index.js"() {
      (function(ExceptionCode2) {
        ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
        ExceptionCode2["Unavailable"] = "UNAVAILABLE";
      })(ExceptionCode || (ExceptionCode = {}));
      CapacitorException = class extends Error {
        constructor(message, code, data) {
          super(message);
          this.message = message;
          this.code = code;
          this.data = data;
        }
      };
      getPlatformId = (win) => {
        var _a, _b;
        if (win === null || win === void 0 ? void 0 : win.androidBridge) {
          return "android";
        } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
          return "ios";
        } else {
          return "web";
        }
      };
      createCapacitor = (win) => {
        const capCustomPlatform = win.CapacitorCustomPlatform || null;
        const cap = win.Capacitor || {};
        const Plugins = cap.Plugins = cap.Plugins || {};
        const getPlatform = () => {
          return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
        };
        const isNativePlatform = () => getPlatform() !== "web";
        const isPluginAvailable = (pluginName) => {
          const plugin = registeredPlugins.get(pluginName);
          if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            return true;
          }
          if (getPluginHeader(pluginName)) {
            return true;
          }
          return false;
        };
        const getPluginHeader = (pluginName) => {
          var _a;
          return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find((h) => h.name === pluginName);
        };
        const handleError = (err) => win.console.error(err);
        const registeredPlugins = /* @__PURE__ */ new Map();
        const registerPlugin2 = (pluginName, jsImplementations = {}) => {
          const registeredPlugin = registeredPlugins.get(pluginName);
          if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
          }
          const platform = getPlatform();
          const pluginHeader = getPluginHeader(pluginName);
          let jsImplementation;
          const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
              jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = await jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
            } else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) {
              jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = await jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
            }
            return jsImplementation;
          };
          const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
              const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m) => prop === m.name);
              if (methodHeader) {
                if (methodHeader.rtype === "promise") {
                  return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                } else {
                  return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                }
              } else if (impl) {
                return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
              }
            } else if (impl) {
              return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
              throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
          };
          const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
              const p = loadPluginImplementation().then((impl) => {
                const fn = createPluginMethod(impl, prop);
                if (fn) {
                  const p2 = fn(...args);
                  remove = p2 === null || p2 === void 0 ? void 0 : p2.remove;
                  return p2;
                } else {
                  throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                }
              });
              if (prop === "addListener") {
                p.remove = async () => remove();
              }
              return p;
            };
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, "name", {
              value: prop,
              writable: false,
              configurable: false
            });
            return wrapper;
          };
          const addListener = createPluginMethodWrapper("addListener");
          const removeListener = createPluginMethodWrapper("removeListener");
          const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
              const callbackId = await call;
              removeListener({
                eventName,
                callbackId
              }, callback);
            };
            const p = new Promise((resolve) => call.then(() => resolve({ remove })));
            p.remove = async () => {
              console.warn(`Using addListener() without 'await' is deprecated.`);
              await remove();
            };
            return p;
          };
          const proxy = new Proxy({}, {
            get(_, prop) {
              switch (prop) {
                // https://github.com/facebook/react/issues/20030
                case "$$typeof":
                  return void 0;
                case "toJSON":
                  return () => ({});
                case "addListener":
                  return pluginHeader ? addListenerNative : addListener;
                case "removeListener":
                  return removeListener;
                default:
                  return createPluginMethodWrapper(prop);
              }
            }
          });
          Plugins[pluginName] = proxy;
          registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: /* @__PURE__ */ new Set([...Object.keys(jsImplementations), ...pluginHeader ? [platform] : []])
          });
          return proxy;
        };
        if (!cap.convertFileSrc) {
          cap.convertFileSrc = (filePath) => filePath;
        }
        cap.getPlatform = getPlatform;
        cap.handleError = handleError;
        cap.isNativePlatform = isNativePlatform;
        cap.isPluginAvailable = isPluginAvailable;
        cap.registerPlugin = registerPlugin2;
        cap.Exception = CapacitorException;
        cap.DEBUG = !!cap.DEBUG;
        cap.isLoggingEnabled = !!cap.isLoggingEnabled;
        return cap;
      };
      initCapacitorGlobal = (win) => win.Capacitor = createCapacitor(win);
      Capacitor = /* @__PURE__ */ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      registerPlugin = Capacitor.registerPlugin;
      WebPlugin = class {
        constructor() {
          this.listeners = {};
          this.retainedEventArguments = {};
          this.windowListeners = {};
        }
        addListener(eventName, listenerFunc) {
          let firstListener = false;
          const listeners = this.listeners[eventName];
          if (!listeners) {
            this.listeners[eventName] = [];
            firstListener = true;
          }
          this.listeners[eventName].push(listenerFunc);
          const windowListener = this.windowListeners[eventName];
          if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
          }
          if (firstListener) {
            this.sendRetainedArgumentsForEvent(eventName);
          }
          const remove = async () => this.removeListener(eventName, listenerFunc);
          const p = Promise.resolve({ remove });
          return p;
        }
        async removeAllListeners() {
          this.listeners = {};
          for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
          }
          this.windowListeners = {};
        }
        notifyListeners(eventName, data, retainUntilConsumed) {
          const listeners = this.listeners[eventName];
          if (!listeners) {
            if (retainUntilConsumed) {
              let args = this.retainedEventArguments[eventName];
              if (!args) {
                args = [];
              }
              args.push(data);
              this.retainedEventArguments[eventName] = args;
            }
            return;
          }
          listeners.forEach((listener) => listener(data));
        }
        hasListeners(eventName) {
          var _a;
          return !!((_a = this.listeners[eventName]) === null || _a === void 0 ? void 0 : _a.length);
        }
        registerWindowListener(windowEventName, pluginEventName) {
          this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: (event) => {
              this.notifyListeners(pluginEventName, event);
            }
          };
        }
        unimplemented(msg = "not implemented") {
          return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
        }
        unavailable(msg = "not available") {
          return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
        }
        async removeListener(eventName, listenerFunc) {
          const listeners = this.listeners[eventName];
          if (!listeners) {
            return;
          }
          const index = listeners.indexOf(listenerFunc);
          if (index !== -1) {
            this.listeners[eventName].splice(index, 1);
          }
          if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
          }
        }
        addWindowListener(handle) {
          window.addEventListener(handle.windowEventName, handle.handler);
          handle.registered = true;
        }
        removeWindowListener(handle) {
          if (!handle) {
            return;
          }
          window.removeEventListener(handle.windowEventName, handle.handler);
          handle.registered = false;
        }
        sendRetainedArgumentsForEvent(eventName) {
          const args = this.retainedEventArguments[eventName];
          if (!args) {
            return;
          }
          delete this.retainedEventArguments[eventName];
          args.forEach((arg) => {
            this.notifyListeners(eventName, arg);
          });
        }
      };
      encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
      CapacitorCookiesPluginWeb = class extends WebPlugin {
        async getCookies() {
          const cookies = document.cookie;
          const cookieMap = {};
          cookies.split(";").forEach((cookie) => {
            if (cookie.length <= 0)
              return;
            let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
            key = decode(key).trim();
            value = decode(value).trim();
            cookieMap[key] = value;
          });
          return cookieMap;
        }
        async setCookie(options) {
          try {
            const encodedKey = encode(options.key);
            const encodedValue = encode(options.value);
            const expires = options.expires ? `; expires=${options.expires.replace("expires=", "")}` : "";
            const path = (options.path || "/").replace("path=", "");
            const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
            document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
          } catch (error) {
            return Promise.reject(error);
          }
        }
        async deleteCookie(options) {
          try {
            document.cookie = `${options.key}=; Max-Age=0`;
          } catch (error) {
            return Promise.reject(error);
          }
        }
        async clearCookies() {
          try {
            const cookies = document.cookie.split(";") || [];
            for (const cookie of cookies) {
              document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
            }
          } catch (error) {
            return Promise.reject(error);
          }
        }
        async clearAllCookies() {
          try {
            await this.clearCookies();
          } catch (error) {
            return Promise.reject(error);
          }
        }
      };
      CapacitorCookies = registerPlugin("CapacitorCookies", {
        web: () => new CapacitorCookiesPluginWeb()
      });
      readBlobAsBase64 = async (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result;
          resolve(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(blob);
      });
      normalizeHttpHeaders = (headers = {}) => {
        const originalKeys = Object.keys(headers);
        const loweredKeys = Object.keys(headers).map((k) => k.toLocaleLowerCase());
        const normalized = loweredKeys.reduce((acc, key, index) => {
          acc[key] = headers[originalKeys[index]];
          return acc;
        }, {});
        return normalized;
      };
      buildUrlParams = (params, shouldEncode = true) => {
        if (!params)
          return null;
        const output = Object.entries(params).reduce((accumulator, entry) => {
          const [key, value] = entry;
          let encodedValue;
          let item;
          if (Array.isArray(value)) {
            item = "";
            value.forEach((str) => {
              encodedValue = shouldEncode ? encodeURIComponent(str) : str;
              item += `${key}=${encodedValue}&`;
            });
            item.slice(0, -1);
          } else {
            encodedValue = shouldEncode ? encodeURIComponent(value) : value;
            item = `${key}=${encodedValue}`;
          }
          return `${accumulator}&${item}`;
        }, "");
        return output.substr(1);
      };
      buildRequestInit = (options, extra = {}) => {
        const output = Object.assign({ method: options.method || "GET", headers: options.headers }, extra);
        const headers = normalizeHttpHeaders(options.headers);
        const type = headers["content-type"] || "";
        if (typeof options.data === "string") {
          output.body = options.data;
        } else if (type.includes("application/x-www-form-urlencoded")) {
          const params = new URLSearchParams();
          for (const [key, value] of Object.entries(options.data || {})) {
            params.set(key, value);
          }
          output.body = params.toString();
        } else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
          const form = new FormData();
          if (options.data instanceof FormData) {
            options.data.forEach((value, key) => {
              form.append(key, value);
            });
          } else {
            for (const key of Object.keys(options.data)) {
              form.append(key, options.data[key]);
            }
          }
          output.body = form;
          const headers2 = new Headers(output.headers);
          headers2.delete("content-type");
          output.headers = headers2;
        } else if (type.includes("application/json") || typeof options.data === "object") {
          output.body = JSON.stringify(options.data);
        }
        return output;
      };
      CapacitorHttpPluginWeb = class extends WebPlugin {
        /**
         * Perform an Http request given a set of options
         * @param options Options to build the HTTP request
         */
        async request(options) {
          const requestInit = buildRequestInit(options, options.webFetchExtra);
          const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
          const url = urlParams ? `${options.url}?${urlParams}` : options.url;
          const response = await fetch(url, requestInit);
          const contentType = response.headers.get("content-type") || "";
          let { responseType = "text" } = response.ok ? options : {};
          if (contentType.includes("application/json")) {
            responseType = "json";
          }
          let data;
          let blob;
          switch (responseType) {
            case "arraybuffer":
            case "blob":
              blob = await response.blob();
              data = await readBlobAsBase64(blob);
              break;
            case "json":
              data = await response.json();
              break;
            case "document":
            case "text":
            default:
              data = await response.text();
          }
          const headers = {};
          response.headers.forEach((value, key) => {
            headers[key] = value;
          });
          return {
            data,
            headers,
            status: response.status,
            url: response.url
          };
        }
        /**
         * Perform an Http GET request given a set of options
         * @param options Options to build the HTTP request
         */
        async get(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "GET" }));
        }
        /**
         * Perform an Http POST request given a set of options
         * @param options Options to build the HTTP request
         */
        async post(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "POST" }));
        }
        /**
         * Perform an Http PUT request given a set of options
         * @param options Options to build the HTTP request
         */
        async put(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "PUT" }));
        }
        /**
         * Perform an Http PATCH request given a set of options
         * @param options Options to build the HTTP request
         */
        async patch(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "PATCH" }));
        }
        /**
         * Perform an Http DELETE request given a set of options
         * @param options Options to build the HTTP request
         */
        async delete(options) {
          return this.request(Object.assign(Object.assign({}, options), { method: "DELETE" }));
        }
      };
      CapacitorHttp = registerPlugin("CapacitorHttp", {
        web: () => new CapacitorHttpPluginWeb()
      });
      (function(SystemBarsStyle2) {
        SystemBarsStyle2["Dark"] = "DARK";
        SystemBarsStyle2["Light"] = "LIGHT";
        SystemBarsStyle2["Default"] = "DEFAULT";
      })(SystemBarsStyle || (SystemBarsStyle = {}));
      (function(SystemBarType2) {
        SystemBarType2["StatusBar"] = "StatusBar";
        SystemBarType2["NavigationBar"] = "NavigationBar";
      })(SystemBarType || (SystemBarType = {}));
      SystemBarsPluginWeb = class extends WebPlugin {
        async setStyle() {
          this.unavailable("not available for web");
        }
        async setAnimation() {
          this.unavailable("not available for web");
        }
        async show() {
          this.unavailable("not available for web");
        }
        async hide() {
          this.unavailable("not available for web");
        }
      };
      SystemBars = registerPlugin("SystemBars", {
        web: () => new SystemBarsPluginWeb()
      });
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/definitions.js
  var MaxAdContentRating;
  var init_definitions = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/definitions.js"() {
      (function(MaxAdContentRating2) {
        MaxAdContentRating2["General"] = "General";
        MaxAdContentRating2["ParentalGuidance"] = "ParentalGuidance";
        MaxAdContentRating2["Teen"] = "Teen";
        MaxAdContentRating2["MatureAudience"] = "MatureAudience";
      })(MaxAdContentRating || (MaxAdContentRating = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-options.interface.js
  var init_banner_ad_options_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-options.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-plugin-events.enum.js
  var BannerAdPluginEvents;
  var init_banner_ad_plugin_events_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-plugin-events.enum.js"() {
      (function(BannerAdPluginEvents2) {
        BannerAdPluginEvents2["SizeChanged"] = "bannerAdSizeChanged";
        BannerAdPluginEvents2["Loaded"] = "bannerAdLoaded";
        BannerAdPluginEvents2["FailedToLoad"] = "bannerAdFailedToLoad";
        BannerAdPluginEvents2["Opened"] = "bannerAdOpened";
        BannerAdPluginEvents2["Closed"] = "bannerAdClosed";
        BannerAdPluginEvents2["AdImpression"] = "bannerAdImpression";
        BannerAdPluginEvents2["AdPaid"] = "bannerAdPaid";
      })(BannerAdPluginEvents || (BannerAdPluginEvents = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-position.enum.js
  var BannerAdPosition;
  var init_banner_ad_position_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-position.enum.js"() {
      (function(BannerAdPosition2) {
        BannerAdPosition2["TOP_CENTER"] = "TOP_CENTER";
        BannerAdPosition2["CENTER"] = "CENTER";
        BannerAdPosition2["BOTTOM_CENTER"] = "BOTTOM_CENTER";
      })(BannerAdPosition || (BannerAdPosition = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-size.enum.js
  var BannerAdSize;
  var init_banner_ad_size_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-size.enum.js"() {
      (function(BannerAdSize2) {
        BannerAdSize2["BANNER"] = "BANNER";
        BannerAdSize2["FULL_BANNER"] = "FULL_BANNER";
        BannerAdSize2["LARGE_BANNER"] = "LARGE_BANNER";
        BannerAdSize2["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE";
        BannerAdSize2["LEADERBOARD"] = "LEADERBOARD";
        BannerAdSize2["ADAPTIVE_BANNER"] = "ADAPTIVE_BANNER";
        BannerAdSize2["SMART_BANNER"] = "SMART_BANNER";
      })(BannerAdSize || (BannerAdSize = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-definitions.interface.js
  var init_banner_definitions_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-definitions.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-size.interface.js
  var init_banner_size_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/banner-size.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/index.js
  var init_banner = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/banner/index.js"() {
      init_banner_ad_options_interface();
      init_banner_ad_plugin_events_enum();
      init_banner_ad_position_enum();
      init_banner_ad_size_enum();
      init_banner_definitions_interface();
      init_banner_size_interface();
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-ad-plugin-events.enum.js
  var InterstitialAdPluginEvents;
  var init_interstitial_ad_plugin_events_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-ad-plugin-events.enum.js"() {
      (function(InterstitialAdPluginEvents2) {
        InterstitialAdPluginEvents2["Loaded"] = "interstitialAdLoaded";
        InterstitialAdPluginEvents2["FailedToLoad"] = "interstitialAdFailedToLoad";
        InterstitialAdPluginEvents2["Showed"] = "interstitialAdShowed";
        InterstitialAdPluginEvents2["FailedToShow"] = "interstitialAdFailedToShow";
        InterstitialAdPluginEvents2["Dismissed"] = "interstitialAdDismissed";
        InterstitialAdPluginEvents2["AdImpression"] = "interstitialAdImpression";
      })(InterstitialAdPluginEvents || (InterstitialAdPluginEvents = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-definitions.interface.js
  var init_interstitial_definitions_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-definitions.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/interstitial/index.js
  var init_interstitial = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/interstitial/index.js"() {
      init_interstitial_ad_plugin_events_enum();
      init_interstitial_definitions_interface();
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-ad-plugin-events.enum.js
  var RewardInterstitialAdPluginEvents;
  var init_reward_interstitial_ad_plugin_events_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-ad-plugin-events.enum.js"() {
      (function(RewardInterstitialAdPluginEvents2) {
        RewardInterstitialAdPluginEvents2["Loaded"] = "onRewardedInterstitialAdLoaded";
        RewardInterstitialAdPluginEvents2["FailedToLoad"] = "onRewardedInterstitialAdFailedToLoad";
        RewardInterstitialAdPluginEvents2["Showed"] = "onRewardedInterstitialAdShowed";
        RewardInterstitialAdPluginEvents2["FailedToShow"] = "onRewardedInterstitialAdFailedToShow";
        RewardInterstitialAdPluginEvents2["Dismissed"] = "onRewardedInterstitialAdDismissed";
        RewardInterstitialAdPluginEvents2["Rewarded"] = "onRewardedInterstitialAdReward";
        RewardInterstitialAdPluginEvents2["AdImpression"] = "onRewardedInterstitialAdImpression";
      })(RewardInterstitialAdPluginEvents || (RewardInterstitialAdPluginEvents = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-definitions.interface.js
  var init_reward_interstitial_definitions_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-definitions.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-item.interface.js
  var init_reward_interstitial_item_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-item.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-ad-options.interface.js
  var init_reward_interstitial_ad_options_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-ad-options.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/index.js
  var init_reward_interstitial = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/index.js"() {
      init_reward_interstitial_ad_plugin_events_enum();
      init_reward_interstitial_definitions_interface();
      init_reward_interstitial_item_interface();
      init_reward_interstitial_ad_options_interface();
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-plugin-events.enum.js
  var RewardAdPluginEvents;
  var init_reward_ad_plugin_events_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-plugin-events.enum.js"() {
      (function(RewardAdPluginEvents2) {
        RewardAdPluginEvents2["Loaded"] = "onRewardedVideoAdLoaded";
        RewardAdPluginEvents2["FailedToLoad"] = "onRewardedVideoAdFailedToLoad";
        RewardAdPluginEvents2["Showed"] = "onRewardedVideoAdShowed";
        RewardAdPluginEvents2["FailedToShow"] = "onRewardedVideoAdFailedToShow";
        RewardAdPluginEvents2["Dismissed"] = "onRewardedVideoAdDismissed";
        RewardAdPluginEvents2["Rewarded"] = "onRewardedVideoAdReward";
        RewardAdPluginEvents2["AdImpression"] = "onRewardedVideoAdImpression";
      })(RewardAdPluginEvents || (RewardAdPluginEvents = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/reward-definitions.interface.js
  var init_reward_definitions_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/reward-definitions.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/reward-item.interface.js
  var init_reward_item_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/reward-item.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-options.interface.js
  var init_reward_ad_options_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-options.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/index.js
  var init_reward = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/reward/index.js"() {
      init_reward_ad_plugin_events_enum();
      init_reward_definitions_interface();
      init_reward_item_interface();
      init_reward_ad_options_interface();
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-status.enum.js
  var AdmobConsentStatus;
  var init_consent_status_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-status.enum.js"() {
      (function(AdmobConsentStatus2) {
        AdmobConsentStatus2["NOT_REQUIRED"] = "NOT_REQUIRED";
        AdmobConsentStatus2["OBTAINED"] = "OBTAINED";
        AdmobConsentStatus2["REQUIRED"] = "REQUIRED";
        AdmobConsentStatus2["UNKNOWN"] = "UNKNOWN";
      })(AdmobConsentStatus || (AdmobConsentStatus = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-debug-geography.enum.js
  var AdmobConsentDebugGeography;
  var init_consent_debug_geography_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-debug-geography.enum.js"() {
      (function(AdmobConsentDebugGeography2) {
        AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["DISABLED"] = 0] = "DISABLED";
        AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["EEA"] = 1] = "EEA";
        AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["NOT_EEA"] = 2] = "NOT_EEA";
        AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["US"] = 3] = "US";
        AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["OTHER"] = 4] = "OTHER";
      })(AdmobConsentDebugGeography || (AdmobConsentDebugGeography = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-request-options.interface.js
  var init_consent_request_options_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-request-options.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-info.interface.js
  var init_consent_info_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-info.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-definition.interface.js
  var init_consent_definition_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/consent-definition.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/index.js
  var init_consent = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/index.js"() {
      init_consent_status_enum();
      init_consent_debug_geography_enum();
      init_consent_request_options_interface();
      init_consent_info_interface();
      init_consent_definition_interface();
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/ad-load-info.interface.js
  var init_ad_load_info_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/ad-load-info.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/ad-options.interface.js
  var init_ad_options_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/ad-options.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/ad-show-options.interface.js
  var init_ad_show_options_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/ad-show-options.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/admob-error.interface.js
  var init_admob_error_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/admob-error.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/ad-mob-revenue-data.interface.js
  var AdValuePrecision;
  var init_ad_mob_revenue_data_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/ad-mob-revenue-data.interface.js"() {
      (function(AdValuePrecision2) {
        AdValuePrecision2[AdValuePrecision2["Unknown"] = 0] = "Unknown";
        AdValuePrecision2[AdValuePrecision2["Estimated"] = 1] = "Estimated";
        AdValuePrecision2[AdValuePrecision2["PublisherProvided"] = 2] = "PublisherProvided";
        AdValuePrecision2[AdValuePrecision2["Precise"] = 3] = "Precise";
      })(AdValuePrecision || (AdValuePrecision = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/index.js
  var init_shared = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/shared/index.js"() {
      init_ad_load_info_interface();
      init_ad_options_interface();
      init_ad_show_options_interface();
      init_admob_error_interface();
      init_ad_mob_revenue_data_interface();
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/app-open/app-open-ad-options.interface.js
  var init_app_open_ad_options_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/app-open/app-open-ad-options.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/app-open/app-open-ad-plugin-events.enum.js
  var AppOpenAdPluginEvents;
  var init_app_open_ad_plugin_events_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/app-open/app-open-ad-plugin-events.enum.js"() {
      (function(AppOpenAdPluginEvents2) {
        AppOpenAdPluginEvents2["Loaded"] = "appOpenAdLoaded";
        AppOpenAdPluginEvents2["FailedToLoad"] = "appOpenAdFailedToLoad";
        AppOpenAdPluginEvents2["Opened"] = "appOpenAdOpened";
        AppOpenAdPluginEvents2["Closed"] = "appOpenAdClosed";
        AppOpenAdPluginEvents2["FailedToShow"] = "appOpenAdFailedToShow";
        AppOpenAdPluginEvents2["AdImpression"] = "appOpenAdImpression";
      })(AppOpenAdPluginEvents || (AppOpenAdPluginEvents = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/app-open/app-open-definitions.interface.js
  var init_app_open_definitions_interface = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/app-open/app-open-definitions.interface.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/app-open/index.js
  var init_app_open = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/app-open/index.js"() {
      init_app_open_ad_options_interface();
      init_app_open_ad_plugin_events_enum();
      init_app_open_definitions_interface();
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/privacy-options-requirement-status.enum.js
  var PrivacyOptionsRequirementStatus;
  var init_privacy_options_requirement_status_enum = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/consent/privacy-options-requirement-status.enum.js"() {
      (function(PrivacyOptionsRequirementStatus2) {
        PrivacyOptionsRequirementStatus2["NOT_REQUIRED"] = "NOT_REQUIRED";
        PrivacyOptionsRequirementStatus2["REQUIRED"] = "REQUIRED";
        PrivacyOptionsRequirementStatus2["UNKNOWN"] = "UNKNOWN";
      })(PrivacyOptionsRequirementStatus || (PrivacyOptionsRequirementStatus = {}));
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/web.js
  var web_exports = {};
  __export(web_exports, {
    AdMobWeb: () => AdMobWeb
  });
  var AdMobWeb;
  var init_web = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/web.js"() {
      init_dist();
      init_consent_status_enum();
      init_privacy_options_requirement_status_enum();
      AdMobWeb = class extends WebPlugin {
        async initialize() {
          console.log("initialize");
        }
        async requestTrackingAuthorization() {
          console.log("requestTrackingAuthorization");
        }
        async trackingAuthorizationStatus() {
          return {
            status: "authorized"
          };
        }
        async requestConsentInfo(options) {
          console.log("requestConsentInfo", options);
          return {
            status: AdmobConsentStatus.REQUIRED,
            isConsentFormAvailable: true,
            canRequestAds: true,
            privacyOptionsRequirementStatus: PrivacyOptionsRequirementStatus.REQUIRED
          };
        }
        async showPrivacyOptionsForm() {
          console.log("showPrivacyOptionsForm");
        }
        async showConsentForm() {
          console.log("showConsentForm");
          return {
            status: AdmobConsentStatus.REQUIRED,
            canRequestAds: true,
            privacyOptionsRequirementStatus: PrivacyOptionsRequirementStatus.REQUIRED
          };
        }
        async resetConsentInfo() {
          console.log("resetConsentInfo");
        }
        async setApplicationMuted(options) {
          console.log("setApplicationMuted", options);
        }
        async setApplicationVolume(options) {
          console.log("setApplicationVolume", options);
        }
        async showBanner(options) {
          console.log("showBanner", options);
        }
        async hideBanner() {
          console.log("hideBanner");
        }
        async resumeBanner() {
          console.log("resumeBanner");
        }
        async removeBanner() {
          console.log("removeBanner");
        }
        async prepareInterstitial(options) {
          console.log("prepareInterstitial", options);
          return {
            adUnitId: options.adId
          };
        }
        async showInterstitial(options) {
          console.log("showInterstitial", options);
        }
        async prepareRewardVideoAd(options) {
          console.log("prepareRewardVideoAd", options);
          return {
            adUnitId: options.adId
          };
        }
        async showRewardVideoAd(options) {
          console.log("showRewardVideoAd", options);
          return {
            type: "",
            amount: 0
          };
        }
        async prepareRewardInterstitialAd(options) {
          console.log("prepareRewardInterstitialAd", options);
          return {
            adUnitId: options.adId
          };
        }
        async showRewardInterstitialAd(options) {
          console.log("showRewardInterstitialAd", options);
          return {
            type: "",
            amount: 0
          };
        }
        async loadAppOpen(options) {
          console.log("loadAppOpen", options);
          return {
            adUnitId: options.adId
          };
        }
        async showAppOpen(options) {
          console.log("showAppOpen", options);
        }
        async isAppOpenLoaded() {
          return { value: false };
        }
        addListener(eventName, listenerFunc) {
          void listenerFunc;
          console.log("addListener", eventName);
          return Promise.resolve({ remove: () => Promise.resolve() });
        }
      };
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    AdMob: () => AdMob,
    AdValuePrecision: () => AdValuePrecision,
    AdmobConsentDebugGeography: () => AdmobConsentDebugGeography,
    AdmobConsentStatus: () => AdmobConsentStatus,
    AppOpenAdPluginEvents: () => AppOpenAdPluginEvents,
    BannerAdPluginEvents: () => BannerAdPluginEvents,
    BannerAdPosition: () => BannerAdPosition,
    BannerAdSize: () => BannerAdSize,
    InterstitialAdPluginEvents: () => InterstitialAdPluginEvents,
    MaxAdContentRating: () => MaxAdContentRating,
    RewardAdPluginEvents: () => RewardAdPluginEvents,
    RewardInterstitialAdPluginEvents: () => RewardInterstitialAdPluginEvents
  });
  var AdMob;
  var init_esm = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor-community/admob/dist/esm/index.js"() {
      init_dist();
      init_definitions();
      init_banner();
      init_interstitial();
      init_reward_interstitial();
      init_reward();
      init_consent();
      init_shared();
      init_app_open();
      AdMob = registerPlugin("AdMob", {
        web: () => Promise.resolve().then(() => (init_web(), web_exports)).then((m) => new m.AdMobWeb())
      });
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor/app/dist/esm/definitions.js
  var init_definitions2 = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor/app/dist/esm/definitions.js"() {
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor/app/dist/esm/web.js
  var web_exports2 = {};
  __export(web_exports2, {
    AppWeb: () => AppWeb
  });
  var AppWeb;
  var init_web2 = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor/app/dist/esm/web.js"() {
      init_dist();
      AppWeb = class extends WebPlugin {
        constructor() {
          super();
          this.handleVisibilityChange = () => {
            const data = {
              isActive: document.hidden !== true
            };
            this.notifyListeners("appStateChange", data);
            if (document.hidden) {
              this.notifyListeners("pause", null);
            } else {
              this.notifyListeners("resume", null);
            }
          };
          document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
        }
        exitApp() {
          throw this.unimplemented("Not implemented on web.");
        }
        async getInfo() {
          throw this.unimplemented("Not implemented on web.");
        }
        async getLaunchUrl() {
          return { url: "" };
        }
        async getState() {
          return { isActive: document.hidden !== true };
        }
        async minimizeApp() {
          throw this.unimplemented("Not implemented on web.");
        }
        async toggleBackButtonHandler() {
          throw this.unimplemented("Not implemented on web.");
        }
        async getAppLanguage() {
          return {
            value: navigator.language.split("-")[0].toLowerCase()
          };
        }
      };
    }
  });

  // ../../workspace/neon-salvaje/node_modules/@capacitor/app/dist/esm/index.js
  var esm_exports2 = {};
  __export(esm_exports2, {
    App: () => App
  });
  var App;
  var init_esm2 = __esm({
    "../../workspace/neon-salvaje/node_modules/@capacitor/app/dist/esm/index.js"() {
      init_dist();
      init_definitions2();
      App = registerPlugin("App", {
        web: () => Promise.resolve().then(() => (init_web2(), web_exports2)).then((m) => new m.AppWeb())
      });
    }
  });

  // android-admob.js
  (async () => {
    if (!window.Capacitor?.isNativePlatform?.() || window.Capacitor.getPlatform() !== "android") return;
    if (document.readyState === "loading") await new Promise((resolve) => document.addEventListener("DOMContentLoaded", resolve, { once: true }));
    const { AdMob: AdMob2, AdmobConsentStatus: AdmobConsentStatus2, RewardAdPluginEvents: RewardAdPluginEvents2, InterstitialAdPluginEvents: InterstitialAdPluginEvents2, BannerAdPluginEvents: BannerAdPluginEvents2, BannerAdSize: BannerAdSize2, BannerAdPosition: BannerAdPosition2 } = await Promise.resolve().then(() => (init_esm(), esm_exports));
    const { App: App2 } = await Promise.resolve().then(() => (init_esm2(), esm_exports2));
    const config = window.TempleAdsConfig.admob;
    const testing = config.mode === "test";
    const check = (signal) => {
      if (signal?.aborted) throw new Error("Anuncio cancelado");
    };
    if (!testing && [config.appId, config.bannerId, config.interstitialId, config.rewardedId, config.rewardedHaloId].some((id) => !id || id.includes("3940256099942544"))) throw new Error("Configura IDs propios de AdMob antes de usar producci\xF3n.");
    let initialized = false, consentGranted = false, presenting = false, busy = false, bannerCleanup = null;
    const setPresenting = (value) => {
      presenting = value;
      if (!value) document.dispatchEvent(new Event("temple:ad-native-closed"));
    };
    window.NativeAdMob = Object.freeze({ isPresenting: () => presenting, isBusy: () => busy });
    async function ensureInitialized(signal) {
      check(signal);
      if (!initialized) {
        await AdMob2.initialize({ initializeForTesting: testing, testingDevices: [...config.testingDevices] });
        initialized = true;
      }
      check(signal);
    }
    async function nativeForm(task, signal) {
      check(signal);
      setPresenting(true);
      try {
        return await task();
      } finally {
        setPresenting(false);
        check(signal);
      }
    }
    const options = (adId) => ({ adId, isTesting: testing });
    async function fullscreen(kind, { signal, canPresent, reward = "halo" }) {
      check(signal);
      if (!consentGranted || busy || presenting) return { completed: false, rewardEarned: false };
      busy = true;
      const rewarded = kind === "rewarded", events = rewarded ? RewardAdPluginEvents2 : InterstitialAdPluginEvents2;
      const id = rewarded ? reward === "credits" ? config.rewardedId : config.rewardedHaloId : config.interstitialId;
      const handles = [];
      let settled = false, earned = false, shown = false, resolveResult;
      const result = new Promise((resolve) => {
        resolveResult = resolve;
      });
      async function cleanup() {
        for (const handle of handles.splice(0)) {
          try {
            await handle.remove();
          } catch {
          }
        }
        signal.removeEventListener("abort", abort);
        busy = false;
        setPresenting(false);
      }
      function finish(success = false) {
        if (settled) return;
        settled = true;
        void cleanup().then(() => resolveResult({ completed: success, rewardEarned: rewarded && earned && !signal.aborted }));
      }
      function abort() {
        if (!shown) finish(false);
      }
      try {
        handles.push(await AdMob2.addListener(events.Dismissed, () => finish(!rewarded || earned)));
        handles.push(await AdMob2.addListener(events.FailedToShow, () => finish(false)));
        if (rewarded) handles.push(await AdMob2.addListener(events.Rewarded, (reward2) => {
          if (shown && !settled && !signal.aborted && Number(reward2.amount) > 0) earned = true;
        }));
        check(signal);
        signal.addEventListener("abort", abort, { once: true });
        let loadTimer;
        try {
          await Promise.race([
            rewarded ? AdMob2.prepareRewardVideoAd(options(id)) : AdMob2.prepareInterstitial(options(id)),
            new Promise((_, reject) => {
              loadTimer = setTimeout(() => reject(new Error("Sin anuncio disponible")), window.TempleAdsConfig.providerLoadTimeoutMs);
            })
          ]);
        } finally {
          clearTimeout(loadTimer);
        }
        check(signal);
        if (!canPresent() || settled) {
          finish(false);
          return await result;
        }
        shown = true;
        setPresenting(true);
        if (rewarded) void AdMob2.showRewardVideoAd({ adId: id }).catch(() => finish(false));
        else void AdMob2.showInterstitial({ adId: id }).catch(() => finish(false));
        return await result;
      } catch {
        finish(false);
        return await result;
      }
    }
    async function renderBanner({ slot, element, signal }) {
      if (slot !== "banner-bottom") return false;
      check(signal);
      if (!consentGranted) throw new Error("Publicidad no autorizada");
      await bannerCleanup?.();
      let disposed = false, height = 60, visible = true, loadedResolve, loadedReject, ready = false;
      const handles = [], loaded = new Promise((resolve, reject) => {
        loadedResolve = resolve;
        loadedReject = reject;
      });
      void loaded.catch(() => {
      });
      function inset() {
        document.body.style.setProperty("--ad-native-bottom", visible && !disposed ? height + "px" : "0px");
      }
      const hide = () => [...document.querySelectorAll('[role="dialog"]')].some((el) => !el.closest("[hidden]")) || presenting || document.hidden;
      let updating = false;
      async function update() {
        if (disposed || updating || !ready) return;
        const next = !hide();
        if (next === visible) {
          inset();
          return;
        }
        updating = true;
        try {
          if (next) await AdMob2.resumeBanner();
          else await AdMob2.hideBanner();
          visible = next;
          inset();
        } catch {
          visible = false;
          inset();
        } finally {
          updating = false;
        }
      }
      const observer = new MutationObserver(() => void update());
      const onVisibility = () => void update();
      const dispose = async () => {
        if (disposed) return;
        disposed = true;
        observer.disconnect();
        signal.removeEventListener("abort", abortBanner);
        document.removeEventListener("visibilitychange", onVisibility);
        document.removeEventListener("temple:ad-native-closed", onVisibility);
        loadedReject(new Error("Banner cancelado"));
        for (const handle of handles.splice(0)) {
          try {
            await handle.remove();
          } catch {
          }
        }
        try {
          await AdMob2.removeBanner();
        } catch {
        }
        inset();
      };
      const abortBanner = () => void dispose();
      bannerCleanup = dispose;
      signal.addEventListener("abort", abortBanner, { once: true });
      try {
        handles.push(await AdMob2.addListener(BannerAdPluginEvents2.SizeChanged, (size) => {
          if (Number(size.height) > 0) height = Number(size.height);
          inset();
        }));
        handles.push(await AdMob2.addListener(BannerAdPluginEvents2.Loaded, () => loadedResolve()));
        handles.push(await AdMob2.addListener(BannerAdPluginEvents2.FailedToLoad, () => loadedReject(new Error("Banner no disponible"))));
        check(signal);
        await AdMob2.showBanner({ ...options(config.bannerId), adSize: BannerAdSize2.ADAPTIVE_BANNER, position: BannerAdPosition2.BOTTOM_CENTER, margin: 0 });
        await loaded;
        check(signal);
        ready = true;
        element.textContent = testing ? "AdMob \xB7 anuncio de prueba Android" : "AdMob \xB7 publicidad";
        observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["hidden"] });
        document.addEventListener("visibilitychange", onVisibility);
        document.addEventListener("temple:ad-native-closed", onVisibility);
        await update();
        inset();
        return () => void dispose();
      } catch (error) {
        await dispose();
        throw error;
      }
    }
    window.AdLayer.registerProvider({
      async requestConsent({ signal }) {
        await ensureInitialized(signal);
        let info = await AdMob2.requestConsentInfo();
        check(signal);
        if (info.isConsentFormAvailable && info.status === AdmobConsentStatus2.REQUIRED) info = await nativeForm(() => AdMob2.showConsentForm(), signal);
        check(signal);
        consentGranted = info.canRequestAds === true;
        return info;
      },
      async initialize({ consent, signal }) {
        check(signal);
        if (consent.canRequestAds !== true) throw new Error("Sin autorizaci\xF3n");
        await ensureInitialized(signal);
        consentGranted = true;
      },
      renderBanner,
      showRewarded: (args) => fullscreen("rewarded", args),
      showInterstitial: (args) => fullscreen("interstitial", args),
      showPrivacyOptions: () => nativeForm(() => AdMob2.showPrivacyOptionsForm()),
      dispose() {
        consentGranted = false;
        const cleanup = bannerCleanup;
        bannerCleanup = null;
        return cleanup?.();
      }
    });
    document.getElementById("ad-provider-enable").textContent = testing ? "ACTIVAR ADMOB \xB7 ANUNCIOS DE PRUEBA" : "ACTIVAR ADMOB ANDROID";
    await App2.addListener("appStateChange", ({ isActive }) => {
      if (!isActive) {
        window.MobileRuntime?.pause();
        if (!presenting && window.AdLayer.getStatus().busy) document.dispatchEvent(new Event("temple:ad-background"));
      }
    });
    await App2.addListener("backButton", () => {
      if (presenting || window.AdLayer.getStatus().busy || window.CreditShop?.isBusy()) return;
      if (!document.getElementById("ad-settings").hidden) {
        document.getElementById("ad-settings-close").click();
        return;
      }
      if (window.CreditShop?.isOpen() && document.getElementById("ad-settings").hidden) {
        window.CreditShop.close();
        return;
      }
      if (window.GameTutorial?.isOpen) {
        window.GameTutorial.close();
        return;
      }
      const dialog = [...document.querySelectorAll('[role="dialog"]')].find((el) => !el.closest("[hidden]"));
      if (dialog) {
        showToast("Usa los controles de la ventana para continuar.");
        return;
      }
      if (!document.body.classList.contains("session-locked")) {
        window.MobileRuntime?.pause();
        return;
      }
      void App2.minimizeApp();
    });
  })().catch((error) => {
    console.error("AdMob Android:", error);
    const status = document.getElementById("ad-status");
    if (status) status.textContent = "No se pudo preparar AdMob Android. El juego sigue disponible sin anuncios.";
  });
})();
/*! Bundled license information:

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)
*/
