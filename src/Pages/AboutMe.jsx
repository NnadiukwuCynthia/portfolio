import { Box } from "@chakra-ui/react"
import About from "../components/About"

const AboutMe = () => {
  return (
    <Box w='100%' h={{base: 'auto', sm: '120vh', md: '100vh', lg: '100vh'}} pt='6rem' bg='#000000'>
        <About/>
    </Box>
  )
}

export default AboutMe