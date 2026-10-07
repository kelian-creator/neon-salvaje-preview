/* Fase 8: integración web móvil, sin dependencia nativa. */
const MobileRuntime = {
  pause() {
    if (pauseStartedAt || !matchActive || !runState.pathChoice) return;
    pauseStartedAt = Date.now();
    document.body.classList.add("game-paused");
    document.querySelector("#mobile-pause").hidden = false;
    window.CharacterAudio?.stop();
    window.clearInterval(musicInterval);
    musicInterval = undefined;
    if (audioContext) void audioContext.suspend().catch(() => {});
    saveArcadeProgress();
    if (!document.hidden) document.querySelector("#resume-game").focus();
  },
  async resume() {
    if (!pauseStartedAt || window.CreditShop?.isOpen() || document.hidden || window.GameAdRewards?.isHolding() || window.NativeAdMob?.isPresenting()) return;
    const elapsed = Math.max(0, Date.now() - pauseStartedAt);
    matchEndsAt += elapsed;
    lastSpinAt += elapsed;
    pauseStartedAt = 0;
    document.body.classList.remove("game-paused");
    document.querySelector("#mobile-pause").hidden = true;
    if (soundEnabled && audioContext) {
      try { await audioContext.resume(); startBackgroundMusic(); }
      catch { showToast("Pulsa sonido para reactivar el audio."); }
    }
    saveArcadeProgress();
    updateControls();
    spinButton.focus();
  },
  async fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
      else showToast("Pantalla completa no disponible en este navegador.");
    } catch { showToast("El navegador no permite pantalla completa en este momento."); }
  }
};
window.MobileRuntime = MobileRuntime;
document.querySelector("#pause-game").addEventListener("click", () => MobileRuntime.pause());
document.querySelector("#resume-game").addEventListener("click", () => void MobileRuntime.resume());
document.querySelector("#fullscreen-game").addEventListener("click", () => void MobileRuntime.fullscreen());
document.addEventListener("fullscreenchange", () => {
  const button = document.querySelector("#fullscreen-game");
  const active = Boolean(document.fullscreenElement);
  button.setAttribute("aria-pressed", String(active));
  button.setAttribute("aria-label", active ? "Salir de pantalla completa" : "Entrar en pantalla completa");
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) MobileRuntime.pause();
});
window.addEventListener("pagehide", () => { MobileRuntime.pause(); saveArcadeProgress(); });
document.addEventListener("keydown", (event) => {
  if (!pauseStartedAt || window.CreditShop?.isOpen() || window.GameTutorial?.isOpen || !document.querySelector("#ad-settings").hidden || !document.querySelector("#ad-presentation").hidden || window.AdLayer?.getStatus().busy) return;
  if (event.key === "Tab") { event.preventDefault(); document.querySelector("#resume-game").focus(); }
  if (event.key === "Escape") { event.preventDefault(); void MobileRuntime.resume(); }
});
soundToggle.addEventListener("click", async () => {
  soundEnabled = !soundEnabled;
  if (!soundEnabled) window.CharacterAudio?.stop();
  window.clearInterval(musicInterval);
  musicInterval = undefined;
  try {
    if (soundEnabled) {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioClass) throw new Error("Audio no disponible");
      audioContext ??= new AudioClass();
      await audioContext.resume();
      if (!pauseStartedAt && !document.hidden) startBackgroundMusic();
    } else if (audioContext) await audioContext.suspend();
  } catch { soundEnabled = false; showToast("Audio no disponible en este dispositivo."); }
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundToggle.setAttribute("aria-label", soundEnabled ? "Desactivar música y sonidos" : "Activar música y sonidos");
});
