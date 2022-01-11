import React from 'react';

const Form = () => {
  return (
    <>
      <section className="form">
        <div className="inner">
          <h2>
            ПОЛУЧАЙТЕ СКИДКИ И ПОДАРКИ
          </h2>
          <form action="#">
            <input type="text" placeholder='Ваш e-mail' />
            <input type="submit" value="ПОДПИСАТЬСЯ" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;