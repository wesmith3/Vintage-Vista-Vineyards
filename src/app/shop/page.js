"use client";
import React from "react";
import "./page.css"
import {
  Card,
  Grid,
  Header,
  Image,
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
  <div className="shop">
    <Header as="h1" content="Wines" style={style.h3} textAlign="center" />
    <Grid columns={4} container>
      <Grid.Column>
          <Card className="card">
            <Image  alt="merlot" src="/pics/Merlot.jpeg" />
            <Card.Content>
              <Card.Header className="product">Merlot</Card.Header>
              <Card.Meta>
                <span className="date">$36.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="syrah" src="/pics/Syrah.jpeg"/>
            <Card.Content>
              <Card.Header className="product">Syrah</Card.Header>
              <Card.Meta>
                <span className="date">$36.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="port" src="/pics/Port.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Port</Card.Header>
              <Card.Meta>
                <span className="date">$46.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="cab-sauv" src="/pics/CabSauv.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Cabernet Sauvignon</Card.Header>
              <Card.Meta>
                <span className="date">$46.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="pinot" src="/pics/Pinot.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Pinot Noir</Card.Header>
              <Card.Meta>
                <span className="date">$36.00</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="chardonnay" src="pics/Chardonnay.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Chardonnay</Card.Header>
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
