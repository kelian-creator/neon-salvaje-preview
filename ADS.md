# AdMob Android — Fase 9
Fecha: 4 de octubre de 2026.

## Recompensas
- Desde Créditos, también sin partida activa; durante una partida, tras elegir camino: VER ANUNCIO · +60 CR.
- Cada anuncio rewarded completado concede exactamente 60 créditos virtuales. La cantidad enviada por el SDK no se suma directamente al saldo: el callback confirma el derecho a la recompensa fija.
- Una transacción se concede una sola vez y solo al perfil que la solicitó. Cerrar sin recompensa, error o falta de inventario no añade créditos ni penaliza.
- La partida queda en pausa durante carga y presentación: reloj y penalización de inactividad se detienen. Una pausa previa se conserva. Si pasa a segundo plano queda pausada.
- Los anuncios no alteran probabilidades, multiplicadores, XP, gemas ni poderes. Los créditos adicionales sí permiten más giros y pueden cambiar el resultado final; la clasificación indica los CR obtenidos mediante anuncios.
- La opción separada de halo dorado continúa disponible entre partidas. Usar una unidad rewarded distinta en producción para el halo.

## Archivos
ads.js: gestor y demostración local.
script.js: GameAdRewards, puente de abono fijo, transacción y perfil.
mobile.js: impide reanudar durante una recompensa o anuncio nativo.
android-admob.js: adaptador Capacitor/AdMob y ciclo de vida Android.
ads-config.js: unidades y modo test por defecto.
capacitor.config.json, package.json, tools/: empaquetado nativo y configuración del Manifest.

## Android
Dependencias: Capacitor 8 y @capacitor-community/admob 8.1.0.
1. Instalar Node 22+ y dependencias: npm install.
2. npm run android:add para crear la plataforma; npm run android:sync para actualizarla.
3. npm run android:open, configurar Android SDK/JDK compatibles con Capacitor y compilar desde Android Studio.
4. Usar identificadores de prueba hasta configurar las unidades reales. No afirmar que una build debug está validada sin ejecutarla en dispositivo.

build:web copia solo los recursos del juego y compila el módulo del adaptador en www. android:add y android:sync insertan automáticamente el ID AdMob en AndroidManifest.xml. El identificador de paquete com.neonsalvaje.templofortuna es provisional; establecer uno propio antes de distribuir.

## Configuración real
En TempleAdsConfig.admob:
- mode: production
- appId: ID de aplicación Android de AdMob, con ~.
- bannerId: banner adaptativo inferior.
- interstitialId: anuncio entre partidas.
- rewardedId: unidad rewarded de 60 CR. Configurar en AdMob recompensa 60 y tipo CR.
- rewardedHaloId: unidad rewarded separada para el halo, recompensa 1 HALO.
- testingDevices: dispositivos de desarrollo si corresponde.

El modo producción rechaza IDs de muestra. No se incluyen credenciales ni IDs inventados del titular.

## Privacidad
AdMob se registra únicamente en Android nativo. Se activa desde PUBLICIDAD → ACTIVAR ADMOB. El adaptador inicializa el plugin, consulta UMP, muestra el formulario si es necesario y solo carga anuncios cuando canRequestAds es true. Existen opciones de privacidad del proveedor. Revisar la política final para el SDK y configuración efectivamente publicados.

## Presentación y ciclo de vida
Interstitial solo entre partidas, tres partidas y tres minutos como mínimos. Rewarded es voluntario.
La marca de presentación nativa evita cancelar automáticamente el flujo por la actividad del anuncio. El plugin no ofrece aquí cierre programático del anuncio de pantalla completa: ante caducidad la recompensa se invalida y la partida permanece pausada hasta que el usuario cierre la pantalla del SDK. Luego puede continuar.
El banner nativo reserva espacio inferior y se oculta durante diálogos para no cubrir controles.

## API
AdLayer.registerProvider(adapter), enableProvider(), enableDemo(), disable(), openSettings(), getStatus().
AdLayer.requestRewarded("credits") solicita 60 CR en la cartera del perfil actual.
AdLayer.requestRewarded("halo") solicita el adorno entre partidas.
El SDK confirma Rewarded; Dismissed solo finaliza la presentación. No se abona desde un clic, impresión o temporizador.

## Referencias
- https://github.com/capacitor-community/admob/blob/main/docs/rewarded.md
- https://github.com/capacitor-community/admob/blob/main/docs/consent.md
- https://github.com/capacitor-community/admob/blob/main/docs/banner.md
- https://developers.google.com/admob/android/test-ads
- https://developers.google.com/admob/android/quick-start
