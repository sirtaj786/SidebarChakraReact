import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,Button
} from '@chakra-ui/react';


const Sidebar = () => {
    const btnRef = React.useRef()
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }}  />
      </Flex>
      <Flex direction='column' gap='20px'>
      <Button ref={btnRef} colorScheme='white' fontSize='15px' color='black' gap="20px"  align="center"  cursor="pointer" height='50px' margin='auto' width='200px'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>
       <i class="fa-solid fa-house-chimney" ></i>
        Home
      </Button>
      <Button ref={btnRef} colorScheme='white'  fontSize='15px' color='black' gap="20px" align="center"   cursor="pointer" height='50px' margin='auto' width='200px'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>
      <i class="fa-solid fa-arrow-trend-up"></i>
        Trending
      </Button>
      <Button ref={btnRef} colorScheme='white'  fontSize='15x' color='black' gap="20px" align="center"   cursor="pointer" height='50px' margin='auto' width='200px'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>
      <i class="fa-solid fa-compass"></i>
        Explore
      </Button>
      <Button ref={btnRef} colorScheme='white'  fontSize='15px' color='black' gap="20px"   align="center" height='50px' margin='auto' width='200px'
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>
      <i class="fa-solid fa-star"></i>
        Favroite
      </Button>
      <Button ref={btnRef} colorScheme='white'  fontSize='15px' color='black' gap="20px"  align="center"  cursor="pointer"height='50px' margin='auto' width='200px'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>
      <i class="fa-solid fa-gear"></i>
        Settings
      </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar