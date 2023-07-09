import React, { useState, useEffect } from "react";
import { connect, styled, Head } from "frontity";
import {
  Heading,
  Image,
  Flex,
  Stat,
  StatLabel,
  StatHelpText,
  Button,
  IconButton
} from "@chakra-ui/react";
import Link from "@frontity/components/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import dayjs from "dayjs";
import CommentsForm from "./commentsform";

const Post = ({ actions, state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const comments = state.source.comment;
  const Html2React = libraries.html2react.Component
  const commentsKeys = Object.keys(comments);
  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentFormText, setCommentFormText] = useState("Leave a Comment");
  const [commentsText, setCommentsText] = useState("View Comments");

  useEffect(() => {
    if (commentsKeys.length === 0) {
      setShowComments(true);
    }
  }, [commentsKeys])

  useEffect(() => {
    if (showCommentForm === true) {
      setCommentFormText("Close Form");
    }
    if (showCommentForm === false) {
      setCommentFormText("Leave a Comment");
    }
  }, [showCommentForm])

  useEffect(() => {
    if (showComments === true) {
      setCommentsText("Hide Comments");
    }
    if (showComments === false) {
      setCommentsText("View Comments");
    }
  }, [showComments])

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching) {
    return (
      <Flex direction="column">
        <Flex direction="column" align="center">
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
        </Flex>
        <Flex direction="column" justifyContent="center" alignItems="center" width="100%">
          <Flex direction="column" justifyContent="center" alignItems="center" marginBottom="100px" width={{ base: '100%', md: '600px' }}>
          {!!showComments && commentsKeys.length !== 0 &&
            <Comments>
              {commentsKeys.map((commentKey) => {
                return ( 
                  <Comment>
                    <CommentInfo>
                      <Flex direction="row" marginLeft="1em" padding="0.5em" fontSize="1em">
                        <Image
                            rounded="full"
                            height="60px"
                            width="60px"
                            src={comments[commentKey].author_avatar_urls[96]}
                            // fallbackSrc={ldplogofooter}
                            alt={comments[commentKey].author_name}
                            mr={3}
                        />
                        <CommentMeta>
                          <Stat>
                            <StatLabel>Author: {comments[commentKey].author_name}</StatLabel>
                            <StatHelpText>Posted: {dayjs(comments[commentKey].date).format("DD MMMM YYYY")}</StatHelpText>
                          </Stat>
                        </CommentMeta>
                      </Flex>
                      <p><Html2React html={comments[commentKey].content.rendered} /></p>
                    </CommentInfo>
                  </Comment>
                )}
              )}
            </Comments>
          }

          {/* {!!showComments && commentsKeys.length === 0 &&
            <Comments>
              <Heading>The discussion has yet to be started! Click the button below to leave a comment.</Heading>
            </Comments>
          } */}


          <Flex direction="row" justifyContent="center" mt={5}>
            <Flex direction="row" justifyContent="center" mr={3}>
              <Button bg="brand.100" color="#FFFFFF" onClick={() => setShowComments(!showComments)} mt={5} mb={5}>{commentsText}</Button>
            </Flex>
            
            {showCommentForm === false &&
            <Flex direction="row" justifyContent="center" ml={3}>
              <Button bg="#EE0300" color="#FFFFFF" onClick={() => setShowCommentForm(!showCommentForm)} mt={5} mb={5}>{commentFormText}</Button>
            </Flex>
            }
          </Flex>

          {showCommentForm === true &&
          <Flex direction="row-reverse" justifyContent="center" width="100%" marginTop="2em">
            <Flex direction="row-reverse" width="80%">
              <IconButton onClick={() => setShowCommentForm(!showCommentForm)} background="transparent" color="#EE0300" _hover={{ color: "#FFFFFF" }} size="md" icon={<AiOutlineCloseCircle size="lg" />} />
            </Flex>
          </Flex>
          }

          <Flex direction="column" justifyContent="center" alignItems="center" width="80%">
          {!!showCommentForm && 
            <CommentsForm actions={actions} state={state} postId={data.id} />
          }
          </Flex>
        </Flex>
        </Flex>

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
  padding: 1.5em;
  width: 100%;
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
  min-height: 60px;
  margin-bottom: 1em;
  margin-left: 1em;
  padding: 0.5em;
  font-size: 1em;
  border-left: 4px solid #FFFFFF;
  & > p {
    margin: 0;
  } 
`

const Comment = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 50px;
  & > img {
    border-radius: 50px;
    height: 96px;
    width: 96px;
  }
`

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`
