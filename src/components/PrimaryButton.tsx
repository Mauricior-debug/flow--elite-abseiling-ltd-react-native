import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { layout, space } from '../theme/spacing';
import { type } from '../theme/typography';

type Variant = 'cta' | 'accent' | 'ghost' | 'outline';

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  style?: ViewStyle;
  accessibilityHint?: string;
};

export function PrimaryButton({
  label,
  onPress,
  variant = 'cta',
  style,
  accessibilityHint,
}: Props) {
  const palette =
    variant === 'cta'
      ? { bg: colors.cta, text: colors.text, border: colors.cta }
      : variant === 'accent'
        ? { bg: colors.accent, text: colors.bg, border: colors.accent }
        : variant === 'outline'
          ? { bg: 'transparent', text: colors.text, border: colors.border }
          : { bg: colors.bgElevated, text: colors.text, border: colors.border };

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: palette.bg,
          borderColor: palette.border,
          opacity: pressed ? 0.88 : 1,
          transform: [{ scale: pressed ? 0.985 : 1 }],
        },
        style,
      ]}
    >
      <Text style={[styles.label, { color: palette.text }]}>{label}</Text>
    </Pressable>
  );
}

export function ButtonRow({ children }: { children: ReactNode }) {
  return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    paddingHorizontal: space.lg,
    paddingVertical: space.sm + 2,
    borderRadius: layout.radiusMd,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...type.button,
  },
  row: {
    gap: space.sm,
  },
});
