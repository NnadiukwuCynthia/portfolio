import {Box, Flex, Image, Text} from "@chakra-ui/react";
import { IoCall } from "react-icons/io5";

const Info = () => {
  return (
    <Flex align='center' direction='column' w='38%' m='20px 10px' borderRadius='xl' boxShadow='-1px 2px 10px #1d1d20' bg='#171718' >
           <Image w='80%'  h='250px' m='40px 10px 5px' borderRadius='xl' src='../../contact.avif'/>
           <Box w='80%'  color='white'>
            <Text fontSize='27px' fontWeight='bold' textTransform='capitalize'>Cynthia Amarachi, Nnadiukwu</Text>
            <Text fontSize='20px' fontWeight='bold' textTransform='capitalize'>Junior Software Engineer</Text>
            <Text fontSize='20px' fontWeight='bold' pt='1rem'>
            I am available for remote, onsite, and freelance opportunities. With a commitment to delivering high-quality work and a flexible approach to collaboration!!
            </Text>
            <Text fontSize='20px' fontWeight='bold' pt='1rem'>Connect with me via my contact Details</Text>
            <Flex fontSize='20px' fontWeight='bold' pt='1rem' align='center'>Phone <IoCall 
                style={{marginInline:"5px", color:'red'}}/>: +234 810 888 5430</Flex>
            <Text fontSize='20px' fontWeight='bold' pt='1rem'>Connect with me via my contact Details</Text>
           </Box >
    </Flex>
  )
}

export default Info