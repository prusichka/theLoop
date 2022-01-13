import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import NewModelItem from "../models/NewModelItem";
import {allProducts} from "../../models";

const Products = () => {
  let categoryProducts = allProducts.map(product => product.category)
  let typeProducts = allProducts.map(product => product.type)
  let [products, setProducts] = useState(allProducts)
  let [filterProduct, setFilterProduct] = useState()
  categoryProducts = [...new Set(['Все товары',...categoryProducts])];
  typeProducts = [...new Set(['Все товары',...typeProducts])];

  function selectHandler() {

  }

  return (
    <>
      <section className="new-models">
        <div className="inner">
          <h2>
            Все товары
          </h2>
          <div className="filter">
            <div className="first">
              <label htmlFor="ice-cream-choice">Сортировать по:  </label>
              <select id="category-list" onChange={selectHandler}>
                {categoryProducts.map((product, id) => <option key={id}> {product} </option>)}
              </select>
            </div>
            <div className="second">
              <label htmlFor="ice-cream-choice">Тип товара:  </label>
              <select id="category-list" onChange={selectHandler} >
                {typeProducts.map((product, id) => <option key={id}> {product} </option>)}
              </select>
            </div>
          </div>
          <div className="new-models-all">
            {products.map(item => <Link to={'/single-item/' + item._id} key={item._id}><NewModelItem
              info={item} /></Link>)}
          </div>
        </div>
      </section>
    </>
  );
};

export {Products};