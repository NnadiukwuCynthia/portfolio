import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Header from "./Header"


const Root = () => {
  return (
    <Box bg='black'>
    <Box>
       <Header/>
    </Box>
    <Outlet/>
    </Box>
  )
}

export default Root