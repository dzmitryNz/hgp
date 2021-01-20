import React from 'react';
import ReactDOM from 'react-dom';

import CategoryList from './CategoryList';

let PropertiesJson = require("../json/properties.json");
const categorySt = PropertiesJson.category;
console.log("categorProp", categorySt)

const changeCategory = (e) => {
  let propertiesChanged = false;
  const target = e.target.className.slice(0, -14);
  console.log (e.target.className.slice(0, -14))
  if (target !== categorySt) {
    PropertiesJson.category = target;
    propertiesChanged = true;
    let localProp = JSON.parse(localStorage.getItem('hgp-properties'));
    localProp.category = target;
    localStorage.setItem('hgp-properties', JSON.stringify(localProp))
  }
  if (propertiesChanged) ReactDOM.render(<CategoryList />, document.getElementById('category'))
}

const ListCategories = (props) => {

  const { categories } = props;
  if (!categories || categories.length === 0) return <p>No data, sorry</p>;
  // const data = repos.data;
  return (
    <div className='categories-list'>
      {categories.map((cat, i) => {
        const category0 = cat[0]; 
        const activeClassName = category0 + " category-name active-category"
        const categoryClassName = category0 + " category-name"
        const catClassName = category0 === categorySt ?  activeClassName : categoryClassName;
        return (
          <div key={i} className='list-item'>
            <div onClick={changeCategory} className={catClassName}>{category0}</div>
            {/* <div className='category-qty'>{cat[1]}</div> */}
          </div>
        );
      })}
    </div>
  );
};
export default ListCategories;