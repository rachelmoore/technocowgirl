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
  Icon,
  useDisclosure
} from '@chakra-ui/react';
import { FaBook } from "react-icons/fa"
import GoodreadsBookshelf from "react-goodreads-shelf";

function Bookshelf() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Button ref={btnRef} ml={3} onClick={onOpen} bg='brand.200'>
          <Icon as={FaBook} color="white" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg='brand.200' color="white">
            <DrawerCloseButton />
            <DrawerHeader>Horse Books I Liked</DrawerHeader>
  
            <DrawerBody style={{overflowY: "scroll"}}>
                <GoodreadsBookshelf userId="37985894" shelf="horse-books" />
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

  export default Bookshelf;