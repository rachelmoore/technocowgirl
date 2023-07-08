import {
    Heading,
    Flex,
    Text,
    // Image,
  } from "@chakra-ui/react";
  import React from "react"
  import { connect, styled, Head } from "frontity"
  import Link from "@frontity/components/link";
  import FeaturedMedia from "./featuredmedia"
  
  const HorseCardsListItem = ({ title, content, link, featuredMediaId, horseCardNumber, horseCardSummary }) => {
    const Html2React = libraries.html2react.Component

      return (
      <Flex direction="column" align="center" mb={10}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={horseCardSummary} />
        </Head>
          <CardContent>
            <Link link={link}>
                <Heading as="h1" size="2xl">
                    {horseCardNumber}
                </Heading>
            </Link>
            <Link link={link}>
                <Heading as="h2" size="lg">
                    <Html2React html={title} />
                </Heading>
            </Link>
            {/* <Image src={state.source.attachment[post.featured_media].source_url} height="400px" /> */}

            {featuredMediaId && (
                <FeaturedMedia id={featuredMediaId} />
            )}

            <Text mt={1}><Html2React html={horseCardSummary} /></Text>
            <Text p={10}><Html2React html={content} /></Text>
          </CardContent>
      </Flex>
    )
  }
  
  export default connect(HorseCardsListItem);

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