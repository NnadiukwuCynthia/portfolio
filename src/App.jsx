import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme, Box } from '@chakra-ui/react'
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';


const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App () {
  return (
    <ChakraBaseProvider theme={theme}>
      <Box className='app'>
      <Header/>
      <Home/>
      <Skills/>
      <About/>
      <Projects/>
      </Box>
    </ChakraBaseProvider>
  )
}

export default App;