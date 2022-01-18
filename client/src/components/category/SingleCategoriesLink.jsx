import React from 'react';
import link from '../../images/link.svg'

const SingleCategoriesLink = ({ description }) => {
  return (
    <>
      <div className="single-categories">
        <h2>
          <strong>{description.titleSex}</strong>
          КОЛЛЕКЦИЯ
        </h2>
        <p>{description.description}</p>
        <a href="/">
          <img src={link} alt={link} />
        </a>
        <img src={description.img} alt='' className="category-img" />
      </div>
    </>
  );
};

export default SingleCategoriesLink;