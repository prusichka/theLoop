import React from 'react';
import SingleCategoriesLink from "./SingleCategoriesLink";
import { categories } from '../../models'


const CategoriesLinks = () => {
  return (
    <>
      <section className="categories-links">
        <div className="inner">
          <SingleCategoriesLink description={categories.colMan}/>
          <SingleCategoriesLink description={categories.colWoMan}/>
        </div>
      </section>
    </>
  );
};

export default CategoriesLinks;