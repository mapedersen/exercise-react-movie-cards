import { ReactElement } from 'react'
import { FormFieldProps } from '@interfaces';
import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';

export default function AddTitle({value, name, onChange}: FormFieldProps<string>): ReactElement {
  return (
    <FormControl id={name} mb={4}>
      <FormLabel>Title</FormLabel>
        <Input 
          type="text" 
          value={value}
          name={name}
          onChange={(e) => onChange(name, e.target.value)}
        />
    </FormControl>
  )
}
