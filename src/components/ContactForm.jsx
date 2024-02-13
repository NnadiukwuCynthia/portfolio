import { useState } from "react"
import { FormControl, FormLabel, Input, FormErrorMessage, NumberInputField, NumberInput, Box } from "@chakra-ui/react"

const ContactForm = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleEmailChange = (event) => { 
        setEmail(event.target.value);
    };

    const handleSubjectChange = (event) => { 
        setSubject(event.target.value);
    };
    
    const handleNameValidation = () => {
        if (name.trim() === '') {
        setNameError(true);
        } else {
        setNameError(false);
        }
    };

    const handlePhoneNumberValidation = () => {
       if (phoneNumber.trim() === '') {
            setPhoneNumberError(true);
            } else {
            setPhoneNumberError(false);
        }
    }

    const handleEmailValidation = () => {
        if (email.trim() === '') {
            setEmailError(true);
            } else {
            setEmailError(false);
        }
    }
    const handleSubjectValidation = () => {
        if (subject.trim() === '') {
            setSubjectError(true);
            } else {
            setSubjectError(false);
        }
    }

  return (
    <Box w='40%' m='20px 10px' py='30px' borderRadius='xl' boxShadow='-1px 2px 10px #1d1d20' bg='#171718'>
    <FormControl >
         <FormLabel p='20px 30px 5px' textTransform='uppercase' color='gray'>Name</FormLabel>
            <Input _hover={{border:'3px solid crimson'}} focusBorderColor='tranparent' mx='30px' w='90%' h='4rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='text' value={name} onChange={handleNameChange} onBlur={handleNameValidation} />
            {nameError && <FormErrorMessage>Name is Required.</FormErrorMessage>}
    </FormControl>
    <FormControl>    
            <FormLabel p='20px 30px 5px' textTransform='uppercase' color='gray'>Phone Number</FormLabel>
            <NumberInput>
                <NumberInputField _hover={{border:'3px solid crimson'}} focusBorderColor='none' mx='30px' w='90%' h='4rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='number' value={phoneNumber} onChange={handlePhoneNumberChange} onBlur={handlePhoneNumberValidation}/>
                {phoneNumberError && <FormErrorMessage>Phone Number is Required.</FormErrorMessage>}
            </NumberInput>
    </FormControl>
    <FormControl>                     
            <FormLabel p='20px 30px 5px' textTransform='uppercase'  color='gray'>Email</FormLabel>
            <Input _hover={{border:'3px solid crimson'}} focusBorderColor='tranparent' mx='30px' w='90%' h='4rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='email' value={email} onChange={handleEmailChange} onBlur={handleEmailValidation} />
            {emailError && <FormErrorMessage>Email is Required.</FormErrorMessage>}
              
    </FormControl>
    <FormControl >
         <FormLabel p='20px 30px 5px' textTransform='uppercase' color='gray'>Subject</FormLabel>
            <Input _hover={{border:'3px solid crimson'}} focusBorderColor='tranparent' mx='30px' w='90%' h='4rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='text' value={subject} onChange={handleSubjectChange} onBlur={handleSubjectValidation} />
            {subjectError && <FormErrorMessage>Subject is Required.</FormErrorMessage>}
    </FormControl> 
    </Box>
  )
}

export default ContactForm