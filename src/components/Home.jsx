import { Flex, Text, Image, Box, Button, Stack, Link } from '@chakra-ui/react';
import { MdOutlineMailOutline } from "react-icons/md";
import { LuGithub } from "react-icons/lu";

const Home = () => {
  return (
    <Flex w='100%' h='630px' justify='center' align='center' m='0 auto 20px' bg='#1e293b'>
        <Box w='45%'>
        <Text fontSize='60px' color='#69b0ef' fontWeight='bold'>
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
          <Button _hover={{}} p={5} w='20%' bg='#3b82f6' variant='solid' leftIcon={<MdOutlineMailOutline style={{fontSize: "28px"}}/>} fontSize='18px'>
            <Link href="mailto:cynthiaamaran@gmail.com">Contact Me</Link>
          </Button>
          <Button _hover={{color:'black', bg:'white', transition:'1s'}} w='15%' bg='#1e293b' color='#ffffff' variant='solid' leftIcon={<LuGithub style={{fontSize: "28px"}}/> } boxShadow="xl" fontSize='18px'><Link href='https://github.com/NnadiukwuCynthia' isExternal>Github</Link></Button>
        </Stack>
        
        </Box>
        <Box w='40%'>
            <Image src='../../myImage.jpg' alt='Dan Abramov' h='400px' w='100%' borderRadius='10%' borderWidth='5px' borderColor='black' borderStyle='dashed'/>
        </Box>
    </Flex>
  )
}

export default Home;