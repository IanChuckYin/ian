import React, { Component } from 'react';
import styles from './PanelContent.module.scss';

import { appendStyles } from '../../util/StyleAppender';

class PanelContent extends Component {
    THEME = {
        light: styles.Light,
        dark: styles.Dark
    }

    render() {
        const { title, subtitle, description, features, theme } = this.props;
        const panelTitle = title ? title : null;
        const panelSubtitle = subtitle ? subtitle : null;
        const panelDescription = description ? description : null;
        const panelFeatures = features ? features.map((feature, index) => <p key={index}>{feature}</p>) : null;
        const panelTheme = theme ? this.THEME[theme] : this.THEME.light;

        return (
            <div className={appendStyles(styles.PanelContent, panelTheme)}>
                <div className={styles.title}>{panelTitle}</div>
                <div className={styles.subtitle}>{panelSubtitle}</div>
                <div className={styles.description}>{panelDescription}</div>
                <div className={styles.features}>{panelFeatures}</div>
            </div>
        );
    }
}

export default PanelContent;
