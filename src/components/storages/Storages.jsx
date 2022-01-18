import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStorages } from '../shared/redux/slicer';

const DictJson = require('../shared/json/dict.json');

function Storages() {
  const storagesState = useSelector((state) => state.storages);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [showingNewPlaces, showNewPlaces] = useState(false);
  // const [newPet, setNewPet] = useState('');
  const [storages, storagesSet] = useState(storagesState);
  // const {
  //   adultsTitle, adultsDietTitle, childrenTitle, childrenDietTitle, petsTitle,
  // } = DictJson[language];

  const complete = { ...storages };

  useEffect(() => { dispatch(setStorages(storages)); }, [storages]);

  const clickEvent = (name, key, set) => {
    const nameObj = { ...complete[name] };
    if (set === 'increase') {
      if (key === 'capacity') nameObj[key] += 5;
      else if (nameObj[key] < 35) nameObj[key] += 1;
    }

    if (set === 'decrease') {
      if (key === 'capacity' && nameObj[key] > 0) nameObj[key] -= 5;
      else if (nameObj[key] > -30) nameObj[key] -= 1;
    }
    complete[name] = nameObj;
    storagesSet(complete);
  };

  function keysEvent(e) {
    console.log(e);
  }

  function setBlocks() {
    console.log(complete.places);
  }

  function setSwitcher(name, key) {
    return (
      <div className={`${name}-switcher`}>
        <div
          className={`${name}minus minus material-icons`}
          onClick={() => clickEvent(name, key, 'decrease')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id={`${name}-value`} className={`${name}-value`}>{complete[name][key]}</div>
        <div
          className={`${name}plus plus material-icons`}
          onClick={() => clickEvent(name, key, 'increase')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
      </div>
    );
  }

  function setTempSwitcher(name) {
    return (
      <div className={`${name}temp-switcher`}>
        <div
          className={`${name}min minus material-icons`}
          onClick={() => clickEvent(name, 'tMin', 'decrease')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id={`${name}min-value`} className={`${name}min-value`}>{complete[name].tMin}</div>
        <div
          className={`${name}min plus material-icons`}
          onClick={() => clickEvent(name, 'tMin', 'increase')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
        <div
          className={`${name}max minus material-icons`}
          onClick={() => clickEvent(name, 'tMax', 'decrease')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id={`${name}max-value`} className={`${name}max-value`}>{complete[name].tMax}</div>
        <div
          className={`${name}max plus material-icons`}
          onClick={() => clickEvent(name, 'tMax', 'increase')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
      </div>
    );
  }
  setBlocks();

  return (
    <div className="storages">
      <div className="content">
        <div className="freezer">
          <div className="freezer-icon">
            <div
              className="placeminus material-icons"
              onKeyDown={(e) => keysEvent(e)}
              role="button"
              tabIndex="0"
              alt="remove place"
              placeholder="remove place"
              onClick={() => showNewPlaces(!showingNewPlaces)}
            >
              remove_circle
            </div>
          </div>
          <div className="freezer-header">{DictJson[language].freezer}</div>
          <div className="freezer-subheader">{DictJson[language].capacity}</div>
          {setSwitcher('freezer', 'capacity')}
          <div className="freezertemp-header">{DictJson[language].temp}</div>
          <div className="freezertemp-subheader">{`${DictJson[language].tMin} - ${DictJson[language].tMax}`}</div>
          {setTempSwitcher('freezer')}
        </div>
        <div className="pantry">
          <div className="pantry-icon" />
          <div className="pantry-header">{DictJson[language].pantry}</div>
          <div className="pantry-subheader">{DictJson[language].capacity}</div>
          {setSwitcher('pantry', 'capacity')}
          <div className="pantrytemp-header">{DictJson[language].temp}</div>
          <div className="pantrytemp-subheader">{`${DictJson[language].tMin} - ${DictJson[language].tMax}`}</div>
          {setTempSwitcher('pantry')}
        </div>
        <div
          className="placeplus plus material-icons"
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
          onClick={() => showNewPlaces(!showingNewPlaces)}
        >
          add_circle
        </div>
      </div>
    </div>
  );
}

export default Storages;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
