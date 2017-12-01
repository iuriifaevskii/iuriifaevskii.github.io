import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    state = {
        visibleItemDelete: true
    };

    onMouseEnter = () => {
        const { visibleItemDelete } = this.state;
        this.setState({
            visibleItemDelete: !visibleItemDelete
        });
    }

    onMouseLeave = () => {
        const { visibleItemDelete } = this.state;
        this.setState({
            visibleItemDelete: !visibleItemDelete
        });
    }

    cutTextItem = (text) => {
        return text.length > 25 
            ? `${text.substring(0, 25)}...` 
            : text;
    }

    render() {
        const { visibleItemDelete } = this.state;

        const {
            id,
            text,
            commentCount,
            onItemDelete,
            onItemSelect
        } = this.props;
        
        return (
            visibleItemDelete ? 
            <li onMouseEnter={this.onMouseEnter}>
                <div
                    className="items-title"
                    onClick={onItemSelect.bind(null, id)}
                >
                    <h5>{this.cutTextItem(text)}</h5>
                </div>
                <div className="items-count">
                    <span>{commentCount}</span>
                </div>
            </li> : 
            <li onMouseLeave={this.onMouseLeave}>
                <div
                    className="items-title-second"
                    onClick={onItemSelect.bind(null, id)}
                >
                    <h5>{this.cutTextItem(text)}</h5>
                </div>
                <div className="item-delete">
                    <button onClick={onItemDelete.bind(null, id)}>Delete</button>
                </div>
            </li>
        );
    }
}

Item.PropTypes = {
    commentCount: PropTypes.number,
    id: PropTypes.number,
    onItemDelete: PropTypes.func,
    onItemSelect: PropTypes.func,
    text: PropTypes.string
};

export default Item;
