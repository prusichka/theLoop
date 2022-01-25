import React, {useState} from 'react';
import {allProducts} from "../../models";
import Select from "../UI/Select";

let typeProducts = allProducts.map(product => product.type)
typeProducts = [...new Set([...typeProducts])];

const Create = () => {
  const [image, setImage] = useState()

  function showFile(event) {
    const {id} = event.target
    const element = document.getElementById(id)
    const file = element.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      setImage(reader.result)
    };
  }

  return (
    <section className='section-create'>
      <div className="inner">
        <div className="create">
          <div className="field">
            <label htmlFor="title">
              Название
            </label>
            <input
              type="text"
              placeholder='Название'
              id='title'
              name='title' />
          </div>
          <div className="field">
            <label htmlFor="price">
              Цена
            </label>
            <input
              type="number"
              placeholder='Цена'
              id='price'
              name='price' />
          </div>
          <div className="field">
            <label htmlFor="sale">
              Скидка
            </label>
            <input
              type="text"
              placeholder='Скидка'
              id='sale'
              name='sale' />
          </div>
          <div className="field">
            <label htmlFor="category">
              Категория
            </label>
            <select name="category" id="category">
              {typeProducts.map((product, id) => <option key={id}> {product} </option>)}
            </select>
          </div>
          <div className="field">
            <Select typeProducts={typeProducts} title={'Тип товара:  '} field={'type'} />
          </div>
          <div className="field">
            <label htmlFor="description">
              Описание
            </label>
            <textarea
              placeholder='Описание'
              id='description'
              name='description' />
          </div>
          <div className="field check-box">
            <label htmlFor="title">
              Новинка
            </label>
            <input
              type="checkbox"
              placeholder='Название'
              id='title'
              name='title' />
          </div>
          <div className="field">
            <label htmlFor="image">
              Загрузить картинку
              <input
                type="file"
                id='image'
                onChange={(e) => showFile(e)}
                name='description' />
            </label>
        </div>
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export {Create};