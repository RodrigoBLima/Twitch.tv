import React from "react";
import { Text, View, FlatList } from "react-native";

import { Container, Wrapper, Main } from "./styles";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";
import StreamList from "../../components/StreamList";
import ChannelList from "../../components/ChannelList";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
 const {data,indices} =  React.useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: "c1",
        render: () => <CategoryList />,
      },
      {
        key: "LIVE_CHANNELS",
        render: () => <Title>Live Channels</Title>,

        isTitle: true,
      },
      {
        key: "c2",
        render: () => <StreamList />,
      },
      {
        key: "CONTINUE_WATCHING",
        render: () => <StreamList />,
        isTitle: true,
      },
      {
        key: "c3",
        render: () => <StreamList />,
      },
      {
        key: "OFFILINE_CHANNELS",
        render: () => <Title>Offiline Channels</Title>,
        isTitle: true,
      },
      {
        key: "c4",
        render: () => <ChannelList />,
        },
    ];
    // indices dos elementos que são titulos
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({item})=>item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            // REFRESH
            onRefresh={()=>{}}
            refreshing={false}
          />

        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
