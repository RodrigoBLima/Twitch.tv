<<<<<<< HEAD
import styled from 'styled-components/native';
import colors from '../../styles/colors';
=======
import styled from "styled-components/native";
import colors from "../../styles/colors";
>>>>>>> video-entrypoint

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;

export const CategoryContainer = styled.TouchableOpacity`
<<<<<<< HEAD
  /* background: purple; */
  margin-right: 10px;
`;

=======
  margin-right: 10px;
`;
>>>>>>> video-entrypoint
export const CategoryImage = styled.Image`
  width: 98px;
  height: 130px;
`;
<<<<<<< HEAD

=======
>>>>>>> video-entrypoint
export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 98px;
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 13.5px;
`;
<<<<<<< HEAD

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
=======
export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${colors.gray};
  font-family: roboto_500;
>>>>>>> video-entrypoint
`;

export const RedCircle = styled.View`
  background: ${colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

<<<<<<< HEAD
export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${colors.gray};
  font-family: roboto_500;
=======
export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
>>>>>>> video-entrypoint
`;
