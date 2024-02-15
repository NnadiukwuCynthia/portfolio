import { Flex, Text, Image, Box, Button, Stack, Link } from '@chakra-ui/react';
import { MdOutlineMailOutline } from "react-icons/md";
import { LuGithub } from "react-icons/lu";

const Home = () => {
 
  return (
    <Flex 
    w='100%' 
    h='100vh' 
    justify='center' 
    align='center' 
    m='auto' 
    bg='#000000' 
    pt= {{base: '20px', sm: '20px', lg: '30px'}}
    direction={{base: "column", sm: "column", md: "column", lg: "row"}}
    >
        <Box w={{ base: "100%", sm: "100%", md: "80%", lg: "40%" }} display='flex' justifyContent='center'>
            <Image src='../../myImage.png' alt='Dan Abramov'  h={{ base: "350px", sm: "400px", md: "400px", lg: "550px" }} w={{ base: "40%", sm: "40%", md: "50%", lg: "80%" }} borderRadius='xl' borderWidth='5px' borderColor='black' borderStyle='dashed'/>
        </Box>
        <Box w={{ base: "100%", sm: "100%", md: "75%", lg: "40%" }} display='flex' justifyContent='center' px='10px'>
        <Box>
        <Text fontFamily='Roboto' color='crimson' fontWeight='bold' textAlign='center' fontSize={{ base: "25px", md: "30px", lg:'40px' }}>
            Cynthia Nnadiukwu
        </Text>
        <Text fontFamily='Roboto' color='#fffafa' fontSize={{ base: "sm", md: "lg",  }} fontWeight='bold' mr='20px'>
            Turning caffeine into code, one pixel at a time!!
        </Text>    
        <Stack
          direction={{base: "row", sm: "row", md: "row", lg: "row"}}
          spacing={10}
          display='flex'
          align='center'
          justify='start'
          width='100%'
          mt='20px'
        >
          <Button  _hover={{}} p={5} w='40%' bg='crimson' color='#ffffff' variant='solid' leftIcon={<MdOutlineMailOutline style={{fontSize: "28px"}}/>} fontSize='18px'>
            <Link fontFamily='Roboto' href="mailto:cynthiaamaran@gmail.com" _hover={{textDecoration:'none'}}>Email Me</Link>
          </Button>
          <Button _hover={{color:'crimson', border:'1px', transition:'.50s'}} w='40%' bg='#000000' color='#ffffff' variant='solid' leftIcon={<LuGithub style={{fontSize: "28px"}}/> } boxShadow="xl" fontSize='18px'><Link fontFamily='Roboto' href='https://github.com/NnadiukwuCynthia' isExternal>Github</Link></Button>
        </Stack>
        </Box>
        
        </Box>
        
    </Flex>
  )
}

export default Home;