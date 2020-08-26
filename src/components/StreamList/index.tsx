import React from "react";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import {
  TagRow,
  TagView,
  TagText,
  StreamAvatar,
  StreamUsername,
  StreamColumn,
  StreamHeader,
  StreamRow,
  StreamContainer,
  StreamItem,
  List,
  StreamThumbnail,
  StreamDescription,
  StreamCategory
} from "./styles";

const StreamList: React.FC = () => {
  const Streamitem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>bitsssun</StreamUsername>
          </StreamHeader>
          <StreamDescription  numberOfLines={1}>
            Texto
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Jogos
          </StreamCategory>
        </StreamRow>
        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  // };

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
