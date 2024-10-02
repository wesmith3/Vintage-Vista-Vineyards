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
    margin: ".5em 0em 1em",
    fontFamily: "Baskerville",
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
    fontFamily: "Baskerville"
  },
  last: {
    marginBottom: "300px",
  },
};

const Page = () => (
  <div className="shop">
    <Header className="sec-title" content="Red Wines" />
    <Grid columns={4} container>
      <Grid.Column>
          <Card className="card">
            <Image  alt="merlot" src="/pics/Merlot.jpeg" />
            <Card.Content>
              <Card.Header className="product">Merlot</Card.Header>
              <Card.Meta>
                <span className="date">$36</span>
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
                <span className="date">$36</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="port" src="/pics/Port.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Malbec</Card.Header>
              <Card.Meta>
                <span className="date">$46</span>
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
                <span className="date">$46</span>
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
                <span className="date">$36</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="chardonnay" src="pics/Chardonnay.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Sangiovese</Card.Header>
              <Card.Meta>
                <span className="date">$28</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
    </Grid>
    <Header className="sec-title" content="White Wines" />
    <Grid columns={4} container>
      <Grid.Column>
          <Card className="card">
            <Image  alt="merlot" src="/pics/Merlot.jpeg" />
            <Card.Content>
              <Card.Header className="product">Chardonnay</Card.Header>
              <Card.Meta>
                <span className="date">$36</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="syrah" src="/pics/Syrah.jpeg"/>
            <Card.Content>
              <Card.Header className="product">Sauvignon Blanc</Card.Header>
              <Card.Meta>
                <span className="date">$36</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="port" src="/pics/Port.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Pinot Grigio</Card.Header>
              <Card.Meta>
                <span className="date">$46</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="cab-sauv" src="/pics/CabSauv.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Riesling</Card.Header>
              <Card.Meta>
                <span className="date">$46</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="pinot" src="/pics/Pinot.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Moscato</Card.Header>
              <Card.Meta>
                <span className="date">$36</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="chardonnay" src="pics/Chardonnay.jpeg" wrapped ui={false} />
            <Card.Content>
              <Card.Header className="product">Viognier</Card.Header>
              <Card.Meta>
                <span className="date">$28</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
    </Grid>
      <Header className="sec-title" content="Specialty Wines" />
    <Grid columns={4} container>
      <Grid.Column>
          <Card className="card">
            <Image  alt="merlot" src="/pics/Merlot.jpeg" />
            <Card.Content>
              <Card.Header className="product">Sparkling Rose</Card.Header>
              <Card.Meta>
                <span className="date">$36</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column>
          <Card className="card">
            <Image alt="syrah" src="/pics/Syrah.jpeg"/>
            <Card.Content>
              <Card.Header className="product">Champagne</Card.Header>
              <Card.Meta>
                <span className="date">$36</span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </Grid.Column>
    </Grid>
    <br />
    <br />
    <br />
  </div>
);

export default Page;
