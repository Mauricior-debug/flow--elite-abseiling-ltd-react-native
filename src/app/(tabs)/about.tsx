import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BrandLogo } from '../../components/BrandLogo';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Screen } from '../../components/Screen';
import { AccentRule, Section } from '../../components/Section';
import { site } from '../../content/site';
import { colors } from '../../theme/colors';
import { space } from '../../theme/spacing';
import { type } from '../../theme/typography';

export default function AboutScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View style={styles.top}>
        <BrandLogo height={36} />
        <AccentRule />
        <Text accessibilityRole="header" style={styles.h1}>
          About Elite Abseiling
        </Text>
        <Text style={styles.lede}>{site.aboutIntro}</Text>
      </View>

      <View style={styles.sinceBand}>
        <Text style={styles.sinceNumber}>{site.since}</Text>
        <Text style={styles.sinceLabel}>Active since</Text>
      </View>

      <Section eyebrow="Who we are" title="IRATA-aligned technicians. Certified kit.">
        {site.whoWeAre.map((para) => (
          <Text key={para.slice(0, 24)} style={styles.para}>
            {para}
          </Text>
        ))}
      </Section>

      <Section
        eyebrow="How we work"
        title="Safety, productivity and clean access."
        body="Our company is dedicated to implementing and maintaining a management system that will improve safety, productivity, and efficiency."
      >
        <View style={styles.claimList}>
          {site.claims.map((claim) => (
            <View key={claim} style={styles.claimRow}>
              <View style={styles.bar} />
              <Text style={styles.claimText}>{claim}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section
        eyebrow="Inspections & maintenance"
        title="Regular surveys for your building."
        body="Regular inspections by Elite Abseiling help prevent costly repairs, enhance safety, support regulatory compliance, and give you a clear picture of the fabric — so you can focus on your core business."
      >
        <PrimaryButton
          label="Talk to the team"
          onPress={() => router.push('/contact')}
          style={styles.cta}
        />
      </Section>

      <View style={styles.footerBrand}>
        <BrandLogo height={28} />
        <Text style={styles.footerName}>{site.name}</Text>
      </View>
    </Screen>
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
  sinceBand: {
    marginBottom: space.xxl,
    paddingVertical: space.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    gap: space.xxs,
  },
  sinceNumber: {
    fontFamily: 'Syne_800ExtraBold',
    fontSize: 56,
    lineHeight: 60,
    color: colors.accent,
    letterSpacing: -1.5,
  },
  sinceLabel: {
    ...type.label,
    color: colors.textMuted,
  },
  para: {
    ...type.body,
    color: colors.textMuted,
    marginTop: space.sm,
  },
  claimList: {
    gap: space.md,
    marginTop: space.md,
  },
  claimRow: {
    flexDirection: 'row',
    gap: space.md,
    alignItems: 'stretch',
  },
  bar: {
    width: 3,
    backgroundColor: colors.accent,
    borderRadius: 2,
  },
  claimText: {
    ...type.body,
    color: colors.text,
    flex: 1,
  },
  cta: {
    alignSelf: 'flex-start',
    minWidth: 200,
    marginTop: space.md,
  },
  footerBrand: {
    marginTop: space.lg,
    paddingTop: space.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: space.xs,
  },
  footerName: {
    ...type.caption,
    color: colors.textMuted,
  },
});
