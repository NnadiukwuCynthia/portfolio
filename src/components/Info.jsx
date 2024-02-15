import {Box, Flex, Image, Text, Link} from "@chakra-ui/react";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";

const Info = () => {
  return (
    <Flex align='center' direction='column' w={{base: '95%', sm: '80%', md: '80%', lg: '45%' }} py='40px' m='20px auto' borderRadius='xl' boxShadow='-1px 2px 10px #1d1d20' bg='#171718' >
           <Image w='80%'  h='250px' m='0 10px 5px' borderRadius='xl' src='../../contact.avif'/>
           <Box w='80%'  color='white'>
            <Text fontFamily='Roboto' fontSize='27px' fontWeight='bold' textTransform='capitalize'>Cynthia Amarachi, Nnadiukwu</Text>
            <Text fontFamily='Roboto' fontSize='20px' fontWeight='bold' textTransform='capitalize'>Junior Software Engineer</Text>
            <Text fontFamily='Roboto' fontSize='20px' fontWeight='bold' pt='1rem'>
            I am available for remote, onsite, and freelance opportunities. With a commitment to delivering high-quality work and a flexible approach to collaboration!!
            </Text>
            <Text fontFamily='Roboto' fontSize='20px' fontWeight='bold' pt='1rem'>Connect with me via my contact Details</Text>
            <Flex fontSize='20px' fontWeight='bold' pt='1rem' align='center' fontFamily='Roboto'>Phone <IoCall 
                style={{marginInline:"5px", color:'red', fontSize:'25px'}}/>: +234 810 888 5430</Flex>
            <Flex fontSize='20px' fontWeight='bold' pt='1rem' align='center' fontFamily='Roboto'>Mail <AiOutlineMail style={{marginInline:"5px", color:'red', fontSize:'25px'}}/>:  cynthiaamaran@gmail.com </Flex>
            <Box pt='1rem'>
              <Text textTransform='capitalize' fontWeight='bold' fontSize='20px' fontFamily='Roboto'>Find Me On Socials</Text>
              <Flex w='30%' justify='space-between'>
                <Link href="https://www.linkedin.com/in/cynthia-nnadiukwu-775b241a6/" target="_blank"><FaLinkedinIn style={{backgroundColor:'#171718', boxShadow:'1px 1px 5px crimson', fontSize:'25px', marginBlock:'10px'}}/></Link>
                <Link target="_blank" href="https://twitter.com/CynthiaAmara16"><FaXTwitter style={{backgroundColor:'#171718', boxShadow:'1px 1px 5px crimson', fontSize:'25px', marginBlock:'10px'}}/></Link>
                <Link target='_blank' href='https://github.com/NnadiukwuCynthia'><FaGithub style={{backgroundColor:'#171718', boxShadow:'1px 1px 5px crimson', fontSize:'25px', marginBlock:'10px'}}/></Link>
              </Flex>
            </Box>
           </Box >
    </Flex>
  )
}

export default Info