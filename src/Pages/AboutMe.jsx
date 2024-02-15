import { Box } from "@chakra-ui/react"
import About from "../components/About"

const AboutMe = () => {
  return (
    <Box w='100%' h={{base: '120vh', sm: '100vh', md: '100vh', lg: '100vh'}} pt='6rem' bg='#000000'>
        <About/>
    </Box>
  )
}

export default AboutMe