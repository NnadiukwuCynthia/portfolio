import { useState } from "react"
import {Flex, FormControl, FormLabel, Image, Input, FormErrorMessage, FormHelperText, Box, Text} from "@chakra-ui/react"

const Contact = () => {
    const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  return (
        <Box m='auto'>
            <Text mb='3rem' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white' align='center'>Contact Me</Text>
    
        <Flex justify='center' w='100%'>
        <Flex justify='center' w='40%' m='20px 10px' borderRadius='xl' boxShadow='-1px 2px 10px #1d1d20' bg='#171718' >
           <Image w='90%' m='30px 10px' borderRadius='xl' h='200px' src='../../contact.avif'/>
        </Flex>
        <FormControl  w='40%' m='20px 10px' py='30px' borderRadius='xl' boxShadow='-1px 2px 10px #1d1d20' bg='#171718'>
            <FormLabel p='20px 30px 5px' textTransform='uppercase' color='grey'>Name</FormLabel>
            <Input mx='30px' w='90%' h='3rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='text' value={input} onChange={handleInputChange}/>
            {!isError ? (
            <FormHelperText color='white' px='30px'>
                Enter Correct Mail Address.
            </FormHelperText>
        ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
        </FormControl>
        </Flex>
    </Box>
  )
}

export default Contact