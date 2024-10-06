import { StyleSheet, Image, ImageSourcePropType } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string | null;
};

export default function ImageViewer(props: Props) {
  const { imgSource, selectedImage } = props;

  return (
    <Image
      source={selectedImage ? { uri: selectedImage } : imgSource}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
