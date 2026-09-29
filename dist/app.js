const canvas = document.getElementById("motionCanvas");
const shape = document.getElementById("motionShape");
const cursor = document.getElementById("motionCursor");

const bpm = 120;
const beatSeconds = 60 / bpm;
const totalBeats = 28;
const durationSeconds = totalBeats * beatSeconds;

const states = [
  { beat: 0, name: "button", w: 250, h: 68, r: 12, x: 0.5, y: 0.58, bg: "#11110f", fg: "#fffdf8", label: "Abrir portfolio" },
  { beat: 2, name: "loader", w: 68, h: 68, r: 34, x: 0.5, y: 0.5, bg: "#11110f", fg: "#fffdf8", label: "loader" },
  { beat: 4, name: "check", w: 78, h: 78, r: 39, x: 0.5, y: 0.5, bg: "#2f6df6", fg: "#fffdf8", label: "check" },
  { beat: 6, name: "island", w: 330, h: 62, r: 31, x: 0.5, y: 0.34, bg: "#11110f", fg: "#fffdf8", label: "4 projetos prontos" },
  { beat: 8, name: "player", w: 385, h: 106, r: 18, x: 0.5, y: 0.5, bg: "#fffdf8", fg: "#11110f", label: "motion" },
  { beat: 10, name: "scrub", w: 430, h: 92, r: 16, x: 0.5, y: 0.5, bg: "#fffdf8", fg: "#11110f", label: "scrub" },
  { beat: 12, name: "volume", w: 360, h: 78, r: 14, x: 0.5, y: 0.58, bg: "#11110f", fg: "#fffdf8", label: "volume" },
  { beat: 14, name: "toggle", w: 156, h: 72, r: 36, x: 0.5, y: 0.5, bg: "#fffdf8", fg: "#11110f", label: "toggle" },
  { beat: 16, name: "tabs", w: 420, h: 72, r: 16, x: 0.5, y: 0.42, bg: "#fffdf8", fg: "#11110f", label: "tabs" },
  { beat: 19, name: "chart", w: 460, h: 280, r: 18, x: 0.5, y: 0.52, bg: "#fffdf8", fg: "#11110f", label: "chart" },
  { beat: 22, name: "command", w: 440, h: 230, r: 16, x: 0.5, y: 0.5, bg: "#11110f", fg: "#fffdf8", label: "command" },
  { beat: 25, name: "toast", w: 330, h: 92, r: 16, x: 0.5, y: 0.65, bg: "#fffdf8", fg: "#11110f", label: "toast" },
  { beat: 26, name: "button", w: 250, h: 68, r: 12, x: 0.5, y: 0.58, bg: "#11110f", fg: "#fffdf8", label: "Abrir portfolio" },
  { beat: 28, name: "button", w: 250, h: 68, r: 12, x: 0.5, y: 0.58, bg: "#11110f", fg: "#fffdf8", label: "Abrir portfolio" },
];

const cursorPath = [
  { beat: 0, x: 0.18, y: 0.78, scale: 1 },
  { beat: 1, x: 0.48, y: 0.6, scale: 0.82 },
  { beat: 2, x: 0.54, y: 0.52, scale: 1 },
  { beat: 4, x: 0.6, y: 0.43, scale: 0.86 },
  { beat: 6, x: 0.68, y: 0.32, scale: 1 },
  { beat: 8, x: 0.35, y: 0.52, scale: 0.84 },
  { beat: 10, x: 0.7, y: 0.53, scale: 0.78 },
  { beat: 12, x: 0.78, y: 0.58, scale: 0.82 },
  { beat: 14, x: 0.56, y: 0.5, scale: 0.84 },
  { beat: 16, x: 0.36, y: 0.42, scale: 0.88 },
  { beat: 19, x: 0.62, y: 0.36, scale: 0.92 },
  { beat: 22, x: 0.38, y: 0.45, scale: 0.88 },
  { beat: 24, x: 0.58, y: 0.49, scale: 0.8 },
  { beat: 25, x: 0.62, y: 0.65, scale: 0.9 },
  { beat: 27, x: 0.48, y: 0.6, scale: 0.82 },
  { beat: 28, x: 0.18, y: 0.78, scale: 1 },
];

function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function springResponse(t, omega = 12, damping = 0.72) {
  if (t <= 0) return 0;
  if (t >= 0.95) return 1;
  const wd = omega * Math.sqrt(1 - damping * damping);
  const envelope = Math.exp(-damping * omega * t);
  const wave = Math.cos(wd * t) + (damping / Math.sqrt(1 - damping * damping)) * Math.sin(wd * t);
  return 1 - envelope * wave;
}

function timelineValue(keys, beat, prop) {
  let value = keys[0][prop];
  for (let i = 1; i < keys.length; i += 1) {
    const previous = keys[i - 1][prop];
    const next = keys[i][prop];
    const t = (beat - keys[i].beat) * beatSeconds;
    value += (next - previous) * springResponse(t);
  }
  return value;
}

function mix(a, b, amount) {
  return a + (b - a) * amount;
}

function parseHex(hex) {
  return [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16));
}

function mixColor(a, b, amount) {
  const ca = parseHex(a);
  const cb = parseHex(b);
  const mixed = ca.map((channel, index) => Math.round(mix(channel, cb[index], amount)));
  return `rgb(${mixed[0]}, ${mixed[1]}, ${mixed[2]})`;
}

function stateAtBeat(beat) {
  for (let i = states.length - 1; i >= 0; i -= 1) {
    if (beat >= states[i].beat) return states[i];
  }
  return states[0];
}

function nextStateAfter(beat) {
  return states.find((state) => state.beat > beat) || states[states.length - 1];
}

