import React, { Component } from 'react'
import styles from './PageTitle.module.scss';
import WithTypeAnimation from '../../hoc/WithTypeAnimation/WithTypeAnimation';

class PageTitle extends Component {

    render() {
        const { title } = this.props;
        const typeAnimationOptions = {
            speed: 50,
            type: 'scroll'
        };

        return (
            <WithTypeAnimation
                className={styles.PageTitle}
                text={title}
                speed={typeAnimationOptions.speed}
                type={typeAnimationOptions.type}
            />
        );
    }
};

export default PageTitle;