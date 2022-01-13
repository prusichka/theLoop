import React , {useState} from 'react';
import {Link} from "react-router-dom";
import NewModelItem from "../models/NewModelItem";
import {allProducts} from "../../models";

const Products = () => {
  let categoryProducts = allProducts.map(product => product.category )
  let typeProducts = allProducts.map(product => product.type)

  categoryProducts = [...new Set(categoryProducts)];
  categoryProducts.unshift('Все товары')

  typeProducts = [...new Set(typeProducts)];
  typeProducts.unshift('Все товары')

  let [category, setCategory] = useState('Все товары');
  let [allProduct, setAllProduct] = useState(allProducts);

  const selectHandler = (e) => {
    setCategory(e.target.value)
  }

  const selectTypeHandler = (e) => {
    console.log(allProduct)
    setAllProduct(e.target.value)
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
              <select id="category-list" onChange={selectTypeHandler}>
                {typeProducts.map((product, id) => <option key={id}> {product} </option>)}
              </select>
            </div>
          </div>
          <div className="new-models-all">
            { category === 'Все товары'
              ? allProducts.map(item => <Link to={'/single-item/'+ item._id} key={item._id} ><NewModelItem info={item} /></Link>)
              : allProducts
                .filter(item => item.category === category)
                .map(item => <Link
                                to={'/single-item/'+ item._id}
                                key={item._id} >
                                  <NewModelItem info={item} />
                              </Link>)
            }
          </div>
        </div>
      </section>
    </>
  );
};

export { Products };