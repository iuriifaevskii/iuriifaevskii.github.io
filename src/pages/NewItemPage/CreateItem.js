import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateItem extends Component {
    state = {
        text: '',
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const text = this.state.text.trim();
        
        if (!text) {
            return;
        }

        this.props.onItemAdd({
            text
        });

        this.setState({ text: '' });
    };

    render() {
        const { text } = this.state;
        
        return (
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
        );
    }
}

CreateItem.propTypes = {
    onItemAdd: PropTypes.func,
};

export default CreateItem;
