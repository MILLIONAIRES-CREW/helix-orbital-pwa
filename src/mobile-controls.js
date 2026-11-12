const MOVE_CODES = ["KeyW", "KeyA", "KeyS", "KeyD"];
const DEADZONE = 0.22;
const LOOK_SENS = 1.35;

function isTouchPreferred() {
  if (window.matchMedia("(pointer: coarse)").matches) return true;
  if (navigator.maxTouchPoints > 0 && window.matchMedia("(hover: none)").matches)
    return true;
  if (window.matchMedia("(max-width: 900px)").matches) return true;
  return false;
}

function keyMeta(code) {
  const map = {
    KeyW: "w",
    KeyA: "a",
    KeyS: "s",
    KeyD: "d",
    KeyE: "e",
    KeyQ: "q",
    KeyF: "f",
    KeyM: "m",
    KeyV: "v",
    Tab: "Tab",
    Escape: "Escape",
    ShiftLeft: "Shift",
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
  };
  return {
    code,
    key: map[code] || code,
    bubbles: true,
    cancelable: true,
  };
}

function pressKey(code) {
  window.dispatchEvent(new KeyboardEvent("keydown", keyMeta(code)));
}

function releaseKey(code) {
  window.dispatchEvent(new KeyboardEvent("keyup", keyMeta(code)));
}

function mouseMove(dx, dy) {
  const ev = new MouseEvent("mousemove", {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: 0,
    clientY: 0,
  });
  Object.defineProperty(ev, "movementX", { get: () => dx });
  Object.defineProperty(ev, "movementY", { get: () => dy });
  window.dispatchEvent(ev);
}

function mouseDownOnCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ev = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
    buttons: 1,
    clientX: rect.left + rect.width * 0.5,
    clientY: rect.top + rect.height * 0.5,
  });
  canvas.dispatchEvent(ev);
}

function mouseUp() {
  window.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window,
      button: 0,
      buttons: 0,
    })
  );
}

function setupStick(root) {
  const stick = root.querySelector("#stick");
  const knob = root.querySelector(".stick-knob");
  const held = new Set();
  let activeId = null;
  let originX = 0;
  let originY = 0;
  const maxTravel = 42;

  function setKeys(nx, ny) {
    const next = new Set();
    if (ny < -DEADZONE) next.add("KeyW");
    if (ny > DEADZONE) next.add("KeyS");
    if (nx < -DEADZONE) next.add("KeyA");
    if (nx > DEADZONE) next.add("KeyD");
    for (const code of MOVE_CODES) {
      if (next.has(code) && !held.has(code)) pressKey(code);
      if (!next.has(code) && held.has(code)) releaseKey(code);
    }
    held.clear();
    for (const code of next) held.add(code);
  }

  function clearKeys() {
    for (const code of held) releaseKey(code);
    held.clear();
    knob.style.transform = "translate(0px, 0px)";
  }

  function onStart(e) {
    const t = e.changedTouches ? e.changedTouches[0] : e;
    activeId = t.identifier ?? "mouse";
    const rect = stick.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
    e.preventDefault();
  }

  function onMove(e) {
    if (activeId === null) return;
    const touches = e.changedTouches ? [...e.changedTouches] : [e];
    const t = touches.find((x) => (x.identifier ?? "mouse") === activeId);
    if (!t) return;
    let dx = t.clientX - originX;
    let dy = t.clientY - originY;
    const len = Math.hypot(dx, dy) || 1;
    const scale = Math.min(1, maxTravel / len);
    dx *= scale;
    dy *= scale;
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    setKeys(dx / maxTravel, dy / maxTravel);
    e.preventDefault();
  }

  function onEnd(e) {
    if (activeId === null) return;
    const touches = e.changedTouches ? [...e.changedTouches] : [e];
    if (!touches.some((x) => (x.identifier ?? "mouse") === activeId)) return;
    activeId = null;
    clearKeys();
    e.preventDefault();
  }

  stick.addEventListener("touchstart", onStart, { passive: false });
  stick.addEventListener("touchmove", onMove, { passive: false });
  stick.addEventListener("touchend", onEnd, { passive: false });
  stick.addEventListener("touchcancel", onEnd, { passive: false });
}

