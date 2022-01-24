import React from 'react'

const Select = ({ updateFilterStateItemValue, typeProducts, title, field }) => {
  return (
    <>
      <label htmlFor="ice-cream-choice">{title}</label>
      <select
        onChange={(e) => {
          updateFilterStateItemValue({ field: field, value: e.target.value })
        }
        }
      >
        {typeProducts.map((product, id) => <option key={id}> {product} </option>)}
      </select>
    </>
  )
}

export default Select
