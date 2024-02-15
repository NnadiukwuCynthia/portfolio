
import { Box, Flex, Text } from "@chakra-ui/react"
import Info from "./Info"
import ContactForm from "./ContactForm"

const Contact = () => {
    
  return (
    <Box m='auto'>
      <Text fontFamily='Protest Riot' mb='3rem' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white' align='center'>Contact Me</Text>
      <Flex direction={{base: 'column', sm: 'column', md: 'column', lg: 'row' }} justify='center' w='100%'>
      <Info/>
      <ContactForm/>
      </Flex>
    </Box>
  )
}

export default Contact