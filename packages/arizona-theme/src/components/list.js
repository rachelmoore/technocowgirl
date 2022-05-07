import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component
  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
            <ItemContainer>
              <Link key={item.id} link={post.link}>
                {post.title.rendered}
                <br />
              </Link>
              {state.source.attachment[post.featured_media] &&
              <img src={state.source.attachment[post.featured_media].source_url} />
              }
              <Html2React html={post.excerpt.rendered} />
              <Link key={item.id} link={post.link}>
                Read More
              </Link>
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

export default connect(List)

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: #AD9044;
    text-decoration: none;
  }
`

const ItemContainer = styled.div`
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