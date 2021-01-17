import React, { useState } from "react";
import Modal from '../Modal.js';
// import Button from "../Button";
import UpdateAll from "../UpdateAll";
// import withListLoading from './WithListLoading';
import CategoriesList from './CategoriesList';
// import AreasList from './AreasList';
import RecentsList from './RecentsList';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const handleClick = () => { UpdateAll("mode_receipts") };

function Receipts() {
  const language = PropertiesJson.language;
  const receiptsTitle = DictJson[language].receiptsTitle;
  // const next = DictJson[language].next;
  const [show, setShow] = useState(false);
  let dataModal = "Some text Here ddsf sdf sdf";

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className='receipts'>
      <header className="receipts-header">
        <h2 onClick={ handleClick }>{ receiptsTitle }</h2>
      </header>
      <div className='receipts-wrapper'>
      <div className="receipts-content">
            {!show && <button onClick={openModal}>Show modal</button>}
        <Modal closeModal={closeModal} show={show} dataModal={dataModal}/>
        <CategoriesList />
        <RecentsList />
        {/* <AreasList /> */}
      </div>
      {/* <div className="buttons">
        <Button buttonName = { next } target = "mode_ingredients" />
        </div> */}
    </div>
    </div>
  );
}
export default Receipts;