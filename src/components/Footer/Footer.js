import React, { Component } from 'react';
import styles from './Footer.module.scss';
import { connect } from 'react-redux';

import SplitContainer from '../SplitContainer/SplitContainer';
import WithTypeAnimation from '../../hoc/WithTypeAnimation/WithTypeAnimation';

const TYPE_ANIMATION_OPTIONS = {
    speed: 40,
    type: 'scroll'
}

class Footer extends Component {
    state = {
        name: 'IAN CHUCK-YIN',
        location: {
            text: 'Mississauga Ontario',
            icon: 'fas fa-building'
        },
        email: {
            text: 'ichuckyin.uwaterloo.ca',
            icon: 'fas fa-envelope'
        },
        phone: {
            text: '647-470-9115',
            icon: 'fas fa-phone'
        },
    }

    /**
     * The desktop version of the Footer
     */
    _renderDesktopVersion() {
        const { name, location, email, phone } = this.state;

        const leftSide = (
            <WithTypeAnimation
                className={styles.Left}
                text={name}
                speed={TYPE_ANIMATION_OPTIONS.speed}
                type={TYPE_ANIMATION_OPTIONS.type} />
        );

        const rightSide = [location, email, phone].map((item, index) => {
            return (
                <div className={styles.Right} key={index}>
                    <i className={item.icon} />
                    <WithTypeAnimation
                        key={index}
                        text={item.text}
                        speed={TYPE_ANIMATION_OPTIONS.speed}
                        type={TYPE_ANIMATION_OPTIONS.type} />
                </div>
            )
        });

        return (
            <div className={styles.Footer}>
                <SplitContainer
                    split='50'
                    left={leftSide}
                    right={rightSide}
                    middle={true}
                    polar={true} />
                <span className={styles.credits}>Image credits to: <a href="http://www.freepik.com">freepik</a></span>
            </div>
        );
    }

    /**
     * The mobile version of the Footer
     */
    _renderMobileVersion() {
        const { name, location, email, phone } = this.state;

        const nameContent = (
            <WithTypeAnimation
                className={styles.Top}
                text={name}
                speed={TYPE_ANIMATION_OPTIONS.speed}
                type={TYPE_ANIMATION_OPTIONS.type} />
        );

        const contactContent = [location, email, phone].map((item, index) => {
            return (
                <div className={styles.Bottom} key={index}>
                    <i className={item.icon} />
                    <WithTypeAnimation
                        key={index}
                        text={item.text}
                        speed={TYPE_ANIMATION_OPTIONS.speed}
                        type={TYPE_ANIMATION_OPTIONS.type} />
                </div>
            )
        });

        return (
            <div className={styles.Footer}>
                {nameContent}
                {contactContent}
                <span className={styles.credits}>Image credits to: <a href="http://www.freepik.com">freepik</a></span>
            </div>
        );
    }

    render() {
        const { isMobile } = this.props;

        return (isMobile ?
            <div className={styles.Mobile}>{this._renderMobileVersion()}</div> :
            <div className={styles.Desktop}>{this._renderDesktopVersion()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.isMobile
    };
};

export default connect(mapStateToProps, null)(Footer);
