import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme, Box } from '@chakra-ui/react'
import Header from './components/Header';
import Home from './components/Home';


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
      </Box>
    </ChakraBaseProvider>
  )
}

export default App;