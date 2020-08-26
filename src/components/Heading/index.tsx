<<<<<<< HEAD
import React from 'react';

import { Container, HeadingText } from './styles';

const Heading: React.FC = ({ children }) => {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
=======
import React, { Children } from 'react';
import { Text } from 'react-native';

import { Container,HeadingText } from './styles';

const Heading: React.FC = ({children}) => {
  return (
    <Container>
      <HeadingText>
        {children}
      </HeadingText>
>>>>>>> video-entrypoint
    </Container>
  );
};

export default Heading;
