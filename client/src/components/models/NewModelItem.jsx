import React from 'react';
const NewModelItem = ({info}) => {
  return (
    <div className="new-item">
      <div className="new-item-border" />
        <img src={info.img} alt="" />
        <h2>{info.title}</h2>
        <strong>₽ {info.price}</strong>
    </div>
  );
};

export default NewModelItem;