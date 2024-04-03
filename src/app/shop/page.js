"use client";
import React from "react";
import {
  Card,
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
} from "semantic-ui-react";

const style = {
  h1: {
    marginTop: "3em",
  },
  h2: {
    margin: "4em 0em 2em",
    fontFamily: "Fancy",
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
    fontFamily: "Fancy",
  },
  last: {
    marginBottom: "300px",
  },
};

const Page = () => (
  <div>
    <Header as="h1" content="Wines" style={style.h3} textAlign="center" />
    <Grid columns={4} container>
      <Grid.Column>
          <Card>
            <Image  alt="merlot" src="/pics/Merlot.jpeg" />
            <Card.Content>
              <Card.Header>Merlot</Card.Header>
              <Card.Meta>
                <span className="date">$36.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card>
            <Image alt="syrah" src="/pics/Syrah.jpeg"/>
            <Card.Content>
              <Card.Header>Syrah</Card.Header>
              <Card.Meta>
                <span className="date">$36.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card>
            <Image alt="port" src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Port</Card.Header>
              <Card.Meta>
                <span className="date">$46.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card>
            <Image alt="cab-sauv" src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Cabernet Sauvignon</Card.Header>
              <Card.Meta>
                <span className="date">$46.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card>
            <Image alt="pinot" src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Pinot Noir</Card.Header>
              <Card.Meta>
                <span className="date">$36.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card>
            <Image alt="chardonnay" src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Chardonnay</Card.Header>
              <Card.Meta>
                <span className="date">$28.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
    </Grid>
  </div>
);

export default Page;
