import { ReactElement } from 'react'
import { AddGenreProps } from '../../interfaces'

export default function AddGenre({genre, onGenreChange}: AddGenreProps ):ReactElement {
  return (
    <div className='AddGenre FormInput'>
      <p>Genre: </p>
      <form>
        <select 
          value={genre}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
        </select>
      </form>
    </div>
  )
}
