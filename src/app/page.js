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

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
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
        color:'white'
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/vineyard.jpg', '/vineyard2.jpg', '/grapes.jpg'];

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
                backgroundColor: "rgba(255, 255, 255, .15)",
                justifyContent: "center",
              }}
            >
              <Container style={{ display: "flex", justifyContent: "center" }}>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Our History</Menu.Item>
                <Menu.Item as="a">Our Wines</Menu.Item>
                <Menu.Item as="a">Shop Online</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
          </div>
        </InView>

        {children}
      </Media>
    );
  }

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

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
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
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
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes thats right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            {/* <Image bordered rounded size='large' src='/images/wireframe/white-image.png' /> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
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
              {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
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

    <Segment  vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header  as="h4" content="About" />
              <List link >
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header  as="h4" content="Services" />
              <List link >
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" >
                Footer Header
              </Header>
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
