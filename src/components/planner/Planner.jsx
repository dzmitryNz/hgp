import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlanner } from '../shared/redux/slicer';

const DictJson = require('../shared/json/dict.json');

const Planner = () => {
  const dispatch = useDispatch();
  const {
    language, family, planner, plannerModes,
  } = useSelector((state) => state);

  const complete = {
    adults: planner.adults,
    adultsdiet: planner.adultsdiet,
    children: planner.children,
    childrendiet: planner.childrendiet,
    pets: planner.pets,
  };

  const clickEvent = (index, set) => {
    if (set === 'increase') complete[index] += 1;
    if (set === 'decrease' && complete[index] !== 0) complete[index] -= 1;
    if (complete.adultsdiet > complete.adults) complete.adults = complete.adultsdiet;
    if (complete.childrendiet > complete.children) complete.children = complete.childrendiet;
    dispatch(setPlanner(complete));
  };
  const handleKeyUp = () => {};

  const modesBlock = () => {
    const plannerModesArr = [];
    plannerModes.forEach((mode) => {
      plannerModesArr.push(<div className="planner-mode">{DictJson[language][mode].toUpperCase()}</div>);
    });
    return (
      <div className="modes">
        {plannerModesArr}
      </div>
    );
  };

  const modeBlock = () => (
    <>
      <div className="mode-content planner-week">
        <div className="description">{DictJson[language].descriptionPlanner}</div>
        <div className="adults">
          <div className="adults-header">{DictJson[language].adultsTitle}</div>
          <div className="adults-icon" />
          <div className="adults-switcher">
            <div
              className="adults-minus material-icons"
              onClick={clickEvent}
              onKeyUp={handleKeyUp}
              role="button"
              tabIndex={0}
            >
              remove_circle
            </div>
            <div id="adults-value" className="adults-value">{family.adults}</div>
            <div
              onClick={clickEvent}
              onKeyUp={handleKeyUp}
              role="button"
              tabIndex={0}
              className="adults-plus material-icons"
            >
              add_circle
            </div>
          </div>
          <div className="adultsdiet-header">{DictJson[language].adultsDietTitle}</div>
        </div>
      </div>
    </>
  );

  return (
    <div className="planner">
      <div className="content">
        {modesBlock()}
        {modeBlock()}
      </div>
    </div>

  );
};

export default Planner;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
