"use client";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
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
import DesktopHeader from "./DesktopHeader";
import HomepageContent from "./HomepageContent";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

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
      className="text-stroke"
      data-text="Vintage Vista Vineyards"
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleToggle = () => setSidebarOpened(!sidebarOpened);
  const handleSidebarHide = () => setSidebarOpened(false);

  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/history", label: "Our History" },
            { path: "/wines", label: "Our Wines" },
            { path: "/shop", label: "Shop" },
          ].map((item) => (
            <Link key={item.path} href={item.path} passHref>
              <Menu.Item as="a" active={typeof window !== 'undefined' && window.location.pathname === item.path}>
                {item.label}
              </Menu.Item>
            </Link>
          ))}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign="center"
            vertical
            style={{
              minHeight: 700,
              padding: "1em 0em",
              backgroundImage: `url('/pics/vineyard.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
              <HomepageHeading mobile />
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const Home = () => {
  const handleShopClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/shop';
    }
  };

  return (
    <>
    <DesktopHeader />
    <HomepageContent />
      <Segment style={{ padding: "8em 0em", backgroundColor: "#F2EDE3" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
                Welcome to Vintage Vista
              </Header>
              <p style={{
                fontSize: "1.5em",
                fontFamily: "Baskerville",
                color: "#5C5C5C",
              }}>
                Nestled in the rolling hills of Napa Valley, our family-owned
                winery has been crafting award-winning wines since{" "}
                <strong>1972</strong>. Our passion for winemaking is deeply rooted
                in the rich soil and warm California sun that nurture our precious
                vines.
              </p>
              <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
                Our Philosophy
              </Header>
              <p style={{
                fontSize: "1.5em",
                fontFamily: "Baskerville",
                color: "#5C5C5C",
              }}>
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
              <Link href="/history" passHref>
                <Button size="huge" className="btn">
                  More About Us
                </Button>
              </Link>
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
                invitations to events, and generous discounts.
              </p>
              <Link href="/shop" passHref>
                <Button size="huge" className="btn">
                  Join Today!
                </Button>
              </Link>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
                Online Ordering / Shipping
              </Header>
              <p style={{ fontSize: "1.33em", fontFamily: "Baskerville" }}>
                Can&apos;t make it to the winery? Browse and purchase our exceptional
                wines online for delivery to your door.
              </p>
              <Button onClick={handleShopClick} size="huge" className="btn">
                Order Now!
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em", backgroundColor: "#F2EDE3" }} vertical>
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
          <Link href="/tastings" passHref>
            <Button size="large" className="btn">
              Book a Tasting!
            </Button>
          </Link>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          />

          <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
            Have Your Next Event With Us!
          </Header>
          <p style={{ fontSize: "1.33em", fontFamily: "Baskerville" }}>
            Transform your special occasion into an unforgettable experience at Vintage Vista Vineyards. 
            Our stunning hillside estate offers breathtaking views of rolling vineyards and the perfect 
            blend of rustic charm and elegant sophistication. Whether you&apos;re planning an intimate wedding, 
            corporate retreat, or milestone celebration, our dedicated events team will ensure every detail 
            exceeds your expectations.
          </p>
          <Link href="/events" passHref>
            <Button size="large" className="btn">
              Learn More About Events
            </Button>
          </Link>
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
                  <List.Item as="a">Visit Us</List.Item>
                  <List.Item as="a">Employment</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" content="Services" />
                <List link>
                  <List.Item as="a">Online Shopping</List.Item>
                  <List.Item as="a">Wine Club</List.Item>
                  <List.Item as="a">Event Calendar</List.Item>
                  <List.Item as="a">Tasting Menu</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4">Newsletter Signup</Header>
                <p>
                  Subscribe to our newsletter for exclusive offers, events, and wine releases.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </>
  );
};

export default Home;
