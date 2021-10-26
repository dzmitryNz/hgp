/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-const */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFamily } from '../shared/redux/slicer';

const DictJson = require('../shared/json/dict.json');

// function keyHandler(e) { console.log(e); }

function Family() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const family = useSelector((state) => state.family);
  const familyModes = useSelector((state) => state.familyModes);
  const {
    adultsTitle, adultsDietTitle, childrenTitle, childrenDietTitle, petsTitle,
  } = DictJson[language];
  const familyModesArr = [];
  familyModes.forEach((el) => {
    const classNameMode = `${el} family-mode`;
    familyModesArr.push(<div key={el} className={classNameMode}>{DictJson[language][el]}</div>);
  });

  const complete = {
    adults: family.adults,
    adultsdiet: family.adultsdiet,
    children: family.children,
    childrendiet: family.childrendiet,
    pets: family.pets,
  };

  const clickEvent = (index, set) => {
    if (set === 'increase') complete[index] += 1;
    if (set === 'decrease' && complete[index] !== 0) complete[index] -= 1;
    if (complete.adultsdiet > complete.adults) complete.adults = complete.adultsdiet;
    if (complete.childrendiet > complete.children) complete.children = complete.childrendiet;
    dispatch(setFamily(complete));
  };

  const adultsBlock = () => (
    <div className="adults">
      <div className="adults-header">{adultsTitle}</div>
      <div className="adults-icon" />
      <div className="adults-switcher">
        <div
          className="adults-minus material-icons"
          onClick={() => clickEvent('adults', 'decrease')}
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id="adults-value" className="adults-value">{complete.adults}</div>
        <div
          className="adults-plus material-icons"
          onClick={() => clickEvent('adults', 'increase')}
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
      </div>
      <div className="adultsdiet-header">{adultsDietTitle}</div>
      <div className="adultsdiet-switcher">
        <div
          className="adultsdiet-minus material-icons"
          onClick={() => clickEvent('adultsdiet', 'decrease')}
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id="adultsdiet-value" className="adultsdiet-value">{complete.adultsdiet}</div>
        <div
          className="adultsdiet-plus material-icons"
          onClick={() => clickEvent('adultsdiet', 'increase')}
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
      </div>
    </div>
  );

  const childrenBlock = (
    <div className="children">
      <div className="children-header">{childrenTitle}</div>
      <div className="children-icon" />
      <div className="children-switcher">
        <div
          onClick={() => clickEvent('children', 'decrease')}
          className="children-minus material-icons"
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id="children-value" className="children-value">{complete.children}</div>
        <div
          className="children-plus material-icons"
          onClick={() => clickEvent('children', 'increase')}
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
      </div>
      <div className="childrendiet-header">{childrenDietTitle}</div>
      <div className="childrendiet-switcher">
        <div
          onClick={() => clickEvent('childrendiet', 'decrease')}
          className="childrendiet-minus material-icons"
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id="childrendiet-value" className="childrendiet-value">{complete.childrendiet}</div>
        <div
          onClick={() => clickEvent('childrendiet', 'increase')}
          className="childrendiet-plus material-icons"
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
      </div>
    </div>
  );
  const pets = [];
  complete.pets.forEach((pet) => {
    const minusCN = `${pet}-minus material-icons`;
    const valueClassName = `${pet}-value`;
    const petClassName = `${pet} pet`;
    const block = (
      <div id={pet} key={petClassName} className={petClassName}>
        <div key={valueClassName} className="pets-switcher">
          <div key={valueClassName} className={valueClassName}>{pet}</div>
          <div
            className={minusCN}
            key={minusCN}
            onClick={clickEvent}
            onKeyDown={clickEvent}
            role="button"
            tabIndex="0"
          >
            remove_circle
          </div>
        </div>
      </div>
    );
    pets.push(block);
  });
  const petsBlock = (
    <div className="pets">
      <div className="pets-header">
        {petsTitle}
        <div onClick={clickEvent} className="pets-plus material-icons">add_circle</div>
      </div>
      <div id="pets-icon" className="pets-icon" />
      <div className="pets-list">
        {pets}
      </div>
    </div>
  );

  return (
    <div className="content">
      <div className="family-modes">
        { familyModesArr }
      </div>
      <div className="mode-family">
        {adultsBlock()}
        {childrenBlock}
        {petsBlock}
      </div>
    </div>
  );
}

export default Family;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
