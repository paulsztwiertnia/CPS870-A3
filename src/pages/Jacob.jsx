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
                  <Link to="/Paul">Paul Q/A pairs</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Center>
          <Heading p='8'>
                Jacob's Q/A pairs
          </Heading>
        </Center>

            <Accordion p='10' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Where did the first men arrive
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Westeros
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Who was involved in the outbreak of the long night
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                The first men
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Where did the rise of the Valyrian Freehold occur
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Westeros
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Who was involved in the the landing of the Targaryens in Westeros
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Aegon I Targaryen, Visenya and Rhaenys
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Who built the building of the red keep and the iron throne
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Visenya Targaryen
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10' fontWeight='bold'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    What was the most significant event in the dance of the dragons
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                The civil war between Aegon II and Rhaenyra
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Where did Queen Daenerys die
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Dragonstone
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Where did the suppression of the Faith of the Seven occur
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                The Red Keep
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Where did the deaths of the last dragon eggs occur
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                Dragonstone
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion p='10' allowToggle marginY='-10'>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'whitesmoke', color: 'black' }} 
                                  style={{ borderRadius: '5px', padding: '5px', backgroundColor: 'grey', color: 'white', width: '100%' }}>
                  <Box as="span" flex='1' textAlign='left'>
                    Where did the Battle of the Dawn occur
                  </Box>
                  <AccordionIcon style={{ color: 'white', width: '20px', height: '20px' }} />
                </AccordionButton>
              </h2>
              <AccordionPanel bg='blue.100' fontWeight='bold'>
                The Dreadfort
              </AccordionPanel>
            </AccordionItem>
          </Accordion>    
    </Container>
    )
}