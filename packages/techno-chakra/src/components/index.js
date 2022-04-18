import React, {useState, useEffect} from "react";
import { connect, Global, css, styled, Head } from "frontity";
import {
  extendTheme,
  useMediaQuery,
  Flex
} from '@chakra-ui/react'
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import GoodreadsBookshelf from "react-goodreads-shelf";
import { ChakraProvider } from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa';
import Loading from "./loading";
import Error from "./error";
import List from "./list";
import Post from "./post";
import Page from "./page";
import AboutDrawer from "./aboutdrawer";
import Bookshelf from "./bookshelf";
import TopNavigation from "./topnavigation";
import tcsitesunset from '../assets/tcsitesunset.jpg';
import tcsitewalkingrachel from '../assets/tcsitewalkingrachel.jpg';
import tcsiteside from '../assets/tcsiteside.jpg';
import puppeteer from '../assets/puppeteer.gif';

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const [mobileOS, setMobileOS] = useState(false)
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)")
  const [isLargerThan1015] = useMediaQuery("(min-width: 1015px)")

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

const theme = extendTheme({
  colors: {
    brand: {
      100: "#3AAEC2",
      200: "#FD05E9",
      300: "#6A3A80",
      400: "#EE0300"
    },
  },
});

  return (
    <ChakraProvider theme={theme}>
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
            line-height: 1.85em;
          }
          iframe {
            width: 100% !important;
          }
          .imgur-video {
            @media (max-width: 600px) {
              width: 90vw;
            }
          }
          figure {
            margin-top: 40px;
            margin-bottom: 40px;
            @media (max-width: 600px) {
              max-width: 90vw;
            }
          }
          li {
            margin-bottom: 10px;
            line-height: 1.55em;
            font-size: 17px;
          }
        `}
        />
        <Header isPostType={data.isPostType} isPage={data.isPage}>
            <Flex direction="row" align="center" justify="space-between" pt={1}>
              {isLargerThan800 &&            
                <TitleMenu>
                  {(mobileOS === "Other") &&
                  <SiteTitle>Techno Cowgirl</SiteTitle>
                  }
                  {(mobileOS === "Android" || mobileOS === "iOS") &&
                  <>
                  <SiteTitle>Techno</SiteTitle>
                  <div></div>
                  <SiteTitle>Cowgirl</SiteTitle>
                  </>
                  }
                </TitleMenu>
              }
              <Flex direction="row" align="center" justify="flex-end" height="70px" width="100%">
                <AboutDrawer />
                <br />
                <Bookshelf />
                <br />
                <TopNavigation />
              </Flex>
            </Flex>
            {!isLargerThan800 &&            
                <HeaderContent>
                  {(mobileOS === "Other") &&
                  <SiteTitle>Techno Cowgirl</SiteTitle>
                }
                  {(mobileOS === "Android" || mobileOS === "iOS") &&
                  <>
                  <SiteTitle>Techno</SiteTitle>
                  <div></div>
                  <SiteTitle>Cowgirl</SiteTitle>
                  </>
                  }
                </HeaderContent>
              }
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
        </MainContainer>
      </Container>
    </ChakraProvider>
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

const SiteTitle = styled.span`
  font-family: 'Rye', cursive;
   letter-spacing: 5px;
   font-size: 50px;
   font-weight: bold;
   -webkit-animation: colorchange 20s infinite alternate;
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
`

const TitleMenu = styled.div`
  padding: 1.5em 1em;
  margin-left: 10px;
  @media (min-width: 1015px) {
    width: 1015px;
  }
  h1 {
    font-family: 'Rye', cursive;
  }
}
`

const HeaderContent = styled.div`
  padding: 1.5em 1em;
  margin-left: 10px;
  @media (min-width: 1015px) {
    width: 1015px;
  }
  h1 {
    font-family: 'Rye', cursive;
  }
}
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Main = styled.main`
  /* max-width: 800px; */
  /* width: 80%; */
  /* width: 100vw; */
  padding: 1em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
    font-size: 32px;
  }
  p {
    margin-top: 10px;
    line-height: 1.55em;
    margin-bottom: 0.75em;
    font-size: 17px;
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