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
function storages() {
    return (jsx_runtime_1.jsx("div", __assign({ className: "storages" }, { children: jsx_runtime_1.jsx("header", __assign({ className: "storages-header" }, { children: "Storages block here." }), void 0) }), void 0));
}
exports.default = storages;
//# sourceMappingURL=storages.js.map