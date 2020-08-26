import React from 'react';

import { List,ChannelContainer,LeftSide,Avatar, Column, Username,RightSide,WhiteCircle,Info} from './styles';


const ChannelList: React.FC = () => {
  const ChannelItem = () => (
      <ChannelContainer>
        <LeftSide>
            <Avatar />
            <Column>
              <Username>username_user</Username>
              <Info>38 news videos</Info>
            </Column>
        </LeftSide>
        <RightSide>
          <WhiteCircle />
        </RightSide>
      </ChannelContainer>
  );

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
