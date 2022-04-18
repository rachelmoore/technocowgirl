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
  Link as ChakraLink,
  useDisclosure
} from '@chakra-ui/react';
import Link from "@frontity/components/link";

function TopNavigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Button ref={btnRef} mr={3} onClick={onOpen}>
          Navigation
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
  
            <DrawerBody style={{overflowY: "scroll"}}>
              <Link link="/">Home</Link>
              <br />
              <Link link="/about-us">About Rachel & Jupiter</Link>
              <br />
              <Link link="/category/horses">Horses</Link>
              <br />
              <Link link="/category/coding">Coding</Link>
              <br />
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

  export default TopNavigation;
