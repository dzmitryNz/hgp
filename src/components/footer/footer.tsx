import React from 'react';
import logo from '../../assets/images/rs_school_js.svg';


function footer() {
  return (
    <div className="footer">
      <div className="year">2021</div>
      <div><a href="https://github.com/chernataly2020">chernataly</a></div>
      <div><a href="https://github.com/dzmitryNz">dzmitryNZ</a></div>
      <div><a href="https://github.com/kosmodromm">Anton Kizerev</a></div>
      <div><a href="https://github.com/Saylance2503">Saylance2503</a></div>
      <a href="https://rs.school/js/">
        <img src={logo} className="rs-school-logo" alt="rs-school-logo" />
      </a>
    </div>
  );
}

export default footer;
