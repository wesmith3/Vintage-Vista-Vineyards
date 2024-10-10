"use client";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component, useState, useEffect } from "react";
import Link from "next/link";
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
        className: "text-stroke",
        dataText: "Vintage Vista Vineyards", // Add this prop
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
  const images = ["/pics/vineyard.jpg", "/pics/vineyard2.jpg", "/pics/grapes.jpg"];

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
                fontFamily: fixed ? "Bask-Cursive" : "Baskerville",
              }}
            >
              <Container style={{ display: "flex", justifyContent: "center" }}>
                <Menu.Item
                  as="a"
                  href="/"
                  active={window.location.pathname === "/"}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href="/history"
                  active={window.location.pathname === "/history"}
                >
                  Our History
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href="/wines"
                  active={window.location.pathname === "/wines"}
                >
                  Our Wines
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href="/shop"
                  active={window.location.pathname === "/shop"}
                >
                  Shop
                </Menu.Item>
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

export const ResponsiveContainer = ({ children }) => (
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
    <Segment
      style={{ padding: "8em 0em", backgroundColor: "#F2EDE3" }}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
              Welcome to Vintage Vista
            </Header>
            <p
              style={{
                fontSize: "1.5em",
                fontFamily: "Baskerville",
                color: "#5C5C5C",
              }}
            >
              Nestled in the rolling hills of Napa Valley, our family-owned
              winery has been crafting award-winning wines since{" "}
              <strong>1972</strong>. Our passion for winemaking is deeply rooted
              in the rich soil and warm California sun that nurture our precious
              vines.
            </p>
            <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
              Our Philosophy
            </Header>
            <p
              style={{
                fontSize: "1.5em",
                fontFamily: "Baskerville",
                color: "#5C5C5C",
              }}
            >
              At Vineyard Valley, we believe great wine starts in the vineyard.
              Our winemaker, <strong>James Wilkins</strong>, works closely with
              our viticulture team to cultivate the finest grapes that truly
              express the unique terroir of our estate vineyards. In the cellar,
              we take a minimal intervention approach, allowing the natural
              flavors and character of the fruit to shine through.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image className="grapes" alt="grapes" src="/pics/vines.jpg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge" className="btn">
              More About Us
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em", backgroundColor: "#F2EDE3" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
              Join Our Wine Club!
            </Header>
            <p style={{ fontSize: "1.33em", fontFamily: "Baskerville" }}>
              Members receive exclusive access to limited production wines,
              invitations to events, and generous discounts. Cant make it to the
              winery? Browse and purchase our exceptional wines online for
              delivery to your door.
            </p>
            <Grid.Column textAlign="center">
              <Button size="huge" className="btn">
                Join Today!
              </Button>
            </Grid.Column>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
              Online Ordering / Shipping
            </Header>
            <p style={{ fontSize: "1.33em", fontFamily: "Baskerville" }}>
              Cant make it to the winery? Browse and purchase our exceptional
              wines online for delivery to your door.
            </p>
            <Grid.Column textAlign="center">
              <Button size="huge" className="btn">
                Order Now!
              </Button>
            </Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment
      style={{ padding: "8em 0em", backgroundColor: "#F2EDE3" }}
      vertical
    >
      <Container text>
        <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
          Join Us for a Tasting
        </Header>
        <p style={{ fontSize: "1.33em", fontFamily: "Baskerville" }}>
          Visit our gorgeous Tuscan-style tasting room and sip your way through
          our current release wines. Our friendly and knowledgeable staff will
          guide you through the tasting experience as you savor each pour. Stay
          for a tour of our vineyards and production facility.
        </p>
        <Button as="a" size="large" className="btn">
          Book a Tasting!
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
        </Divider>

        <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
          Have Your Next Event With Us!
        </Header>
        <p style={{ fontSize: "1.33em", fontFamily: "Baskerville" }}>
        Transform your special occasion into an unforgettable experience at Vintage Vista Vineyards. Our stunning hillside estate offers breathtaking views of rolling vineyards and the perfect blend of rustic charm and elegant sophistication. Whether you&apos;re planning an intimate wedding, corporate retreat, or milestone celebration, our dedicated events team will ensure every detail exceeds your expectations. Treat your guests to award-winning wines, exceptional farm-to-table cuisine, and the timeless beauty of wine country. With both indoor and outdoor venues available year-round, your perfect event awaits. Contact us today to begin crafting your memorable celebration.
        </p>
        <Button as="a" size="large" className="btn">
          Im Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment
      vertical
      style={{ padding: "5em 0em", backgroundColor: "#D2C5B3" }}
    >
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
                <List.Item as="a">Online Shopping</List.Item>
                <List.Item as="a">Wine Club</List.Item>
                <List.Item as="a">Event Calender</List.Item>
                <List.Item as="a">Cafe Menu</List.Item>
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
