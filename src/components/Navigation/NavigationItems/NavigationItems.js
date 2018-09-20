import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={'/'}>
            Burger Builder
        </NavigationItem>
        <NavigationItem>
            Checkout
        </NavigationItem>
    </ul>
);

export default navigationItems;