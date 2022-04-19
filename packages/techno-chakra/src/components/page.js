
import {
  Flex,
  Heading
} from "@chakra-ui/react"
import React from "react"
import { connect, styled, Head } from "frontity"
import Loading from "./loading"

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching) {
    return (
      <Flex direction="column" align="center" mb={5}>
        <Head>
          <title>{page.title.rendered}</title>
          <meta name="description" content={page.excerpt.rendered} />
        </Head>
        <PageContent>
          <PageTitle>
              <Heading size="lg">
                <Html2React html={page.title.rendered} />
              </Heading>
          </PageTitle>
          <Html2React html={page.content.rendered} />
        </PageContent>
      </Flex>
    )
  }
}

export default connect(Page)

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: #FFFFFF;
  border-radius: 50px 50px 50px 50px;
  padding: 20px;
  margin-top: 60px;
  `

const PageTitle = styled.div`
    -webkit-animation: colorchange 20s infinite alternate;
    -moz-animation: colorchange 20s infinite alternate;
    animation: colorchange 20s infinite alternate;

    @media (max-width: 800px) {
      border-radius: 100px 100px 0px 0px;
      background-color: #000000;
    }
    
    @keyframes colorchange {
      0% {
        color: #3AAEC2;
      }
      
      10% {
        color: #FD05E9;
      }
      
      25% {
        color: yellow;
      }
      
      50% {
        color: #EE0300;
      }
      
      
      75% {
        color: yellow;
      }
      
      100% {
        color: #FD05E9;
      }
    }
    `