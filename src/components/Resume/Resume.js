import React, { Component } from 'react';
import styles from './Resume.module.scss';
import { connect } from 'react-redux';

import PageTitle from '../PageTitle/PageTitle';
import Timeline from '../Timeline/Timeline';
import TimelineContainer from '../Timeline/TimelineContainer/TimelineContainer';
import ExperiencePanel from '../ExperiencePanel/ExperiencePanel';
import EducationPanel from '../EducationPanel/EducationPanel';
import ContentContainer from '../ContentContainer/ContentContainer';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import RotatedContainer from '../RotatedContainer/RotatedContainer';
import BackgroundImageRenderer from '../BackgroundImageRenderer/BackgroundImageRenderer';

// Logos
import uhnLogo from '../../images/Logos/uhn-logo.png';
import uwaiLogo from '../../images/Logos/uwai-logo.png';
import liquidLogo from '../../images/Logos/la-icon.png';
import unchartedLogo from '../../images/Logos/uncharted-logo.png';
import waterlooLogo from '../../images/Logos/waterloo-logo.png';

// Images
import waterlooImage from '../../images/Misc/waterloo-image.png';
import unchartedImage from '../../images/Misc/uncharted-image.png';
import uhnImage from '../../images/Misc/uhn-image.png';
import liquidImage from '../../images/Misc/la-image.png';
import uwaiImage from '../../images/Misc/uwai-image.png';
import resumeBackgroundImage from '../../images/Backgrounds/paper-2.png';

// Shapes
import Triangle from '../Shapes/Triangle/Triangle';

class Resume extends Component {
    state = {
        education: {
            label: "EDUCATION",
            logo: waterlooLogo,
            image: waterlooImage,
            educationInfo: [
                {
                    university: {
                        icon: "fas fa-city",
                        label: "University of Waterloo"
                    },
                    location: {
                        icon: "fas fa-map-marker-alt",
                        label: "Waterloo, Ontario"
                    },
                    graduationDate: {
                        icon: "fas fa-graduation-cap",
                        label: "Class of 2018"
                    },
                    credentials: [
                        "BSc - Honours Health Studies",
                        "Specialization - Health Informatics",
                        "Minor - Computer Science"
                    ]
                }
            ]
        },
        experience: {
            label: "EXPERIENCE",
            workExperience: [
                {
                    companyName: "Uncharted Software",
                    positionName: "Software Engineer",
                    dateRange: "August 2019 - Present",
                    logo: unchartedLogo,
                    image: unchartedImage,
                    content: [
                        "Full stack web application developer, part of the team that engineers a user-interface for a research program related to visualization and interaction of executable causal models",
                        "Responsible for developing and maintaining client-side code using Ember.js as the JavaScript framework and Cytoscape for data visualization and analysis",
                        "Responsible for developing and maintaining server-side code using Node.js and Express",
                        "Performed code reviews for team members to ensure clean and efficient code that follows the team’s style guide",
                        "Wrote and maintained unit tests for automated testing using QUnit and Mocha"
                    ]
                },
                {
                    companyName: "University Health Network",
                    positionName: "Software Developer",
                    dateRange: "August 2018",
                    logo: uhnLogo,
                    image: uhnImage,
                    content: [
                        "Web application developer, part of the UHN Clinical Web Application project within the Systems Engineering team",
                        "Responsible for the full life cycle of software delivery including design, implmentation, testing and maintenance of Clojure web applications, databases, and web services",
                        "Lead development of the Clinical Portal application using Clojure and ClojureScript allowing clinicians centralized access to patient data",
                        "Implement server-side services using Java and PostgreSQL",
                        "Attend meetings with project managers, developers, and other stakeholders to discuss product development"
                    ]
                },
                {
                    companyName: "Liquid Analytics",
                    positionName: "Software Engineer",
                    dateRange: "January 2018",
                    logo: liquidLogo,
                    image: liquidImage,
                    content: [
                        "Lead web application developer of the Liquid Analytics 'InfoSite' using Google Polymer to allow clients to view, export, and graph customer data",
                        "Used RESTful APIs to retrieve data from PostgreSQL, Firebase, and Amazon Web Services",
                        "Developed Python scripts for data migration and modification using the pandas library",
                        "Proven ability to work under pressure in an agile environment to meet deadlines"
                    ]
                },
                {
                    companyName: "University of Waterloo",
                    positionName: "Mobile Application Developer",
                    dateRange: "September 2017",
                    logo: uwaiLogo,
                    image: uwaiImage,
                    content: [
                        "Developed prototype of the University of Waterloo Academic Integrity (UWAI) mobile application using Unity and C#",
                        "Designed wireframes and prepared design documents for the application to showcase its workflow and new features",
                    ]
                }
            ]
        }
    }

    _renderEducationContainer() {
        const { education } = this.state;
        const { educationInfo, logo, image, label } = education;
        const educationPanels = educationInfo.map((edu, index) => {
            const { university, location, graduationDate, credentials } = edu;
            return (
                <EducationPanel
                    key={index}
                    iconItems={[university, location, graduationDate]}
                    content={credentials}
                    logo={logo}
                    image={image}
                />
            );
        });

        const educationContainer = (
            <TimelineContainer header={label}>
                {educationPanels}
            </TimelineContainer>
        );

        return educationContainer;
    }

    _renderExperienceContainer() {
        const { experience } = this.state;
        const { workExperience, label } = experience;
        const experiencePanels = workExperience.map((exp, index) => {
            const { companyName, positionName, dateRange, content, logo, image } = exp;
            return (
                <ExperiencePanel
                    key={index}
                    title={companyName}
                    subtitle={positionName}
                    date={dateRange}
                    content={content}
                    logo={logo}
                    image={image}
                />
            );
        });

        const experienceContainer = (
            <TimelineContainer header={label}>
                {experiencePanels}
            </TimelineContainer>
        );

        return experienceContainer;
    }

    /**
     * The desktop version of the Resume
     */
    _renderDesktopVersion() {
        const { title } = this.props;
        const educationContainer = this._renderEducationContainer();
        const experienceContainer = this._renderExperienceContainer();

        return (
            <BackgroundImageRenderer className={styles.Resume} image={resumeBackgroundImage}>
                <Triangle />
                <WithAnimation animation='up' type='scroll'>
                    <RotatedContainer tilt='up' deg='3'>
                        <PageTitle title={title} />
                    </RotatedContainer>
                </WithAnimation>
                <WithAnimation animation='up' type='scroll'>
                    <ContentContainer>
                        <Timeline>
                            {educationContainer}
                            {experienceContainer}
                        </Timeline>
                    </ContentContainer>
                </WithAnimation>
            </BackgroundImageRenderer>
        );
    }

    /**
     * The mobile version of the Resume
     */
    _renderMobileVersion() {
        const { title } = this.props;
        const educationContainer = this._renderEducationContainer();
        const experienceContainer = this._renderExperienceContainer();

        return (
            <BackgroundImageRenderer className={styles.Resume} image={resumeBackgroundImage}>
                <Triangle />
                <WithAnimation animation='up' type='scroll'>
                    <RotatedContainer tilt='up' deg='3'>
                        <PageTitle title={title} />
                    </RotatedContainer>
                </WithAnimation>
                <WithAnimation animation='up' type='scroll'>
                    <ContentContainer>
                        {educationContainer}
                        {experienceContainer}
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

export default connect(mapStateToProps, null)(Resume);
