/* Tutorial reutilizable, solo recursos virtuales. */
const GameTutorial = {
  key: "neon-salvaje-tutorial-v1", index: 0, isOpen: false, pausedByTutorial: false, returnFocus: null,
  steps: [
    { icon: "✦", title: "BIENVENIDO AL TEMPLO", copy: "Escribe tu nombre y pulsa ENTRAR. Elige Fortuna (+15% a premios durante 5 giros) o Némesis (−10% durante 5 giros y +5 gemas al completarlos). Tu perfil recibe 60 créditos de bienvenida, una sola vez. Cada partida dura 2 minutos y conserva tu saldo." },
    { icon: "🎰", title: "ELIGE Y GIRA", copy: "Selecciona tu máquina arriba. Ajusta la apuesta con + y − y pulsa GIRAR. La línea central decide el premio. La tabla muestra los multiplicadores. Suerte ×2 duplica el coste y puede rescatar una línea sin premio. Si no giras durante 15 segundos, pierdes 5 créditos." },
    { icon: "◉", title: "UNA SEGUNDA OPORTUNIDAD", copy: "Tras una pérdida puedes intentar la rueda de rescate I: si falla, −5 créditos. Un fallo desbloquea la II: si falla, −10. Puedes ignorarlas y seguir girando. La Rueda del Destino se usa una vez por partida y muestra sus efectos y probabilidades." },
    { icon: "⚡", title: "SORPRESAS Y PROGRESO", copy: "Las victorias encadenadas suman combo. Ganas XP, niveles y gemas; los Wild sustituyen símbolos. Los premios pueden darte giros gratis y bonus. Completa los objetivos de los bosses y descubre personajes en el Panteón. Sus apariciones son guiños breves." },
    { icon: "☀", title: "TU CARTERA DEL TEMPLO", copy: "Abre CRÉDITOS para consultar tu perfil, recoger 20 créditos al día o completar un anuncio por +60. Las recargas muestran los paquetes disponibles. En TIENDA puedes comprar adornos, un dios que mejore el bono de racha y una mascota que aumente los premios. La cartera y la tienda pausan el reloj; volver al juego lo continúa." },
    { icon: "Ⅱ", title: "JUEGA A TU RITMO", copy: "Pulsa Ⅱ para pausar: el reloj y la penalización se detienen. El juego también pausa al cambiar de aplicación. Activa el sonido con ♫ y pantalla completa con ⛶. Tu progreso se guarda en este navegador. El botón ? abre este tutorial cuando quieras." }
  ],
  firstVisit() {
    try { if (localStorage.getItem(this.key)) return; } catch {}
    this.open();
  },
  open() {
    if (this.isOpen) return;
    if (isSpinning || destinyWheelIsSpinning || recoveryModal.dataset.spinning === "true") { showToast("El tutorial estará disponible al terminar el giro."); return; }
    this.returnFocus = document.activeElement;
    this.pausedByTutorial = Boolean(matchActive && runState.pathChoice && !pauseStartedAt);
    if (this.pausedByTutorial) MobileRuntime.pause();
    this.isOpen = true; this.index = 0;
    document.querySelector("#game-tutorial").hidden = false;
    updateControls();
    this.render(); document.querySelector("#tutorial-next").focus();
  },
  render() {
    const step = this.steps[this.index];
    document.querySelector("#tutorial-step").textContent = "CÓMO JUGAR · " + (this.index + 1) + " / " + this.steps.length;
    document.querySelector("#tutorial-title").textContent = step.title;
    document.querySelector("#tutorial-copy").textContent = step.copy;
    document.querySelector("#tutorial-icon").textContent = step.icon;
    document.querySelector("#tutorial-back").disabled = this.index === 0;
    document.querySelector("#tutorial-next").textContent = this.index === this.steps.length - 1 ? "¡A JUGAR!" : "SIGUIENTE";
  },
  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    document.querySelector("#game-tutorial").hidden = true;
    try { localStorage.setItem(this.key, "seen"); } catch {}
    if (this.pausedByTutorial && !document.hidden) void MobileRuntime.resume();
    updateControls();
    this.returnFocus?.focus(); this.pausedByTutorial = false;
  }
};
window.GameTutorial = GameTutorial;
document.querySelector("#tutorial-button").addEventListener("click", () => GameTutorial.open());
document.querySelector("#tutorial-close").addEventListener("click", () => GameTutorial.close());
document.querySelector("#tutorial-back").addEventListener("click", () => { GameTutorial.index = Math.max(0, GameTutorial.index - 1); GameTutorial.render(); });
document.querySelector("#tutorial-next").addEventListener("click", () => { if (GameTutorial.index === GameTutorial.steps.length - 1) GameTutorial.close(); else { GameTutorial.index++; GameTutorial.render(); } });
document.addEventListener("keydown", (event) => {
  if (!GameTutorial.isOpen) return;
  if (event.key === "Escape") { event.preventDefault(); GameTutorial.close(); }
  if (event.key === "Tab") {
    event.preventDefault();
    const buttons = [...document.querySelectorAll("#game-tutorial button")].filter(button => !button.disabled);
    const current = buttons.indexOf(document.activeElement);
    buttons[(current + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus();
  }
});
if (matchActive && runState.pathChoice) GameTutorial.firstVisit();
