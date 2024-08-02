import { ReactElement } from 'react'
import { FormFieldProps } from '../../../interfaces'
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';

export default function AddDescription({ value, name, onChange }: FormFieldProps<string>):ReactElement {
  return (
    <FormControl id={name} mb={4}>
      <FormLabel>Description</FormLabel>
      <Textarea
        value={value}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder="Description"
        size="md"
      />
    </FormControl>
  )
}
