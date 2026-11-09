import { Image, StyleSheet, View, type ImageStyle, type StyleProp } from 'react-native';

type Props = {
  height?: number;
  style?: StyleProp<ImageStyle>;
};

/** Real live-site logo file — never redrawn as type. */
export function BrandLogo({ height = 40, style }: Props) {
  const width = Math.round(height * (500 / 188));
  return (
    <View accessible accessibilityRole="image" accessibilityLabel="Elite Abseiling Ltd logo">
      <Image
        source={require('../../assets/brand/elite-abseiling-logo.png')}
        style={[{ width, height, resizeMode: 'contain' }, styles.logo, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    maxWidth: '100%',
  },
});
