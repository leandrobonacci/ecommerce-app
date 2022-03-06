import React, { useState, Component } from 'react';
import axios from 'axios';
import './products.css';

class ProductosCall extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    await axios
      .get('http://localhost:3001/api/productos/')
      .then((res) => {
        console.log(res.data);
        this.setState({ products: res.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err.statusText);
      });
  }

  render() {
    return (
      <>
        {this.state.products.map((products) => (
          <div className='product' key={products.id}>
            <div className='product__info'>
              <p>{products.title}</p>
              <p>{products.description}</p>
              <p className='product__price'>
                <small>$</small>
                <strong>{products.price}</strong>
              </p>
            </div>

            <img className='product__img' src={products.imgurl} alt='imagen'></img>

            <button classname='buttonn'>Agregar al carro</button>
          </div>
        ))}
      </>
    );
  }
}

export default ProductosCall;
