import React, { Component } from 'react';
import styles from './Page.module.scss';

class Page extends Component {
    render() {
        const { children } = this.props;
        const { id } = children.props;
        return (
            <div className={styles.Page} id={id}>
                {children}
            </div>
        )
    }
}

export default Page;