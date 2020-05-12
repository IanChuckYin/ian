import React, { Component } from 'react';
import styles from './SkillSetPanel.module.scss';
import RotatedContainer from '../RotatedContainer/RotatedContainer';

class SkillSetPanel extends Component {

    render() {
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
}

export default SkillSetPanel;