import React, { Component } from 'react';
import styles from './SplashPage.module.scss';

import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import WithTypeAnimation from '../../hoc/WithTypeAnimation/WithTypeAnimation';
import SplitContainer from '../SplitContainer/SplitContainer';
import RotatedContainer from '../RotatedContainer/RotatedContainer';
import BackgroundImageRenderer from '../BackgroundImageRenderer/BackgroundImageRenderer';

// Images
import splashBackground from '../../images/Backgrounds/paper-2.png';

class SplashPage extends Component {
    state = {
        title: ["IAN", "CHUCK-YIN"],
        subtitle: ["SOFTWARE", "ENGINEER"]
    }

    render() {
        const { title, subtitle } = this.state;
        const { image } = this.props;

        const name = title.map((content, index) => {
            return (
                <WithTypeAnimation
                    key={index}
                    text={content}
                    speed={100}
                    type='onload'
                />
            );
        });

        const occupation = subtitle.map((content, index) => {
            return (
                <WithTypeAnimation
                    key={index}
                    text={content}
                    speed={200}
                    type='onload'
                />
            );
        });

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
                        src={image}
                        alt="splash" />
                </div>
            </WithAnimation>
        );

        return (
            <div className={styles.SplashPage}>
                <SplitContainer
                    left={leftSide}
                    right={rightSide}
                    split='50' />
            </div>
        );
    }
}

export default SplashPage;
