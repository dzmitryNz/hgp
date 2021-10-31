import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStorages } from '../shared/redux/slicer';

const DictJson = require('../shared/json/dict.json');

function Storages() {
  const storagesState = useSelector((state) => state.storages);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  // const [showingNewPets, showNewPets] = useState(false);
  // const [newPet, setNewPet] = useState('');
  const [storages, storagesSet] = useState(storagesState);
  // const {
  //   adultsTitle, adultsDietTitle, childrenTitle, childrenDietTitle, petsTitle,
  // } = DictJson[language];

  const complete = { ...storages };

  useEffect(() => { dispatch(setStorages(storages)); }, [storages]);

  const clickEvent = (name, key, set) => {
    console.log(name, key, set);
    if (set === 'increase') {
      if (name[1] === 'capacity') complete[name[0]].capacity += 5;
      else complete[name[0]][name[1]] += 1;
    }
    if (set === 'decrease') {
      if (name[1] === 'capacity' && complete[name[0]].capacity > 0) complete[name[0]].capacity -= 5;
      else complete[name[0]][name[1]] -= 1;
    }
    storagesSet(complete);
  };

  function keysEvent(e) {
    console.log(e.target);
  }

  function setSwitcher(name, key) {
    return (
      <div className={`${name}-switcher`}>
        <div
          className={`${name}-minus material-icons`}
          onClick={() => clickEvent(name, key, 'decrease')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id={`${name}-value`} className={`${name}-value`}>{complete[name][key]}</div>
        <div
          className={`${name}-plus material-icons`}
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
          className={`${name}min-minus material-icons`}
          onClick={() => clickEvent([name, 'tMin'], 'decrease')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id={`${name}min-value`} className={`${name}min-value`}>{complete[name].tMin}</div>
        <div
          className={`${name}min-plus material-icons`}
          onClick={() => clickEvent([name, 'tMin'], 'increase')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
        <div
          className={`${name}max-minus material-icons`}
          onClick={() => clickEvent([name, 'tMax'], 'decrease')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id={`${name}max-value`} className={`${name}max-value`}>{complete[name].tMax}</div>
        <div
          className={`${name}max-plus material-icons`}
          onClick={() => clickEvent([name, 'tMax'], 'increase')}
          onKeyDown={(e) => keysEvent(e)}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
      </div>
    );
  }

  return (
    <div className="storages">
      <div className="content">
        <div className="fridge">
          <div className="fridge-icon" />
          <div className="fridge-header">{DictJson[language].fridge}</div>
          <div className="fridge-subheader">{DictJson[language].capacity}</div>
          {setSwitcher('fridge', 'capacity')}
          <div className="fridgetemp-header">{DictJson[language].temp}</div>
          <div className="fridgetemp-subheader">{`${DictJson[language].tMin} - ${DictJson[language].tMax}`}</div>
          {setTempSwitcher('fridge')}
        </div>
        <div className="freezer">
          <div className="freezer-icon" />
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
      </div>
    </div>
  );
}

export default Storages;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
