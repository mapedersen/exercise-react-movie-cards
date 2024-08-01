import { ReactElement } from 'react'
import { FormButtonsProps } from '../../interfaces';


export default function FormButtons({ onAddClick }: FormButtonsProps):ReactElement {
  return (
    <>
        <button>Clear</button>
        <button onClick={onAddClick}>Add</button>
    </>
  )
}
