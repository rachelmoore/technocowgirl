import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Divider,
  Text,
  Image,
  Icon,
  Link as ChakraLink,
  useDisclosure
} from '@chakra-ui/react';
import { FaHorse } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import Link from "@frontity/components/link";

import puppeteer from '../assets/puppeteer.gif';

function AboutDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Button ref={btnRef} ml={3} onClick={onOpen} bg='brand.100'>
          <Icon as={FaHorse} color="white" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg='brand.100' color="white">
            <DrawerCloseButton />
            <DrawerHeader>About Rachel & Jupiter</DrawerHeader>
  
            <DrawerBody style={{overflowY: "scroll"}}>
                <Image
                    // rounded="full"
                    htmlHeight="290px"
                    htmlWidth="290px"
                    src={puppeteer}
                    // fallbackSrc={ldplogofooter}
                    alt="Rachel and Jupiter"
                    mr={3}
                />
                <Text fontSize="lg" mb={2} mt={5}>Software engineer & lifelong horse nut celebrating the small gains I make with my 7 year old horse Jupiter and with the development of my app!</Text>
                <Text fontSize="lg">Read more about me and Jupiter <ChakraLink as={Link} link="/about-us"><Text color="brand.400" fontWeight="500">here.</Text></ChakraLink></Text>
            </DrawerBody>

            <Divider />

            <DrawerFooter>
              <Stack>
                <Text fontSize="lg">Why yes, I did make this website myself! Interested in something like this?</Text>
                <ChakraLink as={Link} href="mailto:rachel@rachelmoore.net" isExternal>
                  <Button mt={3} variant='outline' borderColor="brand.400" onClick={onClose} size="lg">
                    <Text color="brand.400" mr={2}>Let's talk.</Text> <Icon as={FiMail} color="brand.400"/>
                  </Button>
                </ChakraLink>
              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default AboutDrawer;
