import React from 'react'
import Banner from "../Banner";
import CategoriesLinks from "../category/CategoriesLinks";
import Catalog from "../catalog/Catalog";
import NewModels from "../models/NewModels";
import Form from '../UI/Form';
import Slider from "../slider/Slider";
import { newModels, modelSales } from '../../models.js'

const Home = () => {
  return (
    <>
      <Slider />
      <Banner />
      <CategoriesLinks />
      <Catalog />
      <NewModels title="Новые модели" type={newModels} />
      <Form />
      <NewModels title="Скидки до 90% " type={modelSales} />
    </>
  )
}

export { Home }
