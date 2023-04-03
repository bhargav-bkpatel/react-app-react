import React from 'react'

import PropTypes from 'prop-types'

import './grid-card.css'

const GridCard = (props) => {
  return (
    <div className="grid-card-grid-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="grid-card-image"
      />
      <span className="grid-card-text">{props.text}</span>
      <span className="content-Light">{props.text1}</span>
    </div>
  )
}

GridCard.defaultProps = {
  text1:
    'Lorem ipsum dolor sit amet. Velit officia lorem ipsum dolor consequat duis enim velit mollit.​',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Challange yourself',
  image_alt: 'image',
}

GridCard.propTypes = {
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GridCard
