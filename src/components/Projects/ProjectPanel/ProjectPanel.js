import React, { Component } from 'react';
import styles from './ProjectPanel.module.scss';
import { connect } from 'react-redux';

import { appendStyles } from '../../../util/StyleAppender';
import Button from '../../Button/Button';
import Grid from '../../Grid/Grid';

class ProjectPanel extends Component {

    SIZE = {
        large: styles.Large,
        small: styles.Small
    }

    render() {
        const { image, buttons, size, children, isMobile } = this.props;
        const panelSize = this.SIZE[size];
        const renderedButtons = buttons ? buttons.map((button, index) => {
            return (
                <Button
                    key={index}
                    onButtonClick={() => button.onClickEvent(button)}
                    label={button.label} />
            );
        }) : null;

        const renderedStyle = isMobile ? styles.Mobile : styles.Desktop;
        const gridType = isMobile ? 'center' : 'spread';

        return (
            <div className={renderedStyle}>
                <div className={appendStyles(styles.ProjectPanel, panelSize)}>
                    <div className={styles.ImageContainer}>
                        <img src={image} alt='' />
                    </div>
                    <div className={styles.ContentContainer}>
                        <div className={styles.TextContainer}>
                            {children}
                        </div>
                        <div className={styles.ButtonContainer}>
                            <Grid type={gridType}>
                                {renderedButtons}
                            </Grid>
                        </div>
                    </div>
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

export default connect(mapStateToProps, null)(ProjectPanel);
