import React from 'react'


const Demo2 = ({ toggle, handleToggleChange }) => {
  return (      
    <div className='toggle-container' onClick={handleToggleChange}>
        <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
            {toggle ? "ON" : "OOF"}
        </div>
        <p>Demos twooos</p>
        <h1>Demo works</h1>
    </div> 
  );
};

export default Demo2
