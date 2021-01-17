import Modal from '../Modal.js';
import React, { useState } from "react";

const ListRecents = (props) => {
  const [show, setShow] = useState(false);
  const { recents } = props;
  if (!recents || recents.length === 0) return <p>No repos, sorry</p>;
  // const data = repos.data;

  let dataModal = "Some text Here ddsf sdf sdf";

  const openModal = (e) => {
    console.log(e)
    setShow(true);
    }
  const closeModal = () => setShow(false);
  
  // const makeDataModal = (recent) => {
  //   return (
  //     <div className="modal-receipt">
  //       <div className="receipt-meal">{recent.strMeal}</div>
  //         <div className="receipt-category">
  //           <div className="receipt-cat">{recent.strCategory}</div>
  //           <div className="receipt-cat">{recent.strArea}</div>
  //       </div>
  //       <div className="receipt-thumb">
  //       <img src={recent.strMealThumb} alt={recent.strMeal} /> 
  //       </div>
  //       <div className="receipt-ingredient1">
  //         <div className="receipt-cat">{recent.strIngredient1}</div>
  //         <div className="receipt-cat">{recent.strMeasure1}</div>
  //       </div>
  //       <div className="receipt-ingredient2">
  //         <div className="receipt-cat">{recent.strIngredient2}</div>
  //         <div className="receipt-cat">{recent.strMeasure2}</div></div>
  //       <div className="receipt-ingredient3">
  //         <div className="receipt-cat">{recent.strIngredient3}</div>
  //         <div className="receipt-cat">{recent.strMeasure3}</div></div>
  //       <div className="receipt-ingredient4">
  //         <div className="receipt-cat">{recent.strIngredient4}</div>
  //         <div className="receipt-cat">{recent.strMeasure4}</div></div>
  //       <div className="receipt-ingredient5">
  //         <div className="receipt-cat">{recent.strIngredient5}</div>
  //         <div className="receipt-cat">{recent.strMeasure5}</div></div>
  //       <div className="receipt-ingredient6">
  //         <div className="receipt-cat">{recent.strIngredient6}</div>
  //         <div className="receipt-cat">{recent.strMeasure6}</div></div>
  //       <div className="receipt-ingredient7">
  //         <div className="receipt-cat">{recent.strIngredient7}</div>
  //         <div className="receipt-cat">{recent.strMeasure7}</div></div>
  //       <div className="receipt-ingredient8">
  //         <div className="receipt-cat">{recent.strIngredient8}</div>
  //         <div className="receipt-cat">{recent.strMeasure8}</div></div>
  //       <div className="receipt-ingredient9">
  //         <div className="receipt-cat">{recent.strIngredient9}</div>
  //         <div className="receipt-cat">{recent.strMeasure9}</div>
  //       </div>
  //       <div className="receipt-ingredient10">
  //         <div className="receipt-cat">{recent.strIngredient10}</div>
  //         <div className="receipt-cat">{recent.strMeasure10}</div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className='recent-content'>
      {recents.map((recent) => {
        const divStyle = {
           backgroundImage: 'url(' + recent.strMealThumb + ')',
              };
        return (
            <div onClick={openModal} style={divStyle} key={recent.idMeal} className='receipt' >
            {/* <span className='receipt-category'>{recent.strCategory} {recent.strArea}</span> */}
            <div className='receipt-meal'>{recent.strMeal} </div>
          </div>
        );
      })}
    <Modal closeModal={closeModal} show={show} dataModal={dataModal}/>
    </div>
  );
};
export default ListRecents;


