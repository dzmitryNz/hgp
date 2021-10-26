/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../shared/redux/slicer';

const DictJson = require('../shared/json/dict.json');

function header() {
  const dispatch = useDispatch();
  const { language, mode, modes } = useSelector((state) => state);
  const { next } = DictJson[language];
  const headerClassName = 'header';
  const modeTitle = `${mode}Title`;
  const headerTitle = DictJson[language][modeTitle];

  const nextMode = () => {
    const indexMode = modes.indexOf(mode);
    dispatch(setMode(modes[indexMode + 1]));
  };

  return (
    <header className={headerClassName}>
      <h2>{ headerTitle }</h2>
      <div className="users-favorite material-icons">favorite_border</div>
      <div className="auth-switcher">
        <span className="auth material-icons">account_circle</span>
      </div>
      {mode !== 'export'
      && (
        <div
          className="next-button"
          onClick={nextMode}
          role="button"
          aria-label="next"
          tabIndex="0"
        >
          {next}
          <div className="material-icons">arrow_forward_ios</div>
        </div>
      )}
    </header>
  );
}

export default header;
