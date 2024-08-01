import { ReactElement } from 'react'
import { AddTitleProps } from '../../interfaces';



export default function AddTitle({title, onTitleChange}: AddTitleProps): ReactElement {
  return (
    <div className='AddTitle FormInput'>
      <p>Title: </p>
        <input 
          type="text" 
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
    </div>
  )
}
