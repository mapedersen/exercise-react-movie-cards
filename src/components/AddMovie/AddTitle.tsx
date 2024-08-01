import { ReactElement } from 'react'
import { useState } from 'react'

import "./index.css"

export default function AddTitle(): ReactElement {

  const [title, setTitle] = useState("");

  return (
    <div className='AddTitle FormInput'>
      <p>Title: </p>
      <form action="">
        <input type="text" />
      </form>
    </div>
  )
}
