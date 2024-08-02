import { ReactElement } from 'react'
import { MovieCardsProps } from '@interfaces';
import { Box, Heading, Text, Badge, Flex, IconButton  } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function MovieCard({ movie, onClickRemove }: MovieCardsProps):ReactElement {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} boxShadow="md" position="relative">
      <IconButton
        aria-label="Remove movie"
        icon={<CloseIcon />}
        size="sm"
        position="absolute"
        top="8px"
        right="8px"
        onClick={() => onClickRemove(movie.id)}
      />
      <Heading as="h3" size="md" mb={2}>{movie.title}</Heading>
      <Flex mb={2} alignItems="center">
        <Badge colorScheme="purple" fontSize="0.7em" p={1} borderRadius="md" mr={2}>
          {movie.genre}
        </Badge>
        <Text fontWeight="bold" fontSize="lg">{movie.rating} / 5</Text>
      </Flex>
      <Text mt={2}>{movie.description}</Text>
    </Box>
  )
}

