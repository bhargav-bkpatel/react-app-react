import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navbar-link">{props.text}</span>
      <span className="navigation-links-text1 navbar-link">{props.text1}</span>
      <span className="navigation-links-text2 navbar-link">{props.text2}</span>
      <span className="navigation-links-text3 navbar-link">{props.text3}</span>
      <span className="navigation-links-text4 navbar-link">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Features',
  text3: 'Blog',
  rootClassName: '',
  text4: 'Pricing',
  text: 'Home',
  text1: 'About',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
