import { ReactElement } from 'react'
import { FormFieldProps } from '../../interfaces'

export default function AddDescription({ value, name, onChange }: FormFieldProps<string>):ReactElement {
  return (
    <div className='AddDescription FormInput'>
      <p>Description: </p>
        <textarea 
          value={value}
          name={name}
          onChange={(e) => onChange(name, e.target.value)}
        ></textarea>
    </div>
  )
}
