import { ReactElement } from 'react'
import { FormButtonsProps } from '@interfaces'
import { Button, Box } from '@chakra-ui/react';

export default function FormButtons( {onClear}: FormButtonsProps ):ReactElement {
  return (
    <Box display="flex" justifyContent="flex-end" mt={4}>
      <Button variant="outline" colorScheme="teal" mr={3} onClick={onClear}>
        Clear
      </Button>
      <Button type="submit" colorScheme="teal">
        Add
      </Button>
    </Box>
  )
}
