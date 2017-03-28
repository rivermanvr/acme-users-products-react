import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
import ProductForm from './ProductForm';

const ProductsList  = ({ products, onDelete }) => {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5 className="bodyHeading">Products:</h5>
                    <div id= "ProdForm">
                        <ProductForm />
                    </div>
                    <div>
                        <ul className="list-group">
                            { products.map( product => <ProductListItem onDelete={ onDelete } key={ product.id } product={ product } />) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

export default ProductsList;
