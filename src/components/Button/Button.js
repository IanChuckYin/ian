import React, { Component } from 'react';
import styles from './Button.module.scss';

class Button extends Component {

    render() {
        const { onButtonClick, label, isMobile } = this.props;
        const renderedStyle = isMobile ? styles.MobileButton : styles.DesktopButton;
        return (
            <div
                className={renderedStyle}
                onClick={() => onButtonClick()}>
                {label}
            </div>
        )
    }
}

export default Button;