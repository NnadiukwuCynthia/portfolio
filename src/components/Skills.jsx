import {  Flex, Stack, Text, Image} from "@chakra-ui/react"

const Skills = () => {
  return (
    <Flex justify={'center'} align={'center'} direction={'column'} w='100%' pb='20px'>
        <Text mb='2rem' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white'>My Skills</Text>
        <Stack w='51%' h='300px' bg='#1e293b' borderRadius='xl'>
                <Image w='100%' h='100%' borderRadius='xl' src="../../skills.jpg"/>
        </Stack>
        <Flex direction={{base: 'column', sm: 'column', md: 'column', lg: 'row' }} justify={'space-between'} align={'center'}  w='80%' mt='20px'>
            <Stack w={{base: '90%', sm: '80%', md: '60%', lg: '48%'}} h='auto' bg='#1e293b' borderRadius='xl' py='10px' my='20px'>
              <Text  color='#ffffff' fontSize='20px' align='center'>Technical Skills</Text>
              <Flex wrap='wrap' ml='25px' className="skills">
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='lawngreen' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>HTML5</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='white' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>CSS3</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='orange' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>SASS</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='yellow' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>JavaScript</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='lawngreen' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>Chakra Ui</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='red' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>React</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='blue' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>Next</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='white' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>Tailwind CSS</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='violet' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>Git</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='pink' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>Chakra Ui</Text>
              </Flex>
            </Stack>
            <Stack w={{base: '90%', sm: '80%', md: '60%', lg: '48%'}} h='auto' bg='#1e293b' borderRadius='xl' py='10px' my='20px'>
              <Text  color='#ffffff' fontSize='20px' align='center'>Soft Skills</Text>
              <Flex wrap='wrap' ml='30px'>
              <Text color='#ffffff' border='2px' borderColor='lawngreen' padding='10px' w='150px' align='center' borderRadius='xl' m='6px'>Communication</Text>
              <Text color='#ffffff' border='2px' borderColor='white' padding='10px' w='110px' align='center' borderRadius='xl' m='6px'>Team work</Text>
              <Text color='#ffffff' border='2px' borderColor='orange' padding='10px' w='160px' align='center' borderRadius='xl' m='6px'>Problem-solving</Text>
              <Text color='#ffffff' border='2px' borderColor='red' padding='10px' w='110px' align='center' borderRadius='xl' m='6px'>Adaptability</Text>
              <Text color='#ffffff' border='2px' borderColor='yellow' padding='10px' w='160px' align='center' borderRadius='xl' m='6px'>Critical Thinking</Text>
              <Text color='#ffffff' border='2px' borderColor='lawngreen' padding='10px' w='140px' align='center' borderRadius='xl' m='6px'>Creativity</Text>
              <Text color='#ffffff' border='2px' borderColor='blue' padding='10px' w='170px' align='center' borderRadius='xl' m='6px'>Time Management</Text>
              <Text color='#ffffff' border='2px' borderColor='pink' padding='10px' w='110px' align='center' borderRadius='xl' m='6px'>Empathy</Text>
              <Text color='#ffffff' border='2px' borderColor='white' padding='10px' w='110px' align='center' borderRadius='xl' m='6px'>Leadership</Text>
              <Text color='#ffffff' border='2px' borderColor='violet' padding='10px' w='190px' align='center' borderRadius='xl' m='6px'>Emotional Intelligence</Text>
              </Flex>
            </Stack>
        </Flex>
    </Flex>
  )
}

export default Skills