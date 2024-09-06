import React, { useState } from 'react';
import { Segment, Sidebar, Menu, Container, Icon, Button } from "semantic-ui-react";
import HomepageHeading from './HomepageHeading';

const MobileHeader = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as="a" active>Home</Menu.Item>
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
              <Menu.Item onClick={() => setSidebarOpened(true)}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>Log in</Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>Sign Up</Button>
              </Menu.Item>
            </Menu>
          </Container>
          <HomepageHeading mobile />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default MobileHeader;