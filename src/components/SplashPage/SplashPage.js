import React, { Component } from 'react';
import styles from './SplashPage.module.scss';
import { connect } from 'react-redux';

import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import WithTypeAnimation from '../../hoc/WithTypeAnimation/WithTypeAnimation';
import SplitContainer from '../SplitContainer/SplitContainer';
import RotatedContainer from '../RotatedContainer/RotatedContainer';
import BackgroundImageRenderer from '../BackgroundImageRenderer/BackgroundImageRenderer';
import Aux from '../../hoc/Aux/Aux';

// Images
import splashBackground from '../../images/Backgrounds/paper-2.png';

class SplashPage extends Component {
    state = {
        title: ["IAN", "CHUCK-YIN"],
        subtitle: ["SOFTWARE", "ENGINEER"]
    }

    _renderTypeAnimationContent(words, speed) {
        return words.map((content, index) => {
            return (
                <WithTypeAnimation
                    key={index}
                    text={content}
                    speed={speed}
                    type='onload'
                />
            );
        });
    }

    /**
     * The desktop version of our SplashPage
     */
    _renderDesktopVersion(name, occupation, gifImage) {

        const leftSide = (
            <WithAnimation
                animation='right'
                type='onload'
                fill={true}>
                <BackgroundImageRenderer className={styles.SplashContent} image={splashBackground} cover={false}>
                    <RotatedContainer tilt='up' deg='3'>
                        <div className={styles.TitleContent}>
                            {name}
                        </div>
                    </RotatedContainer>
                    <RotatedContainer tilt='down' deg='3'>
                        <div className={styles.SubtitleContent}>
                            {occupation}
                        </div>
                    </RotatedContainer>
                </BackgroundImageRenderer>
            </WithAnimation>
        );

        const rightSide = (
            <WithAnimation
                animation='left'
                type='onload'>
                <div className={styles.SplashImageContainer}>
                    <img
                        className={styles.SplashImage}
                        src={gifImage}
                        alt="splash" />
                </div>
            </WithAnimation>
        );

        return (
            <SplitContainer
                left={leftSide}
                right={rightSide}
                split='50' />
        );
    }

    /**
     * The mobile version of our SplashPage
     */
    _renderMobileVersion(name, occupation, gifImage) {
        const renderedImage = (
            <WithAnimation
                animation='down'
                type='onload'>
                <div className={styles.SplashImageContainer}>
                    <img
                        className={styles.SplashImage}
                        src={gifImage}
                        alt="splash" />
                </div>
            </WithAnimation>
        )
        const renderedContent = (
            <WithAnimation
                animation='up'
                type='onload'
                fill={true}>
                <BackgroundImageRenderer className={styles.SplashContent} image={splashBackground} cover={false}>
                    <RotatedContainer tilt='up' deg='3'>
                        <div className={styles.TitleContent}>
                            {name}
                        </div>
                    </RotatedContainer>
                    <RotatedContainer tilt='down' deg='3'>
                        <div className={styles.SubtitleContent}>
                            {occupation}
                        </div>
                    </RotatedContainer>
                </BackgroundImageRenderer>
            </WithAnimation>
        )
        return (
            <Aux>
                {renderedImage}
                {renderedContent}
            </Aux>
        );
    }

    render() {
        const { title, subtitle } = this.state;
        const { image, isMobile } = this.props;
        const name = this._renderTypeAnimationContent(title, 100);
        const occupation = this._renderTypeAnimationContent(subtitle, 200);

        return (isMobile ?
            <div className={styles.Mobile}>{this._renderMobileVersion(name, occupation, image)}</div> :
            <div className={styles.Desktop}>{this._renderDesktopVersion(name, occupation, image)}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.isMobile
    };
};

export default connect(mapStateToProps, null)(SplashPage);
