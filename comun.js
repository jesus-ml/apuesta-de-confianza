// Inicialización de Firebase y utilidades compartidas entre la vista del jugador y la del profesor.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { firebaseConfig } from "./config.js";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// Inicia sesión anónima y devuelve el uid (persiste en este navegador).
export function entrar() {
  return new Promise((resolve, reject) => {
    const off = onAuthStateChanged(auth, (u) => {
      if (u) { off(); resolve(u.uid); }
    });
    signInAnonymously(auth).catch(reject);
  });
}

// Diferencia entre el reloj local y el del servidor, para que el cronómetro sea igual en todos.
let offset = 0;
onValue(ref(db, ".info/serverTimeOffset"), (s) => { offset = s.val() || 0; });
export const ahoraServidor = () => Date.now() + offset;

export const LETRAS = ["A", "B", "C", "D"];
export const APUESTAS = [50, 70, 90, 100];

// Regla de Brier escalada a 100: puntos = 100 · (1 − (confianza − acierto)²).
export function puntos(conf, acierto) {
  const p = conf / 100, o = acierto ? 1 : 0;
  return Math.round(100 * (1 - (p - o) ** 2));
}

// Código de partida: 4 caracteres sin letras que se confundan (0/O, 1/I).
export function nuevoCodigo() {
  const abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let c = "";
  for (let i = 0; i < 4; i++) c += abc[Math.floor(Math.random() * abc.length)];
  return c;
}

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
