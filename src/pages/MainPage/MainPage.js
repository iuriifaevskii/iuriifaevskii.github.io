import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Items from './Items';

class MainPage extends Component {
    state = {
        items: [],
        comments: [],
        selectedItem: null,
    }

    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('items'));
        const comments = JSON.parse(localStorage.getItem('comments'));
        
        if (items) {
            this.setState({ items });
        }

        if (comments) {
            this.setState({ comments });
        }
    }

    handleItemDelete = (id) => {
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({ items });
        
        localStorage.setItem('items', JSON.stringify(items));
        
        this.removeCommentsItem(id);
    }

    removeCommentsItem = (itemId) => {
        const { comments } = this.state;
        const newComments = comments.filter(comment => +comment.itemId !== itemId);
        
        localStorage.setItem('comments', JSON.stringify(newComments));

        this.setState({ comments: newComments })
    }

    handleItemSelect = (selectedItem) => {
        this.props.history.push(`/items/${selectedItem}`);
    }

    render() {
        const { items } = this.state;

        return (
            <div className="main">
                <div className="header-list">
                    <h1>Sayer</h1>
                    <h4>world&#39;s most used time waster</h4>
                </div>
                <div className="container-list">
                    <Items
                        onItemSelect={this.handleItemSelect}
                        onItemDelete={this.handleItemDelete}
                        items={items}
                    />
                    <div className="item-new">
                        <Link to="/items/new" className="new">
                            <span>+</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
