import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

class Items extends Component {
    render() {
        const {
            items,
            onItemDelete,
            onItemSelect
        } = this.props;
        
        return (
            <ol className="items">
                {
                    items ? items.map(item => {
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                commentCount={item.commentCount}
                                onItemDelete={onItemDelete}
                                onItemSelect={onItemSelect}
                            />)
                    }) : null
                }
            </ol>
        );
    }
}

Items.propTypes = {
    items: PropTypes.array,
    onItemDelete: PropTypes.func,
    onItemSelect: PropTypes.func,
};

export default Items;