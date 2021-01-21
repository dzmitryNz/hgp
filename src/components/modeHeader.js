import React from 'react';
const PropertiesJson = require("./json/properties.json");
const DictJson = require("./json/dict.json");

function ModeHeader(data) {
  const modeTitle = data.mode+"Title";
  const language = PropertiesJson.language;
  const headerTitle = DictJson[language][modeTitle];
  const next = DictJson[language].next;
  const headerClassName = data.mode + "-header";
    return (
        <header className={headerClassName}>
            <h2>{ headerTitle }</h2>
            <div className="next-button">{next}
                <div className="material-icons">arrow_forward_ios</div>
            </div>
        </header>
    );
  };

export default ModeHeader;