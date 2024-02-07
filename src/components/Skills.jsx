import {  Flex, Stack, Text, Image} from "@chakra-ui/react"

const Skills = () => {
  return (
    <Flex justify={'center'} align={'center'} direction={'column'} width='100%' pb='40px' mt='50px'>
        <Text mb='3rem' textTransform='uppercase' fontSize='30px' color='lawngreen'>Skills</Text>
        <Flex justify={'space-between'} align={'center'}  width='80%'>
            <Stack width='31%' height='300px' bg='#1e293b' borderRadius='xl'>
                <Image w='100%' h='100%' borderRadius='xl' src="../../public/skills.jpg"/>
            </Stack>
            <Stack width='31%' height='300px' bg='#1e293b' borderRadius='xl' py='10px'>
              <Text  color='#ffffff' fontSize='20px' align='center'>Technical Skills</Text>
              <Flex wrap='wrap'>
              <Text color='#ffffff' border='4px' borderColor='lawngreen' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>HTML5</Text>
              <Text  color='#ffffff' border='4px' borderColor='white' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>CSS3</Text>
              <Text color='#ffffff' border='4px' borderColor='orange' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>SASS</Text>
              <Text color='#ffffff' border='4px' borderColor='yellow' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>JavaScript</Text>
              <Text color='#ffffff' border='4px' borderColor='red' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>React</Text>
              <Text color='#ffffff' border='4px' borderColor='blue' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>Next</Text>
              <Text color='#ffffff' border='4px' borderColor='white' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>Tailwind CSS</Text>
              <Text color='#ffffff' border='4px' borderColor='lawngreen' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>Chakra Ui</Text>
              <Text color='#ffffff' border='4px' borderColor='violet' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>Git</Text>
              <Text color='#ffffff' border='4px' borderColor='pink' padding='10px' width='110px' align='center' borderRadius='xl' m='6px'>Chakra Ui</Text>
              </Flex>
              </Stack>
            <Stack width='33%' height='300px' bg='#1e293b' borderRadius='xl'><Text>Soft Skills</Text></Stack>
        </Flex>
    </Flex>
  )
}

export default Skills