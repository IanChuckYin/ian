import React, { Component } from 'react';
import styles from './Triangle.module.scss';
import Aux from '../../../hoc/Aux/Aux';
import { appendStyles } from '../../../util/StyleAppender';

class Triangle extends Component {

    render() {
        return (
            <Aux>
                <div className={styles.Wrapper}>
                    <div className={styles.Triangle} />
                    <div className={appendStyles(styles.Triangle, styles.Border)} />
                </div>
            </Aux>
        )
    }
}

export default Triangle;