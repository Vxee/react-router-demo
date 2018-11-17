import React from 'react';
import { withRouter } from 'react-router';

const About = ({ match, location, history}) => {
    return (
    	<div>You are now at {location.pathname}</div>
    );
}
export default withRouter(About);

