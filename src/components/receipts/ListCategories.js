import React from 'react';
const ListCategories = (props) => {
  const { categories } = props;
  if (!categories || categories.length === 0) return <p>No data, sorry</p>;
  // const data = repos.data;
  return (
    <div className='categories-list'>
      {categories.map((cat, i) => {
        return (
          <div key={i} className='list-item'>
            <div className='category-name'>{cat[0]} </div>
            {/* <div className='category-qty'>{cat[1]}</div> */}
          </div>
        );
      })}
    </div>
  );
};
export default ListCategories;