import React from 'react';
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";
import { COLORS } from '../utils/constants';

const Footer = () => (
  <Segment vertical style={{ padding: "5em 0em", backgroundColor: COLORS.LIGHT_BROWN }}>
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
              <List.Item as="a">Event Calendar</List.Item>
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
);

export default Footer;