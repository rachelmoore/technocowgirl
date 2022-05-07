import { Image, Flex, Heading } from "@chakra-ui/react";
import React from "react"
import { styled, keyframes } from "frontity";
import wheel from '../assets/Wheel200px.gif';

const Loading = () => {
    return (
        <WheelContainer>
        <Flex width="100%" align="center" justify="center" m={10}>
            <WheelContent>
                <Flex direction="column" align="center" m={5}>
                    <Heading size="xl">Loading, Loading, Loading...</Heading>
                    <Image src={wheel} mb={5} />
                    <div>
                        <audio src="https://ia600909.us.archive.org/21/items/tvtunes_29841/Rawhide%20-%20Frankie%20Laine.mp3" controls autoPlay/>
                    </div>
                </Flex>
            </WheelContent>
        </Flex>
    </WheelContainer>
    )
}

export default Loading

const WheelContainer = styled.div`
    width: 100vw;
`

const WheelContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 100px 100px 50px 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`