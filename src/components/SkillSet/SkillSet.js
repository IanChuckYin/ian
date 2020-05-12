import React, { Component } from 'react';
import styles from './SkillSet.module.scss';

import PageTitle from '../PageTitle/PageTitle';
import ContentContainer from '../ContentContainer/ContentContainer'
import Grid from '../Grid/Grid';
import SkillSetPanel from '../SkillSetPanel/SkillSetPanel';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import RotatedContainer from '../RotatedContainer/RotatedContainer';
import BackgroundImageRenderer from '../BackgroundImageRenderer/BackgroundImageRenderer';

// Images
import javascriptLogo from '../../images/Logos/js_logo.png';
import pythonLogo from '../../images/Logos/python_logo.png';
import javaLogo from '../../images/Logos/java_logo.png';
import cLogo from '../../images/Logos/c_logo.png';
import sqlLogo from '../../images/Logos/sql_logo.png';
import clojureLogo from '../../images/Logos/clojure_logo.png';
import skillSetBackgroundImage from '../../images/Backgrounds/paper-3.png';

// Shapes
import Triangle from '../Shapes/Triangle/Triangle';

const PANEL_ANIMATION_OPTIONS = {
    animation: 'expand',
    type: 'scroll'
}

const CONTAINER_ANIMATION_OPTIONS = {
    animation: 'up',
    type: 'scroll'
}

class SkillSet extends Component {
    state = {
        content: [
            {
                title: 'JavaScript',
                logo: javascriptLogo,
                description: 'Experienced in web application development using modern JS frameworks such as React and Ember. Also experienced in writing server side code with Node and Express.'
            },
            {
                title: 'Python',
                logo: pythonLogo,
                description: 'Experienced in using Python for data science and visual analytics, as well as writing web scraping tools.'
            },
            {
                title: 'Java',
                logo: javaLogo,
                description: 'Proficient in writing server side code in Java.'
            },
            {
                title: 'C#',
                logo: cLogo,
                description: 'Experienced in developing WebGL video games using the Unity engine and script writing in C#.'
            },
            {
                title: 'SQL',
                logo: sqlLogo,
                description: 'Proficient in writing SQL statements for database management and querying.'
            },
            {
                title: 'Clojure',
                logo: clojureLogo,
                description: 'Experienced in developing web applications writting in Clojure and re-frame.'
            }
        ]
    }

    render() {
        const { title, id } = this.props;
        const { content } = this.state;
        const skillSetPanels = content.map((skill, index) => {
            const { title, logo, description } = skill;
            return (
                <WithAnimation
                    key={index}
                    animation={PANEL_ANIMATION_OPTIONS.animation}
                    type={PANEL_ANIMATION_OPTIONS.type}>
                    <SkillSetPanel
                        image={logo}
                        title={title}
                        description={description} />
                </WithAnimation>
            );
        });

        return (
            <BackgroundImageRenderer className={styles.SkillSet} id={id} image={skillSetBackgroundImage}>
                <Triangle />
                <WithAnimation animation='up' type='scroll'>
                    <RotatedContainer tilt='up' deg='3'>
                        <PageTitle title={title} />
                    </RotatedContainer>
                </WithAnimation>
                <WithAnimation
                    animation={CONTAINER_ANIMATION_OPTIONS.animation}
                    type={CONTAINER_ANIMATION_OPTIONS.type}>
                    <ContentContainer>
                        <Grid type='spread'>
                            {skillSetPanels}
                        </Grid>
                    </ContentContainer>
                </WithAnimation>
            </BackgroundImageRenderer>
        );
    }
}

export default SkillSet;
