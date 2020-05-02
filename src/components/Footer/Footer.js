import React, { Component } from 'react';
import styles from './Footer.module.scss';

import SplitContainer from '../SplitContainer/SplitContainer';
import WithTypeAnimation from '../../hoc/WithTypeAnimation/WithTypeAnimation';

class Footer extends Component {
    state = {
        name: 'IAN CHUCK-YIN',
        location: {
            text: 'Mississauga Ontario',
            icon: 'fas fa-building'
        },
        email: {
            text: 'ichuckyin.uwaterloo.ca',
            icon: 'fas fa-envelope'
        },
        phone: {
            text: '647-470-9115',
            icon: 'fas fa-phone'
        },
    }

    render() {
        const { name, location, email, phone } = this.state;
        const typeAnimationOptions = {
            speed: 40,
            type: 'scroll'
        };

        const leftSide = (
            <WithTypeAnimation
                className={styles.Left}
                text={name}
                speed={typeAnimationOptions.speed}
                type={typeAnimationOptions.type} />
        );

        const rightSide = [location, email, phone].map((item, index) => {
            return (
                <div className={styles.Right} key={index}>
                    <i className={item.icon} />
                    <WithTypeAnimation
                        key={index}
                        text={item.text}
                        speed={typeAnimationOptions.speed}
                        type={typeAnimationOptions.type} />
                </div>
            )
        });

        return (
            <div className={styles.Footer}>
                <SplitContainer
                    split='50'
                    left={leftSide}
                    right={rightSide}
                    middle={true}
                    polar={true} />
            </div>
        );
    }
}

export default Footer;
