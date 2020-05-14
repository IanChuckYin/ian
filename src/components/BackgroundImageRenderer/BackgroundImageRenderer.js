import React, { Component } from 'react';
import styles from './BackgroundImageRenderer.module.scss';
import { appendStyles } from '../../util/StyleAppender';

class BackgroundImageRenderer extends Component {
    static defaultProps = {
        cover: true
    }

    _getBackgroundImage() {
        const { image } = this.props;
        return {
            backgroundImage: `url(${image})`
        };
    }

    render() {
        const { children, className, cover } = this.props;
        const backgroundImage = this._getBackgroundImage();
        const coverStyle = cover ? styles.Cover : null;
        return (
            <div style={backgroundImage} className={appendStyles(className, styles.BackgroundImageRenderer, coverStyle)} >
                {children}
            </div>
        )
    }
}

export default BackgroundImageRenderer;