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
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./components/index.css");
var header_1 = __importDefault(require("./components/header/header"));
var footer_1 = __importDefault(require("./components/footer/footer"));
var menu_1 = __importDefault(require("./components/menu/menu"));
var family_1 = __importDefault(require("./components/family/family"));
var planner_1 = __importDefault(require("./components/planner/planner"));
var receipts_1 = __importDefault(require("./components/receipts/receipts"));
var storages_1 = __importDefault(require("./components/storages/storages"));
var ingredients_1 = __importDefault(require("./components/ingredients/ingredients"));
// import Exports from './components/exports/exports';
var App_1 = __importDefault(require("./components/App"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
react_dom_1.default.render(jsx_runtime_1.jsx(react_1.default.StrictMode, { children: jsx_runtime_1.jsxs("div", __assign({ className: "wrapper" }, { children: [jsx_runtime_1.jsx(header_1.default, {}, void 0),
            jsx_runtime_1.jsx(menu_1.default, {}, void 0),
            jsx_runtime_1.jsx(family_1.default, {}, void 0),
            jsx_runtime_1.jsx(storages_1.default, {}, void 0),
            jsx_runtime_1.jsx(planner_1.default, {}, void 0),
            jsx_runtime_1.jsx(receipts_1.default, {}, void 0),
            jsx_runtime_1.jsx(ingredients_1.default, {}, void 0),
            jsx_runtime_1.jsx(App_1.default, {}, void 0),
            jsx_runtime_1.jsx(footer_1.default, {}, void 0)] }), void 0) }, void 0), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
//# sourceMappingURL=index.js.map