import {  Flex, Stack, Text, Image} from "@chakra-ui/react"

const Skills = () => {
  return (
    <Flex justify={'center'} align={'center'} direction={'column'} width='100%' pb='40px'>
        <Text mb='3rem' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white'>My Skills</Text>
        <Flex justify={'space-between'} align={'center'}  width='80%'>
            <Stack width='31%' height='300px' bg='#1e293b' borderRadius='xl'>
                <Image w='100%' h='100%' borderRadius='xl' src="../../skills.jpg"/>
            </Stack>
            <Stack width='31%' height='400px' bg='#1e293b' borderRadius='xl' py='10px'>
              <Text  color='#ffffff' fontSize='20px' align='center'>Technical Skills</Text>
              <Flex wrap='wrap' ml='25px' className="skills">
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='lawngreen' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>HTML5</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='white' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>CSS3</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='orange' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>SASS</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='yellow' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>JavaScript</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='red' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>React</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='blue' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>Next</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='white' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>Tailwind CSS</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='lawngreen' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>Chakra Ui</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='violet' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>Git</Text>
              <Text color='#ffffff' fontWeight='bold' border='4px' borderColor='pink' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>Chakra Ui</Text>
              </Flex>
              </Stack>
            <Stack width='33%' height='400px' bg='#1e293b' borderRadius='xl' py='10px'>
              <Text  color='#ffffff' fontSize='20px' align='center'>Soft Skills</Text>
              <Flex wrap='wrap' ml='30px'>
              <Text color='#ffffff' border='4px' borderColor='lawngreen' padding='10px' width='150px' align='center' borderRadius='xl' m='6px'>Communication</Text>
              <Text color='#ffffff' border='4px' borderColor='white' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>Team work</Text>
              <Text color='#ffffff' border='4px' borderColor='orange' padding='10px' width='160px' align='center' borderRadius='xl' m='6px'>Problem-solving</Text>
              <Text color='#ffffff' border='4px' borderColor='yellow' padding='10px' width='160px' align='center' borderRadius='xl' m='6px'>Critical Thinking</Text>
              <Text color='#ffffff' border='4px' borderColor='red' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>Adaptability</Text>
              <Text color='#ffffff' border='4px' borderColor='blue' padding='10px' width='170px' align='center' borderRadius='xl' m='6px'>Time Management</Text>
              <Text color='#ffffff' border='4px' borderColor='white' padding='10px' width='150px' align='center' borderRadius='xl' m='6px'>Leadership</Text>
              <Text color='#ffffff' border='4px' borderColor='lawngreen' padding='10px' width='140px' align='center' borderRadius='xl' m='6px'>Creativity</Text>
              <Text color='#ffffff' border='4px' borderColor='violet' padding='10px' width='190px' align='center' borderRadius='xl' m='6px'>Emotional Intelligence</Text>
              <Text color='#ffffff' border='4px' borderColor='pink' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>Empathy</Text>
              </Flex>
            </Stack>
        </Flex>
    </Flex>
  )
}

export default Skills