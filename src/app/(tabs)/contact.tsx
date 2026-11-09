import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BrandLogo } from '../../components/BrandLogo';
import { PrimaryButton } from '../../components/PrimaryButton';
import { QuoteForm } from '../../components/QuoteForm';
import { Screen } from '../../components/Screen';
import { AccentRule, Section } from '../../components/Section';
import { openEmail, openQuote, openTel } from '../../components/actions';
import { site } from '../../content/site';
import { colors } from '../../theme/colors';
import { space } from '../../theme/spacing';
import { type } from '../../theme/typography';

export default function ContactScreen() {
  return (
    <Screen>
      <View style={styles.top}>
        <BrandLogo height={36} />
        <AccentRule />
        <Text accessibilityRole="header" style={styles.h1}>
          Contact
        </Text>
        <Text style={styles.lede}>{site.contactIntro}</Text>
      </View>

      <View style={styles.primaryCall}>
        <Text style={styles.callLabel}>Primary action</Text>
        <PrimaryButton
          label={`Call ${site.phones[0].label}`}
          onPress={() => openTel(site.phones[0].tel)}
          accessibilityHint="Places a phone call to Elite Abseiling"
        />
        <PrimaryButton
          label={`Call ${site.phones[1].label}`}
          onPress={() => openTel(site.phones[1].tel)}
          variant="outline"
        />
      </View>

      <Section eyebrow="Direct lines" title="Phone, email, address.">
        <View style={styles.detailList}>
          <Detail
            label="Email"
            value={site.email}
            onPress={openEmail}
          />
          <Detail label="Address" value={site.address} />
          <Detail
            label="Online quote"
            value="Open quote form"
            onPress={openQuote}
          />
        </View>
      </Section>

      <Section
        eyebrow="Quote request"
        title="Tell us about the building."
        body="Send a short brief by email, or use the online booking form if you prefer."
      >
        <QuoteForm />
        <PrimaryButton
          label="Open online quote form"
          onPress={openQuote}
          variant="ghost"
          style={styles.secondary}
        />
      </Section>

      <View style={styles.footer}>
        <BrandLogo height={28} />
        <Text style={styles.footerText}>{site.name}</Text>
        <Text style={styles.footerMuted}>{site.tagline}</Text>
      </View>
    </Screen>
  );
}

function Detail({
  label,
  value,
  onPress,
}: {
  label: string;
  value: string;
  onPress?: () => void;
}) {
  const content = (
    <View style={styles.detail}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={[styles.detailValue, onPress && styles.link]}>{value}</Text>
    </View>
  );

  if (!onPress) return content;
  return (
    <Pressable onPress={onPress} accessibilityRole="link" accessibilityLabel={`${label}: ${value}`}>
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  top: {
    gap: space.sm,
    marginBottom: space.xl,
  },
  h1: {
    ...type.h1,
    color: colors.text,
  },
  lede: {
    ...type.body,
    color: colors.textMuted,
    maxWidth: 520,
  },
  primaryCall: {
    gap: space.sm,
    marginBottom: space.xxl,
    maxWidth: 360,
  },
  callLabel: {
    ...type.label,
    color: colors.accent,
    marginBottom: space.xs,
  },
  detailList: {
    gap: space.lg,
    marginTop: space.sm,
  },
  detail: {
    gap: space.xxs,
    paddingBottom: space.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailLabel: {
    ...type.label,
    color: colors.textMuted,
  },
  detailValue: {
    ...type.bodyStrong,
    color: colors.text,
  },
  link: {
    color: colors.cta,
  },
  secondary: {
    marginTop: space.md,
    alignSelf: 'flex-start',
  },
  footer: {
    marginTop: space.xxl,
    paddingTop: space.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: space.xs,
  },
  footerText: {
    ...type.bodyStrong,
    color: colors.text,
  },
  footerMuted: {
    ...type.caption,
    color: colors.textMuted,
  },
});
