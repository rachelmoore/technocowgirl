import { Heading } from "@chakra-ui/react";
import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Loading from "./loading";

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component
  console.log('data', data)

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching) {
    return (
      <Items>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id]
          {console.log(post)}
          return (
            <ItemContainer>
              <Link key={item.id} link={post.link}>
                <PostTitle>
                  <Heading size="lg" pb={5} pt={5}>{post.title.rendered}</Heading>
                </PostTitle>
                <br />
              </Link>
              <ItemContentContainer>
                {state.source.attachment[post.featured_media] &&
                <img src={state.source.attachment[post.featured_media].source_url} />
                }
                <Html2React html={post.excerpt.rendered} />
                <Link key={item.id} link={post.link}>
                  Read More
                </Link>
              </ItemContentContainer>
            </ItemContainer>
          )
        })}
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
      </Items>
    )
  }
}

export default connect(List)

const Items = styled.div`
  /* div: nth-of-type(1) {
    background-color: #3AAEC2;
  }
  div: nth-of-type(2) {
    background-color: #FD05E9;
  }
  div: nth-of-type(3) {
    background-color: #6A3A80;
  }
  div: nth-of-type(4) {
    background-color: #EE0300;
  } */

  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: #AD9044;
    text-decoration: none;
  }
  }
`

const ItemContainer = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 100px 100px 50px 50px;
  /* padding-left: 20px;
  padding-right: 20px; */
  /* padding-bottom: 20px; */
  max-width: 850px;
  margin-bottom: 60px;
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: #AD9044;
    text-decoration: none;
  }
`

const ItemContentContainer = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 0px 0px 50px 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  max-width: 850px;
  margin-bottom: 60px;
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: #AD9044;
    text-decoration: none;
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
    border-radius: 100px 100px 0px 0px;
    background-color: black;
    text-align: center;
    color: #EE0300;
    /* -webkit-animation: colorchange 20s infinite alternate;
    -moz-animation: colorchange 20s infinite alternate;
    animation: colorchange 20s infinite alternate;

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
} */
`