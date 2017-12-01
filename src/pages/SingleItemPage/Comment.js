import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    render() {
        const {
            text,
            color
        } = this.props;

        return (
            <li className="comment">
                <div className="comment-avatar">
                    <div
                        className="comment-image"
                        style={{background: color}}
                    >
                    </div>
                </div>
                <div className="comment-text">
                    <p>{text}</p>
                </div>
            </li>
        );
    }
}

Comment.PropTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    color: PropTypes.string
};

export default Comment;
