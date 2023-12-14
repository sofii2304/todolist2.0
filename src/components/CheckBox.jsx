import React from "react";

const Checkbox = ({ isChecked, onChange }) => {
  return(
    <input type="checkbox" checked={isChecked} onChange={onChange} />
  );
};

export default Checkbox;