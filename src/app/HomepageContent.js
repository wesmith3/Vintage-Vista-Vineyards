import React from 'react';
import { Segment, Grid, Header, Image, Button, Container, Divider, List } from "semantic-ui-react";
import { COLORS, FONTS } from './constants';

const HomepageContent = () => (
  <>
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
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "5em", fontFamily: "Fancy" }}>
          Have Your Next Event With Us!
        </Header>
        <p style={{ fontSize: "1.33em", fontFamily: "Baskerville" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but its really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large" className="btn">
          Im Still Quite Interested
        </Button>
      </Container>
    </Segment>

  </>
);

export default HomepageContent;