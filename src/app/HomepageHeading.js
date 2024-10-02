import React from 'react';
import { Container, Header } from "semantic-ui-react";
import { COLORS, FONTS } from './constants';

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
        fontFamily: FONTS.FANCY,
        color: COLORS.WHITE,
      }}
      className="text-stroke"
      data-text="Vintage Vista Vineyards"
    />
  </Container>
);

export default HomepageHeading;