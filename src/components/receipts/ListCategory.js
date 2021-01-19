import Modal from './ReceiptModal.js';
import React, { useState } from "react";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const ListCategory = (props) => {
  const language = PropertiesJson.language;
  const noDataMessage = DictJson[language].noDataMessage;

  const [show, setShow] = useState(false);
  const { recents } = props;
  if (!recents || recents.length === 0) return <p>{noDataMessage}</p>;

  const openModal = (e) => {
    const target = e.target.classList[0]
    localStorage.setItem("modalSee", JSON.stringify(recents[target]))
    setShow(true);
  }

  const closeModal = () => setShow(false);
  
  return (
    <div className='category-content'>
      {recents.map((recent, i) => {
        const clasNm =  i + " receipt";
        const clasNmM =  i + " receipt-meal";
        const divStyle = {
           backgroundImage: 'url(' + recent.strMealThumb + ')',
              };
        return (
            <div onClick={openModal} style={divStyle} key={recent.idMeal} className={ clasNm } >
            {/* <span className='receipt-category'>{recent.strCategory} {recent.strArea}</span> */}
            <div className={clasNmM}>{recent.strMeal} </div>
          </div>
        );
      })}
    <Modal closeModal={closeModal} show={show}/>
    </div>
  );
};
export default ListCategory;


