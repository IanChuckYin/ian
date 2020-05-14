import React, { Component } from 'react';
import styles from './SkillSetPanel.module.scss';
import RotatedContainer from '../RotatedContainer/RotatedContainer';
import { connect } from 'react-redux';

class SkillSetPanel extends Component {

    /**
     * The desktop version of SkillSetPanel
     */
    _renderDesktopVersion() {
        const { image, title, description } = this.props;

        return (
            <div className={styles.SkillSetPanel}>
                <img src={image} className={styles.Image} alt='' />
                <div className={styles.TitleContainer}>
                    <RotatedContainer tilt='down' deg='3'>
                        {title}
                    </RotatedContainer>
                </div>
                <div className={styles.Description}>{description}</div>
            </div>
        );
    }

    /**
     * The mobile version of SkillSetPanel
     */
    _renderMobileVersion() {
        const { image, title, description } = this.props;

        return (
            <div className={styles.SkillSetPanel}>
                <img src={image} className={styles.Image} alt='' />
                <div className={styles.TitleContainer}>
                    <RotatedContainer tilt='down' deg='3'>
                        {title}
                    </RotatedContainer>
                </div>
                <div className={styles.Description}>{description}</div>
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

export default connect(mapStateToProps, null)(SkillSetPanel);