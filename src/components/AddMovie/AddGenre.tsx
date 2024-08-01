import { ReactElement } from 'react'

export default function AddGenre():ReactElement {
  return (
    <div className='AddGenre FormInput'>
      <p>Genre: </p>
      <form action="">
        <select name="" id="">
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
        </select>
      </form>
    </div>
  )
}
