import { ReactElement } from 'react'
import { FormFieldProps } from '@interfaces'
import { FormControl, FormLabel, Select } from '@chakra-ui/react';

export default function AddGenre({value, name, onChange}: FormFieldProps<string> ):ReactElement {
  return (
    <FormControl id={name} mb={4}>
      <FormLabel>Genre</FormLabel>
      <Select
        value={value}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder="Select genre"
      >
        <option value="comedy">Drama</option>
        <option value="romance">Romance</option>
        <option value="action">Action</option>
        <option value="horror">Horror</option>
        <option value="fantasy">Fantasy</option>
        <option value="documentary">Documentary</option>
      </Select>
    </FormControl>
  )
}
