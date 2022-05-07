import {
    Heading,
    Flex,
    Text,
    Image,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Button
  } from "@chakra-ui/react";
  import React, { useState } from "react"
  import { connect, styled, Head } from "frontity"
  import Link from "@frontity/components/link"
  import dayjs from "dayjs"
  import CommentsForm from "./commentsform"
  
  const HorseCard = ({ actions, state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    console.log('post', post)
    const Html2React = libraries.html2react.Component
  
    if (data.isFetching) {
      return <Loading />
    }
  
    if (!data.isFetching) {
      return (
      <Flex direction="column" align="center" mb={10}>
        <Head>
          <title>{post.title.rendered}</title>
          <meta name="description" content={post.acf.horse_card_summary} />
        </Head>
          <CardContent>
            <Heading as="h1" size="2xl">
                {post.acf.horse_card_number}
            </Heading>
            <Heading as="h2" size="lg">
                <Html2React html={post.title.rendered} />
            </Heading>
            <Image src={state.source.attachment[post.featured_media].source_url} height="400px" />
            <Text mt={1}><Html2React html={post.acf.horse_card_summary} /></Text>
            <Text pl={10} pr={10}><Html2React html={post.content.rendered} /></Text>
          </CardContent>
      </Flex>
    )
  }
  }
  
  export default connect(HorseCard);

  const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 50px 50px 50px 50px;
  padding: 20px;
  margin-top: 50px;
  h2 {
    font-size: 36px;
    margin: 0.5em 0;
  }
`