import React, { createContext } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/config';

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    onSnapshot(collection(db, 'Products'), (snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
        if (doc.exists()) {
          products.push({
            ProductID: doc.id,
            ProductName: doc.data().ProductName,
            ProductPrice: doc.data().ProductPrice,
            ProductImage: doc.data().ProductImage,
          });
        }
      });
      this.setState({
        products: products,
      });
    });
  }

  render() {
    return (
      <ProductsContext.Provider value={{ products: [...this.state.products] }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
