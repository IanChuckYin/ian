import React, { Component } from 'react';
import styles from './RotatedContainer.module.scss';

import { appendStyles } from '../../util/StyleAppender';

class RotatedContainer extends Component {
    static defaultProps = {
        tilt: 'up',
        deg: '3',
        containerStyle: 'main'
    }

    _getTiltStyle() {
        const { tilt, deg, containerStyle } = this.props;
        const tiltStyles = {};
        const shadowOptions = {
            up: {
                boxShadow: `-${styles.borderThickness} ${styles.borderThickness} ${styles.color4}`
            },
            down: {
                boxShadow: `${styles.borderThickness} -${styles.borderThickness} ${styles.color4}`
            }
        };
        const tiltOptions = { up: { transform: `rotate(${-deg}deg)` }, down: { transform: `rotate(${deg}deg)` } };
        const containerOptions = { light: { backgroundColor: styles.color2 }, main: { backgroundColor: styles.color1 } };

        if (tilt === 'up') {
            tiltStyles.normal = { ...tiltOptions.up, ...shadowOptions.up, ...containerOptions[containerStyle] };
            tiltStyles.reverse = tiltOptions.down;
        } else {
            tiltStyles.normal = { ...tiltOptions.down, ...shadowOptions.down, ...containerOptions[containerStyle] };
            tiltStyles.reverse = tiltOptions.up;
        }
        return tiltStyles;
    }

    render() {
        const { children, className } = this.props;
        const { normal, reverse } = this._getTiltStyle();

        return (
            <div className={styles.Wrapper}>
                <div
                    className={appendStyles(className, styles.RotatedContainer)}
                    style={normal}>
                    <div style={reverse}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default RotatedContainer;