import { useState } from 'react'
import './StarsRating.css'

import greenStar from '../assets/green-star.svg'
import grayStar from '../assets/gray-star.svg'


// eslint-disable-next-line react/prop-types
export default function StarsRating({ value, onChange }) {

  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(value)
  // console.log(hoveredStar)

  const handleClick = (star) => {
    setSelectedStar(star)
    setHoveredStar(-1)
    onChange(star)
  }


  return(
    <div className='stars-rating' onMouseLeave={() => setHoveredStar(-1)}>
      {
        [1, 2, 3, 4, 5].map((star) => (
          <button key={star} type='button' onClick={() => handleClick(star)} onMouseOver={() => setHoveredStar(star)} aria-selected={star <= selectedStar && hoveredStar === -1}>
            <img src={
              star <= hoveredStar || (selectedStar >= star && hoveredStar === -1) ? greenStar : grayStar
            } alt={`${star} estrela(s)`}  className=''/>
          </button>
        ))
      }
    </div>
  )
}