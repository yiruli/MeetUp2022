import React from 'react'
import {Link} from 'react-router-dom'
import { PropTypes } from 'prop-types'

const About = ({id}) => {
    return (
        <div class="container-fluid bg-light">   
            <div class="container p-5">
                <h4>1.1.1 Version</h4>
                <Link to ='/'>Go Back</Link>
                <p>{id}</p>
            </div>
        </div>
    )
}

/* About.defaultProps = {
    id: '120',
} */

About.prototype = {
    id: PropTypes.string.isRequired,
}

export default About
