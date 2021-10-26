/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-cycle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStorages } from '../shared/redux/slicer';

const DictJson = require('../shared/json/dict.json');

function Storages() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const storages = useSelector((state) => state.storages);

  const complete = {
    fridge: {
      tMax: storages.fridge.tMax,
      tMin: storages.fridge.tMin,
      capacity: storages.fridge.capacity,
    },
    freezer: {
      tMax: storages.freezer.tMax,
      tMin: storages.freezer.tMin,
      capacity: storages.freezer.capacity,
    },
    kitchen0: {
      tMax: storages.kitchen0.tMax,
      tMin: storages.kitchen0.tMin,
      capacity: storages.kitchen0.capacity,
    },
    kitchen1: {
      tMax: storages.kitchen1.tMax,
      tMin: storages.kitchen1.tMin,
      capacity: storages.kitchen1.capacity,
    },
    pantry: {
      tMax: storages.pantry.tMax,
      tMin: storages.pantry.tMin,
      capacity: storages.pantry.capacity,
    },
    cellar0: {
      tMax: storages.cellar0.tMax,
      tMin: storages.cellar0.tMin,
      capacity: storages.cellar0.capacity,
    },
    cellar1: {
      tMax: storages.cellar1.tMax,
      tMin: storages.cellar1.tMin,
      capacity: storages.cellar1.capacity,
    },
    storageDef: {
      tMax: storages.storageDef.tMax,
      tMin: storages.storageDef.tMin,
      capacity: storages.storageDef.capacity,
    },
    names: ['fridge', 'freezer', 'kitchen0', 'kitchen1', 'kitchen2', 'cellar0', 'cellar1'],
  };

  const clickEvent = (index, set) => {
    if (set === 'increase') {
      if (index[1] === 'capacity') complete[index[0]].capacity += 5;
      else complete[index[0]][index[1]] += 1;
    }
    if (set === 'decrease') {
      if (index[1] === 'capacity' && complete[index[0]].capacity > 0) complete[index[0]].capacity -= 5;
      else complete[index[0]][index[1]] -= 1;
    }
    dispatch(setStorages(complete));
  };

  const fridgeBlock = () => (
    <div className="fridge">
      <div className="fridge-icon" />
      <div className="fridge-header">{DictJson[language].fridge}</div>
      <div className="fridge-subheader">{DictJson[language].capacity}</div>
      <div className="fridge-switcher">
        <div
          className="fridge-minus material-icons"
          onClick={() => { clickEvent(['fridge', 'capacity'], 'decrease'); }}
        >
          remove_circle
        </div>
        <div id="fridge-value" className="fridge-value">{complete.fridge.capacity}</div>
        <div
          onClick={() => clickEvent(['fridge', 'capacity'], 'increase')}
          className="fridge-plus material-icons"
        >
          add_circle
        </div>
      </div>
      <div className="fridgetemp-header">{DictJson[language].temp}</div>
      <div className="fridgetemp-subheader">{`${DictJson[language].tMin} - ${DictJson[language].tMax}`}</div>
      <div className="fridgetemp-switcher">
        <div
          onClick={() => clickEvent(['fridge', 'tMin'], 'decrease')}
          className="fridgemin-minus material-icons"
        >
          remove_circle
        </div>
        <div id="fridgemin-value" className="fridgemin-value">{complete.fridge.tMin}</div>
        <div
          onClick={() => clickEvent(['fridge', 'tMin'], 'increase')}
          className="fridgemin-plus material-icons"
        >
          add_circle
        </div>
        <div
          onClick={() => clickEvent(['fridge', 'tMax'], 'decrease')}
          className="fridgemax-minus material-icons"
        >
          remove_circle
        </div>
        <div id="fridgemax-value" className="fridgemax-value">{complete.fridge.tMax}</div>
        <div
          className="fridgemax-plus material-icons"
          onClick={() => clickEvent(['fridge', 'tMax'], 'increase')}
        >
          add_circle
        </div>
      </div>
    </div>
  );

  const freezerBlock = () => (
    <div className="freezer">
      <div className="freezer-icon" />
      <div className="freezer-header">{DictJson[language].freezer}</div>
      <div className="freezer-subheader">{DictJson[language].capacity}</div>
      <div className="freezer-switcher">
        <div
          onClick={() => clickEvent('freezer', 'decrease')}
          className="freezer-minus material-icons"
        >
          remove_circle
        </div>
        <div id="freezer-value" className="freezer-value">{complete.freezer.capacity}</div>
        <div
          onClick={() => clickEvent('freezer', 'increase')}
          className="freezer-plus material-icons"
        >
          add_circle
        </div>
      </div>
      <div className="freezertemp-header">{DictJson[language].temp}</div>
      <div className="freezertemp-subheader">{`${DictJson[language].tMin} - ${DictJson[language].tMax}`}</div>
      <div className="freezertemp-switcher">
        <div
          onClick={() => clickEvent('freezermin', 'decrease')}
          className="freezermin-minus material-icons"
        >
          remove_circle
        </div>
        <div id="freezermin-value" className="freezermin-value">{complete.freezer.tMin}</div>
        <div
          onClick={() => clickEvent('freezermin', 'increase')}
          className="freezermin-plus material-icons"
        >
          add_circle
        </div>
        <div
          onClick={() => clickEvent('freezermax', 'decrease')}
          className="freezermax-minus material-icons"
        >
          remove_circle
        </div>
        <div id="freezermax-value" className="freezermax-value">{complete.freezer.tMax}</div>
        <div
          onClick={() => clickEvent('freezermax', 'increase')}
          className="freezermax-plus material-icons"
        >
          add_circle
        </div>
      </div>
    </div>
  );

  const pantryBlock = () => (
    <div className="pantry">
      <div className="pantry-icon" />
      <div className="pantry-header">{DictJson[language].pantry}</div>
      <div className="pantry-subheader">{DictJson[language].capacity}</div>
      <div className="pantry-switcher">
        <div
          className="pantry-minus material-icons"
          onClick={() => clickEvent('pantry', 'decrease')}
        >
          remove_circle
        </div>
        <div id="pantry-value" className="pantry-value">{complete.pantry.capacity}</div>
        <div
          className="pantry-plus material-icons"
          onClick={() => clickEvent('pantry', 'increase')}
        >
          add_circle
        </div>
      </div>
      <div className="pantrytemp-header">{DictJson[language].temp}</div>
      <div className="pantrytemp-subheader">{`${DictJson[language].tMin} - ${DictJson[language].tMax}`}</div>
      <div className="pantrytemp-switcher">
        <div
          onClick={() => clickEvent('pantrymin', 'decrease')}
          className="pantrymin-minus material-icons"
        >
          remove_circle
        </div>
        <div id="pantrymin-value" className="pantrymin-value">{complete.pantry.tMin}</div>
        <div
          onClick={() => clickEvent('pantrymin', 'increase')}
          className="pantrymin-plus material-icons"
        >
          add_circle
        </div>
        <div
          className="pantrymax-minus material-icons"
          onClick={() => clickEvent('pantrymax', 'decrease')}
        >
          remove_circle
        </div>
        <div id="pantrymax-value" className="pantrymax-value">{complete.pantry.tMax}</div>
        <div
          onClick={() => clickEvent('pantrymax', 'increase')}
          className="pantrymax-plus material-icons"
        >
          add_circle
        </div>
      </div>
    </div>
  );

  // let petsBlock = ( <div className="pets">
  //     <div className="pets-header">{petsTitle}
  //     <div onClick={clickEvent} className="pets-plus material-icons">add_circle</div>
  //     </div>
  //     <div id="pets-icon" className="pets-icon"></div>
  //     <div className="pets-list">
  //     {pets}
  //     </div>
  //     </div>)

  return (
    <div className="storages">
      <div className="content">
        {fridgeBlock()}
        {freezerBlock()}
        {pantryBlock()}
        {/* {childrenBlock} */}
        {/* {petsBlock} */}
      </div>
    </div>
  );
}

export default Storages;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
