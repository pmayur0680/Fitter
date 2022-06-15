// profile page shows ...
// Name
// Goals
// Plans
// Posts?
import React, { useState } from 'react';

import {
    Container,
    Box,
    SimpleGrid,
    Flex,
    Heading,
    Alert,
    AlertIcon,
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
    List,
    Link,
    CircularProgress,
    textDecoration
  } from '@chakra-ui/react';
  
  import { 
    BsFillPersonLinesFill,
    BsTools,
    BsFillPlusCircleFill,
   } from "react-icons/bs";

   import { useQuery } from '@apollo/client';
   import { Link as RouterLink } from 'react-router-dom';

   import theme from '../../Theme';
   import Auth from '../../utils/auth';
   import { QUERY_ME } from '../../utils/queries';
  import { FaMousePointer } from 'react-icons/fa';


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
    const buttonBg = useColorModeValue('#151F21', 'gray.900');
    const recentPostBg = useColorModeValue(theme.colors.darkgreen, 'red.900');
    const currentMealPlanBg = useColorModeValue(theme.colors.lightblue, 'purple.900');
    const currentExerciseBg = useColorModeValue(theme.colors.lightgreen, 'teal.900');
    const currentGoalBg = useColorModeValue(theme.colors.grey, 'yellow.900');
    const dividerBorder = useColorModeValue('gray.100', 'gray.700');
  
    // ISSUES
    // stores data in localstorage but only after loading the page
    // On page load, no data is there to use
    // This throws an error if I uncomment line 135 and try running it
    const { loading, error, data } = useQuery(QUERY_ME);    
    const user = data?.me || {};    
    
  //  console.log(user)
  // MOVE USECOLORMODEVALUE TO VARIABLES SET BEFORE IF STATEMENT
  if(loading){
      return (
        <Center>
          <CircularProgress h={'100vh'} isIndeterminate />
        </Center>
      )
    }

    // const targetWeight = user.goals[0].goalWeight;
    // console.log(targetWeight);
     // if data isn't here yet, say so
       
    return (        
      <Box display="flex">
      <Container maxW={'5xl'} py={12}>
        <Box borderWidth='2px' borderRadius='lg' mb='5' overflow='hidden'>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={12}>
       
          <Stack spacing={4}  align="center">
          <Center>
            <Avatar size='2xl' name={user.username} src='https://bit.ly/' />{' '}
          </Center>
            <Heading>{user.username}'s Profile</Heading>
            { (user.gender || user.age || user.weight || user.height) &&
            <UnorderedList color={'gray.500'} fontSize={'lg'}>
              { (user.gender) &&
              <ListItem>{user.gender}</ListItem>  
              }
              { (user.age) &&
              <ListItem>{user.age} years old</ListItem>
              }
              { (user.weight) &&
              <ListItem>{user.weight} pounds</ListItem>
              }
              { (user.height) &&
              <ListItem>{user.height} inches</ListItem>       
              }
            </UnorderedList>
            }
            <Link as={RouterLink} to='/profile/edit'>
              <Button
                leftIcon={<BsFillPersonLinesFill />}
                px={8}
                bg={buttonBg}
                color={'white'}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
              >
                Edit Profile
              </Button>
            </Link>
            </Stack>
            <Center>
            <Stack
              spacing={4}
              align="left"
              mt="5"
              divider={
                <StackDivider
                  borderColor={dividerBorder}
                />
              }>

              <Feature
                iconBg={currentGoalBg}
                text={`Your current goal`}

                // add goal
              />                
              { user.exercisePlan.length > 0 &&                
              <UnorderedList>
                {user.goals.slice(0).reverse().map( (item, index) => (
                    <ListItem key={index}>
                          {item.goalWeight} lbs
                          </ListItem>
                ))}
              </UnorderedList>
              }
              <Feature
                iconBg={currentExerciseBg}                

                text={`Your current exercise plan`}

                // add exercise plan
              />
    
              { user.exercisePlan.length > 0 &&                
              <UnorderedList>
                {user.exercisePlan.slice(0).reverse().map(item => (
                    <ListItem key={item.id}>
                          {item.name}
                          </ListItem>
                ))}
              </UnorderedList>
              }
              <Feature
                iconBg={currentMealPlanBg}

                text={`Your current meal plan`}

                // add meal plan
              />
              { user.mealPlan.length > 0 &&                
              <UnorderedList>
                {user.mealPlan.slice(0).reverse().map(item => (
                    <ListItem key={item.id}>
                          {item.name}
                          </ListItem>
                ))}
              </UnorderedList>
               }
              <Feature
                iconBg={recentPostBg}

                text={`Your most recent post`}

                // add post
              />
             { user.posts.length > 0 &&                
              <UnorderedList>                
                    <ListItem>
                      <a href='/posts'>{user.posts[0].createdAt}</a>
                          </ListItem>                
              </UnorderedList>
              }
              <Link as={RouterLink} to='/posts'>
                <Button
                    leftIcon={<BsFillPlusCircleFill />}              
                    px={8}
                    bg={buttonBg}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}
                    >
                    Create Post
                </Button>
              </Link>
            </Stack>
            </Center>
        </SimpleGrid>
        </Box>
          <Box align="center">
            <ButtonGroup variant='outline' spacing='6'>
            <Link as={RouterLink} to='/meal-plan'>
              <Button
                  leftIcon={<BsFillPlusCircleFill />}
                  px={5}
                  bg={buttonBg}
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
            </Link>
              <Button
                  leftIcon={<BsFillPlusCircleFill />}
                  px={8}
                  bg={buttonBg}
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
                  bg={buttonBg}
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