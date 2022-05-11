import React, { useState } from "react"
import { connect, styled, Head } from "frontity"
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

  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <h2><Html2React html={post.title.rendered} /></h2>
      <PostInfo>
        <p>
          <strong>Posted: </strong>
          {formattedDate}
        </p>
        <p>
          <strong>Author: </strong>
          {author.name}
        </p>
      </PostInfo>

        <Html2React html={post.content.rendered} />
        
        {!showComments && 
        <CommentToggle>
          <button onClick={() => setShowComments(true)}>View Comments</button>
        </CommentToggle>
        }
        {!showCommentForm && 
        <CommentToggle>
          <button onClick={() => setShowCommentForm(true)}>Leave a Comment</button>
        </CommentToggle>
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

    </div>
  )
}

export default connect(Post)

const PostInfo = styled.div`
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid #AD9044;
  font-size: 0.8em;

  & > p {
    margin: 0;
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
  margin-top: 50px;
`

const CommentToggle = styled.div`
  margin-top: 20px;
  & > button {
    background-color: #AD9044;
    color: #FFFFFF;
    font-size: 20px;
    padding: 10px;
    font-weight: 500;
    text-transform: uppercase;
  }
`