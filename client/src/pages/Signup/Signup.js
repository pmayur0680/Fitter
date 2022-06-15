import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Alert,
    AlertIcon,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useFormik } from 'formik';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations'
import { StrengthChecker } from '../../utils/helpers'


export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [weakPassword, setWeakPasswordMessage] = useState(false);
  const [mediumPassword, setMediumPasswordMessage] = useState(false);
  const [strongPassword, setStrongPasswordMessage] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);
//   need to add BMI/Fitness goal input options
  const [errorMessage, setErrorMessage] = useState('');
  function checkPasswordStrength(val) {
    console.log(StrengthChecker(val));
    if (StrengthChecker(val) === "Weak" ) {
      setWeakPasswordMessage('Your password is weak!');
      setMediumPasswordMessage('');
      setStrongPasswordMessage('');
    }
    else if (StrengthChecker(val) === "Medium" ) {
      setMediumPasswordMessage('Your password is medium.');
      setWeakPasswordMessage('');
      setStrongPasswordMessage('');
    }
    else if (StrengthChecker(val) === "Strong" ) {
      setStrongPasswordMessage('Your password is strong.');
      setWeakPasswordMessage('');
      setMediumPasswordMessage('');
    }
  }
  // create form variables
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async ({ username, email, password}) => {           
      try {       
        // setErrorMessage('');
        console.log('before addUser')
        const { data } = await addUser({
          variables: { username, email, password },
        });
        console.log('after addUser')
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }   
    }
  });

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={(e)=>{ 
              e.preventDefault(); 
              formik.handleSubmit(e);
            }}>
              <FormControl isRequired>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input 
                  id='username'
                  name='username'
                  type='text'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input
                  id='email' 
                  name='email'
                  type='email' 
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                  <Input 
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'} 
                    variant='filled'
                    onChange={ (e) => {
                      formik.handleChange(e);
                      checkPasswordStrength(e.currentTarget.value);                      
                    }}
                    value={formik.values.password}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {weakPassword && (
                        <Stack spacing={3} mt={3}>
                            <Alert status='error'>
                            <AlertIcon />
                            {weakPassword}
                          </Alert>
                          </Stack>  
                          )}    
                {mediumPassword && (
                        <Stack spacing={3} mt={3}>
                            <Alert status='warning'>
                            <AlertIcon />
                            {mediumPassword}
                          </Alert>
                          </Stack>  
                          )}  
                 {strongPassword && (
                        <Stack spacing={3} mt={3}>
                            <Alert status='success'>
                            <AlertIcon />
                            {strongPassword}
                          </Alert>
                          </Stack>  
                          )}                                                       
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'green'}
                  color={'white'}
                  _hover={{
                    bg: 'darkgreen',
                  }}>
                  Sign up
                </Button>
              </Stack>
            </form>
            {errorMessage && (
                        <Stack spacing={3}>
                            <Alert status='error'>
                            <AlertIcon />
                            {errorMessage}
                          </Alert>
                          </Stack>  
                          )}    
                                            
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link as={RouterLink} to='/login' color={'darkgreen'}>Log in</Link>
                {/* link back to login if already a user */}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}