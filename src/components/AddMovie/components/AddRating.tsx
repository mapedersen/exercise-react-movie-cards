import  { ReactElement } from 'react'
import { FormFieldProps } from '@interfaces'
import { FormControl, FormLabel, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

export default function AddRating({value, name, onChange}: FormFieldProps<number>): ReactElement {
  return (
    <FormControl id={name} mb={4}>
      <FormLabel>Rating: {value}</FormLabel>
        <Slider 
          value={value}
          min={0}
          max={5}
          step={1}
          name={name}
          onChange={(e) => onChange(name, e)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
    </FormControl>
  )
}
