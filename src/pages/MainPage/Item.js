import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';
import _ from 'lodash';

class Item extends Component {
    render() {
        const {
            id,
            text,
            commentCount,
            onItemDelete,
            onItemSelect
        } = this.props;
        
        return (
            <ReactSwipe swipeOptions={{continuous: false, speed: 200}}>
                <li>
                    <div
                        className="items-title"
                        onClick={onItemSelect.bind(null, id)}
                    >
                        <h5>{_.truncate(text, { 'length': 25 })}</h5>
                    </div>
                    <div className="items-count">
                        <span>{commentCount}</span>
                    </div>
                </li> 
                <li>
                    <div
                        className="items-title-second"
                        onClick={onItemSelect.bind(null, id)}
                    >
                        <h5>{_.truncate(text, { 'length': 25 })}</h5>
                    </div>
                    <div className="item-delete">
                        <button onClick={onItemDelete.bind(null, id)}>Delete</button>
                    </div>
                </li>
            </ReactSwipe>
        );
    }
}

Item.propTypes = {
    commentCount: PropTypes.number,
    id: PropTypes.number,
    onItemDelete: PropTypes.func,
    onItemSelect: PropTypes.func,
    text: PropTypes.string
};

export default Item;
