import { Flex, Text, Image, Box, Button, Stack, Link } from '@chakra-ui/react';
import { MdOutlineMailOutline } from "react-icons/md";
import { LuGithub } from "react-icons/lu";

const Home = () => {
  return (
    <Flex w='100%' h='100vh' justify='center' align='center' m='auto' bg='#000000' pt='30px'>
        <Box w='50%' pl='10rem'>
        <Text fontSize='40px' color='crimson' fontWeight='bold'>
            Cynthia Nnadiukwu
        </Text>
        <Text color='#fffafa' fontSize='25px' fontWeight='bold' noOfLines={[1, 2, 3, 4, 5]} mr='20px'>
            Turning caffeine into code, one pixel at a time!!
        </Text>    
        <Stack
          direction='row'
          spacing={10}
          display='flex'
          align='center'
          justify='start'
          width='100%'
          mt='20px'
        >
          <Button _hover={{}} p={5} w='26%' bg='crimson' color='#ffffff' variant='solid' leftIcon={<MdOutlineMailOutline style={{fontSize: "28px"}}/>} fontSize='18px'>
            <Link href="mailto:cynthiaamaran@gmail.com" _hover={{textDecoration:'none'}}>Contact Me</Link>
          </Button>
          <Button _hover={{color:'crimson', border:'1px', transition:'.50s'}} w='19%' bg='#000000' color='#ffffff' variant='solid' leftIcon={<LuGithub style={{fontSize: "28px"}}/> } boxShadow="xl" fontSize='18px'><Link href='https://github.com/NnadiukwuCynthia' isExternal>Github</Link></Button>
        </Stack>
        
        </Box>
        <Box w='40%' >
            <Image src='../../myImage.png' alt='Dan Abramov' h='550px' w='80%' borderRadius='xl' borderWidth='5px' borderColor='black' borderStyle='dashed'/>
        </Box>
    </Flex>
  )
}

export default Home;