import React, { Component } from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SplashPage from '../SplashPage/SplashPage';
import { AboutMe, Projects, Resume, SkillSet } from '../../util/PageContainerUtil';
import Footer from '../Footer/Footer';

class Home extends Component {

    state = {
        pages: [
            <AboutMe id="about-me" title="ABOUT ME" />,
            <SkillSet id="skill-set" title="SKILL SET" />,
            <Projects id="projects" title="PROJECTS" />,
            <Resume id="resume" title="RESUME" />
        ]
    }

    render() {
        const { pages } = this.state;
        const renderedPages = pages.map((page, index) => {
            return <div key={index}>{page}</div>
        });

        return (
            <div>
                <Toolbar toolbarItems={pages} />
                <SplashPage />
                {renderedPages}
                <Footer />
            </div>
        );
    }
}

export default Home;
