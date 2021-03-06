import React, { Component } from 'react';
import styles from './Projects.module.scss';
import { connect } from 'react-redux';

import PageTitle from '../PageTitle/PageTitle';
import ProjectPanel from './ProjectPanel/ProjectPanel';
import ProjectPanelContent from './ProjectPanelContent/ProjectPanelContent';
import ContentContainer from '../ContentContainer/ContentContainer';
import Grid from '../Grid/Grid';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import { routeToNewTabHashed, routeToNewTab } from '../../util/RouteUtil';
import RotatedContainer from '../RotatedContainer/RotatedContainer';
import BackgroundImageRenderer from '../BackgroundImageRenderer/BackgroundImageRenderer';

// Images
import unityLogo from '../../images/Logos/unity_logo.png';
import twitterLogo from '../../images/Logos/twitter_logo.png';
import youtubeLogo from '../../images/Logos/youtube_logo.png';
import projectsBackgroundImage from '../../images/Backgrounds/paper-1.png';

// Shapes
import Triangle from '../Shapes/Triangle/Triangle';

class Projects extends Component {
    state = {
        projects: [
            {
                imageUrl: youtubeLogo,
                textContent: {
                    title: "YouTube Webscraper",
                    subtitle: "Python",
                    description: "A web scraper that goes into anyone's YouTube channel and collects data about their sponsors from their videos.",
                    features: [
                        "Written using the Selenium automation tool, BeautifulSoup4 and ChromeDriver",
                        "Exports an Excel file containing data about a channel's sponsor links",
                        "Running the script against the same channel will update the existing Excel file with the new data"
                    ]
                },
                panelButtons: [
                    {
                        label: "VIEW CODE",
                        url: 'https://github.com/IanChuckYin/youtube-scraper',
                        onClickEvent: this._routeToNewTab.bind(this)
                    }
                ]
            },
            {
                imageUrl: twitterLogo,
                textContent: {
                    title: "Trump Tweet Generator",
                    subtitle: "Python, JavaScript",
                    description: "A machine learning project that uses the Markov Chain model to generate a fake tweet from Donald Trump.",
                    features: [
                        "Used Python to stream tweets using the Twitter API",
                        "Built Markov Chain to recognize speech patterns from streamed tweets and to generate a tweet based on these patterns",
                        "Markov Chain model built from 1136 compiled tweets"
                    ]
                },
                panelButtons: [
                    {
                        label: "DEMO",
                        url: '/tweet_generator',
                        onClickEvent: this._routeToNewTabHashed.bind(this)
                    },
                    {
                        label: "VIEW CODE",
                        url: 'https://github.com/IanChuckYin/trump_tweet_generator',
                        onClickEvent: this._routeToNewTab.bind(this)
                    }
                ]
            },
            {
                imageUrl: unityLogo,
                textContent: {
                    title: "Knights",
                    subtitle: "C#",
                    description: "WebGL game built on the Unity engine",
                    features: [
                        "Complete animations for all units",
                        "Background music and audio for all actions",
                        "Unit upgrade system and unique abilities for all units",
                        "Level design"
                    ]
                },
                panelButtons: [
                    {
                        label: "DEMO",
                        url: '/knights',
                        onClickEvent: this._routeToNewTabHashed.bind(this)
                    },
                    {
                        label: "VIEW CODE",
                        url: 'https://github.com/IanChuckYin/knights-game',
                        onClickEvent: this._routeToNewTab.bind(this)
                    }
                ]
            }
        ]
    }

    _routeToNewTabHashed(panelButton) {
        routeToNewTabHashed(panelButton.url);
    }

    _routeToNewTab(panelButton) {
        routeToNewTab(panelButton.url);
    }

    _renderProjectPanels() {
        const { projects } = this.state;
        const projectPanels = projects.map((project, index) => {
            const { imageUrl, panelButtons, textContent } = project;
            const { title, subtitle, description, features } = textContent;

            const projectPanelContent = (
                <ProjectPanelContent
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    features={features} />
            );
            return (
                <WithAnimation animation='expand' type='scroll' key={index}>
                    <ProjectPanel
                        size='large'
                        image={imageUrl}
                        buttons={panelButtons}>
                        {projectPanelContent}
                    </ProjectPanel>
                </WithAnimation>
            );
        });
        return projectPanels
    }
    
    /**
     * The desktop version of our Projects
     */
    _renderDesktopVersion() {
        const { title } = this.props;
        const projectPanels = this._renderProjectPanels();

        return (
            <BackgroundImageRenderer className={styles.Projects} image={projectsBackgroundImage}>
                <Triangle />
                <WithAnimation animation='down' type='scroll'>
                    <RotatedContainer tilt='down' deg='3'>
                        <PageTitle title={title} />
                    </RotatedContainer>
                </WithAnimation>
                <WithAnimation animation='up' type='scroll'>
                    <ContentContainer>
                        <Grid type='center'>
                            {projectPanels}
                        </Grid>
                    </ContentContainer>
                </WithAnimation>
            </BackgroundImageRenderer>
        );
    }

    /**
     * The mobile version of our Projects
     */
    _renderMobileVersion() {
        const { title } = this.props;
        const projectPanels = this._renderProjectPanels();

        return (
            <BackgroundImageRenderer className={styles.Projects} image={projectsBackgroundImage}>
                <Triangle />
                <WithAnimation animation='down' type='scroll'>
                    <RotatedContainer tilt='down' deg='3'>
                        <PageTitle title={title} />
                    </RotatedContainer>
                </WithAnimation>
                <WithAnimation animation='up' type='scroll'>
                    <ContentContainer>
                        <Grid type='center'>
                            {projectPanels}
                        </Grid>
                    </ContentContainer>
                </WithAnimation>
            </BackgroundImageRenderer>
        );
    }

    render() {
        const { isMobile } = this.props;

        return (isMobile ?
            <div className={styles.Mobile}>{this._renderMobileVersion()}</div> :
            <div className={styles.Desktop}>{this._renderDesktopVersion()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.isMobile
    };
};

export default connect(mapStateToProps, null)(Projects);
