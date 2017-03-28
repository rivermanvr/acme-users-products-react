import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import UserList from './UserList';
import ProductList from './ProductList';

class Main extends Component {
    constructor() {
        super();
        this.state = { view: 'Products', products: [], users: []};
    }
    componentDidMount() {
        Promise.all([
            axios.get('/api/users'),
            axios.get('/api/products')
        ])
        .then(([users, products]) => {
            this.setState({ products: products.data, users: users.data });

        })
    }
    render() {
        let dataView;
        if (this.state.view === 'Users') {
            dataView = <UserList users={ this.state.users } />;
        } else {
            dataView = <ProductList products={ this.state.products } />;
        }

        return (
            <div className="container">
                <h3>Acme Users & Products</h3>
                <Nav view={ this.state.view} users={ this.state.users} products={ this.state.products } />
                { dataView }
            </div>
        )
    }
}

export default Main;