function localProgress(beat, current, next) {
  const span = Math.max(0.001, next.beat - current.beat);
  return clamp((beat - current.beat) / span);
}

function cursorPosition(beat) {
  const x = timelineValue(cursorPath, beat, "x");
  const y = timelineValue(cursorPath, beat, "y");
  const scale = timelineValue(cursorPath, beat, "scale");
  return { x, y, scale };
}

function beatPulse(beat) {
  const within = beat - Math.floor(beat);
  return Math.exp(-within * 10) * 0.04;
}

function chartMarkup(progress) {
  const bars = [0.42, 0.64, 0.48, 0.82, 0.72, 0.92].map((height, index) => {
    const grow = clamp((progress - index * 0.09) / 0.35);
    return `<i style="height:${Math.max(10, height * grow * 126)}px"></i>`;
  }).join("");

  return `
    <div class="chart-ui">
      <div class="chart-top">
        <strong>Projetos</strong>
        <span>seguranca</span>
      </div>
      <div class="chart-bars">${bars}</div>
      <em style="left:${45 + progress * 52}%;top:${28 - progress * 6}%">score ${Math.round(72 + progress * 18)}</em>
    </div>
  `;
}

function commandMarkup(progress) {
  const typed = "petshop".slice(0, Math.max(1, Math.floor(progress * 7)));
  return `
    <div class="command-ui">
      <div class="command-input"><span>⌘K</span><strong>${typed}</strong></div>
      <p>Petshop Spring MVC</p>
      <p>Simulacao Doppler</p>
      <p>Criptografia</p>
    </div>
  `;
}

function contentFor(state, progress, beat) {
  if (state.name === "button") return `<span class="motion-label">Abrir portfolio</span>`;
  if (state.name === "loader") {
    const angle = (beat * 180) % 360;
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="7" opacity=".2"/><path d="M32 10a22 22 0 0 1 22 22" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" transform="rotate(${angle} 32 32)"/></svg>`;
  }
  if (state.name === "check") return `<span class="motion-label">✓</span>`;
  if (state.name === "island") return `<span class="motion-label">4 projetos selecionados</span>`;
  if (state.name === "player") {
    const symbol = progress < 0.5 ? "▶" : "Ⅱ";
    return `<div class="player-ui"><span>${symbol}</span><strong>Portfolio motion</strong><i></i></div>`;
  }
  if (state.name === "scrub") {
    const value = Math.round(22 + progress * 58);
    return `<div class="slider-ui"><strong>${value}%</strong><span><i style="width:${value}%"></i></span></div>`;
  }
  if (state.name === "volume") {
    const value = Math.round(55 + Math.sin(progress * Math.PI) * 50);
    return `<div class="slider-ui dark"><strong>Vol ${value}</strong><span><i style="width:${Math.min(value, 100)}%"></i></span></div>`;
  }
  if (state.name === "toggle") {
    const left = 16 + springResponse(progress * 0.8) * 68;
    return `<div class="toggle-ui"><i style="left:${left}px"></i><strong>${progress > 0.42 ? "ON" : "OFF"}</strong></div>`;
  }
  if (state.name === "tabs") {
    const leftEdge = 20 + springResponse(Math.max(0, progress - 0.08) * 1.5) * 250;
    const rightEdge = 142 + springResponse(progress * 1.4) * 250;
    const width = Math.max(76, rightEdge - leftEdge);
    return `<div class="tabs-ui"><i style="left:${leftEdge}px;width:${width}px"></i><span>Projetos</span><span>Design</span><span>Seguranca</span></div>`;
  }
  if (state.name === "chart") return chartMarkup(progress);
  if (state.name === "command") return commandMarkup(progress);
  if (state.name === "toast") return `<div class="toast-ui"><strong>Portfolio pronto</strong><span>nicolasbirochi.com.br</span></div>`;
  return `<span class="motion-label">${state.label}</span>`;
}

function seek(seconds) {
  const loop = ((seconds % durationSeconds) + durationSeconds) % durationSeconds;
  const beat = loop / beatSeconds;
  const current = stateAtBeat(beat);
  const next = nextStateAfter(beat);
  const progress = localProgress(beat, current, next);
  const canvasWidth = canvas.clientWidth;
  const canvasHeight = canvas.clientHeight;

  const width = timelineValue(states, beat, "w");
  const height = timelineValue(states, beat, "h");
  const radius = timelineValue(states, beat, "r");
  const x = timelineValue(states, beat, "x") * canvasWidth;
  const y = timelineValue(states, beat, "y") * canvasHeight;
  const blur = Math.sin(clamp(progress * 1.4) * Math.PI) * 2.2;
  const pulse = beatPulse(beat);
  const colorMix = clamp(springResponse((beat - current.beat) * beatSeconds));
  const bg = mixColor(current.bg, next.bg, colorMix);
  const fg = mixColor(current.fg, next.fg, colorMix);

  shape.style.width = `${width}px`;
  shape.style.height = `${height}px`;
  shape.style.borderRadius = `${radius}px`;
  shape.style.left = `${x}px`;
  shape.style.top = `${y}px`;
  shape.style.background = bg;
  shape.style.color = fg;
  shape.style.transform = `translate(-50%, -50%) scale(${1 + pulse})`;
  shape.style.filter = `blur(${blur < 0.8 ? 0 : blur}px)`;
  shape.innerHTML = contentFor(current, progress, beat);

  const c = cursorPosition(beat);
  cursor.style.left = `${c.x * canvasWidth}px`;
  cursor.style.top = `${c.y * canvasHeight}px`;
  cursor.style.transform = `translate(-50%, -50%) scale(${c.scale})`;
}

function frame(now) {
  seek(now / 1000);
  requestAnimationFrame(frame);
}

if (canvas && shape && cursor) {
  requestAnimationFrame(frame);
}
