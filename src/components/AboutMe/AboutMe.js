import React, { Component } from 'react';
import styles from './AboutMe.module.scss';

import PageTitle from '../PageTitle/PageTitle';
import ContentContainer from '../ContentContainer/ContentContainer';
import SplitContainer from '../SplitContainer/SplitContainer';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import RotatedContainer from '../RotatedContainer/RotatedContainer';
import BackgroundImageRenderer from '../BackgroundImageRenderer/BackgroundImageRenderer';

// Images
import me from '../../images/Misc/profile_pic_website.png';
import aboutMeBackgroundImage from '../../images/Backgrounds/paper-1.png';

// Shapes
import Triangle from '../Shapes/Triangle/Triangle';

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

    _updateMargin(margin) {
        return {
            marginLeft: `${margin}px`
        };
    }

    render() {
        const { title, id } = this.props;
        const { content } = this.state;
        let marginIncrement = 0;

        const leftContent = content.map((content, index) => {
            const aboutMeContent = (
                <div className={styles.AboutMeContent} style={this._updateMargin(marginIncrement)}>
                    <RotatedContainer tilt='down' deg='0' style='light'>
                        {content}
                    </RotatedContainer>
                    <div className={styles.BottomCaret} />
                </div>
            );
            marginIncrement += 100;
            return (
                <WithAnimation animation='right' type='scroll' key={index}>
                    {aboutMeContent}
                </WithAnimation>
            );
        });

        const rightContent = (
            <WithAnimation animation='left' type='scroll'>
                <img src={me} className={styles.Image} alt='' />
            </WithAnimation>
        );

        return (
            <BackgroundImageRenderer className={styles.AboutMe} id={id} image={aboutMeBackgroundImage}>
                <Triangle />
                <WithAnimation animation='down' type='scroll'>
                    <RotatedContainer tilt='down' deg='3'>
                        <PageTitle title={title} />
                    </RotatedContainer>
                </WithAnimation>
                <WithAnimation animation='up' type='scroll'>
                    <ContentContainer>
                        <SplitContainer
                            left={leftContent}
                            right={rightContent}
                            split='70'
                            polar={true} />
                    </ContentContainer>
                </WithAnimation>
            </BackgroundImageRenderer>
        );
    }
}

export default AboutMe;
