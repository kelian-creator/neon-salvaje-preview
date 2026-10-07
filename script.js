const symbols = [
  { icon: "🍒", name: "cerezas", multiplier: 8, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="fruit" x2=".8" y2="1"><stop stop-color="#ff758a"/><stop offset=".48" stop-color="#fa245f"/><stop offset="1" stop-color="#a90c49"/></linearGradient><linearGradient id="leaf" x2=".8" y2="1"><stop stop-color="#d7ff5b"/><stop offset="1" stop-color="#20a970"/></linearGradient></defs><path d="M47 43C42 26 47 17 60 10M52 43C57 27 70 23 77 13" fill="none" stroke="#78603f" stroke-width="5" stroke-linecap="round"/><path d="M53 26C62 8 80 8 84 13C78 28 65 33 53 26Z" fill="url(#leaf)" stroke="#347e4c" stroke-width="2"/><path d="M53 25L76 15" stroke="#edff9a" stroke-width="2"/><circle cx="34" cy="63" r="22" fill="url(#fruit)" stroke="#a40d49" stroke-width="3"/><circle cx="67" cy="62" r="22" fill="url(#fruit)" stroke="#a40d49" stroke-width="3"/><ellipse cx="27" cy="53" rx="6" ry="10" fill="#fff" opacity=".55" transform="rotate(28 27 53)"/><ellipse cx="60" cy="52" rx="6" ry="10" fill="#fff" opacity=".55" transform="rotate(28 60 52)"/><circle cx="43" cy="72" r="2" fill="#ffb4bf"/><circle cx="75" cy="70" r="2" fill="#ffb4bf"/></svg>' },
  { icon: "🍋", name: "limones", multiplier: 5, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="lemon" x2=".9" y2="1"><stop stop-color="#fff685"/><stop offset=".48" stop-color="#ffdf32"/><stop offset="1" stop-color="#f29b08"/></linearGradient></defs><path d="M18 51C26 48 29 27 50 24C71 21 77 42 85 49C77 56 73 78 51 80C29 82 25 60 18 51Z" fill="url(#lemon)" stroke="#d98208" stroke-width="3"/><path d="M19 51L11 43Q9 51 16 56M84 49L92 42Q94 50 87 56" fill="#ffef68" stroke="#d98208" stroke-width="2"/><path d="M45 26C50 15 63 11 72 15C68 24 57 29 45 26Z" fill="#59c965" stroke="#31864c" stroke-width="2"/><path d="M48 25L66 17" stroke="#d3ff86" stroke-width="2"/><ellipse cx="39" cy="42" rx="8" ry="15" fill="#fff" opacity=".38" transform="rotate(35 39 42)"/><circle cx="53" cy="52" r="1.5" fill="#e4a20c"/><circle cx="63" cy="62" r="1.5" fill="#e4a20c"/><circle cx="45" cy="66" r="1.5" fill="#e4a20c"/><circle cx="70" cy="45" r="1.5" fill="#e4a20c"/></svg>' },
  { icon: "🔔", name: "campanas", multiplier: 10, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="bell" x2=".9" y2="1"><stop stop-color="#fff49b"/><stop offset=".42" stop-color="#ffc62f"/><stop offset="1" stop-color="#ec6d18"/></linearGradient></defs><path d="M37 27C37 18 43 13 50 13S63 18 63 27" fill="none" stroke="#f8d765" stroke-width="7"/><circle cx="50" cy="14" r="5" fill="#fff1a2" stroke="#d88920" stroke-width="2"/><path d="M24 69C31 60 29 45 33 36C36 27 42 23 50 23S64 27 67 36C71 45 69 60 76 69Z" fill="url(#bell)" stroke="#c7631d" stroke-width="3" stroke-linejoin="round"/><path d="M20 69H80Q78 79 70 80H30Q22 78 20 69Z" fill="#f69b22" stroke="#bd531f" stroke-width="3"/><path d="M39 39C40 33 44 30 49 30" fill="none" stroke="#fff9c7" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="83" r="7" fill="#f7bd35" stroke="#b7531e" stroke-width="3"/><path d="M30 70H70" stroke="#ffe37b" stroke-width="2"/></svg>' },
  { icon: "⭐", name: "estrellas", multiplier: 15, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="star" x2=".8" y2="1"><stop stop-color="#fffca4"/><stop offset=".45" stop-color="#ffd638"/><stop offset="1" stop-color="#ff7a27"/></linearGradient></defs><path d="M50 9L61 36L91 38L68 57L75 87L50 71L25 87L32 57L9 38L39 36Z" fill="#cc5422" opacity=".5" transform="translate(2 3)"/><path d="M50 8L61 35L91 37L68 56L75 86L50 70L25 86L32 56L9 37L39 35Z" fill="url(#star)" stroke="#e18a22" stroke-width="3" stroke-linejoin="round"/><path d="M50 17L57 39L80 41L63 55L68 77L50 65L32 77L37 55L20 41L43 39Z" fill="none" stroke="#fff4a5" stroke-width="2" opacity=".9"/><path d="M46 22L49 48L31 42" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".65"/><circle cx="79" cy="24" r="3" fill="#fff"/><circle cx="19" cy="68" r="2" fill="#fff"/></svg>' },
  { icon: "💎", name: "diamantes", multiplier: 25, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="gem" x2=".9" y2="1"><stop stop-color="#b9ffff"/><stop offset=".42" stop-color="#44e9ed"/><stop offset="1" stop-color="#2770e8"/></linearGradient></defs><path d="M24 18H76L94 41L50 91L6 41Z" fill="url(#gem)" stroke="#2561bd" stroke-width="4" stroke-linejoin="round"/><path d="M24 18L35 41L50 18L65 41L76 18M6 41H94M35 41L50 91L65 41" fill="none" stroke="#e0ffff" stroke-width="3" opacity=".9"/><path d="M24 18L6 41H35ZM50 18L35 41H65ZM76 18L65 41H94Z" fill="#fff" opacity=".22"/><path d="M19 38L31 24" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".75"/></svg>' },
  { icon: "7️⃣", name: "triple siete", multiplier: 50, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="seven" x2=".7" y2="1"><stop stop-color="#ffb7ee"/><stop offset=".42" stop-color="#ff4aab"/><stop offset="1" stop-color="#b00e68"/></linearGradient></defs><path d="M23 19H82L77 31L49 82H30L57 36H18Z" fill="#79114e" stroke="#63103f" stroke-width="5" stroke-linejoin="round" transform="translate(4 5)"/><path d="M22 17H81L76 29L48 80H29L56 34H17Z" fill="url(#seven)" stroke="#9c1c67" stroke-width="4" stroke-linejoin="round"/><path d="M27 22H70" stroke="#ffe3fb" stroke-width="4" stroke-linecap="round"/><path d="M58 36L38 72" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".45"/><path d="M81 12L84 19L92 20L86 25L88 33L81 29L74 33L76 25L70 20L78 19Z" fill="#fff179" stroke="#e8a831" stroke-width="1.5"/></svg>' }
];

const darkSymbols = [
  { icon: "💀", name: "calaveras", multiplier: 8, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="skull" x2=".8" y2="1"><stop stop-color="#fff0dc"/><stop offset=".55" stop-color="#c4b7c8"/><stop offset="1" stop-color="#76667f"/></linearGradient></defs><path d="M50 10C28 10 13 27 15 48C16 61 23 68 31 73V86H69V73C78 67 85 59 85 47C87 26 71 10 50 10Z" fill="url(#skull)" stroke="#47394f" stroke-width="5"/><path d="M29 46C29 37 35 32 42 35C49 39 47 52 40 57C33 60 29 54 29 46ZM71 46C71 37 65 32 58 35C51 39 53 52 60 57C67 60 71 54 71 46Z" fill="#281d31" stroke="#65556c" stroke-width="2"/><path d="M50 51L43 65H57Z" fill="#47394f"/><path d="M37 76V85M48 76V86M59 76V85" stroke="#47394f" stroke-width="4"/><path d="M26 29Q33 18 44 18" fill="none" stroke="#fff" stroke-width="4" opacity=".55" stroke-linecap="round"/></svg>' },
  { icon: "🪓", name: "hachas", multiplier: 5, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="axe-metal" x2=".8" y2="1"><stop stop-color="#f7fbff"/><stop offset=".4" stop-color="#b9d2dc"/><stop offset="1" stop-color="#53687b"/></linearGradient><linearGradient id="axe-wood" x2=".8" y2="1"><stop stop-color="#f3c078"/><stop offset=".5" stop-color="#a9613e"/><stop offset="1" stop-color="#553149"/></linearGradient></defs><path d="M48 31L55 28L75 80Q78 88 70 91L65 90Q61 89 59 83L40 38Z" fill="url(#axe-wood)" stroke="#422c3e" stroke-width="4" stroke-linejoin="round"/><path d="M46 35L30 53C16 49 9 39 12 26C15 13 27 9 42 15L60 20L56 39Z" fill="url(#axe-metal)" stroke="#455362" stroke-width="4" stroke-linejoin="round"/><path d="M17 27Q20 15 34 16M21 34Q25 39 32 41" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/><path d="M47 42L63 83M51 46L57 48M56 59L62 61M60 72L66 74" fill="none" stroke="#ffdca1" stroke-width="2" stroke-linecap="round" opacity=".8"/><circle cx="48" cy="35" r="4" fill="#f8d58d" stroke="#60414a" stroke-width="2"/></svg>' },
  { icon: "🧸", name: "muñecos vudú", multiplier: 10, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="doll-cloth" x2=".8" y2="1"><stop stop-color="#f0c98e"/><stop offset=".55" stop-color="#b77b61"/><stop offset="1" stop-color="#70465b"/></linearGradient><linearGradient id="doll-stitch" x2="0" y2="1"><stop stop-color="#ff7380"/><stop offset="1" stop-color="#932e55"/></linearGradient></defs><path d="M31 26L25 19L37 20C44 12 58 12 65 20L77 18L70 29Q74 36 70 45L78 75Q66 88 50 86Q34 88 22 75L30 45Q26 36 31 26Z" fill="url(#doll-cloth)" stroke="#49303f" stroke-width="4" stroke-linejoin="round"/><path d="M33 51L19 63L28 69M67 51L81 62L72 69M39 81L37 91M61 81L63 91" fill="none" stroke="#b77b61" stroke-width="8" stroke-linecap="round"/><path d="M38 36L44 41M62 36L56 41" stroke="#382a39" stroke-width="5" stroke-linecap="round"/><path d="M43 53Q50 58 57 53M36 29Q50 21 64 29M31 48L37 46M69 48L63 46M31 72L36 75M69 72L64 75" fill="none" stroke="url(#doll-stitch)" stroke-width="2.5" stroke-linecap="round"/><path d="M18 16L35 33" stroke="#d9e1e8" stroke-width="3" stroke-linecap="round"/><path d="M15 13L20 18" stroke="#ff6476" stroke-width="5" stroke-linecap="round"/><circle cx="51" cy="66" r="3" fill="#f6cf74"/><path d="M50 63V69M47 66H53" stroke="#674156" stroke-width="1.5"/></svg>' },
  { icon: "🦇", name: "murciélagos", multiplier: 15, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="bat" x2=".8" y2="1"><stop stop-color="#bd82ff"/><stop offset=".55" stop-color="#592d91"/><stop offset="1" stop-color="#241638"/></linearGradient></defs><path d="M50 32L39 13L34 38C23 25 13 29 7 20L13 57C17 72 31 78 43 66L50 82L57 66C69 78 83 72 87 57L93 20C87 29 77 25 66 38L61 13Z" fill="url(#bat)" stroke="#1d1429" stroke-width="5" stroke-linejoin="round"/><path d="M50 33C39 37 38 54 43 66L50 82L57 66C62 54 61 37 50 33Z" fill="#272039" stroke="#e2c3ff" stroke-width="2"/><circle cx="45" cy="49" r="3" fill="#ff406e"/><circle cx="55" cy="49" r="3" fill="#ff406e"/><path d="M43 60L50 65L57 60M25 48L36 54M75 48L64 54" fill="none" stroke="#e0c6ff" stroke-width="2"/></svg>' },
  { icon: "🪦", name: "lápidas", multiplier: 25, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="stone" x2=".8" y2="1"><stop stop-color="#b9c8d0"/><stop offset=".55" stop-color="#687b8c"/><stop offset="1" stop-color="#354252"/></linearGradient></defs><path d="M23 86V39C23 22 34 13 50 13S77 22 77 39V86Z" fill="url(#stone)" stroke="#27313e" stroke-width="5"/><path d="M18 85H82V93H18Z" fill="#45505a" stroke="#27313e" stroke-width="3"/><path d="M50 35L54 45L65 46L57 53L59 64L50 58L41 64L43 53L35 46L46 45Z" fill="#d6e4e6" stroke="#43525e" stroke-width="2"/><path d="M34 74H66" stroke="#b6c8cf" stroke-width="3"/><path d="M32 34Q35 22 46 20" fill="none" stroke="#fff" stroke-width="3" opacity=".48" stroke-linecap="round"/></svg>' },
  { icon: "🔥", name: "llamas", multiplier: 50, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="fire" x2=".5" y2="1"><stop stop-color="#fff36b"/><stop offset=".38" stop-color="#ff8a36"/><stop offset="1" stop-color="#e52d58"/></linearGradient><linearGradient id="core" x2=".5" y2="1"><stop stop-color="#fffbe0"/><stop offset="1" stop-color="#ffc43b"/></linearGradient></defs><path d="M52 7C62 25 45 30 62 44C63 31 72 27 76 20C94 44 90 65 79 81C67 98 33 97 19 81C3 63 15 41 35 22C34 39 45 44 47 51C59 38 43 24 52 7Z" fill="url(#fire)" stroke="#792c48" stroke-width="4"/><path d="M51 48C61 58 72 63 65 77C60 89 39 88 34 76C28 63 43 58 51 48Z" fill="url(#core)" stroke="#ee9b35" stroke-width="3"/><path d="M27 72Q29 82 39 86M73 72Q70 83 61 86" fill="none" stroke="#fff2a0" stroke-width="3" opacity=".7"/></svg>' }
];

const letterSymbols = [
  { icon: "N", name: "N", multiplier: 8, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="letter-n" x2="0" y2="1"><stop stop-color="#c8ffff"/><stop offset=".48" stop-color="#39dce8"/><stop offset="1" stop-color="#3767dc"/></linearGradient></defs><path d="M19 82V18H35L65 56V18H81V82H65L35 44V82Z" fill="url(#letter-n)" stroke="#1b378b" stroke-width="4" stroke-linejoin="round"/><path d="M25 24H32L67 68" fill="none" stroke="#fff" stroke-width="4" opacity=".7"/></svg>' },
  { icon: "E", name: "E", multiplier: 10, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="letter-e" x2="0" y2="1"><stop stop-color="#fff9a6"/><stop offset=".5" stop-color="#ffd33f"/><stop offset="1" stop-color="#ef6f37"/></linearGradient></defs><path d="M23 18H79V33H40V43H73V57H40V67H79V82H23Z" fill="url(#letter-e)" stroke="#a44725" stroke-width="4" stroke-linejoin="round"/><path d="M29 24H71" stroke="#fff" stroke-width="4" opacity=".65"/></svg>' },
  { icon: "O", name: "O", multiplier: 15, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="letter-o" x2="0" y2="1"><stop stop-color="#ffb6ef"/><stop offset=".48" stop-color="#f54aac"/><stop offset="1" stop-color="#8528aa"/></linearGradient></defs><path fill-rule="evenodd" d="M50 14C27 14 15 27 15 50S27 86 50 86S85 73 85 50S73 14 50 14ZM50 31C61 31 67 37 67 50S61 69 50 69S33 63 33 50S39 31 50 31Z" fill="url(#letter-o)" stroke="#772679" stroke-width="4"/><path d="M29 31Q36 21 48 21" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/></svg>' },
  { icon: "A", name: "A", multiplier: 20, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="letter-a" x2="0" y2="1"><stop stop-color="#cbff8a"/><stop offset=".48" stop-color="#69e45a"/><stop offset="1" stop-color="#19885f"/></linearGradient></defs><path d="M12 82L35 18H65L88 82H68L63 66H37L32 82ZM42 51H58L50 29Z" fill="url(#letter-a)" fill-rule="evenodd" stroke="#166344" stroke-width="4" stroke-linejoin="round"/><path d="M38 24H47L28 76" fill="none" stroke="#fff" stroke-width="3" opacity=".6"/></svg>' },
  { icon: "R", name: "R", multiplier: 25, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="letter-r" x2="0" y2="1"><stop stop-color="#ffdb9c"/><stop offset=".48" stop-color="#ff9048"/><stop offset="1" stop-color="#d84152"/></linearGradient></defs><path d="M22 82V18H54C73 18 82 27 82 43C82 54 76 62 65 66L84 82H60L44 67H40V82ZM40 33V52H53C60 52 64 49 64 42S60 33 53 33Z" fill="url(#letter-r)" fill-rule="evenodd" stroke="#8f2e48" stroke-width="4" stroke-linejoin="round"/><path d="M29 24H48" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".65"/></svg>' },
  { icon: "C", name: "C", multiplier: 30, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="letter-c" x2="0" y2="1"><stop stop-color="#fff"/><stop offset=".42" stop-color="#92baff"/><stop offset="1" stop-color="#5865df"/></linearGradient></defs><path d="M82 28L69 40C64 34 58 31 50 31C38 31 32 38 32 50S38 69 50 69C58 69 64 66 69 60L82 72C74 82 64 87 49 87C26 87 14 72 14 50S27 13 50 13C64 13 75 18 82 28Z" fill="url(#letter-c)" stroke="#3744a2" stroke-width="4" stroke-linejoin="round"/><path d="M29 29Q37 20 49 20" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/></svg>' }
];

const startingBalance = window.ProfileConfig.initialCredits;
const walletProfileId = window.ProfileWallet.snapshot().id;
const matchDuration = 2 * 60 * 1000;
const inactivityPenaltyInterval = 15 * 1000;
const inactivityPenaltyAmount = 5;
const matchStorageKey = window.ProfileWallet.storageKey("matches");
const rankingLimit = 10;
const minimumBet = 10;
const maximumBet = 100;
const betStep = 10;
const spinDuration = 1450;
const spinStagger = 280;
const settleDuration = 650;
const scrollingRows = 30;
const scrollingRowStagger = 7;
const brakeRows = 5;
const regularWinProbability = 4 / 9;
const luckRescueProbability = regularWinProbability / (1 - regularWinProbability);
const arcadeProgressStorageKey = window.ProfileWallet.storageKey("roguelike");
const APP_CONFIG = Object.freeze({ name: "Neón Salvaje — Templo de la Fortuna", version: "1.0.0", platform: "webview-ready" });
const TEMPLE_CINEMATICS = Object.freeze({
  "temple-opened": { title: "EL TEMPLO SE HA ABIERTO", theme: "fortuna", caption: "Una nueva partida comienza bajo la mirada de los dioses." },
  "fortuna-awakened": { title: "FORTUNA HA DESPERTADO", theme: "fortuna" },
  "nemesis-watches": { title: "NÉMESIS TE HA VISTO", theme: "nemesis" },
  "destiny-chosen": { title: "LA RUEDA HA ELEGIDO", theme: "destiny" },
  "temple-event": { title: "EL TEMPLO SE HA ABIERTO", theme: "fortuna" },
  "boss-introduced": { title: "UN BOSS TE DESAFÍA", theme: "destiny" },
  "boss-defeated": { title: "DESAFÍO SUPERADO", theme: "fortuna" }
});
const GAME_CONFIG = {
  combo: { bonusPerWin: 0.05, maximumBonus: 0.25 },
  progression: { xpPerSpin: 10, xpPerWin: 25, xpPerCombo: 5, xpPerEvent: 30, baseXpPerLevel: 100, xpStepPerLevel: 50, gemsPerLevel: 1 },
  bonus: {
    minimumFreeSpins: 4,
    powerDuration: 3,
    overdriveBonus: 0.25,
    gemRushGems: 3,
    extraFreeSpins: 3
  },
  destinyWheel: {
    outcomes: [
      { id: "fortuna-favor", weight: 30, name: "FAVOR DE FORTUNA", description: "+25% a premios · 3 tiradas", icon: "☀", spins: 3, bonusRate: 0.25 },
      { id: "nemesis-curse", weight: 25, name: "MALDICIÓN DE NÉMESIS", description: "−20% a premios · 3 tiradas", icon: "☾", spins: 3, bonusRate: -0.2 },
      { id: "free-spins", weight: 25, name: "TIRADAS DEL DESTINO", description: "+3 tiradas gratis", icon: "✦", freeSpins: 3 },
      { id: "gem-gift", weight: 20, name: "OFRENDA DORADA", description: "+3 gemas virtuales", icon: "◇", gems: 3 }
    ]
  },
  paths: {
    spins: 5,
    fortuneBonusRate: 0.15,
    nemesisBonusRate: -0.1,
    nemesisGemReward: 5
  },
  machines: [
    { id: "neon-salvaje", name: "NEÓN SALVAJE", symbols, payoutTable: "multiplicadores de símbolo", bonusRules: "triples dan tiradas gratis", events: "todos", bossPool: ["demonio-neon", "reina-wild"], unlockLevel: 1 },
    { id: "dark-ritual", name: "DARK RITUAL", symbols: darkSymbols, payoutTable: "multiplicadores de símbolo", bonusRules: "triples dan tiradas gratis", events: "todos", bossPool: ["demonio-neon"], unlockLevel: 1 },
    { id: "neon-words", name: "NEON WORDS", symbols: letterSymbols, payoutTable: "letras iguales y palabra NEON", bonusRules: "NEON otorga 7 gratis", events: "todos", bossPool: ["demonio-neon"], unlockLevel: 1 },
    { id: "future-machine", name: "FUTURE MACHINE", symbols, payoutTable: "por definir", bonusRules: "por definir", events: "por definir", bossPool: [], unlockLevel: 10, comingSoon: true }
  ],
  bosses: {
    definitions: [
      { id: "demonio-neon", name: "DEMONIO NEÓN", icon: "👹", description: "Una criatura nacida en los circuitos del templo. Domina diamantes, fuego y victorias.", triggerLevel: 3, targets: { diamonds: 3, fire: 2, wins: 3 }, rewardGems: 50, rewardXp: 500, rewardPower: "multi" },
      { id: "reina-wild", name: "REINA WILD", icon: "👑", description: "La soberana de los comodines exige una racha de victorias y símbolos de fuego.", triggerLevel: 7, targets: { wild: 4, fire: 3, wins: 5 }, rewardGems: 75, rewardXp: 700, rewardPower: "multi" }
    ]
  },
  achievements: [
    { id: "first-win", title: "PRIMER WIN", description: "Consigue tu primera victoria" },
    { id: "combo-five", title: "EN RACHA", description: "Alcanza combo x5" },
    { id: "neon-master", title: "NEON MASTER", description: "Forma la palabra NEON" },
    { id: "jackpot", title: "JACKPOT", description: "Consigue un premio máximo" },
    { id: "boss-slayer", title: "BOSS SLAYER", description: "Derrota un boss" },
    { id: "collector", title: "COLECCIONISTA", description: "Desbloquea las 4 máquinas" },
    { id: "wild-collector", title: "WILD COLLECTOR", description: "Colecciona los 3 tipos de Wild" }
  ]
  ,
  wilds: {
    probabilities: {
      normal: { wild: 0.04, fire: 0.015, multi: 0.01 },
      storm: { wild: 0.12, fire: 0.04, multi: 0.03 }
    },
    fireWinBonus: 0.5,
    multiMatchCount: 2,
    symbols: [
      { icon: "🃏", name: "WILD", kind: "wild", multiplier: 0, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="wild-card" x2=".2" y2="1"><stop stop-color="#fffdf1"/><stop offset="1" stop-color="#ffe8b5"/></linearGradient></defs><path d="M27 14H70L84 28V78Q84 86 76 86H27Q18 86 18 77V23Q18 14 27 14Z" fill="#522757" opacity=".24" transform="translate(3 4)"/><path d="M27 12H70L84 26V76Q84 84 76 84H27Q18 84 18 75V21Q18 12 27 12Z" fill="url(#wild-card)" stroke="#875f24" stroke-width="5" stroke-linejoin="round"/><path d="M70 13V26H83" fill="#ffd975" stroke="#875f24" stroke-width="3" stroke-linejoin="round"/><path d="M29 22H37V30H29Z" fill="#ff4aab"/><path d="M34 44L39 59L50 40L61 59L67 44" fill="none" stroke="#ff4aab" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 71H70" stroke="#7e4595" stroke-width="4" stroke-linecap="round"/><path d="M70 31L73 37L80 38L75 43L76 50L70 46L64 50L65 43L60 38L67 37Z" fill="#ffc62f" stroke="#bd6b22" stroke-width="1.5"/></svg>' },
      { icon: "🔥", name: "FIRE WILD", kind: "fire", multiplier: 0, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M52 8C64 29 46 35 63 49C65 37 73 31 77 24C95 49 89 71 76 86C62 101 34 94 23 80C8 60 20 39 37 24C36 43 47 49 48 56C60 42 44 25 52 8Z" fill="#ff7945" stroke="#8d264d" stroke-width="5"/><path d="M52 50C66 63 67 78 55 86C45 92 34 81 38 70C40 62 48 58 52 50Z" fill="#fff18a"/></svg>' },
      { icon: "⚡", name: "MULTI WILD", kind: "multi", multiplier: 0, svg: '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M57 8L24 55H45L39 92L77 42H55Z" fill="#50f3ec" stroke="#25469a" stroke-width="5" stroke-linejoin="round"/><path d="M55 18L37 49H53L48 76" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>' }
    ]
  },
  events: {
    triggerChance: 0.12,
    selectionWeights: [
      { id: "diamond-rain", weight: 25 },
      { id: "inferno", weight: 25 },
      { id: "neon-overload", weight: 25 },
      { id: "wild-storm", weight: 25 }
    ],
    definitions: {
      "diamond-rain": { id: "diamond-rain", name: "LLUVIA DE DIAMANTES", icon: "💎", duration: 5, effect: "+25% a premios de diamantes", diamondBonus: 0.25 },
      inferno: { id: "inferno", name: "INFERNO", icon: "🔥", duration: 3, effect: "+50% a líneas de fuego", fireBonus: 0.5 },
      "neon-overload": { id: "neon-overload", name: "SOBRECARGA NEÓN", icon: "⚡", duration: 5, effect: "+25% a todos los multiplicadores", multiplierBonus: 0.25 },
      "wild-storm": { id: "wild-storm", name: "WILD STORM", icon: "🃏", duration: 5, effect: "Wild: 12% · Fire: 4% · Multi: 3%", wildStorm: true }
    }
  },
  pantheon: [
    { id: "fortuna", name: "FORTUNA", title: "DIOSA DE LA BUENA SUERTE", icon: "☀", portrait: "assets/gods/fortuna.png", unlockAtStart: true },
    { id: "nemesis", name: "NÉMESIS", title: "SEÑORA DEL DESTINO OSCURO", icon: "☾", portrait: "assets/gods/nemesis.png", unlockAtStart: true }
  ],
  divineBosses: [
    { id: "avatar-fortuna", name: "AVATAR DE FORTUNA", icon: "☀", description: "La guardiana de la abundancia pone a prueba tu constancia y tu dominio de los diamantes.", triggerLevel: 5, targets: { diamonds: 5, streak: 3 }, rewardGems: 80, rewardXp: 800, rewardPower: "multi", bossPool: ["neon-salvaje", "neon-words"] },
    { id: "avatar-nemesis", name: "AVATAR DE NÉMESIS", icon: "☾", description: "La sombra del templo exige dominar los Wilds, el fuego y una racha de victorias.", triggerLevel: 5, targets: { wild: 4, fire: 4, streak: 3 }, rewardGems: 80, rewardXp: 800, rewardPower: "fire", bossPool: ["dark-ritual"] },
    { id: "destino", name: "DESTINO", icon: "⚖", description: "La fuerza que une ambos caminos exige una última prueba de habilidad y persistencia.", triggerLevel: 10, targets: { diamonds: 5, wild: 4, streak: 5 }, rewardGems: 120, rewardXp: 1200, rewardPower: "multi", bossPool: ["neon-salvaje", "dark-ritual", "neon-words"] }
  ],
};

function setRosterArtwork(element, profile) {
  element.style.setProperty("--roster-image", `url("${profile.rosterImage ?? "assets/gods/pantheon-roster.png"}")`);
  element.style.setProperty("--roster-size", profile.rosterSize ?? "400% 200%");
}

const PANTHEON_CAST = Object.freeze([
{"id":"noctis","name":"NOCTIS","title":"VIGILANTE DEL ECLIPSE","theme":"nemesis","moods":{"win":"Qué brillo. ¿Alguien puede bajar el sol?","loss":"No fue un fracaso. Fue un eclipse de presupuesto."},"portraitType":"roster","rosterImage":"assets/gods/pantheon-trinity.png","rosterSize":"300% auto","rosterPosition":"0 0","unlockAtStart":false},
{"id":"chrono","name":"CRONO","title":"RELOJERO DEL DESTINO","theme":"destiny","moods":{"win":"Justo a tiempo. Mi reloj acaba de aplaudir.","loss":"Rebobinaría la tirada, pero he perdido el recibo."},"portraitType":"roster","rosterImage":"assets/gods/pantheon-trinity.png","rosterSize":"300% auto","rosterPosition":"50% 0","unlockAtStart":false},
{"id":"solara","name":"SOLARA","title":"EMPERATRIZ DEL ALBA","theme":"fortuna","moods":{"win":"¡Que entre la luz! Y los créditos, por favor.","loss":"Hasta el sol tiene días nublados. Yo llevo gafas."},"portraitType":"roster","rosterImage":"assets/gods/pantheon-trinity.png","rosterSize":"300% auto","rosterPosition":"100% 0","unlockAtStart":false},
  { id: "fortuna", name: "FORTUNA", title: "DIOSA DE LA BUENA SUERTE", portrait: "assets/gods/fortuna.png", icon: "assets/icons/fortuna.svg", theme: "fortuna", unlockAtStart: true, moods: { win: "¡Qué elegante! Hasta tus victorias tienen brillo.", loss: "Respira. La siguiente tirada puede ser la buena.", top: "¡El templo se ha llenado de oro!" } },
  { id: "nemesis", name: "NÉMESIS", title: "SEÑORA DEL DESTINO OSCURO", portrait: "assets/gods/nemesis.png", icon: "assets/icons/nemesis.svg", theme: "nemesis", unlockAtStart: true, moods: { win: "No te acostumbres. El destino tiene memoria.", loss: "Eso dolió un poco. A mí me pareció interesante.", wild: "Los Wilds siempre tienen un lado oscuro." } },
  { id: "destino", name: "DESTINO", title: "GUARDIÁN DEL EQUILIBRIO", portrait: "assets/gods/destino.png", icon: "assets/icons/destiny-wheel.svg", theme: "destiny", unlockAtStart: false, moods: { win: "Una pieza encuentra su lugar en la rueda.", loss: "El equilibrio también necesita pausas.", top: "Las dos mitades del templo celebran contigo." } },
  { id: "aureo", name: "ÁUREO", title: "PRÍNCIPE DE LA CARCAJADA", portraitType: "roster", rosterPosition: "0 0", theme: "fortuna", unlockAtStart: false, moods: { win: "¡Monedas al aire! Yo lo llamo una entrada discreta.", loss: "¿Eso fue una derrota o una pausa dramática?" } },
  { id: "cristal", name: "CRISTAL", title: "CENTINELA DEL HIELO CYAN", portraitType: "roster", rosterPosition: "33.333% 0", theme: "destiny", unlockAtStart: false, moods: { win: "La jugada ha sido precisa. Muy precisa.", loss: "Recalibrando la fortuna. Sin prisa." } },
  { id: "vesta", name: "VESTA", title: "BRUJA DE LOS GIROS", portraitType: "roster", rosterPosition: "66.666% 0", theme: "nemesis", unlockAtStart: false, moods: { win: "Oh, sí. Eso estaba en mis cartas.", loss: "Mi sombrero dice que pruebes una rueda. Yo no discuto con sombreros." } },
  { id: "ignis", name: "IGNIS", title: "BAILARINA DE LA LLAMA", portraitType: "roster", rosterPosition: "100% 0", theme: "nemesis", unlockAtStart: false, moods: { win: "¡Caliente, rápido y con estilo!", loss: "Ni la chispa más pequeña se apaga para siempre.", wild: "El fuego ya está bailando en los rodillos." } },
  { id: "astra", name: "ASTRA", title: "CARTÓGRAFA DE ESTRELLAS", portraitType: "roster", rosterPosition: "0 100%", theme: "destiny", unlockAtStart: false, moods: { win: "Las estrellas apuntan a una buena noche.", loss: "Una estrella caída sigue siendo una estrella." } },
  { id: "corvin", name: "CORVIN", title: "ORÁCULO DEL CUERVO", portraitType: "roster", rosterPosition: "33.333% 100%", theme: "nemesis", unlockAtStart: false, moods: { win: "El cuervo inclina la cabeza. Eso es un aplauso.", loss: "El cuervo no ríe. Bueno, quizá un poco." } },
  { id: "volta", name: "VOLTA", title: "LADRÓN DE RELÁMPAGOS", portraitType: "roster", rosterPosition: "66.666% 100%", theme: "destiny", unlockAtStart: false, moods: { win: "¡Chispas! Esa tirada tenía electricidad.", loss: "Cortocircuito temporal. Prueba otra ruta." } },
  { id: "forja", name: "FORJA", title: "ARTESANA DEL SOL MECÁNICO", portraitType: "roster", rosterPosition: "100% 100%", theme: "fortuna", unlockAtStart: false, moods: { win: "Una victoria bien construida no necesita manual.", loss: "Pieza suelta detectada. Nada que una rueda no pueda revisar." } }
]);

const RECOVERY_WHEELS = Object.freeze({
  1: { label: "RUEDA DE RESCATE I", penalty: 5, outcomes: [{ id: "rescue", weight: 45, label: "+20 CR", credits: 20 }, { id: "spark", weight: 20, label: "+1 GEMA", gems: 1 }, { id: "void", weight: 35, label: `FALLO · −5 CR` }] },
  2: { label: "RUEDA DE RESCATE II", penalty: 10, outcomes: [{ id: "rescue", weight: 40, label: "+35 CR", credits: 35 }, { id: "wild", weight: 25, label: "WILD POWER", power: "wild" }, { id: "void", weight: 35, label: `FALLO · −10 CR` }] }
});

const GodRegistry = Object.freeze({
  categories: ["gods", "characters", "relics", "symbols"],
  entries: [
    ...PANTHEON_CAST.map((entry) => ({ ...entry, id: `god-${entry.id}`, godId: entry.id, category: "gods", description: entry.title, unlockHint: "Aparecerá durante una tirada." })),
    ...GAME_CONFIG.divineBosses.map((entry) => ({
      ...entry,
      id: `character-${entry.id}`,
      godId: entry.id === "avatar-fortuna" ? "fortuna" : entry.id === "avatar-nemesis" ? "nemesis" : "destino",
      portrait: entry.id === "avatar-fortuna" ? "assets/gods/fortuna.png" : entry.id === "avatar-nemesis" ? "assets/gods/nemesis.png" : "assets/gods/destino.png",
      category: "characters", description: entry.description ?? "Personaje del templo", unlockHint: "Derrota su boss divino para descubrirlo."
    })),
    ...new Map([...symbols, ...darkSymbols, ...letterSymbols, ...GAME_CONFIG.wilds.symbols].map((entry) => [entry.name, {
      id: `symbol-${entry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "especial"}`,
      category: "symbols", name: entry.name.toUpperCase(), icon: entry.icon, description: "Símbolo de una máquina", unlockHint: "Aparecerá al verlo en una tirada."
    }])).values()
  ]
});

const BossRegistry = Object.freeze({
  entries: [
    ...GAME_CONFIG.bosses.definitions.map((boss) => ({ ...boss, type: "regular", divine: false })),
    ...GAME_CONFIG.divineBosses.map((boss) => ({ ...boss, type: "divine", divine: true }))
  ],
  get(id) { return this.entries.find((boss) => boss.id === id) ?? null; }
});

const PantheonSystem = Object.freeze({
  categories: GodRegistry.categories,
  getEntries(category) { return GodRegistry.entries.filter((entry) => entry.category === category); },
  isDiscovered(id) { return playerState.discoveredPantheonIds.includes(id); },
  discover(id) {
    if (!GodRegistry.entries.some((entry) => entry.id === id) || this.isDiscovered(id)) return false;
    playerState.discoveredPantheonIds.push(id);
    renderCollectionAndStats();
    saveArcadeProgress();
    return true;
  },
  discoverMany(ids) {
    const known = new Set(GodRegistry.entries.map(({ id }) => id));
    const discovered = new Set(playerState.discoveredPantheonIds);
    const added = [...new Set(ids)].filter((id) => known.has(id) && !discovered.has(id));
    if (!added.length) return 0;
    playerState.discoveredPantheonIds.push(...added);
    renderCollectionAndStats();
    saveArcadeProgress();
    return added.length;
  },
  getProgress(category) {
    const entries = this.getEntries(category);
    return { discovered: entries.filter(({ id }) => this.isDiscovered(id)).length, total: entries.length };
  }
});

window.GodRegistry = GodRegistry;
window.BossRegistry = BossRegistry;
window.PantheonSystem = PantheonSystem;
const allReels = [...document.querySelectorAll(".reel-column")];
const balanceOutput = document.querySelector("#balance");
const betOutput = document.querySelector("#bet-amount");
const spinButton = document.querySelector("#spin-button");
const betDownButton = document.querySelector("#bet-down");
const betUpButton = document.querySelector("#bet-up");
const luckToggle = document.querySelector("#luck-toggle");
const spinCostOutput = document.querySelector("#spin-cost");
const resultBar = document.querySelector(".result-bar");
const resultIcon = document.querySelector("#result-icon");
const resultMessage = document.querySelector("#result-message");
const winAmount = document.querySelector("#win-amount");
const historyList = document.querySelector("#history-list");
const historyCount = document.querySelector("#history-count");
const roundCount = document.querySelector("#round-count");
const toast = document.querySelector("#toast");
const celebrationLayer = document.querySelector("#celebration-layer");
const machine = document.querySelector(".machine");
const soundToggle = document.querySelector("#sound-toggle");
const batchButtons = [...document.querySelectorAll(".batch-button")];
const freeSpinCountOutput = document.querySelector("#free-spin-count");
const freeSpinStatus = document.querySelector("#free-spin-status");
const spinLabel = document.querySelector("#spin-label");


const powerRule = document.querySelector("#power-rule");
const paytableRows = [...document.querySelectorAll(".paytable-row")];
const entryScreen = document.querySelector("#entry-screen");
const entryForm = document.querySelector("#entry-form");
const playerNameInput = document.querySelector("#player-name");
const entryFeedback = document.querySelector("#entry-feedback");
const rankingList = document.querySelector("#ranking-list");
const currentPlayerOutput = document.querySelector("#current-player");
const matchCountdownOutput = document.querySelector("#match-countdown");
const comboCountOutput = document.querySelector("#combo-count");
const comboBonusOutput = document.querySelector("#combo-bonus");
const eventPanel = document.querySelector("#event-panel");
const eventIconOutput = document.querySelector("#event-icon");
const eventNameOutput = document.querySelector("#event-name");
const eventEffectOutput = document.querySelector("#event-effect");
const eventDurationOutput = document.querySelector("#event-duration");
const activePowerDescriptionOutput = document.querySelector("#active-power-description");
const playerLevelOutput = document.querySelector("#player-level");
const gemCountOutput = document.querySelector("#gem-count");
const xpTrack = document.querySelector("#xp-track");
const xpProgress = document.querySelector("#xp-progress");
const xpLabel = document.querySelector("#xp-label");
const templeMapProgress = document.querySelector("#temple-map-progress");
const templeMapProgressFill = document.querySelector("#temple-map-progress-fill");
const templeMapProgressLabel = document.querySelector("#temple-map-progress-label");
const templeMapNextStop = document.querySelector("#temple-map-next-stop");
const templeMapModal = document.querySelector("#temple-map-modal");
const templeMapDialog = document.querySelector(".temple-map-dialog");
const templeMapPlayer = document.querySelector("#temple-map-player");
const templeMapRouteProgress = document.querySelector("#temple-map-route-progress");
const templeMapCurrentLabel = document.querySelector("#temple-map-current-label");
const templeMapCurrentStatus = document.querySelector("#temple-map-current-status");
const templeMapNodes = [...document.querySelectorAll("[data-map-level]")];
const openTempleMapButton = document.querySelector("#open-temple-map");
let templeMapReturnFocus = null;
const bonusModal = document.querySelector("#bonus-modal");
const bonusDescription = document.querySelector("#bonus-description");
const bonusChoiceButtons = [...document.querySelectorAll(".bonus-option")];
const machineSelect = document.querySelector("#machine-select");
const bossPanel = document.querySelector("#boss-panel");
const bossTitle = document.querySelector("#boss-title");
const bossDescriptionOutput = document.querySelector("#boss-description");
const bossLives = document.querySelector("#boss-lives");
const bossObjectives = document.querySelector("#boss-objectives");
const collectionList = document.querySelector("#collection-list");
const achievementList = document.querySelector("#achievement-list");
const statisticsGrid = document.querySelector("#statistics-grid");
const pantheonList = document.querySelector("#pantheon-list");
const pantheonStatus = document.querySelector("#pantheon-status");
const pantheonCategoryButtons = [...document.querySelectorAll("[data-pantheon-category]")];
const bossVictoryModal = document.querySelector("#boss-victory");
const bossVictoryTitle = document.querySelector("#boss-victory-title");
const bossVictoryCopy = document.querySelector("#boss-victory-copy");
const bossVictoryMark = document.querySelector("#boss-victory-mark");
const bossVictoryContinue = document.querySelector("#boss-victory-continue");
const powerFreeSpins = [1, 1, 2, 3, 4, 7];


const paytableCopy = document.querySelector("#paytable-copy");
const bonusReelButtons = [...document.querySelectorAll(".bonus-reel-button")];
const bonusReelPanel = document.querySelector("#bonus-reel-panel");
const destinyWheelButton = document.querySelector("#destiny-wheel-button");
const destinyWheelStatus = document.querySelector("#destiny-wheel-status");
const destinyWheelPanel = document.querySelector("#destiny-wheel-panel");
const destinyWheelMark = document.querySelector("#destiny-wheel-mark");
const destinyModal = document.querySelector("#destiny-modal");
const destinyWheelDisc = document.querySelector("#destiny-wheel-disc");
const destinyWheelSpinButton = document.querySelector("#destiny-wheel-spin");
const destinyWheelCloseButton = document.querySelector("#destiny-wheel-close");
const destinyModalDialog = document.querySelector(".destiny-modal__dialog");
const destinyWheelResult = document.querySelector("#destiny-wheel-result");
const destinyWheelLegend = document.querySelector("#destiny-wheel-legend");
const pathModal = document.querySelector("#path-modal");
const pathModalDialog = document.querySelector(".path-modal__dialog");
const pathFortunaButton = document.querySelector("#path-fortuna");
const pathNemesisButton = document.querySelector("#path-nemesis");
const pathFortunaEffect = document.querySelector("#path-fortuna-effect");
const pathNemesisEffect = document.querySelector("#path-nemesis-effect");
const pathRunStatus = document.querySelector("#path-run-status");
const pathRunName = document.querySelector("#path-run-name");
const pathRunEffect = document.querySelector("#path-run-effect");
const godModal = document.querySelector("#god-modal");
const godModalName = document.querySelector("#god-modal-name");
const godModalTitle = document.querySelector("#god-modal-title");
const godModalDescription = document.querySelector("#god-modal-description");
const godModalPortrait = document.querySelector("[data-god-portrait]");
const godModalPortraitFrame = document.querySelector(".god-modal__portrait");
const godModalFallback = document.querySelector("[data-god-fallback]");
const godModalCloseButton = document.querySelector(".god-modal__close");

const templeTransition = document.querySelector("#temple-transition");
const deityPresence = document.querySelector("#deity-presence");
const deityPresenceButton = document.querySelector("#deity-presence-button");
const deityPresencePortrait = document.querySelector("#deity-presence-portrait");
const deityPresenceKicker = document.querySelector("#deity-presence-kicker");
const deityPresenceName = document.querySelector("#deity-presence-name");
const deityPresenceLine = document.querySelector("#deity-presence-line");
const recoveryPanel = document.querySelector("#recovery-panel");
const recoveryCopy = document.querySelector("#recovery-copy");
const recoveryWheelOneButton = document.querySelector("#recovery-wheel-one");
const recoveryWheelTwoButton = document.querySelector("#recovery-wheel-two");
const recoveryModal = document.querySelector("#recovery-modal");
const recoveryModalTitle = document.querySelector("#recovery-modal-title");
const recoveryModalCopy = document.querySelector("#recovery-modal-copy");
const recoveryWheel = document.querySelector("#recovery-wheel");
const recoveryWheelResult = document.querySelector("#recovery-wheel-result");
const recoveryWheelSpinButton = document.querySelector("#recovery-wheel-spin");
const godProfiles = Object.fromEntries(PANTHEON_CAST.map((profile) => [profile.id, {
  ...profile,
  description: profile.title,
  icon: profile.icon ?? "assets/icons/destiny-wheel.svg"
}]));
const GodUI = {
  previousTheme: "fortuna",
  returnFocus: null,
  transitionTimer: undefined,
  entryTimer: undefined,
  applyTheme(godId) {
    const theme = godProfiles[godId]?.theme ?? "fortuna";
    document.body.classList.remove("theme-fortuna", "theme-nemesis", "theme-destiny");
    document.body.classList.add(`theme-${theme}`);
    document.body.dataset.godTheme = theme;
  },
  open(godId, trigger) {
    const profile = godProfiles[godId];
    if (!profile) return;
    this.previousTheme = document.body.dataset.godTheme || "fortuna";
    this.returnFocus = trigger ?? document.activeElement;
    this.applyTheme(godId);
    godModal.classList.toggle("theme-fortuna", profile.theme === "fortuna");
    godModal.classList.toggle("theme-nemesis", profile.theme === "nemesis");
    godModal.classList.toggle("theme-destiny", profile.theme === "destiny");
    godModalName.textContent = profile.name;
    godModalTitle.textContent = profile.title;
    godModalDescription.textContent = profile.description;
    godModalPortraitFrame.classList.toggle("has-roster-portrait", profile.portraitType === "roster");
    godModalPortraitFrame.style.setProperty("--roster-position", profile.rosterPosition ?? "0 0");
    setRosterArtwork(godModalPortraitFrame, profile);
    godModalFallback.src = profile.icon;
    godModalFallback.hidden = false;
    godModalPortrait.hidden = true;
    godModalPortrait.onload = () => {
      godModalPortrait.hidden = false;
      godModalFallback.hidden = true;
    };
    godModalPortrait.onerror = () => {
      godModalPortrait.hidden = true;
      godModalFallback.hidden = false;
    };
    if (profile.portraitType === "roster") {
      godModalPortrait.hidden = true;
      godModalFallback.hidden = true;
      godModalPortrait.removeAttribute("src");
    } else if (profile.portrait) godModalPortrait.src = profile.portrait;
    else godModalPortrait.removeAttribute("src");
    godModal.hidden = false;
    godModalCloseButton.focus();
  },
  close() {
    if (godModal.hidden) return;
    godModal.hidden = true;
    this.applyTheme(this.previousTheme);
    this.returnFocus?.focus();
    this.returnFocus = null;
  },
  beginTempleEntry() {
    this.applyTheme("fortuna");
    document.body.classList.add("temple-entering");
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 90 : 680;
    playTempleCinematic("temple-opened");
    window.clearTimeout(this.entryTimer);
    this.entryTimer = window.setTimeout(() => {
      document.body.classList.remove("temple-entering");
    }, duration);
  }
};
window.GodUI = GodUI;
let activeSymbols = symbols;
let currentSpinContext = null;

let balance = window.ProfileWallet.snapshot().balance;
function adjustGameCredits(amount, kind = "game") {
  balance = window.ProfileWallet.transact(amount, kind);
}
let bet = 20;
let round = 0;
let selectedBatchSize = 1;
let freeSpins = 0;
let darkMode = false;
let letterMode = false;
let isSpinning = false;
let soundEnabled = false;
let luckEnabled = false;
let audioContext;
let toastTimeout;
let celebrationTimeout;
let musicInterval;
let bonusChoiceResolver;
let selectedBonusReward = null;
let destinyWheelIsSpinning = false;
let iconInstance = 0;
let noiseBuffer;
let playerName = "";
let matchActive = false;
let pauseStartedAt = 0;
let matchEndsAt = 0;
let lastSpinAt = 0;
let inactivityPenaltyCount = 0;
let matchTimerInterval;
let matchFinishPending = false;
let matchRecords = loadMatchRecords();
const savedArcadeProgress = loadArcadeProgress();
let playerState = savedArcadeProgress.playerState;
let runState = savedArcadeProgress.runState;
let machineState = savedArcadeProgress.machineState;
const history = [];

const formatCredits = (amount) => new Intl.NumberFormat("es-ES").format(amount);
const formatMatchClock = (milliseconds) => {
  const seconds = Math.ceil(Math.max(0, milliseconds) / 1000);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
};

function initializeStageEffects() {
  const stageEffects = document.querySelector("#stage-effects");
  const colors = ["var(--white)", "var(--yellow)", "var(--cyan)", "var(--pink)", "var(--lime)"];
  for (let index = 0; index < 16; index += 1) {
    const particle = document.createElement("span");
    const distance = 360 + (index * 47) % 190;
    const duration = 1.7 + (index % 6) * 0.28;
    particle.className = "stage-particle";
    particle.style.setProperty("--particle-angle", `${(index * 137.5) % 360}deg`);
    particle.style.setProperty("--particle-distance", `${distance}px`);
    particle.style.setProperty("--particle-midpoint", `${Math.round(distance * 0.68)}px`);
    particle.style.setProperty("--particle-duration", `${duration}s`);
    particle.style.setProperty("--particle-delay", `-${(index * 0.31) % duration}s`);
    particle.style.setProperty("--particle-size", `${2 + (index % 3)}px`);
    particle.style.setProperty("--particle-color", colors[index % colors.length]);
    stageEffects.append(particle);
  }
  for (let index = 0; index < 4; index += 1) {
    const beam = document.createElement("span");
    const duration = 1.45 + (index % 5) * 0.28;
    beam.className = "stage-beam";
    beam.style.setProperty("--beam-angle", `${index * 37 - 153}deg`);
    beam.style.setProperty("--beam-length", "700px");
    beam.style.setProperty("--beam-duration", `${duration}s`);
    beam.style.setProperty("--beam-delay", `-${(index * 0.29) % duration}s`);
    beam.style.setProperty("--beam-color", colors[(index + 1) % colors.length]);
    stageEffects.append(beam);
  }
}

const currentWager = () => bet * (luckEnabled ? 2 : 1);
const activeReels = () => allReels.slice(0, letterMode ? 4 : 3);
const currentSymbolSet = () => letterMode ? letterSymbols : darkMode ? darkSymbols : symbols;

function createDefaultPlayerState() {
  return {
    name: "",
    level: 1,
    xp: 0,
    totalXp: 0,
    gems: 0,
    totalWins: 0,
    totalSpins: 0,
    totalCreditsWon: 0,
    totalGemsObtained: 0,
    totalBonusesClaimed: 0,
    totalBossesDefeated: 0,
    maxPlayerLevel: 1,
    bestCombo: 0,
    unlockedMachines: ["neon-salvaje", "dark-ritual", "neon-words"],
    unlockedPowers: ["wild", "fire", "multi"],
    achievements: [],
    defeatedBosses: [],
    discoveredPantheonIds: GodRegistry.entries.filter((entry) => entry.category === "gods" && entry.unlockAtStart).map(({ id }) => id)
  };
}

function createDefaultRunState() {
  return {
    spins: 0,
    wins: 0,
    losses: 0,
    combo: 0,
    bestCombo: 0,
    freeSpins: 0,
    activeEvent: null,
    eventSpinsRemaining: 0,
    activePower: null,
    boss: null,
    bossProgress: {},
    currentLevel: 1,
    runGems: 0,
    pendingBonus: 0,
    modifiers: [],
    adCredits: 0,
    adRewardReceipts: [],
    destinyWheelUsed: false,
    activeDestiny: null,
    destinyWheelResult: null,
    pathChoice: null,
    pathSpinsRemaining: 0,
    pathRewardGranted: false,
    recovery: { available: false, firstResolved: false, secondResolved: false, currentWheel: 0 }
  };
}

function loadArcadeProgress() {
  const defaults = {
    playerState: createDefaultPlayerState(),
    runState: createDefaultRunState(),
    machineState: { currentMachine: "neon-salvaje", unlockedMachines: ["neon-salvaje", "dark-ritual", "neon-words"] },
    activeMatch: null
  };
  try {
    const saved = JSON.parse(window.localStorage.getItem(arcadeProgressStorageKey) ?? "null");
    if (!saved || typeof saved !== "object") return defaults;
    const playerState = { ...defaults.playerState, ...saved.playerState };
    const legacyGodDiscoveries = (Array.isArray(saved.playerState?.discoveredGods) ? saved.playerState.discoveredGods : []).map((id) => `god-${id}`);
    const legacyBossDiscoveries = (Array.isArray(saved.playerState?.defeatedBosses) ? saved.playerState.defeatedBosses : []).map((id) => `character-${id}`);
    const knownPantheonIds = new Set(GodRegistry.entries.map(({ id }) => id));
    playerState.discoveredPantheonIds = [...new Set([
      ...defaults.playerState.discoveredPantheonIds,
      ...(Array.isArray(saved.playerState?.discoveredPantheonIds) ? saved.playerState.discoveredPantheonIds : []),
      ...legacyGodDiscoveries,
      ...legacyBossDiscoveries
    ])].filter((id) => knownPantheonIds.has(id));
    playerState.unlockedMachines = [...new Set([...defaults.playerState.unlockedMachines, ...(Array.isArray(saved.playerState?.unlockedMachines) ? saved.playerState.unlockedMachines : [])])];
    playerState.unlockedPowers = [...new Set([...defaults.playerState.unlockedPowers, ...(Array.isArray(saved.playerState?.unlockedPowers) ? saved.playerState.unlockedPowers : [])])];
    playerState.achievements = Array.isArray(saved.playerState?.achievements) ? saved.playerState.achievements : [];
    playerState.defeatedBosses = Array.isArray(saved.playerState?.defeatedBosses) ? saved.playerState.defeatedBosses : [];
    for (const key of ["level", "xp", "totalXp", "gems", "totalWins", "totalSpins", "totalCreditsWon", "totalGemsObtained", "totalBonusesClaimed", "totalBossesDefeated", "maxPlayerLevel", "bestCombo"]) {
      playerState[key] = Number.isFinite(playerState[key]) ? Math.max(key === "level" || key === "maxPlayerLevel" ? 1 : 0, Math.floor(playerState[key])) : defaults.playerState[key];
    }
    const machineState = { ...defaults.machineState, ...saved.machineState };
    machineState.unlockedMachines = [...new Set([...defaults.machineState.unlockedMachines, ...(Array.isArray(saved.machineState?.unlockedMachines) ? saved.machineState.unlockedMachines : [])])];
    const runState = { ...defaults.runState, ...saved.runState };
    runState.adCredits = Number.isFinite(runState.adCredits) ? Math.max(0, Math.floor(runState.adCredits)) : 0;
    runState.adRewardReceipts = Array.isArray(runState.adRewardReceipts) ? runState.adRewardReceipts.filter(id => typeof id === "string").slice(-100) : [];
    runState.pathChoice = ["fortuna", "nemesis"].includes(runState.pathChoice) ? runState.pathChoice : null;
    runState.pathSpinsRemaining = Math.min(GAME_CONFIG.paths.spins, Math.max(0, Number(runState.pathSpinsRemaining) || 0));
    runState.pathRewardGranted = Boolean(runState.pathRewardGranted);
    runState.recovery = { ...defaults.runState.recovery, ...(saved.runState?.recovery ?? {}) };
    runState.recovery.available = Boolean(runState.recovery.available);
    runState.recovery.firstResolved = Boolean(runState.recovery.firstResolved);
    runState.recovery.secondResolved = Boolean(runState.recovery.secondResolved);
    runState.recovery.currentWheel = [0, 1, 2].includes(Number(runState.recovery.currentWheel)) ? Number(runState.recovery.currentWheel) : 0;
    return {
      playerState,
      runState,
      machineState,
      history: Array.isArray(saved.history) ? saved.history : [],
      activeMatch: saved.activeMatch && typeof saved.activeMatch.name === "string" ? saved.activeMatch : null
    };
  } catch {
    return defaults;
  }
}

function saveArcadeProgress() {
  try {
    const activeMatch = matchActive ? {
      name: playerName,
      balance,
      bet,
      round,
      selectedBatchSize,
      freeSpins,
      luckEnabled,
      darkMode,
      letterMode,
      pauseStartedAt,
      matchEndsAt,
      lastSpinAt,
      inactivityPenaltyCount
    } : null;
    const savedHistory = history.map(({ centerLine, payout, prize, wager, isFreeSpin, bonusSpins }) => ({
      centerLine: centerLine.map(({ name }) => name),
      payout: {
        multiplier: payout.multiplier,
        label: payout.label,
        jackpot: payout.jackpot,
        matchCount: payout.matchCount,
        winningSymbol: payout.winningSymbol?.name,
        fireWild: Boolean(payout.fireWild)
      },
      prize,
      wager,
      isFreeSpin,
      bonusSpins
    }));
    const progress = { playerState, runState, machineState, history: savedHistory, activeMatch };
    window.localStorage.setItem(arcadeProgressStorageKey, JSON.stringify(progress));
    if (window.ProfileWallet.snapshot().id === walletProfileId) void window.ProfileWallet.saveProgress(progress, matchRecords);
  } catch {
    showToast("No se pudo guardar el progreso en este dispositivo.");
  }
}

function xpRequiredForLevel(level) {
  return GAME_CONFIG.progression.baseXpPerLevel + Math.max(0, level - 1) * GAME_CONFIG.progression.xpStepPerLevel;
}

function xpScoreAtLevel(level) {
  let score = 0;
  for (let reachedLevel = 1; reachedLevel < level; reachedLevel += 1) score += xpRequiredForLevel(reachedLevel);
  return score;
}

function updateProgressHud() {
  const requiredXp = xpRequiredForLevel(playerState.level);
  const progressPercent = Math.min(100, playerState.xp / requiredXp * 100);
  playerLevelOutput.textContent = String(playerState.level);
  gemCountOutput.textContent = formatCredits(playerState.gems);
  xpProgress.style.width = `${progressPercent}%`;
  xpTrack.setAttribute("aria-valuemax", String(requiredXp));
  xpTrack.setAttribute("aria-valuenow", String(playerState.xp));
  xpLabel.textContent = `${formatCredits(playerState.xp)} / ${formatCredits(requiredXp)} XP · PRÓXIMO NIVEL`;
  renderTempleMap();
}

function renderTempleMap() {
  if (!templeMapProgress || !templeMapPlayer || !templeMapNodes.length) return;
  const level = Math.max(1, Math.floor(playerState.level));
  const cappedLevel = Math.min(10, level);
  const requiredXp = xpRequiredForLevel(level);
  const withinLevel = level >= 10 ? 1 : Math.max(0, Math.min(1, playerState.xp / requiredXp));
  const routePosition = level >= 10 ? 9 : Math.max(0, Math.min(9, level - 1 + withinLevel));
  const routePercent = routePosition / 9 * 100;
  templeMapProgressFill.style.width = `${routePercent}%`;
  templeMapProgress.setAttribute("aria-valuenow", (1 + routePosition).toFixed(2));
  templeMapProgressLabel.textContent = level >= 10 ? "RUTA COMPLETADA" : `NIVEL ${cappedLevel} DE 10`;
  templeMapCurrentLabel.textContent = level >= 10
    ? `NIVEL ${level} · RUTA COMPLETADA`
    : `NIVEL ${level} · ${formatCredits(playerState.xp)} / ${formatCredits(requiredXp)} XP`;

  const fromLevel = Math.min(10, Math.floor(routePosition) + 1);
  const toLevel = Math.min(10, fromLevel + 1);
  const fraction = fromLevel === 10 ? 0 : routePosition - (fromLevel - 1);
  const fromNode = templeMapNodes.find((node) => Number(node.dataset.mapLevel) === fromLevel);
  const toNode = templeMapNodes.find((node) => Number(node.dataset.mapLevel) === toLevel) ?? fromNode;
  const readCoordinate = (node, property) => Number.parseFloat(node?.style.getPropertyValue(property)) || 0;
  const x = readCoordinate(fromNode, "--map-x") + (readCoordinate(toNode, "--map-x") - readCoordinate(fromNode, "--map-x")) * fraction;
  const y = readCoordinate(fromNode, "--map-y") + (readCoordinate(toNode, "--map-y") - readCoordinate(fromNode, "--map-y")) * fraction;
  templeMapPlayer.style.setProperty("--player-x", `${x}%`);
  templeMapPlayer.style.setProperty("--player-y", `${y}%`);
  templeMapPlayer.style.setProperty("--player-y-mobile", `${Math.min(99, (routePosition + 0.5) / 10 * 100)}%`);

  if (templeMapRouteProgress) {
    const pathLength = templeMapRouteProgress.getTotalLength();
    templeMapRouteProgress.style.strokeDasharray = `${pathLength * routePosition / 9} ${pathLength}`;
  }

  let nextBossNode = null;
  for (const node of templeMapNodes) {
    const nodeLevel = Number(node.dataset.mapLevel);
    const bossIds = (node.dataset.mapBoss ?? "").split(",").filter(Boolean);
    const targetScore = xpScoreAtLevel(nodeLevel);
    const scoreLabel = node.querySelector(".temple-map-node__score") ?? document.createElement("span");
    scoreLabel.className = "temple-map-node__score";
    const bosses = [...GAME_CONFIG.bosses.definitions, ...GAME_CONFIG.divineBosses].filter(({ id }) => bossIds.includes(id));
    const rewardXp = bosses.reduce((total, boss) => total + boss.rewardXp, 0);
    scoreLabel.textContent = rewardXp ? `META ${formatCredits(targetScore)} XP · +${formatCredits(rewardXp)} XP` : `META ${formatCredits(targetScore)} XP`;
    scoreLabel.setAttribute("aria-label", rewardXp ? `Puntuación de acceso ${formatCredits(targetScore)} XP; recompensa de boss ${formatCredits(rewardXp)} XP` : `Puntuación de acceso ${formatCredits(targetScore)} XP`);
    if (!scoreLabel.isConnected) node.append(scoreLabel);
    const isCurrent = nodeLevel === cappedLevel && level <= 10;
    const isReached = nodeLevel < cappedLevel;
    node.classList.toggle("is-current", isCurrent);
    node.classList.toggle("is-reached", isReached);
    node.classList.toggle("is-locked", nodeLevel > cappedLevel);
    node.setAttribute("aria-current", isCurrent ? "step" : "false");

    if (bossIds.length) {
      const defeatedCount = bossIds.filter((id) => playerState.defeatedBosses.includes(id)).length;
      const defeated = defeatedCount === bossIds.length;
      const available = level >= nodeLevel && !defeated;
      node.classList.toggle("is-defeated", defeated);
      node.classList.toggle("is-available", available);
      const status = node.querySelector(".temple-map-node__status");
      if (status) status.textContent = defeated
        ? "SUPERADO"
        : bossIds.length > 1 && defeatedCount > 0
          ? `${defeatedCount}/${bossIds.length} VENCIDOS`
          : available
            ? runState.boss && bossIds.includes(runState.boss.id) ? "BOSS ACTIVO" : "RETO ABIERTO"
            : `A NIVEL ${nodeLevel}`;
      if (!defeated && nodeLevel > cappedLevel && !nextBossNode) nextBossNode = node;
      if (!defeated && available && !nextBossNode) nextBossNode = node;
      node.setAttribute("aria-label", `Nivel ${nodeLevel}, ${node.querySelector(".temple-map-node__name")?.textContent ?? "boss"}, ${scoreLabel.getAttribute("aria-label")}, ${status?.textContent ?? "desafío"}`);
    } else {
      node.setAttribute("aria-label", `Nivel ${nodeLevel}, punto de ruta, ${scoreLabel.getAttribute("aria-label")}${isReached ? ", superado" : isCurrent ? ", actual" : ", bloqueado"}`);
    }
  }

  templeMapNextStop.textContent = nextBossNode
    ? `Próximo desafío: ${nextBossNode.querySelector(".temple-map-node__name")?.textContent ?? "boss"} · nivel ${nextBossNode.dataset.mapLevel}`
    : "Ruta completada · todos los bosses del mapa superados";
  templeMapCurrentStatus.textContent = runState.boss
    ? `Boss activo: ${runState.boss.name}. Completa sus objetivos para superarlo.`
    : level >= 10
      ? "Has llegado al último tramo. Revisa los bosses pendientes en el mapa."
      : "Cada tirada, victoria, combo y evento aporta XP a tu avance.";
}

function openTempleMap() {
  if (!templeMapModal || !openTempleMapButton) return;
  templeMapReturnFocus = document.activeElement;
  renderTempleMap();
  templeMapModal.hidden = false;
  openTempleMapButton.setAttribute("aria-expanded", "true");
  templeMapDialog.querySelector("[data-temple-map-close]")?.focus();
}

function closeTempleMap() {
  if (!templeMapModal || templeMapModal.hidden) return;
  templeMapModal.hidden = true;
  openTempleMapButton?.setAttribute("aria-expanded", "false");
  if (templeMapReturnFocus instanceof HTMLElement && templeMapReturnFocus.isConnected) templeMapReturnFocus.focus();
}

function grantGems(amount) {
  playerState.gems += amount;
  playerState.totalGemsObtained += amount;
  runState.runGems += amount;
  updateProgressHud();
}

function awardPlayerXp(amount) {
  if (amount <= 0) return;
  playerState.xp += amount;
  playerState.totalXp += amount;
  let levelsGained = 0;
  while (playerState.xp >= xpRequiredForLevel(playerState.level)) {
    playerState.xp -= xpRequiredForLevel(playerState.level);
    playerState.level += 1;
    levelsGained += 1;
  }
  playerState.maxPlayerLevel = Math.max(playerState.maxPlayerLevel, playerState.level);
  if (levelsGained > 0) {
    runState.currentLevel = playerState.level;
    grantGems(levelsGained * GAME_CONFIG.progression.gemsPerLevel);
    GAME_CONFIG.machines.filter((machine) => playerState.level >= machine.unlockLevel && !machine.comingSoon).forEach((machine) => {
      if (!playerState.unlockedMachines.includes(machine.id)) {
        playerState.unlockedMachines.push(machine.id);
        machineState.unlockedMachines = [...new Set([...machineState.unlockedMachines, machine.id])];
        showToast(`MÁQUINA DESBLOQUEADA: ${machine.name}`);
      }
    });
    showToast(`¡NIVEL ${playerState.level}! +${levelsGained * GAME_CONFIG.progression.gemsPerLevel} GEMAS`);
  }
  if (machineState.unlockedMachines.length >= 4) unlockAchievement("collector");
  activateBossIfEligible();
  updateProgressHud();
  renderCollectionAndStats();
  saveArcadeProgress();
}

function renderActivePower() {
  const power = runState.activePower;
  activePowerDescriptionOutput.hidden = !power;
  activePowerDescriptionOutput.textContent = power ? `${power.name} · ${power.spinsRemaining} GIROS` : "";
}

function getMachineThemeProfile(machineId = machineState.currentMachine) {
  const profiles = {
    "neon-salvaje": { accent: "--pink", label: "NEÓN SALVAJE", background: "machine-neon-salvaje" },
    "dark-ritual": { accent: "--lime", label: "DARK RITUAL", background: "machine-dark-ritual" },
    "neon-words": { accent: "--cyan", label: "NEON WORDS", background: "machine-neon-words" },
    "future-machine": { accent: "--yellow", label: "FUTURE MACHINE", background: "machine-neon-salvaje" }
  };
  return profiles[machineId] ?? profiles["neon-salvaje"];
}

function applyMachineThemeProfile(machineId = machineState.currentMachine) {
  const profile = getMachineThemeProfile(machineId);
  document.body.classList.remove("machine-neon-salvaje", "machine-dark-ritual", "machine-neon-words");
  document.body.classList.add(profile.background);
}

function updateMachineControl() {
  const unlocked = new Set(machineState.unlockedMachines);
  [...machineSelect.options].forEach((option) => {
    const definition = GAME_CONFIG.machines.find(({ id }) => id === option.value);
    const available = Boolean(definition && !definition.comingSoon && unlocked.has(definition.id) && playerState.level >= definition.unlockLevel);
    option.disabled = !available;
    if (definition) option.textContent = definition.comingSoon ? `${definition.name} · PRÓXIMAMENTE` : available ? definition.name : `${definition.name} · NIVEL ${definition.unlockLevel}`;
  });
  machineSelect.value = machineState.currentMachine;
  machineSelect.disabled = !matchActive || isSpinning || !runState.pathChoice;
  applyMachineThemeProfile(machineState.currentMachine);
}

function selectArcadeMachine(machineId) {
  if (!matchActive || isSpinning || !runState.pathChoice) return;
  const definition = GAME_CONFIG.machines.find(({ id }) => id === machineId);
  if (!definition || definition.comingSoon || !machineState.unlockedMachines.includes(machineId) || playerState.level < definition.unlockLevel) {
    showToast("MÁQUINA BLOQUEADA · SIGUE SUBIENDO DE NIVEL");
    updateMachineControl();
    return;
  }
  if (machineId === "dark-ritual") {
    GodUI.applyTheme("nemesis");
    applyGameMode(false);
    applyTheme(true);
  } else if (machineId === "neon-words") {
    GodUI.applyTheme("fortuna");
    applyTheme(false);
    applyGameMode(true);
  } else {
    GodUI.applyTheme("fortuna");
    applyTheme(false);
    applyGameMode(false);
  }
  machineState.currentMachine = machineId;
  if (runState.boss && !(runState.boss.divine ? runState.boss.bossPool?.includes(machineId) : definition.bossPool.includes(runState.boss.id))) {
    runState.boss = null;
    runState.bossProgress = {};
  }
  activateBossIfEligible();
  renderBoss();
  activeSymbols = definition.symbols;
  activeReels().forEach((reel) => setReelSymbols(reel, Array.from({ length: 3 }, chooseSymbol), 1));
  updateMachineControl();
  renderCollectionAndStats();
  saveArcadeProgress();
}

function renderBoss() {
  const boss = runState.boss;
  bossPanel.hidden = !boss;
  if (!boss) return;
  const bossDefinition = BossRegistry.get(boss.id) ?? boss;
  bossTitle.textContent = boss.name;
  bossPanel.dataset.bossId = boss.id;
  bossPanel.dataset.bossTheme = !boss.divine ? "regular" : boss.id.includes("nemesis") ? "nemesis" : boss.id === "destino" ? "destiny" : "fortuna";
  bossDescriptionOutput.textContent = bossDefinition.description ?? "Completa los objetivos de la partida para superar este desafío.";
  const bossKicker = bossPanel.querySelector(".boss-kicker");
  if (bossKicker) bossKicker.textContent = boss.divine ? `BOSS DIVINO · NIVEL ${boss.triggerLevel}` : `OBJETIVO DE RUN · NIVEL ${boss.triggerLevel}`;
  const bossMark = bossPanel.querySelector(".boss-mark");
  if (bossMark) bossMark.textContent = boss.icon ?? "👹";
  const targets = Object.entries(boss.targets);
  const objectiveLabels = { diamonds: "💎 DIAMANTES", fire: "🔥 FUEGO", wins: "🏆 VICTORIAS", wild: "🃏 WILDS", streak: "RACHA DE VICTORIAS" };
  const completed = targets.filter(([key, target]) => (runState.bossProgress[key] ?? 0) >= target).length;
  bossLives.textContent = `${"♥ ".repeat(targets.length - completed)}${"♡ ".repeat(completed)}`.trim();
  bossLives.setAttribute("aria-label", `${targets.length - completed} objetivos pendientes`);
  bossObjectives.replaceChildren(...targets.map(([key, target]) => {
    const objective = document.createElement("div");
    objective.className = "boss-objective";
    const label = document.createElement("strong");
    const progress = document.createElement("span");
    const amount = Math.min(target, runState.bossProgress[key] ?? 0);
    label.textContent = objectiveLabels[key] ?? key.toUpperCase();
    progress.textContent = `${amount} / ${target}`;
    const meter = document.createElement("progress");
    meter.className = "boss-objective__meter";
    meter.max = target;
    meter.value = amount;
    meter.setAttribute("aria-label", `${objectiveLabels[key] ?? key} ${amount} de ${target}`);
    objective.append(label, progress, meter);
    return objective;
  }));
}

function activateBossIfEligible() {
  if (runState.boss) { renderTempleMap(); return; }
  const machine = GAME_CONFIG.machines.find(({ id }) => id === machineState.currentMachine);
  const regularBoss = BossRegistry.entries.find((boss) => !boss.divine
    && playerState.level >= boss.triggerLevel
    && !playerState.defeatedBosses.includes(boss.id)
    && (machine?.bossPool.includes(boss.id) ?? false)
    && (machineState.currentMachine !== "dark-ritual" || boss.id === "demonio-neon")
  );
  const divineBoss = BossRegistry.entries.find((boss) => boss.divine
    && playerState.level >= boss.triggerLevel
    && !playerState.defeatedBosses.includes(boss.id)
    && boss.bossPool.includes(machineState.currentMachine)
  );
  const nextBoss = regularBoss ?? (divineBoss ? { ...divineBoss, divine: true } : null);
  if (!nextBoss) { renderTempleMap(); return; }
  playTempleCinematic("boss-introduced", {
    title: `${nextBoss.name} TE DESAFÍA`,
    description: nextBoss.description,
    theme: nextBoss.id.includes("nemesis") ? "nemesis" : nextBoss.id === "destino" ? "destiny" : "fortuna"
  });
  runState.boss = { ...nextBoss, targets: { ...nextBoss.targets } };
  runState.bossProgress = Object.fromEntries(Object.keys(nextBoss.targets).map((key) => [key, 0]));
  renderBoss();
  renderTempleMap();
  showToast(`BOSS: ${nextBoss.name} · COMPLETA LOS OBJETIVOS`);
}

function updateBossProgress(centerLine, payout) {
  if (!runState.boss || !bossVictoryModal.hidden) return;
  const progress = runState.bossProgress;
  progress.diamonds = (progress.diamonds ?? 0) + centerLine.filter(({ name }) => name === "diamantes").length;
  progress.fire = (progress.fire ?? 0) + centerLine.filter(({ name, kind }) => name === "llamas" || kind === "fire").length;
  progress.wild = (progress.wild ?? 0) + centerLine.filter(({ kind }) => kind === "wild").length;
  if (payout.multiplier > 0) {
    progress.wins = (progress.wins ?? 0) + 1;
    progress.streak = (progress.streak ?? 0) + 1;
  } else progress.streak = 0;
  if (runState.boss.targets.streak) progress.streak = Math.min(progress.streak, runState.boss.targets.streak);
  if (Object.entries(runState.boss.targets).every(([key, target]) => (progress[key] ?? 0) >= target)) defeatBoss();
  else renderBoss();
}

function unlockAchievement(achievementId) {
  if (playerState.achievements.includes(achievementId)) return;
  const achievement = GAME_CONFIG.achievements.find(({ id }) => id === achievementId);
  if (!achievement) return;
  playerState.achievements.push(achievementId);
  showToast(`LOGRO: ${achievement.title}`);
  renderCollectionAndStats();
  saveArcadeProgress();
}

function renderCollectionAndStats() {
  collectionList.replaceChildren();
  const collectionItems = [
    ...GAME_CONFIG.pantheon.map((item) => ({ name: item.name, icon: item.icon, unlocked: PantheonSystem.isDiscovered(`god-${item.id}`), detail: item.title, portrait: item.portrait })),
    ...GAME_CONFIG.machines.map((item) => ({ name: item.name, icon: "🎰", unlocked: machineState.unlockedMachines.includes(item.id), detail: `NIVEL ${item.unlockLevel}` })),
    ...GAME_CONFIG.wilds.symbols.map((item) => ({ name: item.name, icon: item.icon, unlocked: playerState.unlockedPowers.includes(item.kind), detail: "WILD" })),
    ...BossRegistry.entries.map((item) => ({ name: item.name, icon: item.icon, unlocked: playerState.defeatedBosses.includes(item.id), detail: playerState.defeatedBosses.includes(item.id) ? "DERROTADO" : `${item.divine ? "BOSS DIVINO · " : "NIVEL "}${item.triggerLevel}` }))
  ];
  collectionItems.forEach((entry) => {
    const row = document.createElement("div");
    row.className = `collection-item${entry.unlocked ? "" : " is-locked"}`;
    const icon = document.createElement("span");
    icon.textContent = entry.icon;
    const name = document.createElement("strong");
    name.textContent = entry.name;
    const status = document.createElement("small");
    status.textContent = entry.unlocked ? "✓" : entry.detail;
    row.append(icon, name, status);
    collectionList.append(row);
  });

  const selectedCategory = pantheonCategoryButtons.find((button) => button.getAttribute("aria-pressed") === "true")?.dataset.pantheonCategory ?? "gods";
  const categoryEntries = PantheonSystem.getEntries(selectedCategory);
  const progress = PantheonSystem.getProgress(selectedCategory);
  pantheonStatus.textContent = `${progress.discovered} / ${progress.total} DESCUBIERTOS`;
  pantheonCategoryButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.pantheonCategory === selectedCategory));
  });
  pantheonList.replaceChildren(...(categoryEntries.length ? categoryEntries.map((entry) => {
    const unlocked = PantheonSystem.isDiscovered(entry.id);
    const canOpenProfile = Boolean(unlocked && entry.godId);
    const card = document.createElement(canOpenProfile ? "button" : "article");
    if (canOpenProfile) {
      card.type = "button";
      card.dataset.god = entry.godId;
      card.setAttribute("aria-label", `Ver perfil de ${entry.name}`);
    }
    card.className = `pantheon-card${unlocked ? " is-discovered" : " is-locked"}`;
    if (unlocked && entry.portraitType === "roster") {
      const portrait = document.createElement("span");
      portrait.className = "pantheon-card__roster-portrait";
      portrait.style.setProperty("--roster-position", entry.rosterPosition);
      setRosterArtwork(portrait, entry);
      portrait.setAttribute("aria-hidden", "true");
      card.append(portrait);
    } else if (unlocked && entry.portrait) {
      const portrait = document.createElement("img");
      portrait.src = entry.portrait;
      portrait.alt = "";
      portrait.loading = "lazy";
      portrait.width = 40;
      portrait.height = 40;
      portrait.addEventListener("error", () => { portrait.hidden = true; }, { once: true });
      card.append(portrait);
    } else {
      const icon = document.createElement("span");
      icon.className = "pantheon-card__icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = unlocked ? entry.icon : "?";
      card.append(icon);
    }
    const name = document.createElement("strong");
    name.textContent = unlocked ? entry.name : "DESCUBRIMIENTO PENDIENTE";
    const title = document.createElement("small");
    title.textContent = unlocked ? `${entry.description}${canOpenProfile ? " · VER PERFIL" : ""}` : entry.unlockHint;
    card.append(name, title);
    return card;
  }) : [Object.assign(document.createElement("p"), { className: "pantheon-empty", textContent: "Aún no hay reliquias registradas. El catálogo está listo para incorporarlas cuando aparezcan en el juego." })]));

  achievementList.replaceChildren(...GAME_CONFIG.achievements.map((entry) => {
    const item = document.createElement("li");
    const unlocked = playerState.achievements.includes(entry.id);
    item.className = unlocked ? "is-unlocked" : "";
    item.textContent = `${unlocked ? "✓" : "◇"} ${entry.title} · ${entry.description}`;
    return item;
  }));

  const stats = [
    ["🎰 Tiradas totales", playerState.totalSpins],
    ["🏆 Victorias", playerState.totalWins],
    ["✦ Mejor combo", playerState.bestCombo],
    ["💰 Créditos ganados", formatCredits(playerState.totalCreditsWon)],
    ["💎 Gemas obtenidas", formatCredits(playerState.totalGemsObtained)],
    ["🎁 Bonus elegidos", playerState.totalBonusesClaimed],
    ["👹 Bosses derrotados", playerState.totalBossesDefeated],
    ["Dioses descubiertos", PantheonSystem.getProgress("gods").discovered],
    ["⭐ Nivel máximo", playerState.maxPlayerLevel]
  ];
  statisticsGrid.replaceChildren(...stats.flatMap(([label, value]) => {
    const cell = document.createElement("div");
    const name = document.createElement("dt");
    const result = document.createElement("dd");
    name.textContent = label;
    result.textContent = String(value);
    cell.append(name, result);
    return cell;
  }));
  updateMachineControl();
}

function defeatBoss() {
  const boss = runState.boss;
  if (!boss) return;
  playerState.defeatedBosses.push(boss.id);
  playerState.totalBossesDefeated += 1;
  runState.boss = null;
  runState.bossProgress = {};
  if (boss.rewardPower && !playerState.unlockedPowers.includes(boss.rewardPower)) playerState.unlockedPowers.push(boss.rewardPower);
  PantheonSystem.discover(`character-${boss.id}`);
  unlockAchievement("boss-slayer");
  grantGems(boss.rewardGems);
  awardPlayerXp(boss.rewardXp);
  showToast(`BOSS DERROTADO · +${boss.rewardGems} GEMAS · +${boss.rewardXp} XP`);
  bossVictoryMark.textContent = boss.icon ?? "✦";
  bossVictoryTitle.textContent = boss.name;
  bossVictoryCopy.textContent = `${boss.description ?? "Desafío completado."} Recompensa: +${boss.rewardGems} gemas virtuales · +${boss.rewardXp} XP.`;
  bossVictoryModal.hidden = false;
  bossVictoryModal.dataset.bossTheme = !boss.divine ? "regular" : boss.id.includes("nemesis") ? "nemesis" : boss.id === "destino" ? "destiny" : "fortuna";

  playTempleCinematic("boss-defeated", {
    title: `${boss.name} · DESAFÍO SUPERADO`,
    description: `+${boss.rewardGems} gemas virtuales · +${boss.rewardXp} XP`,
    theme: boss.id.includes("nemesis") ? "nemesis" : boss.id === "destino" ? "destiny" : "fortuna"
  });
  bossVictoryContinue.focus();
  renderBoss();
  renderCollectionAndStats();
  saveArcadeProgress();
}



function chooseBonusReward(freeSpinReward) {
  bonusDescription.textContent = `Has ganado ${freeSpinReward} tiradas gratis. Elige una recompensa para continuar.`;
  bonusModal.hidden = false;
  bonusChoiceButtons[0].focus();
  return new Promise((resolve) => {
    bonusChoiceResolver = resolve;
  });
}

function applyBonusReward(rewardId) {
  if (!bonusChoiceResolver) return;
  switch (rewardId) {
    case "overdrive":
      runState.activePower = { id: rewardId, name: "OVERDRIVE", spinsRemaining: GAME_CONFIG.bonus.powerDuration };
      break;
    case "wild":
      runState.activePower = { id: rewardId, name: "WILD POWER", spinsRemaining: GAME_CONFIG.bonus.powerDuration };
      break;
    case "gem-rush":
      grantGems(GAME_CONFIG.bonus.gemRushGems);
      showToast(`GEM RUSH: +${GAME_CONFIG.bonus.gemRushGems} GEMAS`);
      break;
    case "extra-spins":
      freeSpins += GAME_CONFIG.bonus.extraFreeSpins;
      runState.freeSpins = freeSpins;
      showToast(`EXTRA SPINS: +${GAME_CONFIG.bonus.extraFreeSpins} TIRADAS`);
      break;
    default:
      return;
  }
  const resolveChoice = bonusChoiceResolver;
  bonusChoiceResolver = undefined;
  runState.pendingBonus = 0;
  bonusModal.hidden = true;
  renderRunHud();
  updateControls();
  saveArcadeProgress();
  resolveChoice();
}

function resumePendingBonus() {
  if (!runState.pendingBonus || bonusChoiceResolver) return;
  isSpinning = true;
  updateControls();
  void chooseBonusReward(runState.pendingBonus).then(() => {
    isSpinning = false;
    updateControls();
    if (matchFinishPending && matchActive && !bossVictoryModal.hidden) {
      matchFinishPending = false;
      saveArcadeProgress();
    } else if (matchFinishPending && matchActive) finishMatch(Date.now() >= matchEndsAt ? "TIEMPO AGOTADO" : balance === 0 && freeSpins === 0 ? "SIN CRÉDITOS" : "PARTIDA FINALIZADA");
    else if (matchActive && Date.now() >= matchEndsAt) finishMatch("TIEMPO AGOTADO");
    else saveArcadeProgress();
  });
}

function loadMatchRecords() {
  try {
    const records = JSON.parse(window.localStorage.getItem(matchStorageKey) ?? "[]");
    return Array.isArray(records)
      ? records.filter((record) => record && typeof record.name === "string" && Number.isFinite(record.credits) && Number.isFinite(record.finishedAt))
      : [];
  } catch {
    return [];
  }
}

function renderRanking() {
  const records = [...matchRecords]
    .sort((first, second) => second.credits - first.credits || first.finishedAt - second.finishedAt)
    .slice(0, rankingLimit);
  rankingList.replaceChildren();
  if (!records.length) {
    const empty = document.createElement("li");
    empty.className = "ranking-empty";
    empty.textContent = "Aún no hay partidas registradas. La primera puntuación puede ser tuya.";
    rankingList.append(empty);
    return;
  }

  records.forEach((record, index) => {
    const row = document.createElement("li");
    const place = document.createElement("span");
    place.className = "ranking-place";
    place.textContent = String(index + 1).padStart(2, "0");
    const player = document.createElement("span");
    player.className = "ranking-player";
    player.textContent = record.name;
    const details = document.createElement("small");
    details.textContent = `${record.rounds} TIRADAS · ${new Intl.DateTimeFormat("es-ES", { hour: "2-digit", minute: "2-digit" }).format(record.finishedAt)}`;
    if (record.adCredits > 0) details.textContent += ` · +${formatCredits(record.adCredits)} CR anuncios`;
    player.append(details);
    const score = document.createElement("strong");
    score.className = "ranking-score";
    score.textContent = formatCredits(record.credits);
    const creditsLabel = document.createElement("small");
    creditsLabel.textContent = " CR";
    score.append(creditsLabel);
    row.append(place, player, score);
    rankingList.append(row);
  });
}

function updateMatchStatus() {
  if (!matchActive) return;
  if (!runState.pathChoice) {
    matchCountdownOutput.textContent = formatMatchClock(matchDuration);
    document.body.classList.remove("match-ending");
    return;
  }
  const now = Date.now();
  const remaining = Math.max(0, matchEndsAt - now);
  matchCountdownOutput.textContent = formatMatchClock(remaining);
  document.body.classList.toggle("match-ending", remaining <= 15_000);

  if (remaining === 0) {
    if (isSpinning) matchFinishPending = true;
    else finishMatch("TIEMPO AGOTADO");
    return;
  }
  if (!isSpinning && recoveryModal.hidden && destinyModal.hidden && godModal.hidden && bossVictoryModal.hidden) {
    const inactiveIntervals = Math.floor((now - lastSpinAt) / inactivityPenaltyInterval);
    const unpaidIntervals = inactiveIntervals - inactivityPenaltyCount;
    if (unpaidIntervals > 0) {
      adjustGameCredits(-Math.min(balance, unpaidIntervals * inactivityPenaltyAmount), "inactivity");
      inactivityPenaltyCount = inactiveIntervals;
      updateControls();
      saveArcadeProgress();
      if (balance === 0) {
        finishMatch("SIN CRÉDITOS");
        return;
      }
    }
  }

  if (remaining === 0) {
    if (isSpinning) matchFinishPending = true;
    else finishMatch("TIEMPO AGOTADO");
  }
}

function finishMatch(reason) {
  if (!matchActive) return;
  const unfinishedBoss = runState.boss;
  const unfinishedBossProgress = unfinishedBoss
    ? Object.entries(unfinishedBoss.targets).filter(([key, target]) => (runState.bossProgress[key] ?? 0) >= target).length
    : 0;
  const unfinishedBossNote = unfinishedBoss
    ? ` Boss no superado: ${unfinishedBoss.name} · ${unfinishedBossProgress}/${Object.keys(unfinishedBoss.targets).length} objetivos completados.`
    : "";
  matchActive = false;
  pauseStartedAt = 0;
  document.querySelector("#mobile-pause").hidden = true;
  matchFinishPending = false;
  window.clearInterval(matchTimerInterval);
  window.clearTimeout(GodUI.transitionTimer);
  templeTransition.hidden = true;
  templeTransition.classList.remove("is-nemesis", "is-destiny");
  matchTimerInterval = undefined;
  if (!godModal.hidden) GodUI.close();
  if (!destinyModal.hidden && !destinyWheelIsSpinning) closeDestinyWheel();
  else destinyModal.hidden = true;
  pathModal.hidden = true;
  recoveryModal.hidden = true;
  recoveryPanel.hidden = true;
  deityPresence.hidden = true;
  window.clearTimeout(characterAppearanceTimer);
  window.clearTimeout(characterDispatchTimer);
  pendingCharacterAppearance = null;
  activeCharacterAppearance = null;
  window.CharacterAudio?.stop();
  bossVictoryModal.hidden = true;
  if (!bonusModal.hidden && bonusChoiceResolver) {
    const resolveChoice = bonusChoiceResolver;
    bonusChoiceResolver = undefined;
    runState.pendingBonus = 0;
    bonusModal.hidden = true;
    resolveChoice();
  }
  const record = { profileId: walletProfileId, name: playerName, credits: balance, rounds: round, finishedAt: Date.now(), reason, adCredits: runState.adCredits ?? 0 };
  matchRecords.unshift(record);
  matchRecords = matchRecords.slice(0, 100);
  saveArcadeProgress();
  try {
    window.localStorage.setItem(matchStorageKey, JSON.stringify(matchRecords));
  } catch {
    showToast("No se pudo guardar la clasificación en este dispositivo.");
  }
  renderRanking();
  entryFeedback.textContent = `${playerName}: ${formatCredits(balance)} CR · ${round} tiradas · ${reason.toLowerCase()}.${unfinishedBossNote}`;
  entryFeedback.dataset.bossResult = unfinishedBoss ? "defeat" : "clear";
  entryFeedback.hidden = false;
  playerNameInput.value = playerName;
  entryScreen.hidden = false;
  document.body.classList.add("session-locked");
  document.body.classList.remove("match-ending");
  pathModal.hidden = true;
  destinyModal.hidden = true;
  bossVictoryModal.hidden = true;
  updateControls();
  playerNameInput.focus();
  if (reason === "TIEMPO AGOTADO") {
    document.querySelector("#time-expired-result").textContent = `${formatCredits(balance)} CR guardados · ${round} tiradas`;
    document.querySelector("#time-expired-modal").hidden = false;
    document.querySelector("#time-expired-close").focus();
  }
  document.dispatchEvent(new CustomEvent("temple:session-end", { detail: { reason, rounds: round } }));
}

function startMatch(name) {
  if (!window.ProfileWallet.isReady()) { showToast("No se puede guardar el perfil. Revisa la conexión o el almacenamiento."); return; }
  if (window.ProfileWallet.snapshot().balance < minimumBet) { window.CreditShop?.open(); showToast("Consigue créditos para entrar al templo."); return; }
  window.ProfileWallet.setName(name);
  document.dispatchEvent(new CustomEvent("temple:session-start"));
  playerName = name;
  playerState.name = playerName;
  runState = createDefaultRunState();
  machineState.currentMachine = darkMode ? "dark-ritual" : "neon-salvaje";
  balance = window.ProfileWallet.snapshot().balance;
  bet = 20;
  round = 0;
  selectedBatchSize = 1;
  freeSpins = 0;
  luckEnabled = false;
  luckToggle.checked = false;
  history.length = 0;
  renderHistory();
  roundCount.textContent = "TIRADA 01";
  GodUI.beginTempleEntry();
  entryFeedback.hidden = true;
  entryScreen.hidden = true;
  document.body.classList.remove("session-locked", "match-ending");
  currentPlayerOutput.textContent = playerName;
  matchActive = true;
  matchFinishPending = false;
  window.clearInterval(matchTimerInterval);
  matchTimerInterval = undefined;
  matchEndsAt = 0;
  lastSpinAt = Date.now();
  inactivityPenaltyCount = 0;
  allReels.forEach((reel) => reel.classList.remove("is-winner", "is-stopped", "is-spinning", "is-braking"));
  machine.classList.remove("is-jackpot");
  renderRunHud();
  applyGameMode(false);
  renderBoss();
  renderCollectionAndStats();
  resultBar.classList.remove("is-win");
  resultIcon.textContent = "✦";
  resultMessage.textContent = "¿LISTA PARA GIRAR?";
  winAmount.textContent = "";
  updateControls();
  matchCountdownOutput.textContent = formatMatchClock(matchDuration);
  saveArcadeProgress();
  openPathChoice();
}

function updateControls() {
  const wager = currentWager();
  const totalCost = wager * selectedBatchSize;
  const pathPending = matchActive && !runState.pathChoice;
  const tutorialOpen = Boolean(window.GameTutorial?.isOpen);
  balanceOutput.textContent = formatCredits(balance);
  betOutput.textContent = formatCredits(bet);
  spinCostOutput.textContent = freeSpins
    ? `${formatCredits(freeSpins)} TIRADAS GRATIS`
    : selectedBatchSize > 1
      ? `TOTAL ${formatCredits(totalCost)} CR`
      : `COSTE ${formatCredits(wager)} CR`;
  spinLabel.textContent = freeSpins ? "TIRADA GRATIS" : selectedBatchSize > 1 ? `GIRAR ×${selectedBatchSize}` : "GIRAR";
  freeSpinCountOutput.textContent = formatCredits(freeSpins);
  freeSpinStatus.classList.toggle("has-spins", freeSpins > 0);
  document.querySelector(".luck-toggle").classList.toggle("is-active", luckEnabled);
  betDownButton.disabled = !matchActive || isSpinning || pathPending || bet <= minimumBet;
  betUpButton.disabled = !matchActive || isSpinning || pathPending || bet >= maximumBet;
  spinButton.disabled = !window.ProfileWallet.isReady() || !matchActive || isSpinning || pathPending || tutorialOpen || (!freeSpins && balance < totalCost);
  batchButtons.forEach((button) => {
    button.disabled = !matchActive || isSpinning || pathPending;
    button.classList.toggle("is-selected", Number(button.dataset.batch) === selectedBatchSize);
    button.setAttribute("aria-pressed", String(Number(button.dataset.batch) === selectedBatchSize));
  });
  luckToggle.disabled = !matchActive || isSpinning || pathPending;
  destinyWheelButton.disabled = !matchActive || isSpinning || pathPending || runState.destinyWheelUsed;
  document.querySelector(".reset-button").disabled = !matchActive || isSpinning || pathPending;
  updateMachineControl();
  document.dispatchEvent(new Event("temple:state-change"));
}

function changeBet(amount) {
  if (!matchActive || isSpinning) return;
  bet = Math.min(maximumBet, Math.max(minimumBet, bet + amount));
  updateControls();
  saveArcadeProgress();
}

function restoreSavedMatch() {
  const saved = savedArcadeProgress.activeMatch;
  if (!saved) return;
  const hadSelectedPath = Boolean(runState.pathChoice);
  if (Number.isFinite(saved.pauseStartedAt) && saved.pauseStartedAt > 0) {
    const pausedDuration = Math.max(0, Date.now() - saved.pauseStartedAt);
    saved.matchEndsAt += pausedDuration;
    saved.lastSpinAt += pausedDuration;
  }
  playerName = saved.name;
  playerState.name = playerName;
  balance = window.ProfileWallet.snapshot().balance;
  bet = Math.min(maximumBet, Math.max(minimumBet, Number(saved.bet) || 20));
  round = Math.max(0, Number(saved.round) || 0);
  selectedBatchSize = [1, 3, 5].includes(saved.selectedBatchSize) ? saved.selectedBatchSize : 1;
  freeSpins = Math.max(0, Number(saved.freeSpins) || 0);
  luckEnabled = Boolean(saved.luckEnabled);
  luckToggle.checked = luckEnabled;
  darkMode = false;
  letterMode = false;
  matchEndsAt = Number(saved.matchEndsAt) || Date.now();
  lastSpinAt = Number(saved.lastSpinAt) || Date.now();
  inactivityPenaltyCount = Math.max(0, Number(saved.inactivityPenaltyCount) || 0);
  isSpinning = runState.pendingBonus > 0 && Boolean(runState.pathChoice);
  matchActive = true;
  matchFinishPending = false;
  runState.freeSpins = freeSpins;
  const knownSymbols = [...symbols, ...darkSymbols, ...letterSymbols, ...GAME_CONFIG.wilds.symbols];
  history.splice(0, history.length, ...(savedArcadeProgress.history ?? []).filter((entry) => entry && Array.isArray(entry.centerLine) && entry.payout && typeof entry.payout === "object").slice(0, 5).map((entry) => {
    const centerLine = entry.centerLine.map((name) => knownSymbols.find((symbol) => symbol.name === name)).filter(Boolean);
    const winningSymbol = knownSymbols.find((symbol) => symbol.name === entry.payout.winningSymbol);
    return { ...entry, centerLine, payout: { ...entry.payout, winningSymbol } };
  }));
  renderHistory();
  currentPlayerOutput.textContent = playerName;
  playerNameInput.value = playerName;
  entryFeedback.hidden = true;
  entryScreen.hidden = true;
  document.body.classList.remove("session-locked", "match-ending");
  applyTheme(Boolean(saved.darkMode));
  applyGameMode(Boolean(saved.letterMode));
  roundCount.textContent = `TIRADA ${String(round + 1).padStart(2, "0")}`;
  resultMessage.textContent = "PARTIDA RECUPERADA · SIGUE JUGANDO";
  allReels.forEach((reel) => reel.classList.remove("is-winner", "is-stopped", "is-spinning", "is-braking"));
  window.clearInterval(matchTimerInterval);
  matchEndsAt = hadSelectedPath ? Number(saved.matchEndsAt) || Date.now() : 0;
  matchCountdownOutput.textContent = formatMatchClock(hadSelectedPath ? Math.max(0, matchEndsAt - Date.now()) : matchDuration);
  document.body.classList.remove("match-ending");
  matchTimerInterval = undefined;
  updateControls();
  renderRunHud();
  if (hadSelectedPath) {
    matchTimerInterval = window.setInterval(updateMatchStatus, 1000);
    updateMatchStatus();
    resumePendingBonus();
  } else {
    matchEndsAt = 0;
    updateMatchStatus();
    openPathChoice();
  }
  saveArcadeProgress();
}

function updateBonusReelPanel() {
  const bonusAvailable = freeSpins > 0 ? freeSpins : runState.pendingBonus;
  const hasBonus = bonusAvailable > 0;
  bonusReelPanel.hidden = !hasBonus;
  if (!hasBonus) return;
  const label = `${formatCredits(bonusAvailable)} BONO`;
  bonusReelPanel.setAttribute("data-bonus-count", label);
  bonusReelButtons.forEach((button) => {
    button.disabled = !matchActive || isSpinning || bonusAvailable <= 0;
    button.title = "Gasta un bono para intentar otra oportunidad en ese rodillo";
  });
}

function openPathChoice() {
  if (!matchActive || runState.pathChoice) return;
  const config = GAME_CONFIG.paths;
  pathFortunaEffect.textContent = `Prosperidad · +${Math.round(config.fortuneBonusRate * 100)}% a premios ganadores durante ${config.spins} giros.`;
  pathNemesisEffect.textContent = `Desafío · ${Math.round(config.nemesisBonusRate * 100)}% a premios ganadores durante ${config.spins} giros; al completarlos, +${config.nemesisGemReward} gemas virtuales.`;
  pathModal.hidden = false;
  pathFortunaButton.focus();
}

function chooseDestinyPath(pathId) {
  if (!matchActive || isSpinning || runState.pathChoice) return;
  if (pathId !== "fortuna" && pathId !== "nemesis") return;
  runState.pathChoice = pathId;
  runState.pathSpinsRemaining = GAME_CONFIG.paths.spins;
  runState.pathRewardGranted = false;
  const extraSeconds = window.ProfileWallet.snapshot().timeSeconds;
  if (extraSeconds > 0) window.ProfileWallet.useTime(extraSeconds);
  matchEndsAt = Date.now() + matchDuration + extraSeconds * 1000;
  presentTempleCharacter(pathId, pathId === "nemesis" ? "Némesis vigila el camino oscuro." : "Fortuna ilumina el camino de la prosperidad.", "EL CAMINO HA ELEGIDO A");
  lastSpinAt = Date.now();
  inactivityPenaltyCount = 0;
  pathModal.hidden = true;
  window.clearInterval(matchTimerInterval);
  matchTimerInterval = window.setInterval(updateMatchStatus, 1000);
  renderRunHud();
  updateControls();
  updateMatchStatus();
  saveArcadeProgress();
  showToast(pathId === "fortuna"
    ? `CAMINO DE FORTUNA · +${Math.round(GAME_CONFIG.paths.fortuneBonusRate * 100)}% A PREMIOS · ${GAME_CONFIG.paths.spins} GIROS`
    : `CAMINO DE NÉMESIS · ${Math.round(GAME_CONFIG.paths.nemesisBonusRate * 100)}% A PREMIOS · +${GAME_CONFIG.paths.nemesisGemReward} GEMAS AL COMPLETAR ${GAME_CONFIG.paths.spins} GIROS`);
  playTempleCinematic(pathId === "nemesis" ? "nemesis-watches" : "fortuna-awakened", {
    description: pathId === "nemesis" ? "−10% a premios durante cinco giros · +5 gemas virtuales al completar" : "+15% a premios ganadores durante cinco giros",
    theme: pathId
  });
  window.requestAnimationFrame(() => window.GameTutorial?.firstVisit());
  if (runState.pendingBonus > 0) resumePendingBonus();
  else spinButton.focus();
}

function finishPathSpin() {
  if (!runState.pathChoice || runState.pathSpinsRemaining <= 0) return;
  runState.pathSpinsRemaining -= 1;
  if (runState.pathSpinsRemaining === 0) {
    if (runState.pathChoice === "nemesis" && !runState.pathRewardGranted) {
      runState.pathRewardGranted = true;
      grantGems(GAME_CONFIG.paths.nemesisGemReward);
      showToast(`NÉMESIS SUPERADA · +${GAME_CONFIG.paths.nemesisGemReward} GEMAS VIRTUALES`);
    } else {
      showToast("CAMINO DE FORTUNA COMPLETADO");
    }
    if (selectedBatchSize > 1) selectedBatchSize = 1;
  }
  renderRunHud();
  saveArcadeProgress();
}

function renderRunHud() {
  const comboBonusRate = Math.min(Math.max(0, runState.combo - 1) * GAME_CONFIG.combo.bonusPerWin, GAME_CONFIG.combo.maximumBonus) * (window.TempleStore?.modifiers().comboMultiplier || 1);
  const pathPending = matchActive && !runState.pathChoice;
  comboCountOutput.textContent = `✦ ×${runState.combo}`;
  comboBonusOutput.textContent = `BONO +${(comboBonusRate * 100).toLocaleString("es-ES", { maximumFractionDigits: 1 })}%`;
  const activeEvent = runState.activeEvent;
  eventPanel.classList.toggle("is-active", Boolean(activeEvent));
  eventIconOutput.textContent = activeEvent?.icon ?? "⚡";
  eventNameOutput.textContent = activeEvent?.name ?? "SIN EVENTO";
  eventEffectOutput.textContent = activeEvent?.effect ?? "Puede activarse al girar";
  eventDurationOutput.textContent = activeEvent ? `${runState.eventSpinsRemaining} GIROS` : "--";
  const destiny = runState.activeDestiny;
  const destinyResult = destiny ?? runState.destinyWheelResult;
  destinyWheelButton.disabled = !matchActive || isSpinning || pathPending || runState.destinyWheelUsed;
  destinyWheelButton.textContent = runState.destinyWheelUsed ? "USADA" : "GIRAR RUEDA";
  destinyWheelMark.textContent = destinyResult?.icon ?? "◉";
  destinyWheelStatus.textContent = destiny
    ? `${destiny.name} · ${destiny.spinsRemaining} GIROS`
    : runState.destinyWheelUsed ? "EL DESTINO YA HABLÓ" : "UNA TIRADA POR PARTIDA";
  destinyWheelPanel.classList.toggle("is-fortuna", destinyResult?.id === "fortuna-favor");
  destinyWheelPanel.classList.toggle("is-nemesis", destinyResult?.id === "nemesis-curse");
  const pathChoice = runState.pathChoice;
  pathRunStatus.classList.toggle("is-fortuna", pathChoice === "fortuna");
  pathRunStatus.classList.toggle("is-nemesis", pathChoice === "nemesis");
  pathRunName.textContent = pathChoice
    ? pathChoice === "fortuna" ? "FORTUNA" : "NÉMESIS"
    : "PENDIENTE";
  pathRunEffect.textContent = !pathChoice
    ? "Elige tu sendero para comenzar"
    : runState.pathSpinsRemaining > 0
      ? `${runState.pathSpinsRemaining} GIROS · ${pathChoice === "fortuna"
        ? `+${Math.round(GAME_CONFIG.paths.fortuneBonusRate * 100)}% PREMIOS`
        : `${Math.round(GAME_CONFIG.paths.nemesisBonusRate * 100)}% · +${GAME_CONFIG.paths.nemesisGemReward} GEMAS AL FINAL`}`
      : pathChoice === "nemesis" ? "RUTA COMPLETADA · RECOMPENSA RECIBIDA" : "RUTA COMPLETADA";
  updateProgressHud();
  renderActivePower();
  updateBonusReelPanel();
  renderRecoveryPanel();
}

function spinDestinyWheel() {
  if (!matchActive || isSpinning || !runState.pathChoice || !recoveryModal.hidden || !godModal.hidden || !bossVictoryModal.hidden || destinyWheelIsSpinning || runState.destinyWheelUsed) return;
  destinyModal.hidden = false;
  destinyWheelResult.textContent = "La rueda utiliza solo recursos virtuales.";
  destinyWheelSpinButton.disabled = false;
  destinyWheelSpinButton.textContent = "GIRAR RUEDA";
  destinyWheelDisc.style.transition = "none";
  destinyWheelDisc.style.transform = "rotate(0deg)";
  void destinyWheelDisc.getBoundingClientRect();
  renderDestinyWheel();
  destinyWheelCloseButton.focus();
}

function renderDestinyWheel() {
  if (!destinyWheelDisc) return;
  const outcomes = GAME_CONFIG.destinyWheel.outcomes;
  const totalWeight = outcomes.reduce((total, outcome) => total + outcome.weight, 0);
  const colors = {
    "fortuna-favor": { fill: "#9a711f", stroke: "#ffe17d", label: "FORTUNA" },
    "nemesis-curse": { fill: "#55245f", stroke: "#d8a5ff", label: "NÉMESIS" },
    "free-spins": { fill: "#126a77", stroke: "#8ffcff", label: "TIRADAS" },
    "gem-gift": { fill: "#28589a", stroke: "#a6d8ff", label: "GEMAS" }
  };
  destinyWheelDisc.replaceChildren();
  destinyWheelLegend.replaceChildren();
  let angle = -90;
  outcomes.forEach((outcome) => {
    const sweep = outcome.weight / totalWeight * 360;
    const endAngle = angle + sweep;
    const radians = (degree) => degree * Math.PI / 180;
    const point = (degree, radius) => [160 + radius * Math.cos(radians(degree)), 160 + radius * Math.sin(radians(degree))];
    const [startX, startY] = point(angle, 151);
    const [endX, endY] = point(endAngle, 151);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M 160 160 L ${startX} ${startY} A 151 151 0 ${sweep > 180 ? 1 : 0} 1 ${endX} ${endY} Z`);
    path.setAttribute("fill", colors[outcome.id].fill);
    path.setAttribute("stroke", colors[outcome.id].stroke);
    path.setAttribute("stroke-width", "2");
    path.setAttribute("class", `destiny-sector destiny-sector--${outcome.id}`);
    destinyWheelDisc.append(path);
    const midpoint = angle + sweep / 2;
    const [iconX, iconY] = point(midpoint, 122);
    const sectorIcon = document.createElementNS("http://www.w3.org/2000/svg", "image");
    const sectorAssets = { "fortuna-favor": "assets/icons/fortuna.svg", "nemesis-curse": "assets/icons/nemesis.svg", "free-spins": "assets/symbols/star.svg", "gem-gift": "assets/symbols/diamond.svg" };
    sectorIcon.setAttribute("href", sectorAssets[outcome.id]);
    sectorIcon.setAttribute("x", String(iconX - 14));
    sectorIcon.setAttribute("y", String(iconY - 14));
    sectorIcon.setAttribute("width", "28");
    sectorIcon.setAttribute("height", "28");
    destinyWheelDisc.append(sectorIcon);
    const [labelX, labelY] = point(midpoint, 82);
    const labelAngle = ((midpoint + 90) % 360 + 360) % 360;
    const uprightAngle = labelAngle > 90 && labelAngle < 270 ? labelAngle + 180 : labelAngle;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", String(labelX));
    text.setAttribute("y", String(labelY));
    text.setAttribute("transform", `rotate(${uprightAngle} ${labelX} ${labelY})`);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("class", "destiny-sector-label");
    text.textContent = colors[outcome.id].label;
    destinyWheelDisc.append(text);
    const legendItem = document.createElement("li");
    legendItem.className = `destiny-wheel-legend__item destiny-wheel-legend__item--${outcome.id}`;
    const legendName = document.createElement("span");
    const legendWeight = document.createElement("strong");
    legendName.textContent = outcome.name;
    legendWeight.textContent = `${Math.round(outcome.weight / totalWeight * 100)}%`;
    legendItem.append(legendName, legendWeight);
    destinyWheelLegend.append(legendItem);
    angle = endAngle;
  });
}

async function resolveDestinyWheelSpin() {
  if (!matchActive || isSpinning || !runState.pathChoice || destinyWheelIsSpinning || runState.destinyWheelUsed) return;
  const outcomes = GAME_CONFIG.destinyWheel.outcomes;
  const totalWeight = outcomes.reduce((total, outcome) => total + outcome.weight, 0);
  let selection = Math.random() * totalWeight;
  const outcome = outcomes.find((item) => {
    selection -= item.weight;
    return selection < 0;
  }) ?? outcomes.at(-1);
  destinyWheelIsSpinning = true;
  destinyWheelSpinButton.disabled = true;
  destinyWheelCloseButton.disabled = true;
  destinyModalDialog.focus();
  const outcomeStart = outcomes.slice(0, outcomes.indexOf(outcome)).reduce((total, item) => total + item.weight, 0) / totalWeight * 360;
  const outcomeSweep = outcome.weight / totalWeight * 360;
  const landingAngle = outcomeStart + Math.random() * outcomeSweep;
  const finalAngle = 360 * 6 + (360 - landingAngle) % 360;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = prefersReducedMotion ? 0 : 4200;
  destinyWheelDisc.style.transition = prefersReducedMotion ? "none" : `transform ${duration}ms cubic-bezier(.12,.76,.18,1)`;
  destinyWheelDisc.style.transform = `rotate(${finalAngle}deg)`;
  await new Promise((resolve) => window.setTimeout(resolve, duration + 100));
  destinyWheelIsSpinning = false;
  if (!matchActive) {
    destinyWheelCloseButton.disabled = false;
    destinyModal.hidden = true;
    return;
  }
  destinyWheelCloseButton.disabled = false;
  runState.destinyWheelUsed = true;
  runState.destinyWheelResult = { id: outcome.id, name: outcome.name, icon: outcome.icon };
  if (outcome.spins) runState.activeDestiny = { ...outcome, spinsRemaining: outcome.spins };
  if (outcome.freeSpins) {
    freeSpins += outcome.freeSpins;
    runState.freeSpins = freeSpins;
  }
  if (outcome.gems) grantGems(outcome.gems);
  destinyWheelSpinButton.textContent = "RUEDA USADA";
  destinyWheelResult.textContent = `${outcome.name} · ${outcome.description}`;
  const cinematicTheme = outcome.id === "nemesis-curse" ? "nemesis" : outcome.id === "fortuna-favor" ? "fortuna" : "destiny";
  playTempleCinematic(outcome.id === "nemesis-curse" ? "nemesis-watches" : outcome.id === "fortuna-favor" ? "fortuna-awakened" : "destiny-chosen", {
    title: "LA RUEDA HA ELEGIDO",
    description: `${outcome.name} · ${outcome.description}`,
    theme: cinematicTheme
  });
  renderRunHud();
  showToast(`${outcome.name} · ${outcome.description}`);
  saveArcadeProgress();
}

function closeDestinyWheel() {
  if (destinyWheelIsSpinning || destinyModal.hidden) return;
  destinyModal.hidden = true;
  (destinyWheelButton.disabled ? spinButton : destinyWheelButton).focus();
}

function finishDestinySpin() {
  const destiny = runState.activeDestiny;
  if (!destiny) return;
  destiny.spinsRemaining -= 1;
  if (destiny.spinsRemaining <= 0) {
    showToast(`${destiny.name}: EFECTO TERMINADO`);
    runState.activeDestiny = null;
  }
}

function startRunEventIfNeeded() {
  if (runState.activeEvent || Math.random() >= GAME_CONFIG.events.triggerChance) return;
  const totalWeight = GAME_CONFIG.events.selectionWeights.reduce((total, entry) => total + entry.weight, 0);
  let selection = Math.random() * totalWeight;
  const selected = GAME_CONFIG.events.selectionWeights.find((entry) => {
    selection -= entry.weight;
    return selection < 0;
  }) ?? GAME_CONFIG.events.selectionWeights.at(-1);
  runState.activeEvent = { ...GAME_CONFIG.events.definitions[selected.id] };
  runState.eventSpinsRemaining = runState.activeEvent.duration;
  if (runState.activeEvent.id === "wild-storm") playTempleCinematic("nemesis-watches", { description: "WILD STORM · Probabilidades visibles en la tabla" });
  else if (runState.activeEvent.id === "diamond-rain") playTempleCinematic("fortuna-awakened", { description: "LLUVIA DE DIAMANTES · +25% a diamantes" });
  else playTempleCinematic("temple-event", { description: `${runState.activeEvent.name} · ${runState.activeEvent.effect}` });
  renderRunHud();
  showToast(`EVENTO: ${runState.activeEvent.name} · ${runState.activeEvent.duration} TIRADAS`);
}

function finishRunEventSpin() {
  let eventCompleted = false;
  if (runState.activeEvent) {
    runState.eventSpinsRemaining -= 1;
    if (runState.eventSpinsRemaining <= 0) {
      const eventName = runState.activeEvent.name;
      runState.activeEvent = null;
      runState.eventSpinsRemaining = 0;
      eventCompleted = true;
      showToast(`${eventName}: EVENTO TERMINADO`);
    }
  }
  renderRunHud();
  return eventCompleted;
}

function finishRunPowerSpin(activePowerAtStart) {
  if (!activePowerAtStart || runState.activePower !== activePowerAtStart) return;
  runState.activePower.spinsRemaining -= 1;
  if (runState.activePower.spinsRemaining <= 0) {
    showToast(`${runState.activePower.name}: PODER TERMINADO`);
    runState.activePower = null;
  }
  renderActivePower();
}

function getSpinBonusRate(centerLine, payout, templeModifiers = window.TempleStore?.modifiers() || {comboMultiplier:1}) {
  const comboBonus = Math.min(Math.max(0, runState.combo - 1) * GAME_CONFIG.combo.bonusPerWin, GAME_CONFIG.combo.maximumBonus) * templeModifiers.comboMultiplier;
  const event = runState.activeEvent;
  let eventBonus = 0;
  if (event?.diamondBonus && payout.winningSymbol?.name === "diamantes") eventBonus += event.diamondBonus;
  if (event?.fireBonus && (payout.winningSymbol?.name === "llamas" || payout.fireWild)) eventBonus += event.fireBonus;
  if (event?.multiplierBonus && payout.multiplier > 0) eventBonus += event.multiplierBonus;
  if (runState.activePower?.id === "overdrive" && payout.multiplier > 0) eventBonus += GAME_CONFIG.bonus.overdriveBonus;
  if (payout.multiplier > 0 && runState.activeDestiny?.bonusRate) eventBonus += runState.activeDestiny.bonusRate;
  if (payout.multiplier > 0 && runState.pathChoice === "fortuna" && runState.pathSpinsRemaining > 0) eventBonus += GAME_CONFIG.paths.fortuneBonusRate;
  if (payout.multiplier > 0 && runState.pathChoice === "nemesis" && runState.pathSpinsRemaining > 0) eventBonus += GAME_CONFIG.paths.nemesisBonusRate;
  const fireWildBonus = payout.multiplier > 0 && payout.fireWild ? GAME_CONFIG.wilds.fireWinBonus : 0;
  return comboBonus + eventBonus + fireWildBonus;
}

function chooseSymbol() {
  const probabilities = runState.activeEvent?.wildStorm
    ? GAME_CONFIG.wilds.probabilities.storm
    : GAME_CONFIG.wilds.probabilities.normal;
  const roll = Math.random();
  if (roll < probabilities.wild) return GAME_CONFIG.wilds.symbols[0];
  if (roll < probabilities.wild + probabilities.fire) return GAME_CONFIG.wilds.symbols[1];
  if (roll < probabilities.wild + probabilities.fire + probabilities.multi) return GAME_CONFIG.wilds.symbols[2];
  return activeSymbols[Math.floor(Math.random() * activeSymbols.length)];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2500);
}

function playTempleCinematic(eventId, options = {}) {
  const event = TEMPLE_CINEMATICS[eventId] ?? TEMPLE_CINEMATICS["temple-event"];
  showTempleEvent(options.title ?? event.title, options.description ?? event.caption ?? "El templo responde a tus decisiones.", options.theme ?? event.theme, eventId);
}

function showTempleEvent(title, description, theme = "fortuna", eventId = "temple-event") {
  if (theme === "fortuna" || theme === "nemesis") GodUI.applyTheme(theme);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  templeTransition.replaceChildren();
  templeTransition.dataset.eventId = eventId;
  templeTransition.dataset.theme = theme;
  templeTransition.classList.toggle("is-nemesis", theme === "nemesis");
  templeTransition.classList.toggle("is-destiny", theme === "destiny");
  const icon = document.createElement("img");
  icon.src = `assets/icons/${theme === "nemesis" ? "nemesis" : theme === "destiny" ? "destiny-wheel" : "fortuna"}.svg`;
  icon.alt = "";
  icon.width = 56;
  icon.height = 56;
  const heading = document.createElement("strong");
  heading.textContent = title;
  const caption = document.createElement("small");
  caption.textContent = description;
  const particles = document.createElement("span");
  particles.className = "temple-particles";
  particles.setAttribute("aria-hidden", "true");
  for (let index = 0; index < 10; index += 1) {
    const particle = document.createElement("i");
    const particleDistance = 110 + (index % 3) * 45;
    particle.style.setProperty("--particle-angle", `${index * 36}deg`);
    particle.style.setProperty("--particle-distance", `${particleDistance}px`);
    particle.style.setProperty("--particle-midpoint", `${Math.round(particleDistance * 0.68)}px`);
    particle.style.setProperty("--particle-delay", `${(index % 5) * 35}ms`);
    particles.append(particle);
  }
  templeTransition.append(particles, icon, heading, caption);
  templeTransition.hidden = false;
  window.clearTimeout(GodUI.transitionTimer);
  const duration = reducedMotion ? 120 : 1200;
  GodUI.transitionTimer = window.setTimeout(() => {
    templeTransition.hidden = true;
    templeTransition.classList.remove("is-nemesis", "is-destiny");
    templeTransition.removeAttribute("data-event-id");
    templeTransition.removeAttribute("data-theme");
    GodUI.applyTheme(runState.pathChoice === "nemesis" || machineState.currentMachine === "dark-ritual" ? "nemesis" : "fortuna");
  }, duration);
  if (soundEnabled) {
    const notes = theme === "nemesis" ? [220, 164] : theme === "destiny" ? [440, 660] : [660, 880];
    playTone(notes[0], 0.25, "triangle", 0.04);
    window.setTimeout(() => playTone(notes[1], 0.3, "sine", 0.035), reducedMotion ? 20 : 90);
  }
}

function playTone(frequency, duration = 0.12, type = "sine", volume = 0.045) {
  if (!soundEnabled || document.hidden || pauseStartedAt) return;
  audioContext ??= new window.AudioContext();
  if (audioContext.state === "suspended") void audioContext.resume();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const profile = getMachineThemeProfile(machineState.currentMachine);
  const boost = profile.background === "machine-neon-words" ? 1.06 : profile.background === "machine-dark-ritual" ? 0.92 : 1.14;
  oscillator.type = type;
  oscillator.frequency.value = frequency * boost;
  gain.gain.setValueAtTime(volume, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

function playKick() {
  if (!soundEnabled || !audioContext) return;
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(145, now);
  oscillator.frequency.exponentialRampToValueAtTime(48, now + 0.16);
  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.19);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.2);
}

function playPercussion(kind) {
  if (!soundEnabled || !audioContext) return;
  if (!noiseBuffer) {
    noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.25, audioContext.sampleRate);
    const samples = noiseBuffer.getChannelData(0);
    for (let index = 0; index < samples.length; index += 1) {
      samples[index] = Math.random() * 2 - 1;
    }
  }

  const now = audioContext.currentTime;
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const isHat = kind === "hat";
  source.buffer = noiseBuffer;
  filter.type = isHat ? "highpass" : "bandpass";
  filter.frequency.value = isHat ? 7200 : 1900;
  filter.Q.value = isHat ? 0.7 : 0.8;
  gain.gain.setValueAtTime(isHat ? 0.012 : 0.035, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + (isHat ? 0.035 : 0.11));
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);
  source.start(now);
  source.stop(now + (isHat ? 0.04 : 0.12));
}

function startBackgroundMusic() { window.EpicAudio?.start(); }

function playReelSpinSound(index, duration) {
  if (!soundEnabled) return;
  const startedAt = performance.now();
  const profile = getMachineThemeProfile(machineState.currentMachine);
  const offset = profile.background === "machine-dark-ritual" ? 28 : profile.background === "machine-neon-words" ? 52 : 14;
  const tick = () => {
    if (!soundEnabled) return;
    const progress = Math.min(1, (performance.now() - startedAt) / duration);
    if (progress >= 1) {
      playTone(118 + index * 26 + offset, 0.18, "sine", 0.065);
      playTone(520 + index * 95 + offset, 0.08, "triangle", 0.024);
      return;
    }
    const frequency = 330 - index * 38 - progress * 105 + Math.sin(progress * 70) * 16 + offset;
    playTone(frequency, 0.035, "triangle", 0.02);
    window.setTimeout(tick, 48 + progress * progress * 155);
  };
  tick();
}

function renderSymbolIcon(element, symbol) {
  const prefix = `symbol-${iconInstance++}`;
  element.dataset.symbolIndex = String(activeSymbols.indexOf(symbol));
  element.dataset.wildKind = symbol.kind ?? "";
  element.classList.remove("symbol--emoji");
  const iconMarkup = (darkMode && !letterMode ? window.DarkSymbolArt?.[symbol.name] : undefined) ?? window.SymbolArt?.[symbol.name] ?? symbol.svg;
  element.dataset.symbolName = symbol.name;
  element.innerHTML = iconMarkup
    .replace(/id="([^"]+)"/g, (_, id) => `id="${prefix}-${id}"`)
    .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${prefix}-${id})`);
  element.setAttribute("aria-label", symbol.name);
}

function renderPaytable() {
  const jackpotLabel = letterMode ? "N · E · O · N" : darkMode ? "TRIPLE LLAMA" : "TRIPLE 7";
  document.querySelector(".jackpot-badge b").textContent = jackpotLabel;
  document.querySelector(".jackpot-badge").setAttribute("aria-label", `Premio especial: ${jackpotLabel}`);
  paytableRows.forEach((row, rowIndex) => {
    const container = row.querySelector(".pay-symbol");
    const pair = container.dataset.anyPair === "true";
    const word = Boolean(container.dataset.word);
    const classicPaytableOrder = [5, 4, 3, 2, 0, 1];
    const symbolIndex = word
      ? 0
      : pair
        ? letterMode ? 1 : 3
        : letterMode ? rowIndex : classicPaytableOrder[rowIndex];
    const symbol = activeSymbols[symbolIndex];
    row.hidden = word && !letterMode;
    container.replaceChildren();
    container.dataset.symbolIndex = String(symbolIndex);
    if (word) {
      ["N", "E", "O", "N"].forEach((letter) => {
        const icon = document.createElement("span");
        icon.className = "pay-symbol-icon";
        renderSymbolIcon(icon, letterSymbols.find(({ name }) => name === letter));
        container.append(icon);
      });
    } else {
      const count = pair ? 2 : letterMode ? 4 : Number(container.dataset.count || 3);
      for (let index = 0; index < count; index += 1) {
        const icon = document.createElement("span");
        icon.className = "pay-symbol-icon";
        renderSymbolIcon(icon, symbol);
        container.append(icon);
      }
    }
    if (pair) {
      const marker = document.createElement("span");
      marker.className = "pair-marker";
      marker.textContent = "×2";
      container.append(marker);
    }
    const name = row.querySelector(".pay-name");
    const multiplier = row.querySelector("strong");
    if (word) {
      name.textContent = "PALABRA NEON";
      multiplier.textContent = "× 50";
    } else {
      name.replaceChildren(document.createTextNode(pair
        ? "CUALQUIER PAREJA"
        : letterMode ? `4 IGUALES · ${symbol.name}` : symbol.name.toUpperCase()));
      multiplier.textContent = pair ? "× 2" : `× ${symbol.multiplier}`;
    }
    if (!pair && !word) {
      const bonus = document.createElement("small");
      bonus.className = "pay-power";
      bonus.textContent = `+${powerFreeSpins[symbolIndex]} GRATIS`;
      name.append(bonus);
    }
  });
  paytableCopy.textContent = letterMode
    ? "Forma NEON o reúne letras iguales en los cuatro rodillos."
    : "Tres iguales pagan y pueden activar tiradas gratis.";
  powerRule.textContent = letterMode
    ? "PODERES: NEON = 7 GRATIS · 4 IGUALES = 1–7 GRATIS"
    : `TRIPLES GRATIS: ${activeSymbols.map((symbol, index) => `${symbol.icon} +${powerFreeSpins[index]}`).join(" · ")}`;
}

function initializeSymbolIcons() {
  document.querySelectorAll(".reel-column .symbol").forEach((element) => {
    const symbol = symbols.find(({ icon }) => icon === element.textContent.trim());
    if (symbol) renderSymbolIcon(element, symbol);
  });
  renderPaytable();
}

function applyTheme(useDarkMode) {
  darkMode = useDarkMode;
  activeSymbols = currentSymbolSet();
  machineState.currentMachine = letterMode ? "neon-words" : darkMode ? "dark-ritual" : "neon-salvaje";
  if (soundEnabled) startBackgroundMusic();
  document.body.classList.toggle("theme-dark", darkMode);
  activeReels().forEach((reel) => {
    const visibleSymbols = [...reel.querySelectorAll(".symbol")].slice(0, 3).map((element) => {
      const wildSymbol = GAME_CONFIG.wilds.symbols.find(({ kind }) => kind === element.dataset.wildKind);
      if (wildSymbol) return wildSymbol;
      const symbolIndex = Number(element.dataset.symbolIndex);
      return activeSymbols[symbolIndex] ?? chooseSymbol();
    });
    if (visibleSymbols.length === 3) setReelSymbols(reel, visibleSymbols, 1);
  });
  renderPaytable();
  renderRunHud();
  updateMachineControl();
  renderCollectionAndStats();
  saveArcadeProgress();
}

function applyGameMode(useLetterMode) {
  letterMode = useLetterMode;
  activeSymbols = currentSymbolSet();
  machineState.currentMachine = letterMode ? "neon-words" : darkMode ? "dark-ritual" : "neon-salvaje";
  document.body.classList.toggle("theme-letters", letterMode);
  document.querySelector("#game-title span").textContent = letterMode ? "LETRAS" : "SALVAJE";
  document.querySelector(".jackpot-badge").setAttribute("aria-label", letterMode ? "Premio especial: palabra NEON" : "Premio especial: triple siete");
  document.querySelector(".jackpot-badge small").textContent = letterMode ? "PALABRA ESPECIAL" : "COMBO ESTRELLA";
  document.querySelector(".jackpot-badge b").textContent = letterMode ? "N · E · O · N" : "TRIPLE 7";
  activeReels().forEach((reel) => {
    setReelSymbols(reel, Array.from({ length: 3 }, chooseSymbol), 1);
    reel.classList.remove("is-winner", "is-stopped");
  });
  allReels.filter((_, index) => index >= activeReels().length).forEach((reel) => {
    reel.classList.remove("is-winner", "is-stopped", "is-spinning", "is-braking");
  });
  renderPaytable();
  resultBar.classList.remove("is-win");
  resultIcon.textContent = "✦";
  resultMessage.textContent = letterMode ? "FORMA LA PALABRA NEON" : "¿LISTA PARA GIRAR?";
  winAmount.textContent = "";
  renderRunHud();
  updateMachineControl();
  renderCollectionAndStats();
  saveArcadeProgress();
  updateControls();
}

function setReelSymbols(reel, displayed, landingIndex = -1) {
  const strip = reel.querySelector(".reel-strip");
  strip.replaceChildren(...displayed.map((symbol, index) => {
    const element = document.createElement("div");
    element.className = `symbol${index === landingIndex ? " symbol--landing" : ""}`;
    renderSymbolIcon(element, symbol);
    return element;
  }));
}

function moveReelTo(strip, row, rowHeight, duration, easing) {
  return new Promise((resolve) => {
    let fallback;
    const finish = (event) => {
      if (event && (event.target !== strip || event.propertyName !== "transform")) return;
      window.clearTimeout(fallback);
      strip.removeEventListener("transitionend", finish);
      resolve();
    };

    strip.addEventListener("transitionend", finish);
    fallback = window.setTimeout(finish, duration + 120);
    window.setTimeout(() => {
      strip.style.transition = `transform ${duration}ms ${easing}`;
      strip.style.transform = `translateY(-${rowHeight * row}px)`;
    }, 0);
  });
}

async function startReelSpin(reel, resultSymbol, index) {
  const rowsBeforeBrake = scrollingRows + index * scrollingRowStagger;
  const teaseRows = Array.from({ length: brakeRows }, chooseSymbol);
  const finalRows = [chooseSymbol(), resultSymbol, chooseSymbol()];
  const strip = reel.querySelector(".reel-strip");
  setReelSymbols(reel, [...Array.from({ length: rowsBeforeBrake }, chooseSymbol), ...teaseRows, ...finalRows], rowsBeforeBrake + brakeRows + 1);
  const rowHeight = reel.clientHeight / 3;
  const duration = spinDuration + settleDuration + index * spinStagger;
  playReelSpinSound(index, duration);
  strip.style.transition = "none";
  strip.style.transform = "translateY(0)";
  strip.getBoundingClientRect();

  const braking = window.setTimeout(() => {
    reel.classList.remove("is-spinning");
    reel.classList.add("is-braking");
  }, Math.max(0, duration - 1200));
  await moveReelTo(strip, rowsBeforeBrake + brakeRows, rowHeight, duration, "cubic-bezier(.12, .72, .18, 1)");
  window.clearTimeout(braking);
  reel.classList.remove("is-spinning", "is-braking");
  reel.classList.add("is-stopped");
  return finalRows;
}

function getPayout(centerLine) {
  const exactNeon = letterMode && centerLine.map(({ name, kind }) => kind ? "" : name).join("") === "NEON";
  if (exactNeon) {
    return { multiplier: 50, label: "NEON", jackpot: true, matchCount: 4, winningSymbol: letterSymbols[0], fireWild: false };
  }

  const candidates = activeSymbols.map((symbol) => ({
    winningSymbol: symbol,
    matchCount: Math.min(activeReels().length, centerLine.reduce((total, item) => {
      if (item.name === symbol.name) return total + 1;
      if (item.kind === "multi") return total + GAME_CONFIG.wilds.multiMatchCount;
      if (item.kind === "wild" || item.kind === "fire") return total + 1;
      return total;
    }, 0))
  })).sort((first, second) => second.matchCount - first.matchCount || second.winningSymbol.multiplier - first.winningSymbol.multiplier);
  const best = candidates[0];
  const fireWild = centerLine.some(({ kind }) => kind === "fire");
  const losingResult = { multiplier: 0, label: "sin premio", jackpot: false, matchCount: best?.matchCount ?? 0, winningSymbol: best?.winningSymbol, fireWild };

  if (!best || best.matchCount < 2) return losingResult;
  if (letterMode) {
    if (best.matchCount === 4) return { multiplier: best.winningSymbol.multiplier, label: `cuatro ${best.winningSymbol.name}`, jackpot: false, ...best, fireWild };
    if (best.matchCount === 3) return { multiplier: 5, label: `triple ${best.winningSymbol.name}`, jackpot: false, ...best, fireWild };
    return { multiplier: 2, label: "pareja", jackpot: false, ...best, fireWild };
  }
  if (best.matchCount >= activeReels().length) {
    return {
      multiplier: best.winningSymbol.multiplier,
      label: best.winningSymbol.name,
      jackpot: best.winningSymbol.name === "triple siete" || (darkMode && best.winningSymbol.multiplier === 50),
      ...best,
      fireWild
    };
  }
  return { multiplier: 2, label: "pareja", jackpot: false, ...best, fireWild };
}

function getFreeSpinAward(centerLine, payout = getPayout(centerLine)) {
  if (letterMode && payout.jackpot && payout.label === "NEON") return 7;
  if (payout.matchCount < activeReels().length || !payout.winningSymbol) return 0;
  const symbolIndex = activeSymbols.findIndex(({ name }) => name === payout.winningSymbol.name);
  return powerFreeSpins[symbolIndex] ?? 0;
}

function renderHistory() {
  historyCount.textContent = `${history.length} / 5`;
  if (!history.length) {
    historyList.innerHTML = '<li class="history-empty">Tu suerte empieza ahora <span aria-hidden="true">↗</span></li>';
    return;
  }
  historyList.replaceChildren(...history.map(({ centerLine: line, payout: result, prize: amount, wager, isFreeSpin, bonusSpins }) => {
    const item = document.createElement("li");
    const outcome = document.createElement("span");
    outcome.className = `history-outcome${amount ? "" : " is-loss"}`;
    outcome.setAttribute("aria-hidden", "true");
    line.forEach((symbol) => {
      const icon = document.createElement("span");
      icon.className = "history-symbol";
      renderSymbolIcon(icon, symbol);
      outcome.append(icon);
    });
    const detail = document.createElement("b");
    detail.textContent = isFreeSpin
      ? amount ? `GRATIS +${formatCredits(amount)}` : "GRATIS"
      : amount ? `+${formatCredits(amount)}` : `-${formatCredits(wager)}`;
    item.append(outcome, detail);
    item.setAttribute("aria-label", `${result.label}, ${isFreeSpin ? "tirada gratis, " : ""}apuesta ${wager}, ${amount ? `premio ${amount}` : "sin premio"}${bonusSpins ? `, ${bonusSpins} tiradas gratis ganadas` : ""}`);
    return item;
  }));
}

function addHistory(centerLine, payout, prize, wager, isFreeSpin, bonusSpins) {
  history.unshift({ centerLine, payout, prize, wager, isFreeSpin, bonusSpins });
  history.splice(5);
  renderHistory();
}

let characterAppearanceTimer;
let characterDispatchTimer;
let pendingCharacterAppearance = null;
let activeCharacterAppearance = null;
function characterDialogIsOpen() {
  return document.hidden || Boolean(pauseStartedAt) || [godModal, destinyModal, pathModal, recoveryModal, bonusModal, bossVictoryModal, templeTransition, document.querySelector("#mobile-pause"), document.querySelector("#game-tutorial")].some(element => element && !element.hidden);
}
function presentTempleCharacter(godId, reaction, kicker = "UN GUIÑO DEL TEMPLO") {
  if (!godProfiles[godId]) return;
  pendingCharacterAppearance = { godId, reaction, kicker };
  window.clearTimeout(characterDispatchTimer);
  characterDispatchTimer = window.setTimeout(dispatchCharacterAppearance, 60);
}
function dispatchCharacterAppearance() {
  if (!matchActive) { pendingCharacterAppearance = null; return; }
  if (characterDialogIsOpen()) {
    if (activeCharacterAppearance) {
      pendingCharacterAppearance ??= activeCharacterAppearance;
      activeCharacterAppearance = null;
      deityPresence.hidden = true;
      window.clearTimeout(characterAppearanceTimer);
      window.CharacterAudio?.stop();
    }
    return;
  }
  if (!pendingCharacterAppearance) return;
  const appearance = pendingCharacterAppearance;
  pendingCharacterAppearance = null;
  activeCharacterAppearance = appearance;
  showTempleCharacter(appearance.godId, appearance.reaction, appearance.kicker);
}
function showTempleCharacter(godId, reaction, kicker) {
  const profile = godProfiles[godId];
  if (!profile) return;
  deityPresence.dataset.theme = profile.theme ?? godId;
  deityPresence.dataset.character = godId;
  deityPresenceButton.dataset.god = godId;
  deityPresenceButton.setAttribute("aria-label", `Ver perfil de ${profile.name}. ${reaction}`);
  const portraitFrame = deityPresencePortrait.parentElement;
  portraitFrame.classList.toggle("has-roster-portrait", profile.portraitType === "roster");
  portraitFrame.style.setProperty("--roster-position", profile.rosterPosition ?? "0 0");
  setRosterArtwork(portraitFrame, profile);
  deityPresencePortrait.hidden = profile.portraitType === "roster";
  if (profile.portrait) deityPresencePortrait.src = profile.portrait;
  PantheonSystem.discover(`god-${godId}`);
  deityPresencePortrait.alt = "";
  deityPresenceKicker.textContent = kicker;
  deityPresenceName.textContent = profile.name;
  deityPresenceLine.textContent = reaction;
  window.clearTimeout(characterAppearanceTimer);
  deityPresence.hidden = false;
  deityPresence.classList.remove("is-arriving");
  void deityPresence.offsetWidth;
  deityPresence.classList.add("is-arriving");
  const appearanceDuration = 2400;
  deityPresence.style.setProperty("--appearance-duration", `${appearanceDuration}ms`);
  window.CharacterAudio?.play(godId);
  characterAppearanceTimer = window.setTimeout(() => { deityPresence.hidden = true; activeCharacterAppearance = null; window.CharacterAudio?.stop(); }, appearanceDuration);
}

function updatePantheonCharacter(centerLine, payout, prize) {
  const names = centerLine.map(({ name }) => name);
  const kinds = centerLine.map(({ kind }) => kind);
  const isLoss = payout.multiplier <= 0;
  const isTop = payout.jackpot || prize >= bet * 25;
  const characterBySymbol = isTop ? "destino" : kinds.includes("multi") ? "volta"
    : kinds.includes("fire") ? "ignis"
    : kinds.includes("wild") ? "nemesis"
    : names.includes("diamantes") ? "fortuna"
    : names.includes("estrellas") ? "astra"
    : names.includes("campanas") ? "aureo"
    : names.includes("triple siete") ? "forja"
    : names.includes("calaveras") || names.includes("muñecos vudú") ? "corvin"
    : names.includes("llamas") ? "ignis"
    : isLoss ? ["nemesis", "vesta", "corvin", "cristal", "destino", "noctis", "chrono"][Math.abs(round + names.join("").length) % 7]
    : ["fortuna", "aureo", "cristal", "astra", "volta", "solara", "chrono"][Math.abs(round + payout.multiplier) % 7];
  const profile = godProfiles[characterBySymbol] ?? godProfiles.fortuna;
  const mood = isTop ? "top" : kinds.some(Boolean) ? "wild" : isLoss ? "loss" : "win";
  const reaction = profile.moods[mood] ?? profile.moods[isLoss ? "loss" : "win"] ?? "El templo toma nota de tu tirada.";
  PantheonSystem.discover(`god-${profile.id}`);
  presentTempleCharacter(profile.id, reaction);
}

function renderRecoveryPanel() {
  const recovery = runState.recovery;
  recoveryPanel.hidden = !recovery?.available;
  if (!recovery?.available) return;
  const first = RECOVERY_WHEELS[1];
  const second = RECOVERY_WHEELS[2];
  recoveryWheelOneButton.disabled = recovery.firstResolved;
  recoveryWheelTwoButton.disabled = !recovery.firstResolved || recovery.secondResolved;
  recoveryCopy.textContent = recovery.firstResolved
    ? `La primera rueda no rescató la tirada. Puedes arriesgar una segunda: si falla, −${second.penalty} CR.`
    : `Primera rueda: si falla, −${first.penalty} CR. La segunda solo se desbloquea tras un fallo.`;
}

function offerRecoveryWheels() {
  runState.recovery = { available: true, firstResolved: false, secondResolved: false, currentWheel: 0 };
  renderRecoveryPanel();
  saveArcadeProgress();
}

function closeRecoveryWheel() {
  if (recoveryModal.dataset.spinning === "true") return;
  recoveryModal.hidden = true;
  renderRecoveryPanel();
  (recoveryPanel.hidden ? spinButton : recoveryPanel.querySelector("button:not(:disabled)"))?.focus();
}

function openRecoveryWheel(wheelNumber) {
  const recovery = runState.recovery;
  if (!matchActive || isSpinning || !recovery?.available) return;
  if (wheelNumber === 1 && recovery.firstResolved) return;
  if (wheelNumber === 2 && (!recovery.firstResolved || recovery.secondResolved)) return;
  const wheel = RECOVERY_WHEELS[wheelNumber];
  recovery.currentWheel = wheelNumber;
  recoveryModalTitle.textContent = wheel.label;
  const totalWeight = wheel.outcomes.reduce((sum, item) => sum + item.weight, 0);
  recoveryModalCopy.textContent = wheel.outcomes.map((item) => `${item.label}: ${Math.round(item.weight / totalWeight * 100)}%`).join(" · ");
  let cumulative = 0;
  const colors = ["#ffd34e", "#47e0df", "#ee4d78"];
  recoveryWheel.style.background = `conic-gradient(${wheel.outcomes.map((item, index) => { const start = cumulative; cumulative += item.weight / totalWeight * 100; return `${colors[index]} ${start}% ${cumulative}%`; }).join(",")})`;
  recoveryWheelResult.textContent = "Gira solo si quieres asumir este riesgo virtual.";
  recoveryWheel.style.transition = "none";
  recoveryWheel.style.transform = "rotate(0deg)";
  recoveryWheelSpinButton.disabled = false;
  recoveryWheelSpinButton.textContent = "GIRAR RUEDA";
  recoveryModal.dataset.spinning = "false";
  recoveryModal.hidden = false;
  recoveryWheelSpinButton.focus();
}

async function resolveRecoveryWheel() {
  const recovery = runState.recovery;
  const wheelNumber = recovery?.currentWheel;
  const wheel = RECOVERY_WHEELS[wheelNumber];
  if (!matchActive || !wheel || recoveryWheelSpinButton.disabled) return;
  const totalWeight = wheel.outcomes.reduce((total, outcome) => total + outcome.weight, 0);
  let roll = Math.random() * totalWeight;
  const outcome = wheel.outcomes.find((item) => { roll -= item.weight; return roll < 0; }) ?? wheel.outcomes.at(-1);
  recoveryWheelSpinButton.disabled = true;
  recoveryModal.dataset.spinning = "true";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reducedMotion ? 0 : 1500;
  recoveryWheel.style.transition = reducedMotion ? "none" : `transform ${duration}ms cubic-bezier(.14,.8,.18,1)`;
  const startWeight = wheel.outcomes.slice(0, wheel.outcomes.indexOf(outcome)).reduce((sum, item) => sum + item.weight, 0);
  const landingAngle = (startWeight + outcome.weight / 2) / totalWeight * 360;
  recoveryWheel.style.transform = `rotate(${1080 + 360 - landingAngle}deg)`;
  await new Promise((resolve) => window.setTimeout(resolve, duration + 80));
  recoveryModal.dataset.spinning = "false";
  if (!matchActive) return;
  const failed = outcome.id === "void";
  if (failed) {
    adjustGameCredits(-Math.min(balance, wheel.penalty), "recovery-penalty");
    recoveryWheelResult.textContent = `FALLO · −${wheel.penalty} CR virtuales. La siguiente tirada sigue siendo tu decisión.`;
    presentTempleCharacter(wheelNumber === 1 ? "vesta" : "corvin", wheelNumber === 1 ? "Mi sombrero tenía una opinión. No siempre tiene razón." : "El riesgo se ha cobrado su pequeña cuota. Nada personal.", "RUEDA DE RESCATE");
  } else if (outcome.credits) {
    adjustGameCredits(outcome.credits, "recovery-win");
    playerState.totalCreditsWon += outcome.credits;
    recoveryWheelResult.textContent = `RESCATE · +${outcome.credits} CR virtuales.`;
    presentTempleCharacter("fortuna", "¡Rescate conseguido! Hoy la rueda te ha guiñado un ojo.", "RUEDA DE RESCATE");
  } else if (outcome.gems) {
    grantGems(outcome.gems);
    recoveryWheelResult.textContent = `CHISPA DEL TEMPLO · +${outcome.gems} gema virtual.`;
    presentTempleCharacter("astra", "Una pequeña estrella para una gran remontada.", "RUEDA DE RESCATE");
  } else if (outcome.power) {
    runState.activePower = { id: outcome.power, name: "WILD POWER", spinsRemaining: GAME_CONFIG.bonus.powerDuration };
    recoveryWheelResult.textContent = "WILD POWER ACTIVO · 3 giros.";
    presentTempleCharacter("volta", "Energía extra. Procura no fundir el templo.", "RUEDA DE RESCATE");
  }
  if (wheelNumber === 1) recovery.firstResolved = true;
  else recovery.secondResolved = true;
  recovery.available = failed && wheelNumber === 1;
  recovery.currentWheel = 0;
  recoveryWheelSpinButton.textContent = "RESULTADO APLICADO";
  updateControls();
  renderRunHud();
  renderRecoveryPanel();
  saveArcadeProgress();
}

function showResult(centerLine, payout, prize, wager, isFreeSpin, bonusSpins) {
  currentSpinContext = { centerLine: [...centerLine], wager, payout, prize, bonusSpins, isFreeSpin };
  const hasWon = prize > 0;
  const winningSymbol = payout.winningSymbol ?? centerLine[0];
  const matchingCount = payout.matchCount ?? Math.max(...new Map(centerLine.map(({ name }) => [name, centerLine.filter((symbol) => symbol.name === name).length])).values());
  const triple = matchingCount >= activeReels().length;
  const grandWin = payout.jackpot || (triple && ["estrellas", "diamantes", "triple siete"].includes(winningSymbol.name));
  resultBar.classList.toggle("is-win", hasWon);
  machine.classList.toggle("is-jackpot", grandWin);
  const prizeRatio = prize / Math.max(1, wager);
  const prizeTier = prizeRatio >= 50 ? "top" : prizeRatio >= 15 ? "medium" : "basic";
  machine.classList.toggle("is-win-basic", hasWon && prizeTier === "basic");
  machine.classList.toggle("is-win-medium", hasWon && prizeTier === "medium");
  machine.classList.toggle("is-win-top", hasWon && prizeTier === "top");
  resultIcon.textContent = hasWon ? (payout.jackpot ? "✹" : "✦") : "↗";
  const message = hasWon
    ? payout.jackpot ? `¡${letterMode ? "NEON" : darkMode ? winningSymbol.name.toUpperCase() : "TRIPLE SIETE"}! NOCHE HISTÓRICA` : `¡${payout.label.toUpperCase()}! PREMIO CONSEGUIDO`
    : isFreeSpin ? "TIRADA GRATIS: SIN PREMIO. ¡OTRA VA!" : "SIN PREMIO ESTA VEZ. ¡OTRA VA!";
  resultMessage.textContent = bonusSpins ? `${message} · +${bonusSpins} GRATIS` : message;
  winAmount.textContent = hasWon ? `+${formatCredits(prize)} CR` : "";
  activeReels().forEach((reel) => reel.classList.toggle("is-winner", hasWon && matchingCount === centerLine.length));
  if (hasWon) {
    const pitch = prizeTier === "top" ? 1046 : prizeTier === "medium" ? 784 : 587;
    playTone(pitch, prizeTier === "top" ? 0.48 : prizeTier === "medium" ? 0.34 : 0.22, "triangle");
    if (prizeTier !== "basic") window.setTimeout(() => playTone(pitch * 1.25, 0.18, "sine"), 90);
  }
  window.TempleSpectacle?.result(hasWon, prizeRatio);
  if (grandWin && prizeTier !== "basic") {
    celebrate("jackpot", prizeTier);
  } else if (triple && prizeTier !== "basic") {
    celebrate("rockets", prizeTier);
  } else if (hasWon && prizeTier !== "basic") {
    celebrate("confetti", prizeTier);
  }
  addHistory(centerLine, payout, prize, wager, isFreeSpin, bonusSpins);
  updatePantheonCharacter(centerLine, payout, prize);
}

function celebrate(type, prizeTier) {
  window.clearTimeout(celebrationTimeout);
  celebrationLayer.replaceChildren();
  celebrationLayer.className = `celebration-layer celebration-layer--${type}`;
  const announcements = {
    basic: { label: "¡HURRA!", title: "WIN!!!" },
    medium: { label: "PREMIO MEDIO", title: "ESTAS ON FIRE!!!" },
    top: { label: "PREMIO MÁXIMO", title: "YOU ARE THE BEST!!!" }
  };
  const announcement = announcements[prizeTier];
  if (announcement) {
    const banner = document.createElement("div");
    const label = document.createElement("span");
    const title = document.createElement("strong");
    banner.className = `win-announcement win-announcement--${prizeTier}`;
    banner.setAttribute("aria-hidden", "true");
    label.textContent = announcement.label;
    title.textContent = announcement.title;
    banner.append(label, title);
    celebrationLayer.append(banner);
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    celebrationLayer.className = "celebration-layer";
    celebrationTimeout = window.setTimeout(() => celebrationLayer.replaceChildren(), 2300);
    return;
  }

  const confettiColors = ["#ff3b81", "#ffd43b", "#35e0d1", "#8b5cf6", "#64e34f", "#ff7a30"];
  const particleCount = type === "confetti" ? 72 : type === "rockets" ? 7 : 9;
  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    particle.className = type === "confetti"
      ? "celebration-confetti"
      : type === "rockets" ? "celebration-rocket" : "celebration-lightning";
    particle.style.setProperty("--position", `${Math.random() * 100}%`);
    particle.style.setProperty("--delay", `${Math.random() * (type === "confetti" ? 1.1 : 1.4)}s`);
    particle.style.setProperty("--duration", `${2.7 + Math.random() * 2.1}s`);
    if (type === "confetti") {
      particle.style.setProperty("--confetti-color", confettiColors[index % confettiColors.length]);
      particle.style.setProperty("--piece-size", `${7 + Math.random() * 9}px`);
      particle.style.setProperty("--sway", `${Math.round((Math.random() - 0.5) * 260)}px`);
      particle.style.setProperty("--spin", `${Math.round(Math.random() * 1440 - 720)}deg`);
    }
    if (type === "rockets") {
      const launch = 8 + Math.random() * 84;
      const drift = Math.round((Math.random() - 0.5) * 36);
      const flight = 1 + Math.random() * 0.55;
      const delay = index * 0.28;
      const rise = window.innerHeight * (0.3 + Math.random() * 0.42);
      const burst = document.createElement("span");
      const burstX = Math.min(96, Math.max(4, launch + drift));
      particle.style.setProperty("--drift", `${drift}vw`);
      particle.style.setProperty("--launch", `${launch}%`);
      particle.style.setProperty("--rise", `-${rise}px`);
      particle.style.setProperty("--flight", `${flight}s`);
      particle.style.setProperty("--delay", `${delay}s`);
      particle.style.setProperty("--firework-color", confettiColors[index % confettiColors.length]);
      burst.className = "celebration-burst";
      burst.style.setProperty("--burst-x", `${burstX}%`);
      burst.style.setProperty("--burst-y", `${Math.max(6, 100 - rise / window.innerHeight * 100)}%`);
      burst.style.setProperty("--burst-delay", `${delay + flight}s`);
      burst.style.setProperty("--firework-color", confettiColors[index % confettiColors.length]);
      for (let sparkIndex = 0; sparkIndex < 26; sparkIndex += 1) {
        const spark = document.createElement("i");
        spark.className = "firework-spark";
        spark.style.setProperty("--angle", `${sparkIndex * (360 / 26) + Math.random() * 8}deg`);
        spark.style.setProperty("--distance", `-${55 + Math.random() * 125}px`);
        spark.style.setProperty("--spark-color", confettiColors[(index + sparkIndex) % confettiColors.length]);
        burst.append(spark);
      }
      celebrationLayer.append(particle, burst);
    } else if (type === "jackpot") {
      particle.style.setProperty("--height", `${38 + Math.random() * 54}vh`);
      particle.style.setProperty("--tilt", `${Math.round(Math.random() * 48 - 24)}deg`);
    } else {
      particle.style.setProperty("--sway", `${Math.round((Math.random() - 0.5) * 180)}px`);
      particle.style.setProperty("--spin", `${Math.round(Math.random() * 900 - 450)}deg`);
    }
    if (type !== "rockets") celebrationLayer.append(particle);
  }

  celebrationTimeout = window.setTimeout(() => {
    celebrationLayer.className = "celebration-layer";
    celebrationLayer.replaceChildren();
  }, type === "jackpot" ? 6500 : type === "confetti" ? 6100 : 8500);
}

async function rerollBonusReel(reelIndex) {
  if (!matchActive || isSpinning || !currentSpinContext || !recoveryModal.hidden || !destinyModal.hidden) return;
  if (reelIndex < 0 || reelIndex >= currentSpinContext.centerLine.length) return;
  const bonusAvailable = freeSpins > 0 ? freeSpins : runState.pendingBonus;
  if (bonusAvailable <= 0) return;
  const reel = activeReels()[reelIndex];
  if (freeSpins > 0) freeSpins -= 1;
  else runState.pendingBonus = Math.max(0, runState.pendingBonus - 1);
  runState.freeSpins = freeSpins;
  currentSpinContext.centerLine[reelIndex] = chooseSymbol();
  const payout = getPayout(currentSpinContext.centerLine);
  const resultPrize = Math.max(0, Math.floor(currentSpinContext.wager * payout.multiplier * (window.TempleStore?.modifiers().winMultiplier || 1)));
  if (resultPrize > 0) {
    adjustGameCredits(resultPrize, "prize");
    playerState.totalCreditsWon += resultPrize;
    runState.wins += 1;
    playerState.totalWins += 1;
  }
  const symbol = currentSpinContext.centerLine[reelIndex];
  const strip = reel.querySelector(".reel-strip");
  strip.style.transition = "none";
  strip.style.transform = "translateY(0)";
  setReelSymbols(reel, [chooseSymbol(), symbol, chooseSymbol()], 1);
  if (resultPrize > 0) {
    resultBar.classList.add("is-win");
    resultIcon.textContent = "✦";
    resultMessage.textContent = `BONO: RODILLO ${reelIndex + 1} · ¡NUEVA OPORTUNIDAD!`;
    winAmount.textContent = `+${formatCredits(resultPrize)} CR`;
    showToast(`BONO RODILLO ${reelIndex + 1}: +${formatCredits(resultPrize)} CR`);
  } else {
    resultBar.classList.remove("is-win");
    resultIcon.textContent = "↗";
    resultMessage.textContent = `BONO: RODILLO ${reelIndex + 1} · SIN PREMIO, PERO SIGUES EN JUEGO`;
    winAmount.textContent = "";
    showToast(`BONO RODILLO ${reelIndex + 1}: SIGUE LA PARTIDA`);
  }
  currentSpinContext = null;
  updateControls();
  renderRunHud();
  saveArcadeProgress();
}

async function runSingleSpin(wager, isFreeSpin) {
  const templeModifiers = window.TempleStore?.modifiers() || {comboMultiplier:1,winMultiplier:1};
  window.clearTimeout(celebrationTimeout);
  celebrationLayer.className = "celebration-layer";
  celebrationLayer.replaceChildren();
  round += 1;
  roundCount.textContent = `TIRADA ${String(round).padStart(2, "0")}`;
  resultBar.classList.remove("is-win");
  machine.classList.remove("is-jackpot");
  machine.classList.remove("is-win-basic", "is-win-medium", "is-win-top");
  resultIcon.textContent = "✦";
  resultMessage.textContent = isFreeSpin ? "TIRADA GRATIS EN CURSO..." : "LOS RODILLOS ESTÁN GIRANDO...";
  winAmount.textContent = "";
  startRunEventIfNeeded();
  const activePowerAtStart = runState.activePower;
  const spinReels = activeReels();
  const centerLine = spinReels.map(() => chooseSymbol());
  if (["wild", "fire", "multi"].includes(activePowerAtStart?.id)) centerLine[0] = GAME_CONFIG.wilds.symbols.find(({ kind }) => kind === activePowerAtStart.id);
  if (luckEnabled && !getPayout(centerLine).multiplier && Math.random() < luckRescueProbability) {
    centerLine[2] = centerLine[0];
  }
  const discoveredSymbolIds = centerLine.map((symbol) => GodRegistry.entries.find((entry) => entry.category === "symbols" && entry.name === symbol.name.toUpperCase())?.id).filter(Boolean);
  PantheonSystem.discoverMany(discoveredSymbolIds);
  spinReels.forEach((reel, index) => {
    reel.classList.remove("is-winner", "is-stopped");
    reel.classList.add("is-spinning");
    playTone(220 + index * 65, 0.08, "square");
  });
  updateControls();

  const finalRows = await Promise.all(spinReels.map((reel, index) => startReelSpin(reel, centerLine[index], index)));
  spinReels.forEach((reel, index) => {
    const strip = reel.querySelector(".reel-strip");
    strip.style.transition = "none";
    strip.style.transform = "translateY(0)";
    setReelSymbols(reel, finalRows[index], 1);
    reel.classList.remove("is-spinning", "is-braking");
    reel.classList.add("is-stopped");
  });
  const payout = getPayout(centerLine);
  updateBossProgress(centerLine, payout);
  runState.spins += 1;
  playerState.totalSpins += 1;
  if (payout.multiplier > 0) {
    runState.wins += 1;
    runState.combo += 1;
    playerState.totalWins += 1;
    if (playerState.totalWins === 1) unlockAchievement("first-win");
    if (runState.combo >= 5) unlockAchievement("combo-five");
  } else {
    runState.losses += 1;
    runState.combo = 0;
  }
  runState.bestCombo = Math.max(runState.bestCombo, runState.combo);
  playerState.bestCombo = Math.max(playerState.bestCombo, runState.bestCombo);
  const basePrize = wager * payout.multiplier;
  const prize = Math.floor((basePrize + Math.floor(basePrize * getSpinBonusRate(centerLine, payout, templeModifiers))) * templeModifiers.winMultiplier);
  window.TempleStore?.react(prize > 0);
  finishDestinySpin();
  finishPathSpin();
  const bonusSpins = getFreeSpinAward(centerLine, payout);
  if (letterMode && payout.label === "NEON") unlockAchievement("neon-master");
  if (payout.jackpot) unlockAchievement("jackpot");
  adjustGameCredits(prize, "prize");
  playerState.totalCreditsWon += prize;
  freeSpins += bonusSpins;
  runState.freeSpins = freeSpins;
  showResult(centerLine, payout, prize, wager, isFreeSpin, bonusSpins);
  if (payout.multiplier <= 0 && !isFreeSpin) offerRecoveryWheels();
  const eventCompleted = finishRunEventSpin();
  finishRunPowerSpin(activePowerAtStart);
  const earnedXp = GAME_CONFIG.progression.xpPerSpin
    + (payout.multiplier > 0 ? GAME_CONFIG.progression.xpPerWin : 0)
    + Math.max(0, runState.combo - 1) * GAME_CONFIG.progression.xpPerCombo
    + (eventCompleted ? GAME_CONFIG.progression.xpPerEvent : 0);
  awardPlayerXp(earnedXp);
  runState.currentLevel = playerState.level;
  saveArcadeProgress();
  renderRunHud();
  renderBoss();
  renderCollectionAndStats();
  updateControls();
  if (bonusSpins >= GAME_CONFIG.bonus.minimumFreeSpins) {
    runState.pendingBonus = bonusSpins;
    saveArcadeProgress();
    await chooseBonusReward(bonusSpins);
  }
}

async function spin() {
  if (window.CreditShop?.isOpen() || !window.ProfileWallet.isReady() || !templeMapModal.hidden) return;
  if (!matchActive || isSpinning || !bossVictoryModal.hidden || !runState.pathChoice || !destinyModal.hidden || !pathModal.hidden || !recoveryModal.hidden || !godModal.hidden || window.GameTutorial?.isOpen) return;
  if (Date.now() >= matchEndsAt) {
    finishMatch("TIEMPO AGOTADO");
    return;
  }
  const wager = currentWager();
  const useFreeSpin = freeSpins > 0;
  const spinsToPlay = useFreeSpin ? 1 : selectedBatchSize;
  const totalCost = useFreeSpin ? 0 : wager * spinsToPlay;
  if (balance < totalCost) {
    showToast("No tienes créditos suficientes. Abre CRÉDITOS para conseguir más.");
    return;
  }

  if (runState.recovery?.available) {
    runState.recovery.available = false;
    runState.recovery.currentWheel = 0;
    renderRecoveryPanel();
  }

  isSpinning = true;
  updateControls();
  for (let spinIndex = 0; spinIndex < spinsToPlay; spinIndex += 1) {
    if (pauseStartedAt || document.hidden || !matchActive) break;
    if (Date.now() >= matchEndsAt) {
      matchFinishPending = true;
      break;
    }
    const isFreeSpin = useFreeSpin;
    lastSpinAt = Date.now();
    inactivityPenaltyCount = 0;
    if (isFreeSpin) freeSpins -= 1;
    else adjustGameCredits(-wager, "wager");
    updateControls();
    saveArcadeProgress();
    await runSingleSpin(wager, isFreeSpin);
    if (runState.recovery?.available) {
      selectedBatchSize = 1;
      break;
    }
    if (!bossVictoryModal.hidden) {
      selectedBatchSize = 1;
      break;
    }
    if (balance === 0 && freeSpins === 0) {
      matchFinishPending = true;
      break;
    }
  }
  isSpinning = false;
  updateControls();
  if (!pauseStartedAt && Date.now() >= matchEndsAt) matchFinishPending = true;
  if (!pauseStartedAt && matchFinishPending && bossVictoryModal.hidden) finishMatch(Date.now() >= matchEndsAt ? "TIEMPO AGOTADO" : "SIN CRÉDITOS");
}

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = playerNameInput.value.trim().replace(/\s+/g, " ").slice(0, 24);
  if (!name) {
    playerNameInput.setCustomValidity("Escribe tu nombre para empezar.");
    playerNameInput.reportValidity();
    return;
  }
  playerNameInput.setCustomValidity("");
  startMatch(name);
});
playerNameInput.addEventListener("input", () => playerNameInput.setCustomValidity(""));
godModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-god-close]")) GodUI.close();
});
document.addEventListener("keydown", (event) => {
  if (!templeMapModal.hidden && event.key === "Tab") {
    event.preventDefault();
    templeMapDialog.querySelector("[data-temple-map-close]")?.focus();
    return;
  }
  if (!templeMapModal.hidden && event.key === "Escape") {
    event.preventDefault();
    closeTempleMap();
    return;
  }
  if (!bossVictoryModal.hidden && event.key === "Tab") {
    event.preventDefault();
    bossVictoryContinue.focus();
    return;
  }
  if (!bossVictoryModal.hidden && event.key === "Escape") { event.preventDefault(); return; }
  if (!pathModal.hidden && event.key === "Tab") {
    const focusable = [pathFortunaButton, pathNemesisButton];
    if (event.shiftKey && document.activeElement === focusable[0]) {
      event.preventDefault();
      focusable.at(-1).focus();
    } else if (!event.shiftKey && document.activeElement === focusable.at(-1)) {
      event.preventDefault();
      focusable[0].focus();
    }
    return;
  }
  if (event.key === "Escape" && !pathModal.hidden) {
    event.preventDefault();
    return;
  }
  if (!destinyModal.hidden && event.key === "Tab") {
    const focusable = [destinyWheelCloseButton, destinyWheelSpinButton].filter((element) => !element.disabled);
    if (event.shiftKey && document.activeElement === focusable[0]) {
      event.preventDefault();
      focusable.at(-1).focus();
    } else if (!event.shiftKey && document.activeElement === focusable.at(-1)) {
      event.preventDefault();
      focusable[0].focus();
    }
    return;
  }
  if (event.key === "Escape" && !destinyModal.hidden) closeDestinyWheel();
  if (!recoveryModal.hidden && event.key === "Tab") {
    const focusable = [...recoveryModal.querySelectorAll("button")].filter((button) => !button.disabled);
    const index = focusable.indexOf(document.activeElement);
    event.preventDefault();
    focusable[(index + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length]?.focus();
  }
  if (event.key === "Escape" && !recoveryModal.hidden) closeRecoveryWheel();
  if (event.key === "Escape" && !godModal.hidden) GodUI.close();
});

document.querySelector("#bet-down").addEventListener("click", () => changeBet(-betStep));
document.querySelector("#bet-up").addEventListener("click", () => changeBet(betStep));
openTempleMapButton.addEventListener("click", openTempleMap);
templeMapModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-temple-map-close]") || event.target === templeMapModal.querySelector(".temple-map-modal__scrim")) closeTempleMap();
});
destinyWheelButton.addEventListener("click", spinDestinyWheel);
pathFortunaButton.addEventListener("click", () => chooseDestinyPath("fortuna"));
pathNemesisButton.addEventListener("click", () => chooseDestinyPath("nemesis"));
destinyWheelSpinButton.addEventListener("click", resolveDestinyWheelSpin);
destinyModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-destiny-close]")) closeDestinyWheel();
});
recoveryWheelOneButton.addEventListener("click", () => openRecoveryWheel(1));
recoveryWheelTwoButton.addEventListener("click", () => openRecoveryWheel(2));
recoveryWheelSpinButton.addEventListener("click", () => void resolveRecoveryWheel());
recoveryModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-recovery-close]")) closeRecoveryWheel();
});
deityPresenceButton.addEventListener("click", () => GodUI.open(deityPresenceButton.dataset.god, deityPresenceButton));
pantheonList.addEventListener("click", (event) => {
  const profileButton = event.target.closest("button[data-god]");
  if (profileButton) GodUI.open(profileButton.dataset.god, profileButton);
});
bossVictoryContinue.addEventListener("click", continueAfterBossVictory);
bossVictoryModal.addEventListener("click", (event) => {
  if (event.target === bossVictoryModal) continueAfterBossVictory();
});
pantheonCategoryButtons.forEach((button) => button.addEventListener("click", () => {
  pantheonCategoryButtons.forEach((categoryButton) => categoryButton.setAttribute("aria-pressed", String(categoryButton === button)));
  renderCollectionAndStats();
}));
function continueAfterBossVictory() {
  bossVictoryModal.hidden = true;
  if (matchFinishPending) {
    matchFinishPending = false;
    finishMatch(Date.now() >= matchEndsAt ? "TIEMPO AGOTADO" : balance === 0 && freeSpins === 0 ? "SIN CRÉDITOS" : "PARTIDA FINALIZADA");
    return;
  }
  activateBossIfEligible();
  renderBoss();
  updateControls();
  spinButton.focus();
}
batchButtons.forEach((button) => button.addEventListener("click", () => {
  if (!matchActive || isSpinning) return;
  selectedBatchSize = Number(button.dataset.batch);
  updateControls();
  saveArcadeProgress();
}));
machineSelect.addEventListener("change", () => selectArcadeMachine(machineSelect.value));
spinButton.addEventListener("click", spin);
document.querySelector(".reset-button").addEventListener("click", () => {
  if (matchActive) finishMatch("PARTIDA REINICIADA");
});
window.addEventListener("beforeunload", saveArcadeProgress);
document.addEventListener("keydown", (event) => {
  if (window.CreditShop?.isOpen()) return;
  if (event.code !== "Space" || event.repeat || event.target instanceof HTMLButtonElement || event.target instanceof HTMLInputElement) return;
  if (!destinyModal.hidden || !pathModal.hidden || !templeMapModal.hidden) return;
  event.preventDefault();
  spin();
});

initializeSymbolIcons();
initializeStageEffects();
renderRanking();
playerNameInput.value = window.ProfileWallet.snapshot().name || playerState.name;
renderRunHud();
renderBoss();
renderCollectionAndStats();
updateControls();
restoreSavedMatch();




const characterDialogObserver = new MutationObserver(() => { window.clearTimeout(characterDispatchTimer); characterDispatchTimer = window.setTimeout(dispatchCharacterAppearance, 60); });
[godModal, destinyModal, pathModal, recoveryModal, bonusModal, bossVictoryModal, templeTransition, document.querySelector("#mobile-pause"), document.querySelector("#game-tutorial")].filter(Boolean).forEach(element => characterDialogObserver.observe(element, { attributes: true, attributeFilter: ["hidden"] }));
document.addEventListener("visibilitychange", () => { dispatchCharacterAppearance(); });

const bonusRewardDetails = {
  overdrive: { title: "OVERDRIVE", detail: `Aumenta los premios ganadores un ${Math.round(GAME_CONFIG.bonus.overdriveBonus * 100)}% durante los próximos ${GAME_CONFIG.bonus.powerDuration} giros. Sustituye al poder activo; no garantiza una victoria.` },
  wild: { title: "WILD POWER", detail: `Coloca un comodín en el primer rodillo durante los próximos ${GAME_CONFIG.bonus.powerDuration} giros. Sustituye al poder activo; el Wild puede completar combinaciones.` },
  "gem-rush": { title: "GEM RUSH", detail: `Recibes ${GAME_CONFIG.bonus.gemRushGems} gemas virtuales inmediatamente. Se suman a tu progreso y no sustituyen el poder activo.` },
  "extra-spins": { title: "EXTRA SPINS", detail: `Añade ${GAME_CONFIG.bonus.extraFreeSpins} tiradas gratis a las que ya tienes. No gastan créditos ni sustituyen el poder activo.` }
};
bonusChoiceButtons.forEach(button => button.addEventListener("click", () => {
  if (!bonusChoiceResolver || bonusModal.hidden) return;
  selectedBonusReward = button.dataset.bonus;
  const detail = bonusRewardDetails[selectedBonusReward];
  if (!detail) return;
  bonusChoiceButtons.forEach(option => { option.classList.toggle("is-selected", option === button); option.setAttribute("aria-pressed", String(option === button)); });
  document.querySelector("#bonus-selection-title").textContent = detail.title;
  document.querySelector("#bonus-selection-detail").textContent = detail.detail;
  document.querySelector("#bonus-accept").disabled = false;
}));
document.querySelector("#bonus-accept").addEventListener("click", () => {
  if (!selectedBonusReward || !bonusChoiceResolver || bonusModal.hidden) return;
  document.querySelector("#bonus-accept").disabled = true;
  applyBonusReward(selectedBonusReward);
  selectedBonusReward = null;
  spinButton.focus();
});
document.addEventListener("keydown", event => {
  if (bonusModal.hidden || window.GameTutorial?.isOpen || pauseStartedAt) return;
  if (event.key === "Tab") {
    const buttons = [...bonusModal.querySelectorAll("button")].filter(button => !button.disabled);
    const index = buttons.indexOf(document.activeElement);
    event.preventDefault();
    buttons[(index + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length]?.focus();
  }
});

/* Cada anuncio queda ligado al perfil que lo solicitó. */
(() => {
 let reservation=null;
 const canClaim=()=>window.ProfileWallet.isReady() && !isSpinning && !matchFinishPending && (!matchActive || (!!runState.pathChoice && (pauseStartedAt || Date.now())<matchEndsAt));
 document.addEventListener("temple:session-start",()=>{reservation=null;});
 window.GameAdRewards=Object.freeze({
  canClaim:()=>canClaim() && !reservation,
  begin(transactionId){
   if(!canClaim() || reservation)return null;
   const profileId=window.ProfileWallet.snapshot().id;
   reservation={transactionId,profileId};return profileId;
  },
  grant({transactionId,session,amount}){
   if(amount!==60 || !canClaim() || session!==window.ProfileWallet.snapshot().id || reservation?.transactionId!==transactionId || reservation?.profileId!==session)return false;
   if(window.ProfileWallet.snapshot().receipts.includes(transactionId))return false;
   balance=window.ProfileWallet.transact(60,"advertisement",transactionId);
   if(matchActive){runState.adCredits+=60;runState.adRewardReceipts.push(transactionId);}
   updateControls();saveArcadeProgress();showToast("ANUNCIO COMPLETADO · +60 CR EN TU CARTERA");return true;
  },
  finish(transactionId){if(reservation?.transactionId===transactionId)reservation=null;document.dispatchEvent(new Event("temple:state-change"));},
  isHolding:()=>!!reservation
 });
 document.addEventListener("profile:wallet-change",event=>{
  if(event.detail.id!==walletProfileId)return;
  balance=event.detail.balance;updateControls();
 });
})();

(() => {
 const modal=document.querySelector("#time-expired-modal");
 function close(){modal.hidden=true;playerNameInput.focus();}
 document.querySelector("#time-expired-close").addEventListener("click",close);
 document.querySelector("#time-expired-shop").addEventListener("click",()=>{close();window.CreditShop?.open();});
 document.addEventListener("keydown",event=>{if(modal.hidden)return;if(event.key==="Escape"){event.preventDefault();close();}if(event.key==="Tab"){event.preventDefault();const buttons=[...modal.querySelectorAll("button")];const index=buttons.indexOf(document.activeElement);buttons[(index+(event.shiftKey?-1:1)+buttons.length)%buttons.length].focus();}});
})();

window.GameTime=Object.freeze({
 addSavedTime(){
  if(!matchActive || !runState.pathChoice || isSpinning || matchFinishPending) return false;
  const seconds=window.ProfileWallet.snapshot().timeSeconds;if(!seconds)return false;
  const now=pauseStartedAt||Date.now();if(now>=matchEndsAt)return false;
  window.ProfileWallet.useTime(seconds);matchEndsAt+=seconds*1000;
  matchCountdownOutput.textContent=formatMatchClock(matchEndsAt-now);document.body.classList.remove("match-ending");saveArcadeProgress();return true;
 }
});
