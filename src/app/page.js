"use client";
import Vineyard from "../../public/vineyard.jpg";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component, useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

// * MAIN HEADER * //
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Vintage Vista Vineyards"
      inverted
      style={{
        fontSize: mobile ? "2em" : "10em",
        fontWeight: "bolder",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : ".25em",
        fontFamily: "'Fancy', sans-serif",
        color: "white",
      }}
    />
  </Container>
);
HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

// * BACKGROUND PHOTOS & MENU BAR * //
const DesktopContainer = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/vineyard.jpg", "/vineyard2.jpg", "/grapes.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const [fixed, setFixed] = useState(false);

  const toggleFixedMenu = (inView) => setFixed(!inView);

  return (
    <Media greaterThan="mobile">
      <InView onChange={toggleFixedMenu}>
        <div className="header-container">
          <Segment
            textAlign="center"
            vertical
            style={{
              minHeight: 700,
              padding: "1em 0em",
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={false}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{
                backgroundColor: fixed ? "#D2C5B3" : "rgba(255, 255, 255, .15)",
                justifyContent: "center",
                fontFamily: fixed ? "Bask-Cursive" : "Baskerville"
              }}
            >
              <Container style={{ display: "flex", justifyContent: "center" }}>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Our History</Menu.Item>
                <Menu.Item as="a">Our Wines</Menu.Item>
                <Menu.Item as="a">Shop</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </div>
      </InView>

      {children}
    </Media>
  );
};
DesktopContainer.propTypes = {
  children: PropTypes.node,
};

// * MOBILE OVERALL MENU * //
class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Cart</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              textAlign="center"
              vertical
              style={{
                minHeight: 700,
                padding: "1em 0em",
                backgroundImage: `url('/vineyard.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}
MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em", backgroundColor: "#F2EDE3" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy"}}>
              Welcome to Vintage Vista
            </Header>
            <p style={{ fontSize: "1.5em", fontFamily: "Baskerville", color: "#5C5C5C" }}>
              Nestled in the rolling hills of Napa Valley, our family-owned
              winery has been crafting award-winning wines since{" "}
              <strong>1972</strong>. Our passion for winemaking is deeply rooted
              in the rich soil and warm California sun that nurture our precious
              vines.
            </p>
            <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
              Our Philosophy
            </Header>
            <p style={{ fontSize: "1.5em", fontFamily: "Baskerville", color: "#5C5C5C" }}>
              At Vineyard Valley, we believe great wine starts in the vineyard.
              Our winemaker, James Wilkins, works closely with our viticulture
              team to cultivate the finest grapes that truly express the unique
              terroir of our estate vineyards. In the cellar, we take a minimal
              intervention approach, allowing the natural flavors and character
              of the fruit to shine through.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
            className="grapes"
              alt="grapes"
              src="/vines.jpg"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge" className="more-btn" >More About Us</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em", backgroundColor: "#F2EDE3" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              What a Company
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              I shouldnt have gone with their competitor.
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar alt="vineyard" src="/vineyard2.jpg" />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em", backgroundColor: "#F2EDE3" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but its really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          Im Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment vertical style={{ padding: "5em 0em", backgroundColor: "#D2C5B3" }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as="h4" content="About" />
              <List link>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content="Services" />
              <List link>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4">Footer Header</Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default Home;
