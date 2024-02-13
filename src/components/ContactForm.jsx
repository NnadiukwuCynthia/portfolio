import { useState } from "react"
import { FormControl, FormLabel, Input, FormErrorMessage, FormHelperText,} from "@chakra-ui/react"

const ContactForm = () => {
    const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  return (
    <FormControl  w='40%' m='20px 10px' py='30px' borderRadius='xl' boxShadow='-1px 2px 10px #1d1d20' bg='#171718'>
            <FormLabel p='20px 30px 5px' textTransform='uppercase' color='grey'>Name</FormLabel>
            <Input mx='30px' w='90%' h='4rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='text' value={input} onChange={handleInputChange}/>
            {!isError ? (
            <FormHelperText color='white' px='30px'>
                Enter Correct Mail Address.
            </FormHelperText>
        ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
        </FormControl>
  )
}

export default ContactForm