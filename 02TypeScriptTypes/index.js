"use strict";
// boolean
Object.defineProperty(exports, "__esModule", { value: true });
function paintShape(opts) {
    var _a, _b;
    var xPos = (_a = opts.xPos) !== null && _a !== void 0 ? _a : 0;
    var yPos = (_b = opts.yPos) !== null && _b !== void 0 ? _b : 0;
    console.log("Painting a ".concat(opts.shape.name, " at X: ").concat(xPos, ", at Y ").concat(yPos, ", color : ").concat(opts.shape.color));
}
function paintCircle(xPos, yPos) {
    paintShape({ shape: { name: "Circle", color: "Green" }, xPos: xPos, yPos: yPos });
}
paintCircle();
