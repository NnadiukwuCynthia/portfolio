import { Box, Button, Flex, Text, Image, Link } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <Box textAlign='center'>
            <Text align='center' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white' fontFamily='Protest Riot'>My Projects</Text>
            <Text color='crimson' textTransform='uppercase' mb='1rem' fontFamily='Roboto'>Here are some of my personal projects</Text>
            <Flex justify='center' align='center' w='100%' wrap='wrap'>
            <Box w={{base: '60%', sm: '40%', md: '30%', lg: '25%'}} h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image w='100%' h='250px' borderRadius='xl' src="../../Resturant Website.PNG"/>
                <Text color='white' fontSize='20px' py='10px' fontFamily='Roboto'>Restaurant Website</Text>
                <Flex w='100%' direction={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} justify='center' ml={{base: '10px', sm: '10px', md: '10px', lg: '0'}}>
                <Button w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'>
                    <Link fontFamily='Roboto' display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/Resturant"><FiGithub style={{marginInlineEnd:'5px'}}/>Github
                    </Link>
                    </Button>
                <Button w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'>
                    <Link fontFamily='Roboto' display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://resturant-alpha-steel.vercel.app/"><FaExternalLinkAlt style={{marginInlineEnd:'5px'}}/>Link</Link>
                </Button>
                </Flex>
               
            </Box> 
            <Box  w={{base: '60%', sm: '40%', md: '30%', lg: '25%'}} h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image  w='100%' h='250px' borderRadius='xl' src="../../AnalogClock.PNG"/>
                <Text color='white' fontSize='20px'  py='10px' fontFamily='Roboto'>Analog Clock</Text>
                <Flex w='100%' direction={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} justify='center' ml={{base: '10px', sm: '10px', md: '10px', lg: '0'}}>
                <Button  w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/analogClock-with-React-Js"><FiGithub style={{marginInlineEnd:'5px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://my-analog-clock-eight.vercel.app/"> <FaExternalLinkAlt style={{marginInlineEnd:'5px'}}/>Link</Link></Button>
                </Flex>
            </Box> 
            <Box  w={{base: '60%', sm: '40%', md: '30%', lg: '25%'}} h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image  w='100%' h='250px' borderRadius='xl' src="../../Weather App.PNG"/>
                <Text color='white' fontSize='20px'  py='10px' fontFamily='Roboto'>Weather App</Text>
                <Flex w='100%' direction={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} justify='center' ml={{base: '10px', sm: '10px', md: '10px', lg: '0'}}>
                <Button  w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/weatherApp"><FiGithub style={{marginInlineEnd:'5px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://weather-app-mu-orcin-61.vercel.app/"> <FaExternalLinkAlt style={{marginInlineEnd:'5px'}}/>Link</Link></Button>
                </Flex>
            </Box> 
            <Box  w={{base: '60%', sm: '40%', md: '30%', lg: '25%'}} h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image  w='100%' h='250px' borderRadius='xl' src="../../CalculatorApp.PNG"/>
                <Text color='white' fontSize='20px'  py='10px' fontFamily='Roboto'>Calculator</Text>
                <Flex w='100%' direction={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} justify='center' ml={{base: '10px', sm: '10px', md: '10px', lg: '0'}}>
                <Button  w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/caculator-" fontFamily='Roboto'><FiGithub style={{marginInlineEnd:'5px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://caculator-git-main-nnadiukwucynthia.vercel.app/"> <FaExternalLinkAlt style={{marginInlineEnd:'5px'}}/>Link</Link></Button>
                </Flex>
            </Box> 
            <Box  w={{base: '60%', sm: '40%', md: '30%', lg: '25%'}} h='auto' m='30px' pb='40px' borderRadius='xl' bg='#1e1e1e'>
                <Image  w='100%' h='250px' borderRadius='xl' src="../../randomJokeApp.PNG"/>
                <Text color='white' fontSize='20px'  py='10px' fontFamily='Roboto'>Random Joke App</Text>
                <Flex w='100%' direction={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} justify='center' ml={{base: '10px', sm: '10px', md: '10px', lg: '0'}}>
                <Button  w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://github.com/NnadiukwuCynthia/Randome-Joke-App"><FiGithub style={{marginInlineEnd:'5px'}}/>Github</Link></Button>
                <Button  w='80%' h='auto' m='10px 5px' p='10px 5px' bg='#1e1e1e' boxShadow='1px 1px 5px grey' _hover={{}} color='wheat'><Link display='flex' alignItems='center' justifyContent='center' w='100%' target='_blank' href="https://user-authenticatiuon-with-axios-wlcj.vercel.app/"> <FaExternalLinkAlt style={{marginInlineEnd:'5px'}}/>Link</Link></Button>
                </Flex>
            </Box> 
        </Flex>
        </Box>
    );
};

export default Projects;
