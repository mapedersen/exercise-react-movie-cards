import { ReactElement } from 'react'
import { FormButtonsProps } from '@interfaces'

export default function FormButtons( {onClear}: FormButtonsProps ):ReactElement {
  return (
    <>
      <div className="formButtons">
        <button type="button" onClick={onClear}>Clear</button>
        <button type="submit">Add</button>
      </div>
    </>
  )
}
