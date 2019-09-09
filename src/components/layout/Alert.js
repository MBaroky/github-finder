import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle'></i> {alert.text}
    </div>
  );
};

export default Alert;
