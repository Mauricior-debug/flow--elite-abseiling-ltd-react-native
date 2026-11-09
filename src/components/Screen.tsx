import type { ReactNode } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { layout, space } from '../theme/spacing';

type Props = {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  bottomExtra?: number;
};

export function Screen({
  children,
  scroll = true,
  padded = true,
  style,
  contentStyle,
  bottomExtra = 28,
}: Props) {
  const insets = useSafeAreaInsets();
  const padding = {
    paddingTop: Math.max(insets.top, space.sm),
    paddingBottom: insets.bottom + bottomExtra,
    paddingHorizontal: padded ? layout.screenPadding : 0,
  };

  if (!scroll) {
    return (
      <View style={[styles.root, padding, style]}>
        <View style={[styles.inner, contentStyle]}>{children}</View>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.root, style]}
      contentContainerStyle={[styles.scrollContent, padding, contentStyle]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
  },
});
