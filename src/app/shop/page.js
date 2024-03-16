"use client";
import Vineyard from "../../../public/vineyard.jpg";
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



// * BACKGROUND PHOTOS & MENU BAR * //
const DesktopContainer = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/vineyard.jpg", "/vineyard2.jpg", "/grapes.jpg"];

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


export default Page;