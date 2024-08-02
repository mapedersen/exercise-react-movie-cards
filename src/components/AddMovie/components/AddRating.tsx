import  { ReactElement } from 'react'
import { FormFieldProps } from '../../interfaces'

export default function AddRating({value, name, onChange}: FormFieldProps<number>): ReactElement {
  return (
    <div className='AddRating FormInput'>
      <p>Rating: {value}</p>
        <input 
          type="range"
          min="0"
          max="5"
          name={name}
          value={value}
          onChange={(e) => onChange(name, parseInt(e.target.value))}
        />
    </div>
  )
}
