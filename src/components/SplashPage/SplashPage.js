import React, { Component } from 'react';
import styles from './SplashPage.module.scss';

import splashImage from '../../images/slider-bg.jpg';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import WithTypeAnimation from '../../hoc/WithTypeAnimation/WithTypeAnimation';

class SplashPage extends Component {
    state = {
        title: "IAN CHUCK-YIN",
        subtitle: "SOFTWARE ENGINEER"
    }

    render() {
        const { title, subtitle } = this.state;
        const typeAnimationSpeed = 80;
        const typeAnimationType = 'onload';
        return (
            <WithAnimation animation='fadeIn' type='onload'>
                <div className={styles.SplashPage}>
                    <WithAnimation animation='up' type='onload'>
                        <div className={styles.SplashContent}>
                            <WithTypeAnimation
                                className={styles.Title}
                                text={title}
                                speed={typeAnimationSpeed}
                                type={typeAnimationType}
                            />
                            <WithTypeAnimation
                                className={styles.Content}
                                text={subtitle}
                                speed={typeAnimationSpeed}
                                type={typeAnimationType}
                            />
                        </div>
                    </WithAnimation>
                    <div className={styles.SplashImageContainer}>
                        <img className={styles.SplashImage} src={splashImage} alt="splash" />
                    </div>
                </div>
            </WithAnimation>
        );
    }
}

export default SplashPage;
