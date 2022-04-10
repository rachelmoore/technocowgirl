import React, {useState, useEffect} from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import GoodreadsBookshelf from "react-goodreads-shelf";
import { FaInstagram } from 'react-icons/fa';
import Loading from "./loading"
import Error from "./error"
import List from "./list"
import Post from "./post"
import Page from "./page"
import tcsitesunset from '../assets/tcsitesunset.jpg'
import tcsitewalkingrachel from '../assets/tcsitewalkingrachel.jpg'
import tcsiteside from '../assets/tcsiteside.jpg'
import puppeteer from '../assets/puppeteer.gif'

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  console.log('isFetching', data.isFetching)
  const [mobileOS, setMobileOS] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [loading, setLoading] = useState(data.isFetching);
  const getMobileOS = () => {
    const ua = navigator.userAgent
    if (/android/i.test(ua)) {
        return "Android";
    }
    else if ((/iPad|iPhone|iPod/.test(ua)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        return "iOS";
    }
    return "Other";
}

useEffect(() => {
  const os = getMobileOS();
  setMobileOS(os);
}, []);  

// useEffect(() => {
//   if (data.isFetching === false) {
//     setLoading(false);
//   }
// }, [data]);  

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
          font-family: "system-ui, Verdana, Arial, sans-serif";
        }
        li {
          line-height: 1.55em;
        }
        iframe {
          width: 100% !important;
        }
        .imgur-video {
          @media (max-width: 600px) {
            width: 90vw;
          }
        }
      `}
      />
      <Header isPostType={data.isPostType} isPage={data.isPage}>
      <Menu>
        <MenuLeft>
          <Link link="/">Home</Link>
          <br />
          <Link link="/about-us">About Us</Link>
          <br />
          <Link link="/category/horses">Horses</Link>
          <br />
          <Link link="/category/coding">Coding</Link>
          <br />
        </MenuLeft>
        <MenuRight>
          <a href="instagram.com/techno_cowgirl"><FaInstagram /></a>
        </MenuRight>
      </Menu>
        <HeaderContent>
          {(mobileOS === "Other") &&
          <span>Techno Cowgirl</span>
          }
          {(mobileOS === "Android" || mobileOS === "iOS") &&
          <>
          <span>Techno</span>
          <div></div>
          <span>Cowgirl</span>
          </>
          }
        </HeaderContent>
      </Header>
      <MainContainer>
        <Main>
          <Switch>
            {/* <Loading when={data.isFetching} /> */}
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <Error when={data.isError} />
          </Switch>
        </Main>
        {!!sidebarOpen &&
        <Sidebar>
          <h2>Rachel & Jupiter</h2>
          <img src={puppeteer} height="290px" width="290px" />
          <SidebarBio>
            <p>Software engineer & lifelong horse nut celebrating the small gains I make with my 7 year old horse Jupiter and with the development of my app!</p>
            <p>Read more about me and Jupiter <Link link="/about-us">here</Link>.</p>
          </SidebarBio>
          <Bookshelf>
            <h2>Horse Books I Liked</h2>
            <GoodreadsBookshelf userId="37985894" shelf="horse-books" />
          </Bookshelf>
          <SidebarToggle>
            <button onClick={() => setSidebarOpen(false)}>Close Sidebar</button>
          </SidebarToggle>
        </Sidebar>
        }
      </MainContainer>
      </Container>
    </>
  )
}

export default connect(Root)

const Container = styled.div`
background-color: #282c34;
font-family: 'Roboto';
color: #FFFFFF;
min-height: 100vh;
`

const Header = styled.header`
background-color: #e5edee;
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
  span{
   font-family: 'Rye', cursive;
   letter-spacing: 5px;
   font-size: 50px;
   font-weight: bold;
   background-image: linear-gradient(
	to right,
	#462523 0,
       	#cb9b51 22%, 
	#f6e27a 45%,
	#f6f2c0 50%,
	#f6e27a 55%,
	#cb9b51 78%,
	#462523 100%
	);
   color:transparent;
   -webkit-background-clip:text;
}
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-left: 2px solid #AD9044;
  width: 350px;
  & > h2 {
    color: #AD9044;
    font-family: 'Inconsolata',monospace;
  }
  & > img {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

const Bookshelf = styled.div`
  margin-top: 30px;
  & > h2 {
    color: #AD9044;
    font-family: 'Inconsolata',monospace;
    margin-bottom: 10px;
  }
`

const Main = styled.main`
  max-width: 800px;
  /* width: 80%; */
  padding: 1em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    margin-top: 10px;
    line-height: 1.55em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  a {
    color: #AD9044;
    font-family: 'Inconsolata', monospace;
    text-decoration: underline;
    letter-spacing: 2px;
  }
  a:hover {
    color: #FFFFFF;
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #AD9044;
  justify-content: space-between;
  padding: 20px;
`

const MenuLeft = styled.div`
  display: flex;
  flex-direction: row;
  & > a {
    margin-right: 1em;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'Inconsolata', monospace;
  }
`

const MenuRight = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 800px;
  padding: 1em;
  margin: auto; */
  /* padding: 1em;
  margin: auto; */
  & > a {
    margin-right: 1em;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'Inconsolata', monospace;
  }
`

const Button = styled.button`
  background: #3654A8;
  border: none;
  color: #FFFFFF;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

const SidebarBio = styled.div`
  width: 90%;
  text-align: center;
  & > p {
    margin-top: 10px;
  }
  a {
    color: #AD9044;
    letter-spacing: 2px;
    text-decoration: none;
  }
  a:hover {
    color: #FFFFFF;
  }
`

const SidebarToggle = styled.div`
  margin-top: 20px;
  & > button {
    background-color: #AD9044;
    color: #FFFFFF;
    font-size: 20px;
    padding: 10px;
    font-weight: 500;
    border: none;
  }
`