import { ReactElement } from 'react'
import { AddTitleProps } from '../../interfaces';

import "./index.css"

export default function AddTitle({title, onTitleChange}: AddTitleProps): ReactElement {
  return (
    <div className='AddTitle FormInput'>
      <p>Title: </p>
      <form>
        <input 
          type="text" 
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </form>
    </div>
  )
}
