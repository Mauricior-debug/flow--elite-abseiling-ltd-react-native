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
  /** When false, the screen manages its own top inset (e.g. full-bleed heroes). */
  topSafe?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  bottomExtra?: number;
};

export function Screen({
  children,
  scroll = true,
  padded = true,
  topSafe = true,
  style,
  contentStyle,
  bottomExtra = 28,
}: Props) {
  const insets = useSafeAreaInsets();
  const padding = {
    paddingTop: topSafe ? Math.max(insets.top, space.sm) : 0,
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
