import React from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

const ProductList = props => {
  const { products } = props;
  const showPrice = price => alert(`price: ${price}`);

  const productList = products.map(product => (
    <ProductItem
      key={product.id}
      product={product}
      title={product.name}
      showPrice={showPrice}
    >
      <span className="badge bg-secondary">{product.id}</span>
    </ProductItem>
  ));

  return <div className="row">{productList}</div>;
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
