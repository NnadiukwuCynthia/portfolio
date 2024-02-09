import { Box, Button, Flex, Text, Image, Link } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <Box mt='7rem' textAlign='center'>
            <Text align='center' mb='3rem' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white'>My Projects</Text>
            <Flex justify='center' align='center' w='100%' wrap='wrap'>
            <Box w='27%' h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image w='100%' h='350px' borderRadius='xl' src="../../Resturant Website.PNG"/>
                <Text color='white' fontSize='20px' py='10px'>Restaurant Website</Text>
                <Button w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/Resturant"><FiGithub style={{marginInlineEnd:'10px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://resturant-alpha-steel.vercel.app/"><FaExternalLinkAlt style={{marginInlineEnd:'10px'}}/>Link</Link></Button>
               
            </Box> 
            <Box  w='27%' h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image  w='100%' h='350px' borderRadius='xl' src="../../AnalogClock.PNG"/>
                <Text color='white' fontSize='20px'  py='10px'>Analog Clock</Text>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/analogClock-with-React-Js"><FiGithub style={{marginInlineEnd:'10px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://my-analog-clock-eight.vercel.app/"> <FaExternalLinkAlt style={{marginInlineEnd:'10px'}}/>Link</Link></Button>
            </Box> 
            <Box  w='27%' h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image  w='100%' h='350px' borderRadius='xl' src="../../Weather App.PNG"/>
                <Text color='white' fontSize='20px'  py='10px'>Weather App</Text>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/weatherApp"><FiGithub style={{marginInlineEnd:'10px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://weather-app-mu-orcin-61.vercel.app/"> <FaExternalLinkAlt style={{marginInlineEnd:'10px'}}/>Link</Link></Button>
            </Box> 
            <Box  w='27%' h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image  w='100%' h='350px' borderRadius='xl' src="../../CalculatorApp.PNG"/>
                <Text color='white' fontSize='20px'  py='10px'>Calculator</Text>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/caculator-"><FiGithub style={{marginInlineEnd:'10px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://caculator-git-main-nnadiukwucynthia.vercel.app/"> <FaExternalLinkAlt style={{marginInlineEnd:'10px'}}/>Link</Link></Button>
            </Box> 
            <Box  w='27%' h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image  w='100%' h='350px' borderRadius='xl' src="../../randomJokeApp.PNG"/>
                <Text color='white' fontSize='20px'  py='10px'>Random Joke App</Text>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/Randome-Joke-App"><FiGithub style={{marginInlineEnd:'10px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 35px' p='10px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://user-authenticatiuon-with-axios-wlcj.vercel.app/"> <FaExternalLinkAlt style={{marginInlineEnd:'10px'}}/>Link</Link></Button>
            </Box> 
        </Flex>
        </Box>
    );
};

export default Projects;
