import { Box, Text, Flex, Spacer,  Link as ChakraLink} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { FaHome, FaCode } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";

const Header = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 784 });

  return (
    <Box bg='#000000e5' w='100%' h='90px' color='crimson' boxShadow='xl' pos='fixed' p ='1rem 4rem' zIndex='10'>
        <Flex >
            <Flex fontSize='3xl' pl={6} textTransform={'uppercase'} className='logo' justify={'space-between'} align={'center'}><FaCode/>Cynthia<FaCode/></Flex>
            <Spacer/>
            <Flex pr={9} w='40%' justify={'space-between'} align={'center'} fontWeight='bold'>
              <Text fontSize='xl'><ChakraLink as={ReactRouterLink} to='/'>{isSmallScreen ? <FaHome style={{fontSize: "40px"}}/> : 'Home'}</ChakraLink></Text>
              <Text fontSize='xl'><ChakraLink as={ReactRouterLink} to='/about'>{isSmallScreen ? <FaHome style={{fontSize: "40px"}}/> : 'About Me'}</ChakraLink></Text>
              <Text fontSize='xl'><ChakraLink as={ReactRouterLink} to='/skill'>{isSmallScreen ? <GiStrong style={{fontSize: "40px"}}/> : 'Skills'}</ChakraLink></Text>
              <Text fontSize='xl'><ChakraLink as={ReactRouterLink} to='/project'>{isSmallScreen ? <GrAchievement style={{fontSize: "30px"}}/> : 'Projects'}</ChakraLink></Text>
              <Text color='white' fontSize='lg'><ChakraLink _hover={{textDecoration:'none'}} as={ReactRouterLink} to='/contact'>{isSmallScreen ? <MdWifiCalling3 style={{fontSize: "40px"}}/> : 'CONTACT ME'}</ChakraLink></Text>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Header