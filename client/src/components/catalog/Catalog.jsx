import React from 'react';
import CatalogItem from "./CatalogItem";
import {catalogItems} from '../../models.js'

const Catalog = () => {
  return (
    <>
      <section className="catalog">
        <div className="inner">
          {catalogItems.map((item, id) => <CatalogItem info={item} key={id} />)}
        </div>
      </section>
    </>
  );
};

export default Catalog;