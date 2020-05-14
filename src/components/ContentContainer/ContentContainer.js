import React, { Component } from 'react';
import styles from './ContentContainer.module.scss';
import { connect } from 'react-redux';

class ContentContainer extends Component {

    render() {
        const { children, isMobile } = this.props;
        const renderedStyle = isMobile ? styles.MobileContentContainer : styles.DesktopContentContainer;
        return (
            <div className={renderedStyle}>
                {children}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.isMobile
    };
};

export default connect(mapStateToProps, null)(ContentContainer);