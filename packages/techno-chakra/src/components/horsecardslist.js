import React from "react";
import { connect, styled } from "frontity";
import { Flex } from "@chakra-ui/react";
import HorseCardsListItem from "./horsecardslistitem";
import Loading from "./loading";

const HorseCardsList = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching) {
    return (
      <Flex direction="column" width="100%">
        {data.items.map((item, idx) => {
            console.log("item", item);
            console.log("idx", idx);
          const post = state.source[item.type][item.id]
          console.log("POST", post);
        return (
            <div>
            <p>Horse Cards Archive</p>
            {/* <HorseCardsListItem
                title={post.title.rendered}
                content={post.content.rendered} 
                link="https://technocowgirl.com" 
                featuredMediaId={1} 
                horseCardNumber={post.acf.horse_card_number} 
                horseCardSummary={post.acf.horse_card_summary}
            /> */}
        </div>
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

export default connect(HorseCardsList);

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
