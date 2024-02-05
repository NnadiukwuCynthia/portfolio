import { Box, Text, Flex, Spacer, Link } from '@chakra-ui/react'
import { useMediaQuery } from 'react-responsive';
import { FaHome, FaCode } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";

const Header = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 784 });

  return (
    <Box bg='#020817' w='100%' h='100px' p={4} color='#fffafa'>
        <Flex >
            <Flex fontSize='5xl' pl={6} textTransform={'uppercase'} className='logo' justify={'space-between'} align={'center'}><FaCode/>Cindy<FaCode/></Flex>
            <Spacer/>
            <Flex pr={9} w='30%' justify={'space-between'} align={'center'} fontWeight='bold'>
              <Text fontSize='2xl'><Link href='./'>{isSmallScreen ? <FaHome style={{fontSize: "40px"}}/> : 'Home'}</Link></Text>
              <Text fontSize='2xl'><Link href='./'>{isSmallScreen ? <MdWifiCalling3 style={{fontSize: "40px"}}/> : 'Contact Me'}</Link></Text>
              <Text fontSize='2xl'><Link href='./'>{isSmallScreen ? <GrAchievement style={{fontSize: "30px"}}/> : 'Projects'}</Link></Text>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Header