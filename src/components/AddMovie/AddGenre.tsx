import { ReactElement } from 'react'
import { FormFieldProps } from '../../interfaces'

export default function AddGenre({value, name, onChange}: FormFieldProps<string> ):ReactElement {
  return (
    <div className='AddGenre FormInput'>
      <p>Genre: </p>
        <select 
          value={value}
          name={name}
          onChange={(e) => onChange(name, e.target.value)}
        >
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
        </select>
    </div>
  )
}
