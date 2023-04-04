import { 
  Container, 
  Heading, 
  Center, 
  Box,
  Menu,
  MenuButton,
  MenuItem } from '@chakra-ui/react';

import { Link } from 'react-router-dom';


export default function Dashboard() {

  return (

    <Container bg='blue.100' height='65px' maxWidth='9xl' p='2'>
            <Center>
              <Heading>
                    CPS870 A3 Website
              </Heading>
            </Center> 
            <br/>
            <Box bg='white' p='4' borderRadius='md' boxShadow='lg' textAlign='center'> 
              <Menu>
                <MenuButton fontSize='2xl' shadow='xl' bg='whitesmoke' p='1'>Menu</MenuButton>
                  <MenuItem>
                    <Link to="/Jacob" >Jacob Q/A pairs</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/Paul">Paul Q/A pairs</Link>
                  </MenuItem> 
              </Menu>
            </Box>
    
    </Container>
    
  )
}
