import React, {useState, useEffect} from "react";
import { connect, Global, css, styled, Head } from "frontity";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Text,
  Image,
  Icon,
  Link as ChakraLink,
  useDisclosure
} from '@chakra-ui/react';
import { FaHorse } from "react-icons/fa"
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
                <Text size="lg" mb={2} mt={5}>Software engineer & lifelong horse nut celebrating the small gains I make with my 7 year old horse Jupiter and with the development of my app!</Text>
                <Text size="lg">Read more about me and Jupiter <ChakraLink as={Link} link="/about-us">here</ChakraLink>.</Text>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default AboutDrawer;
