import { useState } from "react"
import { FormControl, FormLabel, Input, NumberInputField, NumberInput, Box, Text, Textarea, Button } from "@chakra-ui/react"
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState(false);
    let [mailBody, setMailBody] = useState('')
    

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
    
    const handleInputChange = (e) => {
        let inputValue = e.target.value
        setMailBody(inputValue)
    }
    
    const handleButtonClick = () => {
        let isValid = true;

            if (name.trim() === '') {
                setNameError('Name is required');
                isValid = false;
            } else {
                setNameError('');
            }
        
           if (phoneNumber.trim() === '') {
            setPhoneNumberError('Phone number is required');
            isValid = false;
                } else {
                    setPhoneNumberError('');
            }
   
            if (email.trim() === '') {
                setEmailError('Email is required');
                isValid = false;
            } else {
                 setEmailError('');
            }

        
            if (subject.trim() === '') {
                setSubjectError('Subject is required');
            isValid = false;
        } else {
            setSubjectError('');
        }
    
        if (isValid) {
            let mailBody = mailBody;
            mailBody += `\n\nSender's Name: ${name}\nPhone Number: ${phoneNumber}`;   
         
        emailjs.send('service_898atuf', 'template_qyk8imr', {
            to_email: 'cynthiaamaran@gmail.com',
            from_name: name,
            from_email: email,
            from_phone: phoneNumber,
            subject: subject,
            message_html: mailBody
        }, 'BRYLyudQSwtQ0F9Ek')
            .then((response) => {
                alert('Email sent:', response);
                setName('');
                setPhoneNumber('');
                setEmail('');
                setSubject('');
                setMailBody('');
              
            }, (error) => {
                console.error('Error sending email:', error);
            
        });
    }

    };
    
  return (
    <Box w='40%' m='20px 10px' py='30px' borderRadius='xl' boxShadow='-1px 2px 10px #1d1d20' bg='#171718'>
    <FormControl >
         <FormLabel p='20px 30px 5px' textTransform='uppercase' color='gray'>Name</FormLabel>
            <Input _hover={{border:'3px solid crimson'}} focusBorderColor='tranparent' mx='30px' w='90%' h='4rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='text' value={name} onChange={handleNameChange}/>
            {nameError && <div style={{ color: 'red' , paddingInline:'30px' }}>{nameError}</div>}
    </FormControl>
    <FormControl>    
            <FormLabel p='20px 30px 5px' textTransform='uppercase' color='gray'>Phone Number</FormLabel>
            <NumberInput>
                <NumberInputField _hover={{border:'3px solid crimson'}} focusBorderColor='none' mx='30px' w='90%' h='4rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='number' value={phoneNumber} onChange={handlePhoneNumberChange} />
                {phoneNumberError && <div style={{ color: 'red', paddingInline:'30px'  }}>{phoneNumberError}</div>}
            </NumberInput>
    </FormControl>
    <FormControl>                     
            <FormLabel p='20px 30px 5px' textTransform='uppercase'  color='gray'>Email</FormLabel>
            <Input _hover={{border:'3px solid crimson'}} focusBorderColor='tranparent' mx='30px' w='90%' h='4rem' bg='#1d1d20' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='email' value={email} onChange={handleEmailChange} />
            {emailError && <div style={{ color: 'red' , paddingInline:'30px' }}>{emailError}</div>}
              
    </FormControl>
    <FormControl >
         <FormLabel p='20px 30px 5px' textTransform='uppercase' color='gray'>Subject</FormLabel>
            <Input _hover={{border:'3px solid crimson'}} focusBorderColor='tranparent' bg='#1d1d20' mx='30px' w='90%' h='4rem' color='white' px='20px' fontWeight='bold' border='1px solid #171718' boxShadow='xl' type='text' value={subject} onChange={handleSubjectChange} />
            {subjectError && <div style={{ color: 'red', paddingInline:'30px' }}>{subjectError}</div>}
    </FormControl>

    <Text mb='8px'  p='20px 30px 5px' textTransform='uppercase' color='gray'>Email Body:</Text>
      <Textarea
        value={mailBody}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        h='170px'
        _hover={{border:'3px solid crimson'}} 
        focusBorderColor='none'
        mx='30px'
        w='90%'
        color='white' 
        px='20px' 
        fontWeight='bold' 
        border='1px solid #171718'
        boxShadow='xl'
        bg='#1d1d20'
      />

      <Button m='20px 30px 0' w='90%' h='3rem' bg='#1d1d20' color='crimson' _hover={{}} onClick={handleButtonClick}>Send</Button>
    </Box>
  )
};

export default ContactForm