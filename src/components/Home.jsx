import { Flex, Text, Image, Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex w='100%' h='550px' justify='center' align='center' textAlign= 'center' m='0 auto 20px' bg='#1e293b'>
        <Box w='50%'>
        <Text fontSize='60px' color='#69b0ef' fontWeight='bold' textAlign='center' mb={3}>
            Cynthia Nnadiukwu
        </Text>
        <Text color='#fffafa' fontSize='30px' fontWeight='bold' noOfLines={[1, 2, 3, 4, 5]} mr='20px'>
            HELLO!!! I am Cynthia Nnadiukwu Passionate frontend developer with a keen eye for design and user experience. Proficient in creating responsive and visually appealing web applications using the latest technologies. Dedicated to crafting elegant and efficient code that brings ideas to life. Excited to contribute creativity and technical expertise to innovative projects.
        </Text>
        </Box>
        <Box>
            <Image src='../../myImage.jpg' alt='Dan Abramov' h='350px' w='350px' borderRadius='10%' borderWidth='5px' borderColor='black' borderStyle='dashed'/>
        </Box>
    </Flex>
  )
}

export default Home;