import React, { Component } from 'react';
import styles from './Knights.module.scss';
import Unity, { UnityContent } from 'react-unity-webgl';

/**
 * This is the Unity React component that you can import, if you want to render the game as a component
 */
class Knights extends Component {
    state = {
        progression: 0
    }

    constructor(props) {
        super(props);

        this._initializeUnity();
        this._initializeProgress();
    }

    _initializeUnity() {
        const unityBuildDirPath = process.env.PUBLIC_URL + '/projects/unity/Knights_WebGL/Build/';
        const unityBuildJsonPath = unityBuildDirPath + 'Knights_WebGL.json';
        const unityLoaderPath = unityBuildDirPath + 'UnityLoader.js';
        this.unityContent = new UnityContent(unityBuildJsonPath, unityLoaderPath);
    }

    _initializeProgress() {
        this.unityContent.on('progress', (progression) => {
            this.setState({ progression: progression });
        });
    }

    render() {
        const { progression } = this.state;
        const unityInstance = <Unity unityContent={this.unityContent} />;
        const loadingText = progression === 1 ? 'Loaded!' : `Loading ${progression * 100}%`;
        return (
            <div className={styles.Knights}>
                <div>{loadingText}</div>
                {unityInstance}
            </div>
        );
    }
}

export default Knights;
