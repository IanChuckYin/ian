import React, { Component } from 'react';
import styles from './AboutMe.module.scss';

import PageTitle from '../PageTitle/PageTitle';
import ContentContainer from '../ContentContainer/ContentContainer';
import SplitContainer from '../SplitContainer/SplitContainer';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';

const ANIMATION_OPTIONS = {
    animation: 'up',
    type: 'scroll'
}

/**
 * Our About Me component
 */
class AboutMe extends Component {
    state = {
        content: [
            'I am a self taught Software Engineer who graduated from the University of Waterloo. Although my official degree is a Bachelor of Science in Health Studies, my true passion was in the field of software. This led me to pursue a Health Informatics specialization and a minor in Computer Science, as well as enrolling in extra curricular computer science courses to further develop my skills.',
            'After exposing myself to different programming languages, I was able to develop multiple web applications as well as exploring the video game industry by developing games of my own. With this experience, I decided to pursue a professional career in software engineering.',
            'My professional work experience consists of web application development on both the client and server side, database management and script writing.'
        ]
    }

    render() {
        const { title, id } = this.props;
        const { content } = this.state;
        const aboutMeContent = content.map((content, index) => {
            return <p key={index}>{content}</p>
        });

        return (
            <div className={styles.AboutMe} id={id}>
                <PageTitle title={title} />
                <WithAnimation animation={ANIMATION_OPTIONS.animation} type={ANIMATION_OPTIONS.type}>
                    <ContentContainer>
                        <SplitContainer left={aboutMeContent} split='50'/>
                    </ContentContainer>
                </WithAnimation>
            </div>
        );
    }
}

export default AboutMe;
