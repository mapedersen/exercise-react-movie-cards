import  { ReactElement } from 'react'

export default function AddRating(): ReactElement {
  return (
    <div className='AddRating FormInput'>
      <p>Rating: </p>
      <form action="">
        <input type="range" />
      </form>
    </div>
  )
}
