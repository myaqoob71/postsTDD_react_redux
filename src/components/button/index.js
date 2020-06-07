import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    submitEvent() {
        if(this.props.emitEvent) {
            this.props.emitEvent();
        }
    }
    render() {
        const { buttonText } = this.props;
        return (
            <div>
                <button onClick = {() => this.submitEvent()} className = "btn btn-primary btn-sm" data-test="buttonComponent">
                    {buttonText}
                </button>
                <hr />
            </div>
        );
    };
}
Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};
export default Button;