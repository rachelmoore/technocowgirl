import { Heading, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import React, { useState, useEffect } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Loading from "./loading";

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  const [fullScreen, setFullScreen] = useState(true);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan1015] = useMediaQuery("(min-width: 1015px)");
  const colorDict = {
    0: "#3AAEC2",
    1: "#EE0300",
    2: "#6A3A80",
  }
  const borderDict = {
    0: "0px 0px 5px 5px",
    1: "5px 5px 5px 0px",
    2: "5px 0px 0px 5px"
  }

  useEffect(() => {
    if (isLargerThan800) {
      setFullScreen(true);
    }
    else {
      setFullScreen(false);
    }
  }, [isLargerThan800])

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching) {
    return (
      <Flex direction="column" width="100%">
        {data.items.map((item, idx) => {
          const post = state.source[item.type][item.id]
        return (
          <ItemContainer key={idx}>
            {fullScreen && (idx % 2 !== 0) &&
              <Flex direction="row" width="100%" sx={{ '--custom-bg-odd': colorDict[idx], '--custom-border': borderDict[idx]}}>
                <Flex direction="column" width="50%" padding={10} bg='var(--custom-bg-odd)' style={{borderWidth: 'var(--custom-border)', borderStyle: 'solid', borderColor: '#000000'}}>
                  <Link key={item.id} link={post.link} style={{textDecoration: "none"}}>
                    <PostTitle>
                      <Heading size="lg" pb={5} pt={5}>{post.title.rendered}</Heading>
                    </PostTitle>
                    <br />
                  </Link>
                  <Html2React html={post.excerpt.rendered} />
                </Flex>
                <Flex direction="column" width="50%" style={{ background: `url("${state.source.attachment[post.featured_media].source_url}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                  {/* {state.source.attachment[post.featured_media] &&
                    <Image src={state.source.attachment[post.featured_media].source_url} />
                    } */}
                </Flex>
              </Flex>
            }
            {fullScreen && (idx % 2 === 0) &&
              <Flex direction="row-reverse" width="100%" sx={{ '--custom-bg-even': colorDict[idx], '--custom-border': borderDict[idx]}}>
                <Flex direction="column" width="50%" padding={10} bg='var(--custom-bg-even)' style={{borderWidth: 'var(--custom-border)', borderStyle: 'solid', borderColor: '#000000'}}>
                  <Link key={item.id} link={post.link} style={{textDecoration: "none"}}>
                    <PostTitle>
                      <Heading size="lg" pb={5} pt={5}>{post.title.rendered}</Heading>
                    </PostTitle>
                    <br />
                  </Link>
                  <Html2React html={post.excerpt.rendered} />
                </Flex>
                <Flex direction="column" width="50%" style={{ background: `url("${state.source.attachment[post.featured_media].source_url}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                  {/* {state.source.attachment[post.featured_media] &&
                    <Image src={state.source.attachment[post.featured_media].source_url} />
                    } */}
                </Flex>
              </Flex>
            }
          {!fullScreen &&
            <>
              <Link key={item.id} link={post.link} style={{textDecoration: "none"}}>
                <PostTitle>
                  <Heading size="lg" pb={5} pt={5}>{post.title.rendered}</Heading>
                </PostTitle>
                <br />
              </Link>
              <ItemContentContainer>
                {state.source.attachment[post.featured_media] &&
                <Image src={state.source.attachment[post.featured_media].source_url} />
                }
                <Html2React html={post.excerpt.rendered} />
                <Link key={item.id} link={post.link}>
                  Read More
                </Link>
              </ItemContentContainer>
            </>
            }
            </ItemContainer>
          )}
        )}
        <PrevNextNav>
          {data.previous && (
            <button
              onClick={() => {
                actions.router.set(data.previous)
              }}
            >
              &#171; Prev
            </button>
          )}
          {data.next && (
            <button
              onClick={() => {
                actions.router.set(data.next)
              }}
            >
              Next &#187;
            </button>
          )}
        </PrevNextNav>
      </Flex>
    )
  }
}

export default connect(List)

const ItemContainer = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  width: 100%;
  margin-bottom: 0px;
  & > a {
    display: block;
    font-size: 1.2em;
    color: #AD9044;
    text-decoration: none;
  }
  p {
    font-size: 22px;
    color: #FFFFFF;
  }
  h2 {
      margin-top: 0px;
      font-size: 36px;
    }
  @media (min-width: 801px) {
    width: 100%;
    margin-bottom: 0px;
  }
  @media (max-width: 800px) {
    width: 780px;
    border-radius: 100px 100px 50px 50px;
    margin-bottom: 60px;
    p {
    font-size: 22px;
    color: #000000;
  }
  }
  @media (max-width: 600px) {
    width: 350px;
    border-radius: 100px 100px 50px 50px;
    margin-bottom: 60px;
    p {
    font-size: 22px;
    color: #000000;
  }
  }
`

const ItemContentContainer = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 0px 0px 50px 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  width: 100%;
  @media (max-width: 800px) {  
    max-width: 780px;
  }
  margin-bottom: 60px;
  & > a {
    color: blue;
    font-family: 'Inconsolata', monospace;
    text-decoration: underline;
    letter-spacing: 2px;
  }
`

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #3654A8;
    border: none;
    color: #FFFFFF;
    text-decoration: none;
    font-size: 20px;
    margin-right: 2em;
    padding: 10px;
    box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #AD9044;
    transition: all 0.3s ease 0s;
  }
  & > button:hover {
    cursor: pointer;
  }
`

const PostTitle = styled.div`
    text-align: center;
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