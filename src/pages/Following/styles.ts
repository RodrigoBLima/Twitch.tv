import styled from "styled-components/native";
import colors from "../../styles/colors";
import Constants from "expo-constants";
import { Platform } from "react-native";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + "px"};
`;

export const Container = styled.View`
    padding-left:14;

`;

export const Main = styled.View`
    /* padding-left */

`;
