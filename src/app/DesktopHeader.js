'use client';
import React, { useState } from 'react';
import { InView } from "react-intersection-observer";
import { Segment, Menu, Container } from "semantic-ui-react";
import HomepageHeading from './HomepageHeading';
import { COLORS } from './constants';

const DesktopHeader = ({ currentImage }) => {
  const [fixed, setFixed] = useState(false);

  return (
    <InView onChange={(inView) => setFixed(!inView)}>
      <div className="header-container">
        <Segment
          textAlign="center"
          vertical
          style={{
            minHeight: 700,
            padding: "1em 0em",
            backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            style={{
              backgroundColor: fixed ? COLORS.LIGHT_BROWN : "rgba(255, 255, 255, .15)",
              justifyContent: "center",
              fontFamily: fixed ? "Bask-Cursive" : "Baskerville",
            }}
          >
            <Container style={{ display: "flex", justifyContent: "center" }}>
              <Menu.Item as="a" href="/" active={window.location.pathname === "/"}>
                Home
              </Menu.Item>
              <Menu.Item as="a" href="/history" active={window.location.pathname === "/history"}>
                Our History
              </Menu.Item>
              <Menu.Item as="a" href="/wines" active={window.location.pathname === "/wines"}>
                Our Wines
              </Menu.Item>
              <Menu.Item as="a" href="/shop" active={window.location.pathname === "/shop"}>
                Shop
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </div>
    </InView>
  );
};

export default DesktopHeader;