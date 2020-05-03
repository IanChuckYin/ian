import React, { Component } from 'react';
import styles from './SkillSet.module.scss';

import PageTitle from '../PageTitle/PageTitle';
import ContentContainer from '../ContentContainer/ContentContainer'
import Grid from '../Grid/Grid';
import SkillSetPanel from '../SkillSetPanel/SkillSetPanel';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';

// Images
import javascriptLogo from '../../images/js_logo.png';
import pythonLogo from '../../images/python_logo.png';
import javaLogo from '../../images/java_logo.png';
import cLogo from '../../images/c_logo.png';
import sqlLogo from '../../images/sql_logo.png';
import clojureLogo from '../../images/clojure_logo.png';

class SkillSet extends Component {
    state = {
        content: [
            {
                title: "JavaScript",
                imageUrl: javascriptLogo,
                description: "Experienced in web application development using modern JS frameworks such as React and Ember. Also experienced in writing server side code with Node."
            },
            {
                title: "Python",
                imageUrl: pythonLogo,
                description: "Experienced in using Python for data science and visual analytics, as well as writing web scraping tools."
            },
            {
                title: "Java",
                imageUrl: javaLogo,
                description: "Proficient in writing server side code in Java."
            },
            {
                title: "C#",
                imageUrl: cLogo,
                description: "Experienced in developing WebGL video games using the Unity engine and script writing in C#."
            },
            {
                title: "SQL",
                imageUrl: sqlLogo,
                description: "Proficient in writing SQL statements for database management and querying."
            },
            {
                title: "Clojure",
                imageUrl: clojureLogo,
                description: "Experienced in developing web applications writting in Clojure and re-frame."
            }
        ]
    }

    render() {
        const { title, id } = this.props;
        const stateProps = this.state;
        const skillSetPanels = stateProps.content.map((content, index) => {
            return (
                <WithAnimation key={index} animation='expand' type='scroll'>
                    <SkillSetPanel
                        image={content.imageUrl}
                        title={content.title}
                        description={content.description} />
                </WithAnimation>
            );
        });

        return (
            <div className={styles.SkillSet} id={id}>
                <PageTitle title={title} />
                <WithAnimation animation='up' type='scroll'>
                    <ContentContainer>
                        <Grid type='spread'>
                            {skillSetPanels}
                        </Grid>
                    </ContentContainer>
                </WithAnimation>
            </div>
        );
    }
}

export default SkillSet;
