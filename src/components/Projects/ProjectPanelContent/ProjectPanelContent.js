import React, { Component } from 'react';
import styles from './ProjectPanelContent.module.scss';
import RotatedContainer from '../../RotatedContainer/RotatedContainer';

class ProjectPanelContent extends Component {

    _renderDesktop() {
        const { title, subtitle, description, features } = this.props;
        const panelFeatures = features.map((feature, index) => <p key={index}>{feature}</p>);

        return (
            <div className={styles.ProjectPanelContent}>
                <div className={styles.title}>
                    <RotatedContainer tilt='down' deg='0'>
                        {title}
                    </RotatedContainer>
                </div>
                <div className={styles.subtitle}>
                    {subtitle}
                </div>
                <div className={styles.description}>{description}</div>
                <div className={styles.features}>{panelFeatures}</div>
            </div>
        );
    }

    _renderMobile() {

    }

    render() {
        return this._renderDesktop();
    }
}

export default ProjectPanelContent;
