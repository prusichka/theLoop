import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import NewModelItem from "../models/NewModelItem";
import { allProducts } from "../../models";
import Select from '../UI/Select';

const Products = () => {
  let categoryProducts = allProducts.map(product => product.category)
  categoryProducts = [...new Set(['Все товары', ...categoryProducts])];

  let typeProducts = allProducts.map(product => product.type)
  typeProducts = [...new Set(['Все товары', ...typeProducts])];

  let [products, setProducts] = useState(allProducts)

  const initialFilterState = {
    // Значення state , для фільраціїй: Сортування по категорії і типу
    category: {
      value: null
    },
    type: {
      value: null
    }
  }

  const [filterState, setFilterState] = useState(initialFilterState)

  const filter = (newFilterState) => {
    let productResult = allProducts

    if (newFilterState.type.value === 'Все товары' && newFilterState.category.value === 'Все товары') {
      setProducts(allProducts)
      return;
    }

    function filterProduct(productValue) {
      if (newFilterState[productValue].value !== null) {
        productResult = productResult.filter((el) => el[productValue] === newFilterState[productValue].value);
      }
    }

    filterProduct('category')
    filterProduct('type')

    if (newFilterState.category.value === 'Все товары') {
      return newFilterState.type.value !== null
        ? setProducts(allProducts.filter((el) => el.type === newFilterState.type.value))
        : setProducts(allProducts)
    }

    if (newFilterState.type.value === 'Все товары') {
      return newFilterState.category.value !== null
        ? setProducts(allProducts.filter((el) => el.category === newFilterState.category.value))
        : setProducts(allProducts)
    }

    setProducts(productResult);
  }

  const updateFilterStateItemValue = ({ field, value }) => {
    const newFilteringState = {
      ...filterState,
      [field]: { ...filterState[field], value: value },
    };
    setFilterState(newFilteringState);
    filter(newFilteringState);
  };

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
              <select
                id="category-list"
                onChange={(e) =>
                  updateFilterStateItemValue({ field: 'category', value: e.target.value })
                }
              >
                {categoryProducts.map((product, id) => <option key={id}> {product} </option>)}
              </select>
            </div>
            <div className="second">
              <label htmlFor="ice-cream-choice">Тип товара:  </label>
              <select
                id="category-list"
                onChange={(e) =>
                  updateFilterStateItemValue({ field: 'type', value: e.target.value })
                }
              >
                {typeProducts.map((product, id) => <option key={id}> {product} </option>)}
              </select>
              <Select updateFilterStateItemValue={updateFilterStateItemValue} typeProducts={typeProducts} title={'Тип товара:  '} field={'type'} />
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

export { Products };