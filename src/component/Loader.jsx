import React from 'react';
import loader from '../images/loader1.gif';

function Loader() {
  return (
    <div className="loading">
      <div>
        <img src={loader} alt="chargement" />
      </div>
    </div>
  );
}

export default Loader;
