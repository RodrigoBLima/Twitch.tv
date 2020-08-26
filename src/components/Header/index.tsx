<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
import { Text } from "react-native";

import { Container, RightSide, Avatar, OnlineStatus,Button } from "./styles";
>>>>>>> video-entrypoint
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
<<<<<<< HEAD
} from '@expo/vector-icons';

import colors from '../../styles/colors';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';
=======
} from "@expo/vector-icons";
import colors from "../../styles/colors";
>>>>>>> video-entrypoint

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>
<<<<<<< HEAD

=======
>>>>>>> video-entrypoint
      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>
<<<<<<< HEAD

=======
>>>>>>> video-entrypoint
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
<<<<<<< HEAD

=======
>>>>>>> video-entrypoint
        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
