import React, {useRef, useState} from 'react';
import {allProducts} from "../../models";
import {useDispatch, useSelector} from "react-redux";
import {_addNewCart} from "../../store/reducers/newProductReducer";

let typeProducts = allProducts.map(product => product.type)
let categoryProducts = allProducts.map(product => product.category)
typeProducts = [...new Set([...typeProducts])];
categoryProducts = [...new Set([...categoryProducts])];

const Create = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state=>state.newProduct.newCartArr)
  const [image, setImage] = useState()
  const titleRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const saleRef = useRef()
  const categoryRef = useRef()
  const typeRef = useRef()
  const newRef = useRef()
  const imgRef = useRef()
  const formRef = useRef()

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

  function addNewProduct () {
    const newObj = {
      title: titleRef.current.value,
      price: parseInt(priceRef.current.value),
      sales: parseInt(saleRef.current.value),
      category: categoryRef.current.value,
      type: typeRef.current.value,
      new: newRef.current.checked,
      img: image,
      description: descriptionRef.current.value,
      _id: selector.length+1
    }
    dispatch(_addNewCart(newObj))
  }

  function onSubmitForm(e) {
    e.preventDefault();
    const inputsArr = Array.from(formRef.current.children).filter(el => el.classList.contains('field') && !el.classList.contains('field-mage'));
    inputsArr.map((el) => {
      // console.log(el.lastChild.checked || el.lastChild.value)
      console.log(el.lastChild.id)
    })
  }

  return (
    <section className='section-create'>
      <div className="inner">
        <form ref={formRef} onSubmit={(e) => onSubmitForm(e)} className="create">
          <div className="field">
            <label htmlFor="title">
              ????????????????
            </label>
            <input
              type="text"
              placeholder='????????????????'
              id='title'
              name='title'
              ref={titleRef}
              />
          </div>
          <div className="field">
            <label htmlFor="price">
              ????????
            </label>
            <input
              type="number"
              placeholder='????????'
              id='price'
              name='price'
              ref={priceRef} />
          </div>
          <div className="field">
            <label htmlFor="sale">
              ????????????
            </label>
            <input
              type="text"
              placeholder='????????????'
              id='sales'
              name='sale'
              ref={saleRef}
            />
          </div>
          <div className="field">
            <label htmlFor="category">
              ??????????????????
            </label>
            <select name="category" id="category" ref={categoryRef}>
              {categoryProducts.map((product, id) => <option key={id}> {product} </option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="type">
              ?????? ????????????
            </label>
            <select name="type" id="type" ref={typeRef}>
              {typeProducts.map((product, id) => <option key={id}> {product} </option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="description">
              ????????????????
            </label>
            <textarea
              placeholder='????????????????'
              id='description'
              name='description'
              ref={descriptionRef}
            />
          </div>
          <div className="field check-box">
            <label htmlFor="new">
              ??????????????
            </label>
            <input
              type="checkbox"
              placeholder='????????????????'
              id='new'
              name='new'
              ref={newRef}
                />
          </div>
          <div className="field field-mage">
            <label htmlFor="image">
              ?????????????????? ????????????????
            </label>
            <input
              type="file"
              id='image'
              onChange={(e) => showFile(e)}
              name='image'
              ref={imgRef}/>
        </div>
          <img src={image} alt="" />
        <button onClick={addNewProduct}>
          ???????????????? ??????????
        </button>
        </form>
      </div>
    </section>
  );
};

export {Create};