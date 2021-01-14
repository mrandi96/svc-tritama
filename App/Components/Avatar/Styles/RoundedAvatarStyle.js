import { StyleSheet } from 'react-native';

const Styles = (size) => {
  const borderRadius = size / 2;
  const width = size;
  const height = size;

  return StyleSheet.create({
    noPicture: {
      borderRadius,
      width,
      height
    },
    profilePicture: {
      borderRadius,
      width,
      height
    }
  });
};

export { Styles };
