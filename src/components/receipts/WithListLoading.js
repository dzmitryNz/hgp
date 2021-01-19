import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

function WithListLoading(Component) {
  const language = PropertiesJson.language;
  const loadingMessage = DictJson[language].loadingMessage;
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        {loadingMessage}
      </p>
    );
  };
}
export default WithListLoading;