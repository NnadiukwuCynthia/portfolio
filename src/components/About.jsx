import { Box, Text } from "@chakra-ui/react"

const About = () => {
  return (
    <Box  m='7rem auto 0'  w='70%' className="about">
        <Text align='center' mb='3rem' textTransform='uppercase' fontSize='50px' fontWeight='bold' color='white'>About Me</Text>
        <Text color='white' fontSize='17px' className="about__aboutDetails">
            HELLO!!! I am Cynthia Nnadiukwu, a Passionate frontend developer, tech enthusiast, and avid learner, I thrive on the dynamic intersection of creativity, technology, and problem-solving. With a passion for crafting seamless user experiences, I specialize in bringing designs to life through code, utilizing languages like HTML, CSS, and JavaScript.
        </Text>
        <Text color='white' fontSize='17px' className="about__aboutDetails">
            Driven by an insatiable curiosity for emerging technologies and industry trends, I continuously seek out new knowledge and skills to stay at the forefront of the rapidly evolving digital landscape. Whether it's experimenting with the latest frameworks, exploring innovative design patterns, or diving deep into accessibility best practices, I approach every challenge as an opportunity to expand my expertise and deliver innovative solutions.
        </Text>
        <Text color='white' fontSize='17px' className="about__aboutDetails">
            With a keen eye for detail and a commitment to excellence, I take pride in creating intuitive interfaces that not only meet user needs but also exceed expectations. By blending technical expertise with a user-centric mindset, I aim to build immersive digital experiences that inspire, engage, and delight users across platforms and devices.
        </Text>
        <Text color='white' fontSize='17px' className="about__aboutDetails">
            In essence, I am a frontend developer who embraces the ever-changing nature of technology, fueled by a relentless curiosity and a drive to innovate. Through a combination of technical proficiency, creative flair, and a passion for learning, I strive to push the boundaries of what's possible and make a meaningful impact in the digital world.
        </Text>
    </Box>
  )
}

export default About