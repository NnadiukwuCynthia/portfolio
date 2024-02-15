import { Box, Text } from "@chakra-ui/react"

const About = () => {
  return (
    <Box  m='0 auto' bg='#000000' w='70%' className="about">
        <Text align='center' mb='1rem' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white'>About Me</Text>
        <Text color='white' fontSize= '17px' pt='15px' className="about__aboutDetails">
            HELLO!!! I am Cynthia Nnadiukwu, a Passionate frontend developer, tech enthusiast, and avid learner, I thrive on the dynamic intersection of creativity, technology, and problem-solving. With a passion for crafting seamless user experiences, I specialize in bringing designs to life through code, utilizing languages like HTML, CSS, and JavaScript.
        </Text>
        <Text color='white' fontSize= '17px' pt='15px' className="about__aboutDetails">
            With a keen eye for detail and a commitment to excellence, I take pride in creating intuitive interfaces that not only meet user needs but also exceed expectations. 
        </Text>
        <Text color='white' fontSize= '17px' pt='15px' className="about__aboutDetails">
            In essence, I am a frontend developer who embraces the ever-changing nature of technology, fueled by a relentless curiosity and a drive to innovate. Through a combination of technical proficiency, creative flair, and a passion for learning, I strive to push the boundaries of what is possible and make a meaningful impact in the digital world.
        </Text>
    </Box>
  )
}

export default About