import  { ReactElement } from 'react'
import { AddRatingProps } from '../../interfaces'

export default function AddRating({rating, onRatingChange}: AddRatingProps ): ReactElement {
  return (
    <div className='AddRating FormInput'>
      <p>Rating: {rating}</p>
        <input 
          type="range"
          min="0"
          max="5" 
          value={rating}
          onChange={(e) => onRatingChange(parseInt(e.target.value))}
        />
    </div>
  )
}
