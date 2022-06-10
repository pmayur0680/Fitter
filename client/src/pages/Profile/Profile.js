// profile page shows ...
// Name
// Goals
// Plans
// Posts?
import React  from 'react';
import {
    Container,
    Box,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Button,
    ButtonGroup,
    Stack,
    StackDivider,
    Center,
    useColorModeValue,
    Avatar,
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react';

  import { 
    BsFillPersonLinesFill,
    BsTools,
    BsFillPlusCircleFill,
   } from "react-icons/bs";

   import { useQuery } from '@apollo/client';

   import theme from '../../Theme';
   import Auth from '../../utils/auth';
   import { QUERY_ME } from '../../utils/queries';

  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Profile() {
    const username = Auth.getProfile().data.username;
<<<<<<< HEAD
    const {loading, data}= useQuery(QUERY_ME);
    const user = data?.me || {};
     console.log(user);
    
=======
    const {loading, error, data}= useQuery(QUERY_ME);
    const user = data?.me || {};
    console.log(user);

>>>>>>> 641324223ed91640c1a4330505414bf72a76c499
    return (
      <Box display="flex">
      <Container maxW={'5xl'} py={12}>        
        <Box borderWidth='2px' borderRadius='lg' mb='5' overflow='hidden'>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={12}>
          <Stack spacing={4}  align="center">
          <Center>
            <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
          </Center>
            <Heading>{username}'s Profile</Heading>
            <UnorderedList color={'gray.500'} fontSize={'lg'}>
              <ListItem>{user.gender}</ListItem>  
              <ListItem>{user.age} years old</ListItem>
              <ListItem>{user.weight} pounds</ListItem>
              <ListItem>{user.height} inches</ListItem>       
            </UnorderedList>
            <Button
                leftIcon={<BsFillPersonLinesFill />}
                px={8}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
                // onClick={console.log("poke")}
                >
<<<<<<< HEAD
                <a href="profile/edit">Edit Profile</a>
=======
                Edit Profile
>>>>>>> 641324223ed91640c1a4330505414bf72a76c499
            </Button>
            </Stack>
            <Center>
            <Stack
              spacing={4}
              align="left"
              mt="5"
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>

              <Feature
                iconBg={useColorModeValue(theme.colors.grey, 'yellow.900')}
<<<<<<< HEAD
                text={`Your current goal`}
=======
                text={'Your current goal : '}
>>>>>>> 641324223ed91640c1a4330505414bf72a76c499
                // add goal

              />
              <Feature
                iconBg={useColorModeValue(theme.colors.lightgreen, 'teal.900')}                
<<<<<<< HEAD
                text={`Your current exercise plan`}
=======
                text={'Your current exercise plan : '}
>>>>>>> 641324223ed91640c1a4330505414bf72a76c499
                // add exercise plan
              />
              <Feature
                iconBg={useColorModeValue(theme.colors.lightblue, 'purple.900')}
<<<<<<< HEAD
                text={`Your current meal plan`}
=======
                text={'Your current meal plan : '}
>>>>>>> 641324223ed91640c1a4330505414bf72a76c499
                // add meal plan
              />
              <Feature
                iconBg={useColorModeValue(theme.colors.darkgreen, 'red.900')}
<<<<<<< HEAD
                text={`Your most recent post `}
=======
                text={'Your most recent post : '}
>>>>>>> 641324223ed91640c1a4330505414bf72a76c499
                // add post
              />
              <Button
                  leftIcon={<BsFillPlusCircleFill />}              
                  px={8}
                  bg={useColorModeValue('#151f21', 'gray.900')}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                  }}
                  // onClick={console.log("poke")}
                  >
                  Create Post
              </Button>
            </Stack>
            </Center>
        </SimpleGrid>
        </Box>
          <Box align="center">
            <ButtonGroup variant='outline' spacing='6'>
              <Button
                  leftIcon={<BsFillPlusCircleFill />}
                  px={5}
                  bg={useColorModeValue('#151f21', 'gray.900')}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                  }}
                  // onClick={console.log("poke")}
                  >
                  Create Meal Plan
              </Button>
              <Button
                  leftIcon={<BsFillPlusCircleFill />}
                  px={8}
                  bg={useColorModeValue('#151f21', 'gray.900')}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                  }}
                  // onClick={console.log("poke")}
                  >
                  Create Exercise Plan
                  
              </Button>
              <Button
                  leftIcon={<BsTools />}              
                  px={8}
                  bg={useColorModeValue('#151f21', 'gray.900')}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                  }}
                  // onClick={console.log("poke")}
                  >
                  Edit Goal
              </Button>
            </ButtonGroup>
          </Box>       
      </Container>
    </Box>
    );
  }