function setupLookPad(root, canvas) {
  const pad = root.querySelector("#look-pad");
  let activeId = null;
  let lastX = 0;
  let lastY = 0;

  function onStart(e) {
    const t = e.changedTouches ? e.changedTouches[0] : e;
    activeId = t.identifier ?? "mouse";
    lastX = t.clientX;
    lastY = t.clientY;
    mouseDownOnCanvas(canvas);
    e.preventDefault();
  }

  function onMove(e) {
    if (activeId === null) return;
    const touches = e.changedTouches ? [...e.changedTouches] : [e];
    const t = touches.find((x) => (x.identifier ?? "mouse") === activeId);
    if (!t) return;
    const dx = (t.clientX - lastX) * LOOK_SENS;
    const dy = (t.clientY - lastY) * LOOK_SENS;
    lastX = t.clientX;
    lastY = t.clientY;
    mouseMove(dx, dy);
    e.preventDefault();
  }

  function onEnd(e) {
    if (activeId === null) return;
    const touches = e.changedTouches ? [...e.changedTouches] : [e];
    if (!touches.some((x) => (x.identifier ?? "mouse") === activeId)) return;
    activeId = null;
    mouseUp();
    e.preventDefault();
  }

  pad.addEventListener("touchstart", onStart, { passive: false });
  pad.addEventListener("touchmove", onMove, { passive: false });
  pad.addEventListener("touchend", onEnd, { passive: false });
  pad.addEventListener("touchcancel", onEnd, { passive: false });
}

function setupButtons(root) {
  const buttons = root.querySelectorAll(".mbtn");
  for (const btn of buttons) {
    const code = btn.dataset.code;
    const mode = btn.dataset.mode || "tap";
    if (!code) continue;

    let held = false;
    const start = (e) => {
      e.preventDefault();
      if (held) return;
      held = true;
      btn.classList.add("active");
      pressKey(code);
    };
    const end = (e) => {
      e.preventDefault();
      if (!held) return;
      held = false;
      btn.classList.remove("active");
      if (mode === "hold") releaseKey(code);
      else {
        // Ensure the press survives one sim frame even on instant click.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => releaseKey(code));
        });
      }
    };

    btn.addEventListener("touchstart", start, { passive: false });
    btn.addEventListener("touchend", end, { passive: false });
    btn.addEventListener("touchcancel", end, { passive: false });
    btn.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      start(e);
    });
    btn.addEventListener("mouseup", end);
    btn.addEventListener("mouseleave", end);
  }
}

function isPlaying() {
  const hud = document.getElementById("hud");
  const start = document.getElementById("start");
  return (
    !!hud &&
    !hud.classList.contains("hidden") &&
    !!start &&
    start.classList.contains("hidden")
  );
}

function syncOverlay(root) {
  const show = isTouchPreferred() && isPlaying();
  if (show) {
    root.classList.remove("hidden");
    root.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("mobile-play");
  } else {
    root.classList.add("hidden");
    root.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("mobile-play");
  }
}

function init() {
  const root = document.getElementById("mobile-controls");
  const canvas = document.getElementById("c");
  if (!root || !canvas) return;

  setupStick(root);
  setupLookPad(root, canvas);
  setupButtons(root);

  const hud = document.getElementById("hud");
  const start = document.getElementById("start");
  const obs = new MutationObserver(() => syncOverlay(root));
  if (hud) obs.observe(hud, { attributes: true, attributeFilter: ["class"] });
  if (start) obs.observe(start, { attributes: true, attributeFilter: ["class"] });

  window.addEventListener("resize", () => syncOverlay(root));
  window
    .matchMedia("(max-width: 900px)")
    .addEventListener("change", () => syncOverlay(root));
  window
    .matchMedia("(pointer: coarse)")
    .addEventListener("change", () => syncOverlay(root));

  root.addEventListener(
    "touchmove",
    (e) => {
      if (e.target.closest("#mobile-controls")) e.preventDefault();
    },
    { passive: false }
  );

  syncOverlay(root);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
