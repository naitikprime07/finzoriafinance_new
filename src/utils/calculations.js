// Business logic for the 5 calculators, ported unchanged from the inline page scripts.
// Each returns the same string the original wrote into #result, or null when input is invalid
// (original guard: `!isNaN(value) && value > 0`).

export function rbxToDollar(rbx) {
    const n = parseInt(rbx, 10);
    if (isNaN(n) || n <= 0) return null;
    return (n * 0.0125).toFixed(2) + " $"; // Conversion: 1 RBX = $0.0125
}

export function dollarToRbx(dollars) {
    const n = parseInt(dollars, 10);
    if (isNaN(n) || n <= 0) return null;
    return (n * 80).toFixed(2) + " RBX";
}

export function bcCounter(days) {
    const n = parseInt(days, 10);
    if (isNaN(n) || n <= 0) return null;
    return (n * 15).toFixed(2) + " RBX"; // Each day = 15 Robux
}

export function tbcCounter(days) {
    const n = parseInt(days, 10);
    if (isNaN(n) || n <= 0) return null;
    return (n * 35).toFixed(2) + " RBX"; // Each day = 35 Robux
}

export function obcCounter(days) {
    const n = parseInt(days, 10);
    if (isNaN(n) || n <= 0) return null;
    return (n * 60).toFixed(2) + " RBX"; // Each day = 60 Robux
}
