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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var rs_school_js_svg_1 = __importDefault(require("../../assets/images/rs_school_js.svg"));
function footer() {
    return (jsx_runtime_1.jsxs("div", __assign({ className: "footer" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "year" }, { children: "2021" }), void 0),
            jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("a", __assign({ href: "https://github.com/chernataly2020" }, { children: "chernataly" }), void 0) }, void 0),
            jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("a", __assign({ href: "https://github.com/dzmitryNz" }, { children: "dzmitryNZ" }), void 0) }, void 0),
            jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("a", __assign({ href: "https://github.com/kosmodromm" }, { children: "Anton Kizerev" }), void 0) }, void 0),
            jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("a", __assign({ href: "https://github.com/Saylance2503" }, { children: "Saylance2503" }), void 0) }, void 0),
            jsx_runtime_1.jsx("a", __assign({ href: "https://rs.school/js/" }, { children: jsx_runtime_1.jsx("img", { src: rs_school_js_svg_1.default, className: "rs-school-logo", alt: "rs-school-logo" }, void 0) }), void 0)] }), void 0));
}
exports.default = footer;
//# sourceMappingURL=footer.js.map