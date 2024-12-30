import { Input } from '@chakra-ui/react';

export const TextInput = ({ changeFn }) => {
  return (
    <Input
      className="input"
      onChange={changeFn}
      placeholder="Type here..."
      size="md"
      borderColor="gray.300"
      focusBorderColor="teal.500"
      variant="outline"
      _hover={{ borderColor: 'teal.400' }}
      _focusVisible={{ boxShadow: '0 0 0 1px teal.500' }}
    />
  );
};