import { Image, Flex } from "@chakra-ui/react";
import React from "react"
import { styled, keyframes } from "frontity";
import wheel from '../assets/Wheel200px.gif';

const Loading = () => {
    return (
        <Flex direction="column" align="center" m={5}>
            <Image src={wheel} mb={5} />
            <div>
                <audio src="https://ia600909.us.archive.org/21/items/tvtunes_29841/Rawhide%20-%20Frankie%20Laine.mp3" controls autoPlay/>
            </div>
        </Flex>
    )
}

export default Loading
