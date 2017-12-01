import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

class CreateComment extends Component {
    state = {
        text: ''
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const text = this.state.text.trim();
        const itemId = this.props.selectedItemId;
        const color = randomColor();

        if (!text) {
            return;
        }

        this.props.onCommentAdd({
            text,
            color,
            itemId
        });

        this.setState({ text: '' });
    }
    
    render() {
        const { text } = this.state;
        
        return (
            <div className="comments-footer">
                <form onSubmit={this.onSubmit}>
                    <div className="field-row">
                        <input
                            type="text"
                            value={text}
                            onChange={this.handleTextChange}
                            autoFocus
                            autoComplete="off"
                        />
                    </div>
                    <div className="btn-row">
                        <button
                            type="submit"
                            disabled={!text}
                        >&#x3E;
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

CreateComment.PropTypes = {
    onCommentAdd: PropTypes.func,
    selectedItemId: PropTypes.number,
};

export default CreateComment;
