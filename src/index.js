/* eslint-disable import/no-cycle */

import "./components/index.css";
import getData from "./components/api";

const summary = "summaryRoute";
// const countries = "countriesRoute";
// const countryDay = "countryDayOneRoute";
// const countryTotalDay = "countryDayOneTotalRoute";
// const country = "ukraine";
let Page = {};

export default Page = {
    elements: {
        main: "",
    },
    properties: {
        summary: {},
        lastUpdate: "",
    },

    init() {
        getData(summary);
    },

    set(categoryData, category) {
        switch (category) {
            case "countryDayOneRoute":
                break;
            case "countryTotalDayOneRoute":
                break;
            case "summaryRoute":
                break;
            default:
        }
    },
};

window.addEventListener("DOMContentLoaded", () => {
    Page.init();
});