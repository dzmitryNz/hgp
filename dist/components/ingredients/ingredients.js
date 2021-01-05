"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function ingredients() {
    return (jsx_runtime_1.jsx("div", __assign({ className: "ingredients" }, { children: jsx_runtime_1.jsx("header", __assign({ className: "ingredients-header" }, { children: "Ingredients block here." }), void 0) }), void 0));
}
exports.default = ingredients;
//# sourceMappingURL=ingredients.js.map