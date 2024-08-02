import { ReactElement } from 'react'
import { FormFieldProps } from '../../interfaces';



export default function AddTitle({value, name, onChange}: FormFieldProps<string>): ReactElement {
  return (
    <div className='AddTitle FormInput'>
      <p>Title: </p>
        <input 
          type="text" 
          value={value}
          name={name}
          onChange={(e) => onChange(name, e.target.value)}
        />
    </div>
  )
}
