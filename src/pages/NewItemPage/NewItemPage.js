import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CreateItem from './CreateItem';

class NewItemPage extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('items'));

        if (items) {
            this.setState({ items });
        }
    }
    
    handleItemAdd = ({ text }) => {
        const { items } = this.state;
        items.push({
            id: new Date().getTime(),
            text,
            commentCount: 0,
        });

        localStorage.setItem('items', JSON.stringify(items));

        this.props.history.push('/items');
    };

    render() {
        return (
            <div className="main">
                <div className="header-flex">
                    <Link className="nav" to="/">&#8592;</Link>
                    <h1>Create new item</h1>
                </div>
                <div className="container-create-item">
                    <CreateItem onItemAdd={this.handleItemAdd} />
                </div>
            </div>
        );
    }
}

export default NewItemPage;
