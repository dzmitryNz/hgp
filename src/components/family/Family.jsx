/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFamily } from '../shared/redux/slicer';

const DictJson = require('../shared/json/dict.json');

// function keyHandler(e) { console.log(e); }

function Family() {
  const familyState = useSelector((state) => state.family);
  const language = useSelector((state) => state.language);
  const familyModes = useSelector((state) => state.familyModes);
  const dispatch = useDispatch();
  const [showingNewPets, showNewPets] = useState(false);
  const [newPet, setNewPet] = useState('');
  const [family, familySet] = useState(familyState);
  const {
    adultsTitle, adultsDietTitle, childrenTitle, childrenDietTitle, petsTitle,
  } = DictJson[language];
  const familyModesArr = [];
  familyModes.forEach((el) => {
    const classNameMode = `${el} family-mode`;
    familyModesArr.push(<div key={el} className={classNameMode}>{DictJson[language][el]}</div>);
  });

  useEffect(() => {
    dispatch(setFamily(family));
  }, [family]);

  const complete = {
    adults: family.adults,
    adultsdiet: family.adultsdiet,
    children: family.children,
    childrendiet: family.childrendiet,
    pets: family.pets,
  };

  const pets = new Array(...complete.pets);

  const clickEvent = (index, set) => {
    if (index === 'pet') complete.pets = complete.pets.filter((el) => el !== set);
    if (set === 'increase') complete[index] += 1;
    if (set === 'decrease' && complete[index] !== 0) complete[index] -= 1;
    if (complete.adultsdiet > complete.adults) complete.adults = complete.adultsdiet;
    if (complete.childrendiet > complete.children) complete.children = complete.childrendiet;
    familySet(complete);
  };

  function setSwitcher(name) {
    return (
      <div className={`${name}-switcher`}>
        <div
          className={`${name}-minus material-icons`}
          onClick={() => clickEvent(name, 'decrease')}
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
        <div id={`${name}-value`} className={`${name}-value`}>{complete[name]}</div>
        <div
          className={`${name}-plus material-icons`}
          onClick={() => clickEvent(name, 'increase')}
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          add_circle
        </div>
      </div>
    );
  }

  const petsBlock = [];
  pets.forEach((pet, i) => {
    const minusCN = `${i}${pet}-minus material-icons`;
    const valueClassName = `${i}${pet}-value`;
    const petClassName = `${i}${pet} pet`;
    const block = (
      <div id={pet} key={petClassName} className={petClassName}>
        <div key={valueClassName} className={valueClassName}>{pet}</div>
        <div
          className={minusCN}
          key={minusCN}
          onClick={() => clickEvent('pet', pet)}
          onKeyDown={clickEvent}
          role="button"
          tabIndex="0"
        >
          remove_circle
        </div>
      </div>
    );
    petsBlock.push(block);
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (pets.indexOf(newPet) !== -1) return;
    pets.push(newPet);
    complete.pets = pets;
    familySet(complete);
    showNewPets(false);
    setNewPet('');
  }

  function handleChange(e) { setNewPet(e.target.value); }

  return (
    <section className="family">
      <div className="content">
        <div className="family-modes">
          { familyModesArr }
        </div>
        <div className="mode-family">
          <div className="adults">
            <div className="adults-header">{adultsTitle}</div>
            <div className="adults-icon" />
            {setSwitcher('adults')}
            <div className="adultsdiet-header">{adultsDietTitle}</div>
            {setSwitcher('adultsdiet')}
          </div>
          <div className="children">
            <div className="children-header">{childrenTitle}</div>
            <div className="children-icon" />
            {setSwitcher('children')}
            <div className="childrendiet-header">{childrenDietTitle}</div>
            {setSwitcher('childrendiet')}
          </div>
          <div className="pets">
            <div id="pets-icon" className="pets-icon" />
            <div className="pets-header">{petsTitle}</div>
            <div
              role="button"
              tabIndex="0"
              onClick={() => showNewPets(!showingNewPets)}
              className="pets-plus material-icons"
            >
              {showingNewPets ? 'remove_circle' : 'add_circle'}
            </div>
            {showingNewPets
            && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="pets-add"
                type="text"
                value={newPet}
                onChange={(e) => handleChange(e)}
              />
              <div
                role="button"
                tabIndex="0"
                className="pets-plus material-icons"
                onClick={(e) => handleSubmit(e)}
                type="submit"
                value="+"
              >
                add_circle
              </div>
            </form>
            )}
            <div className="pets-switcher">
              {petsBlock}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Family;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
