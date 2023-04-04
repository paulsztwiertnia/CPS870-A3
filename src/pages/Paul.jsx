import { 
    Container, 
    Heading, 
    Center, 
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex } from '@chakra-ui/react';

import React from 'react';

import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <Container bg='blue.100' height='65px' maxWidth='9xl' p='2'>
        <Flex >
          <Box height='30px'>
            <Menu>
              <MenuButton fontSize='2xl' shadow='xl' bg='whitesmoke' p='1' >Menu</MenuButton>
              <MenuList>
                <MenuItem as='a' href='#'>
                  <Link to="/">Dashboard</Link>
                </MenuItem>
                <MenuItem as='a' href='#'>
                  <Link to="/Jacob">Jacob Q/A pairs</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Center>
          <Heading p='8'>
                Pauls's Q/A pairs
          </Heading>
        </Center>
        
        <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    What kind of features do Targaryen's commonly have
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Targaryen's typically have pale skin, silver/platinum/gold hair and eyes in the shades of purple or light blue
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    When did the Greating Spring sickness plague occur
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                The plague broke out in 209AC and lasted for two years, killed 10,000 people including several members of house Targaryen
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    How many dragon eggs did Daenerys Targaryen have in Game Of Thrones
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Daenerys had 3 dragon eggs
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    What is Daenerys Targaryen immune to
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Fire
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    In Clash of Kings, what names does Daenerys give to her three dragons
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Daenerys names the dragons, Drogon, Rhaegal, and Viserion after her late husband and brothers
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    In A Storm Of Swords, who takes command of Castle Black
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Jon Snow
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    At what age does Aemon pass and where is his body preserved
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Aemon passed away at 102 years and his body was preserved in a cask of rum
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Who accompanies Aemeon on his travels to Oldtown
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Samwell Tarly, Dareon, Gilly, Mance Rayder's son
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Daenerys promises to wed Hizdahr only if he can 
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Stop the murders for 90 days
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    The leaders of Yunkai go to Meereen to
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Sign the peace and celebrate the opening of Daznak's pit
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

              
    </Container>
    )
}