/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLanguage, setMode, setTheme, setView,
} from '../shared/redux/slicer';

const DictJson = require('../shared/json/dict.json');

// function keyHandler(e) { console.log(e); }

function Menu() {
  const root = document.getElementById('root');
  const dispatch = useDispatch();
  const {
    language, view, theme, themesList, mode, modes,
  } = useSelector((state) => state);
  const { langsList } = DictJson;
  const { title, footer } = DictJson[language];

  const hours = new Date().getHours();
  const shedule = hours > 18 || hours < 8 ? 'dark_mode' : 'light_mode';
  const thisTheme = theme === 'schedule' ? shedule : theme;
  const iconTheme = thisTheme;
  root.className = `${theme} mode_${mode}`;
  const themes = [];
  themesList.forEach((el) => {
    themes.push(
      <div
        key={el}
        className={`${el} theme material-icons`}
        onClick={(e) => { dispatch(setTheme(e.target.textContent)); }}
      >
        {el}
      </div>,
    );
  });
  const langs = [];
  langsList.forEach((el) => {
    langs.push(
      <div
        key={el}
        className={`${el} lang`}
        onClick={(e) => { dispatch(setLanguage(e.target.textContent)); }}
      >
        {el}
      </div>,
    );
  });
  const tabsBlock = [];
  modes.forEach((el) => {
    tabsBlock.push(
      <div
        className={mode === el ? 'tab active-tab' : 'tab'}
        key={el}
      >
        <div
          key={el}
          className={`tab-${el} tabi`}
          onClick={() => { dispatch(setMode(el)); }}
          tabIndex="0"
          role="button"
          aria-label={el}
        />
      </div>,
    );
  });

  return (
    <div className="menu">
      <header className="menu-header">{ title }</header>
      <div className="tabs">
        {tabsBlock}
      </div>
      <div className="buttons">
        {view.langs && <div id="langs" className="langs">{ langs }</div>}
        <div className="lang-switcher">
          <div className="lang" onClick={(e) => { dispatch(setView(e.target.className)); }}>{language}</div>
        </div>
        {view.themes && <div id="themes" className="themes">{ themes }</div>}
        <div className="theme-switcher">
          <div className="theme material-icons" onClick={(e) => { dispatch(setView(e.target.classList[0])); }}>{ iconTheme }</div>
        </div>
        <div className="footer-switcher" onClick={(e) => { dispatch(setView(e.target.className)); }}>{footer}</div>
        {view.footer
          && (
          <div className="footer">
            <div className="footer-wrapper">
              <div className="year">2020 - 2021</div>
              <div className="git">
                <div className="git-icon" />
                <a target="_blank" href="https://github.com/dzmitrynz" rel="noreferrer"><span>dzmitryNz</span></a>
              </div>
            </div>
          </div>
          )}
      </div>
    </div>
  );
}

export default Menu;
