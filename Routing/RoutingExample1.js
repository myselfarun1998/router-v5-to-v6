import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import NavigationMenu from './NavigationMenu'

const RoutingExample1 = () => {
    return (
        <Router>
            <NavigationMenu />
        </Router>

    );

}

export default RoutingExample1;