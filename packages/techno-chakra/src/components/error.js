import { Image, Flex } from "@chakra-ui/react";
import React from "react"
import wheel from '../assets/Wheel200px.gif';
import { connect } from "frontity"

const Error = ({ state }) => {
    console.log('state', state)
    return (
      <Flex direction="column" align="center">
          <Image src={wheel} />
          <div>
              <audio src="https://ia600909.us.archive.org/21/items/tvtunes_29841/Rawhide%20-%20Frankie%20Laine.mp3" controls autoPlay/>
          </div>
      </Flex>
    )
}

export default connect(Error)