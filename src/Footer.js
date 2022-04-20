import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Test About</p>            
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
