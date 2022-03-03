import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import Loading from "./loading"
import Error from "./error"
import List from "./list"
import Post from "./post"
import Page from "./page"
import tcsitesunset from '../assets/tcsitesunset.jpg'
import tcsitewalkingrachel from '../assets/tcsitewalkingrachel.jpg'
import tcsiteside from '../assets/tcsiteside.jpg'

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <Container>
      <Head>
        <title>Techno Cowgirl</title>
        <meta
          name="description"
          content="No, my vet can't hook you up with ketamine."
        />
      </Head>
      <Global
        styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-family: system-ui, Verdana, Arial, sans-serif;
        }
      `}
      />
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
          <h1>Techno Cowgirl</h1>
          <Menu>
            <Link link="/">Home</Link>
            <br />
            <Link link="/about-us">About Us</Link>
          </Menu>
        </HeaderContent>
      </Header>
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Error when={data.isError} />
        </Switch>
      </Main>
      </Container>
    </>
  )
}

export default connect(Root)

const Container = styled.div`
background-color: #282c34;
`

const Header = styled.header`
background-color: #e5edee;
border-width: 0 0 8px 0;
border-style: solid;
/* border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'}; */
border-color: ${ props => props.isPostType ? ( props.isPage ? '#3654A8' : '#F5C651' ) : '#AD9044'};
background: linear-gradient(to top, #0000, #000000), url(${tcsitewalkingrachel});
background-position: 'center'; 
background-size: cover; 
background-repeat: 'no-repeat';
height: 700px;
h1 {
  color: #FFC300;
}
`

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  h1 {
    font-family: 'Rye', cursive;
  }
`

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`