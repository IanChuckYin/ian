import React, { Component } from 'react';
import styles from './Grid.module.scss';

const GRID_ENUMS = {
    spread: 'space-evenly',
    center: 'center'
}

class Grid extends Component {

    render() {
        const { children, type } = this.props;
        const gridType = { justifyContent: GRID_ENUMS[type]};

        return (
            <div className={styles.Grid} style={gridType}>{children}</div>
        );
    }
}

export default Grid;
