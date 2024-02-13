
import { Box, Flex, Text } from "@chakra-ui/react"
import Info from "./Info"
import ContactForm from "./ContactForm"

const Contact = () => {
    
  return (
    <Box m='auto'>
      <Text mb='3rem' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white' align='center'>Contact Me</Text>
      <Flex justify='center' w='100%'>
      <Info/>
      <ContactForm/>
      </Flex>
    </Box>
  )
}

export default Contact