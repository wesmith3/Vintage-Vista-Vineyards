"use client"
import React from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
    fontFamily: "Fancy",
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const Page = () => (
  <div>
    <Header as='h3' content='Wines' style={style.h3} textAlign='center' />
    <Grid columns={3} container>
      <Grid.Column>
        <Segment>Merlot</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Syrah</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Port</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Cabernet Sauvignon</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Rose</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Chardonnay</Segment>
      </Grid.Column>
    </Grid>

  </div>
)

export default Page