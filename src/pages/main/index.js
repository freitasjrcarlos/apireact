import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
  }

  componentDidMount(){
    this.loadProducs();
  }

  loadProducs = async ()=>{
    const response = await api.get('/todos');

    this.setState({
      products: response.data
    });

  };

  render(){
    const {  products } = this.state;

  return  (
    <div className="product-list">
      {products.map(product => (
     <article key={product.id}>
      <strong>{product.id}</strong>
      <p>{product.title}</p>
     </article>
      ))}
    </div>
  )
  }
}