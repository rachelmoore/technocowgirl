import {
  Heading,
  Flex,
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

const Post = ({ actions, state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const comments = state.source.comment;
  const commentsKeys = Object.keys(comments);
  const Html2React = libraries.html2react.Component
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const formattedDate = dayjs(post.date).format("DD MMMM YYYY")

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching) {
    return (
    <Flex direction="column" align="center" mb={10}>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
        <PostContainer>
          <Link link={post.link} style={{textDecoration: "none"}}>
            <PostTitle>
              <Heading size="lg" pb={5} pt={5}>
                <Html2React html={post.title.rendered} />
              </Heading>
            </PostTitle>
            <br />
          </Link>
          <PostContent>
              <Stat>
                <StatLabel>Author: {author.name}</StatLabel>
                <StatHelpText>Posted: {formattedDate}</StatHelpText>
              </Stat>
              <Html2React html={post.content.rendered} />
          </PostContent>
        </PostContainer>
          
          {!showComments && 
          // <CommentToggle>
            <Button bg="brand.100" color="#FFFFFF" onClick={() => setShowComments(true)} mb={5}>View Comments</Button>
          // </CommentToggle>
          }
          {!showCommentForm && 
          // <CommentToggle>
            <Button bg="#EE0300" color="#FFFFFF" onClick={() => setShowCommentForm(true)} mb={5}>Leave a Comment</Button>
          // </CommentToggle>
          }

          {!!showComments && 
            <Comments>
              {commentsKeys.map((commentKey)  => 
              <Comment>
                <img src={comments[commentKey].author_avatar_urls[96]} />
                <CommentInfo>
                  <CommentMeta>
                    <p><strong>Posted:          </strong>
                      {dayjs(comments[commentKey].date).format("DD MMMM YYYY")}
                    </p>
                    <p>
                      <strong>Author:          </strong>
                      {comments[commentKey].author_name}
                    </p>
                  </CommentMeta>
                  <p><Html2React html={comments[commentKey].content.rendered} /></p>
                </CommentInfo>
              </Comment>
              )}
            </Comments>
          }
          
          {!!showCommentForm && 
          <CommentsForm actions={actions} state={state} postId={data.id} />
          }
    </Flex>
  )
}
}

export default connect(Post);

const PostContainer = styled.div`
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 100px 100px 50px 50px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 100px 100px 50px 50px;
  h2 {
    font-size: 36px;
    margin: 0px;
  }
  @media (max-width: 800px) {
    width: 780px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
`

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: #FFFFFF;
  color: #000000;
  border-radius: 100px 100px 50px 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  h2 {
    font-size: 36px;
    margin: 0.5em 0;
  }
`

const PostTitle = styled.div`
    -webkit-animation: colorchange 20s infinite alternate;
    -moz-animation: colorchange 20s infinite alternate;
    animation: colorchange 20s infinite alternate;
    text-align: center;

    border-radius: 100px 100px 0px 0px;
    background-color: #000000;

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

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
  padding: 0.5em;
  /* border-left: 4px solid #AD9044; */
  font-size: 1em;

  & > p {
    margin: 0;
  }

  & > img {
    border-radius: 50px;
  }
`

const CommentMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  margin-left: 1em;
  padding: 0.5em;
  /* border-left: 4px solid #AD9044; */
  font-size: 1em;

  & > p {
    margin: 0;
  }
`

const Comment = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  & > img {
    border-radius: 50px;
    height: 96px;
    width: 96px;
  }
`

const Comments = styled.div`
  margin-top: 20px;
`

// const CommentToggle = styled.div`
//   margin-top: 20px;
//   & > button {
//     background-color: #AD9044;
//     color: #FFFFFF;
//     font-size: 20px;
//     padding: 10px;
//     font-weight: 500;
//     text-transform: uppercase;
//   }
// `