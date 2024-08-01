import { ReactElement } from 'react'
import { AddDescriptionProps } from '../../interfaces'

export default function AddDescription({ description, onDescriptionChange }: AddDescriptionProps):ReactElement {
  return (
    <div className='AddDescription FormInput'>
      <p>Description: </p>
        <textarea 
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
        ></textarea>
    </div>
  )
}
