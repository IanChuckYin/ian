import React, { Component } from 'react';
import styles from './ProjectPanelContent.module.scss';
import RotatedContainer from '../../RotatedContainer/RotatedContainer';
import { connect } from 'react-redux';

class ProjectPanelContent extends Component {

    render() {
        const { title, subtitle, description, features, isMobile } = this.props;
        const panelFeatures = features.map((feature, index) => <p key={index}>{feature}</p>);
        const renderedStyle = isMobile ? styles.Mobile : styles.Desktop;

        return (
            <div className={renderedStyle}>
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.isMobile
    };
};

export default connect(mapStateToProps, null)(ProjectPanelContent);
