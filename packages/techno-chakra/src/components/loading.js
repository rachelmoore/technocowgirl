import { Image, Flex } from "@chakra-ui/react";
import React from "react"
import { styled, keyframes } from "frontity";
import wheel from '../assets/Wheel200px.gif';

const Loading = () => {
    return (
        <Flex direction="column" align="center">
            <Image src={wheel} />
            <div>
                <audio src="https://ia600909.us.archive.org/21/items/tvtunes_29841/Rawhide%20-%20Frankie%20Laine.mp3" controls autoPlay/>
            </div>
        </Flex>
    )
}

export default Loading

// const spin = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `

// const Spinner = styled.div`
//   border: 12px solid #eee;
//   border-top: 12px solid steelblue;
//   border-radius: 50%;
//   width: 80px;
//   height: 80px;
//   animation: ${spin} 2s linear infinite;
// `