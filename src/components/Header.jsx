import { Box, Text, Flex, Spacer, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure, Link, Icon} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaBars, FaHome, FaInfo, FaCode } from 'react-icons/fa';
import { MdWifiCalling3 } from 'react-icons/md';
import { GrAchievement } from 'react-icons/gr';
import { GiStrong } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });

  return (
      <Box bg='#000000e5' w='100%' h='90px' color='crimson' boxShadow='xl' pos='fixed' p='1rem 3rem' zIndex='10'>
          <Flex className='Header__Flex'>
              <Flex fontFamily='Protest Riot' fontWeight='bold' fontSize='3xl' textTransform='uppercase' justify='space-between' align='center'>
                  <FaCode />Cynthia<FaCode />
              </Flex>
              <Spacer />
              {isSmallScreen ? (
                  <>
                      <IconButton
                          bg='none'
                          color='crimson'
                          fontSize='25px'
                          icon={<FaBars />}
                          aria-label='Open menu'
                          display={{ base: 'flex', md: 'none' }}
                          onClick={onOpen}
                      />
                      <Drawer placement='right' onClose={onClose} isOpen={isOpen} onOpen={onOpen}>
                          <DrawerOverlay >
                              <DrawerContent bg='#000000' color='wheat' pt='4rem'>
                                  <DrawerCloseButton bg='none' color='crimson' fontSize='20px' p='30px'/>
                                  <DrawerBody>
                                      <Flex direction='column' className='menu' fontFamily='Roboto'>
                                          <MenuLink to='/' text='Home' icon={FaHome} isOpen={isOpen} onClose={onClose} />
                                          <MenuLink to='/about' text='About Me' icon={FaInfo} isOpen={isOpen} onClose={onClose}/>
                                          <MenuLink to='/skill' text='Skills' icon={GiStrong} isOpen={isOpen} onClose={onClose}/>
                                          <MenuLink to='/project' text='Projects' icon={GrAchievement} isOpen={isOpen} onClose={onClose}/>
                                          <MenuLink to='/contact' text='CONTACT ME' icon={MdWifiCalling3} isOpen={isOpen} onClose={onClose}/>
                                      </Flex>
                                  </DrawerBody>
                              </DrawerContent>
                          </DrawerOverlay>
                      </Drawer>
                  </>
              ) : (
                  <Flex fontFamily='Roboto' pr={9} w='40%' justify='space-between' align='center' fontWeight='bold'>
                      <MenuLink to='/' text='Home' icon={FaHome} isOpen={isOpen} />
                      <MenuLink to='/about' text='About Me' icon={FaInfo} isOpen={isOpen} />
                      <MenuLink to='/skill' text='Skills' icon={GiStrong} isOpen={isOpen} />
                      <MenuLink to='/project' text='Projects' icon={GrAchievement} isOpen={isOpen} />
                      <MenuLink to='/contact' text='CONTACT ME' icon={MdWifiCalling3} isOpen={isOpen} />
                  </Flex>
              )}
          </Flex>
      </Box>
  );
}

const MenuLink = ({ to, text, icon, isOpen, onClose }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1286 });

  const handleClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
      <Text fontSize='xl' mb='20px'>
          <Link as={ReactRouterLink} to={to} onClick={handleClick}>
              {isOpen ? text : (
                  !isSmallScreen && text
              )}
              {isSmallScreen && !isOpen && icon && <Icon as={icon} style={{ fontSize: '40px', marginLeft: '0.5rem' }} />} 
          </Link>
      </Text>
  );
};

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Header;

