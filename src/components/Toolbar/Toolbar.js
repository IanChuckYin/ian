import React, { Component } from 'react';
import styles from './Toolbar.module.scss';

import Toolbarbutton from '../ToolbarButton/ToolbarButton';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import selectors from '../../util/Selectors';
import {
    isElementVerticallyIntersectingWith,
    getMostPrevalentElement,
    rgb2hex,
    getReverseRGB
} from '../../util/DomUtil';

class Toolbar extends Component {
    state = {
        renderedButtons: null,
        domElements: null,
        selectedButton: null
    }

    // Lifecycle hook when component is mounted
    componentDidMount() {
        this._addScrollListener();
        this._renderToolbarButtons();
    }

    // Lifecycle hook when component is unmounted
    componentWillUnmount() {
        this._removeScrollListener();
    }

    // Adds the scroll listener
    _addScrollListener() {
        window.addEventListener('scroll', this._onScroll.bind(this));
    }

    // Removes the scroll listener
    _removeScrollListener() {
        window.removeEventListener('scroll', this._onScroll.bind(this));
    }

    // Scroll event
    _onScroll() {
        this._updateToolbarStyle();
        this._updateSelectedButton();
    }

    _updateToolbarStyle() {
        const domToolbarButtons = document.getElementsByClassName(selectors.TOOLBAR_BUTTON);
        const { toolbarItems } = this.props;
        const domPages = toolbarItems.map(item => document.getElementById(item.props.id));
        const pageElementMap = {};

        // Create a map of all pages, and which toolbar buttons are intersecting them
        domPages.forEach((page) => {
            const currentBackgroundColor = rgb2hex(window.getComputedStyle(page).getPropertyValue("background-color"));
            Array.from(domToolbarButtons).forEach((button) => {
                if (isElementVerticallyIntersectingWith(button, page)) {
                    if (pageElementMap[currentBackgroundColor]) {
                        pageElementMap[currentBackgroundColor].push(button);
                    } else {
                        pageElementMap[currentBackgroundColor] = [button];
                    }
                }
            });
        });
        Object.keys(pageElementMap).forEach((colorKey) => {
            pageElementMap[colorKey].forEach(element => {
                const buttonBorder = element.getElementsByClassName(selectors.TOOLBAR_BUTTON_BORDER)[0];
                buttonBorder.style.borderColor = getReverseRGB(colorKey);
                element.style.color = getReverseRGB(colorKey);
            });
        });
    }

    // Update the selected button based on what's currently in the viewport
    _updateSelectedButton() {
        const { toolbarItems } = this.props;
        const domPages = toolbarItems.map(item => document.getElementById(item.props.id));
        const mostPrevalentPage = getMostPrevalentElement(domPages);
        this.setState({ selectedButton: mostPrevalentPage.id });
    }

    /**
     * Returns a boolean that determines if the given button ID is selected
     * @return {Boolean}
     */
    _isButtonSelected(itemId) {
        return itemId === this.state.selectedButton;
    }

    // General toolbar button click
    _onButtonClick(item) {
        const reactElementID = item.props.id;
        this._scrollIntoView(document.getElementById(reactElementID));
    }

    /**
     * Scrolls into view of the specified DOM element
     * @param {Element} domElement The DOM element to scroll into view
     */
    _scrollIntoView(domElement) {
        domElement.scrollIntoView({ behavior: "smooth" });
    }

    // Render the toolbar components and store them
    _renderToolbarButtons() {
        const { toolbarItems } = this.props;
        const renderedButtons = toolbarItems.map((item, index) => {
            const pageTitle = item.props.title;
            return (
                <Toolbarbutton
                    key={index}
                    selected={this._isButtonSelected(item.props.id)}
                    buttonLabel={pageTitle}
                    onClick={() => this._onButtonClick(item)}
                />
            );
        });
        return renderedButtons;
    }

    render() {
        return (
            <WithAnimation className={styles.Toolbar} animation='right' type='onload'>
                {this._renderToolbarButtons()}
            </WithAnimation>
        );
    }
}

export default Toolbar;
