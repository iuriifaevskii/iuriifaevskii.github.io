import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Comments from './Comments';
import CreateComment from './CreateComment';

class SingleItemPage extends Component {
    state = {
        items: [],
        comments: [],
        selectedComments: [],
        selectedItemName: ''
    };

    componentWillUpdate(nextProps, nextState) {
        const nextParamsId = nextProps.match.params.id;
        
        if (nextParamsId !== this.props.match.params.id) {
            
            const { items, comments } = this.state;
            const itemsExist = items
                ? items.filter(item => item.id === +nextParamsId)
                : [];
            
            this.fetchCommentsByItem (itemsExist, items, comments, nextParamsId);
        }
    }

    fetchCommentsByItem (itemsExist, items, comments, selectedItemId) {
        if (itemsExist.length === 0) {
            this.props.history.push('/404');
        }

        if (items && itemsExist.length !== 0) {
            this.setState({
                items,
                selectedItemName: itemsExist[0].text
            });
        }
        
        if (comments) {
            const newComments = comments.filter(comment => comment.itemId === selectedItemId);
            this.setState({
                comments,
                selectedComments: newComments
            });
        }
    }

    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('items'));
        const comments = JSON.parse(localStorage.getItem('comments'));
        const selectedItemId = this.props.match.params.id;
        
        const itemsExist = items
            ? items.filter(item => item.id === +selectedItemId) 
            : [];
        
        this.fetchCommentsByItem (itemsExist, items, comments, selectedItemId)
    }

    handleCommentAdd = ({ text, color, itemId }) => {
        const { comments } = this.state;
        const selectedItemId = this.props.match.params.id;

        comments.push({
            id: new Date().getTime(),
            text,
            color,
            itemId,
        });

        localStorage.setItem('comments', JSON.stringify(comments));

        const newComments = comments.filter(comment => comment.itemId === selectedItemId);
        
        this.changeCommentCountInItem(newComments.length);
        
        this.setState({
            comments,
            selectedComments: newComments,
        });
    }

    changeCommentCountInItem = (commentCount) => {
        const selectedItemId = this.props.match.params.id;
        const { items } = this.state;

        const findedItem = items.filter(item => item.id === +selectedItemId)[0];
        findedItem.commentCount = commentCount;

        const newItems = items.filter(item => {
            if (item.id === findedItem) {
                item = findedItem;
                return true;
            }
            return true;
        });
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    render() {
        const {
            selectedComments,
            selectedItemName
        } = this.state;

        const selectedItemId = this.props.match.params.id;

        return (
            <div className="main main-single">
                <div className="header-flex">
                    <Link to="/items" className="nav">&#8592;</Link>
                    <h1>{selectedItemName}</h1>
                </div>
                <div className="single-item">
                    <Comments
                        comments={selectedComments}
                    />
                    <CreateComment
                        selectedItemId={selectedItemId}
                        onCommentAdd={this.handleCommentAdd}
                    />
                </div>
            </div>
        );
    }
}

export default SingleItemPage;
