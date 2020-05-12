import React, { Component } from 'react';
import styles from './BackgroundImageRenderer.module.scss';
import { appendStyles } from '../../util/StyleAppender';

class BackgroundImageRenderer extends Component {
    static defaultProps = {
        cover: true
    }

    render() {
        const { image, children, className, id, cover } = this.props;
        const backgroundImage = {
            backgroundImage: `url(${image})`
        };
        const coverStyle = cover ? styles.Cover : null;
        return (
            <div style={backgroundImage} className={appendStyles(className, styles.BackgroundImageRenderer, coverStyle)} id={id}>
                {children}
            </div>
        )
    }
}

export default BackgroundImageRenderer;