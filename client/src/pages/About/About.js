import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react';
  
export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>About</Heading>
            <Text color={'black'} fontSize={'lg'}>
              Meet the Team!
            </Text>
{/* Need to add personal statements */}
            <UnorderedList spacing={4} padding={6}>
                <ListItem><a href="https://github.com/ablanke94">Alex Blanke</a></ListItem>
                <ListItem><a href="https://github.com/KokeHaus">Koki Hara</a></ListItem>
                <ListItem><a href="https://github.com/pmayur0680">Mayur Patel</a></ListItem>
                <ListItem><a href="https://github.com/melissahookey">Melissa Hookey</a></ListItem>
                <ListItem><a href="https://github.com/yummy314159265">Rodin Grajo</a></ListItem>
            </UnorderedList>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'/working.jpg'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
}