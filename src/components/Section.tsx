import type { ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { space } from '../theme/spacing';
import { type } from '../theme/typography';

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Section({ eyebrow, title, body, children, style }: Props) {
  return (
    <View style={[styles.section, style]}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {body ? <Text style={styles.body}>{body}</Text> : null}
      {children}
    </View>
  );
}

export function AccentRule() {
  return <View style={styles.rule} accessibilityElementsHidden />;
}

const styles = StyleSheet.create({
  section: {
    gap: space.sm,
    marginBottom: space.xl,
  },
  eyebrow: {
    ...type.label,
    color: colors.accent,
    textTransform: 'none',
  },
  title: {
    ...type.h2,
    color: colors.text,
    maxWidth: 520,
  },
  body: {
    ...type.body,
    color: colors.textMuted,
    maxWidth: 560,
  },
  rule: {
    width: 48,
    height: 3,
    backgroundColor: colors.accent,
    marginVertical: space.xs,
  },
});
