import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Comment from './Comment';

class Comments extends Component {
    render() {
        const { comments } = this.props;
        
        return (
            <ol className="comments">
                {
                    !_.isEmpty(comments) ? comments.map(comment => {
                        return (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                text={comment.text}
                                color={comment.color}
                            />)
                    }) : <p className="no-comments">No comments yet...</p>
                }
            </ol>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.array,
};

export default Comments;
