import { Image, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BrandLogo } from '../../components/BrandLogo';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Screen } from '../../components/Screen';
import { AccentRule, Section } from '../../components/Section';
import { openQuote, openTel } from '../../components/actions';
import { site } from '../../content/site';
import { colors } from '../../theme/colors';
import { layout, space } from '../../theme/spacing';
import { type } from '../../theme/typography';

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <Screen padded={false} topSafe={false} contentStyle={styles.screenContent}>
      <View style={[styles.hero, { paddingTop: Math.max(insets.top, space.sm) }]}>
        <Image
          source={require('../../../assets/images/home-opening.jpg')}
          style={styles.heroPhoto}
          accessibilityLabel="Rope-access technicians working on a glass façade"
        />
        <View style={styles.heroTopScrim} pointerEvents="none" />
        <View style={styles.heroBottomScrim} pointerEvents="none" />

        <View style={styles.heroTop}>
          <BrandLogo height={42} />
        </View>

        <View style={styles.heroBottom}>
          <AccentRule />
          <Text accessibilityRole="header" style={styles.heroTitle}>
            {site.hero.title}
          </Text>
          <Text style={styles.heroSupport}>{site.hero.support}</Text>
          <View style={styles.ctaBlock}>
            <PrimaryButton
              label={site.hero.primaryCta}
              onPress={() => openTel()}
              accessibilityHint={`Calls ${site.phones[0].label}`}
            />
            <PrimaryButton
              label={site.hero.secondaryCta}
              onPress={openQuote}
              variant="outline"
              accessibilityHint="Opens the online quote form"
            />
          </View>
        </View>
      </View>

      <View style={styles.below}>
        <Section
          eyebrow="Why call Elite"
          title="Qualified rope access for live buildings."
          body="We keep the brief practical: IRATA-aligned technicians, certified kit, and clear service lines for surveys, maintenance, repairs and height safety."
        >
          <View style={styles.proofRow}>
            {site.claims.slice(0, 2).map((claim) => (
              <View key={claim} style={styles.proofItem}>
                <View style={styles.proofDot} />
                <Text style={styles.proofText}>{claim}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Section
          eyebrow="The work"
          title="Façade teams on the ropes."
          body="Industrial cleaning, glazing support, inspections and repairs — delivered from rope access so programmes move without a scaffold envelope."
        >
          <Image
            source={require('../../../assets/images/the-work.jpg')}
            style={styles.featureImage}
            accessibilityLabel="Technicians cleaning a high-rise glass façade"
          />
          <PrimaryButton
            label="See services"
            onPress={() => router.push('/services')}
            variant="accent"
            style={styles.inlineBtn}
          />
        </Section>

        <Section
          eyebrow="Where we work"
          title="Liphook base. UK coverage."
          body={`${site.address}. Rope-access scopes for commercial façades, plant areas and hard-to-reach fabric.`}
        >
          <Image
            source={require('../../../assets/images/where-they-work.jpg')}
            style={styles.featureImageWide}
            accessibilityLabel="Rope-access team on a building overlooking the landscape"
          />
          <PrimaryButton
            label="Contact the team"
            onPress={() => router.push('/contact')}
            style={styles.inlineBtn}
          />
        </Section>

        <View style={styles.footer}>
          <BrandLogo height={32} />
          <Text style={styles.footerText}>{site.name}</Text>
          <Text style={styles.footerMuted}>Active since {site.since}</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContent: {
    paddingBottom: space.xxl,
  },
  hero: {
    minHeight: 640,
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: colors.bg,
  },
  heroPhoto: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroTopScrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: 'rgba(10, 12, 17, 0.35)',
  },
  heroBottomScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '62%',
    backgroundColor: 'rgba(10, 12, 17, 0.72)',
  },
  heroTop: {
    paddingHorizontal: layout.screenPadding,
    paddingTop: space.sm,
    zIndex: 2,
  },
  heroBottom: {
    paddingHorizontal: layout.screenPadding,
    paddingBottom: space.xxl,
    gap: space.md,
    maxWidth: 640,
    zIndex: 2,
  },
  heroTitle: {
    ...type.hero,
    color: colors.text,
  },
  heroSupport: {
    ...type.body,
    color: colors.textMuted,
    maxWidth: 480,
  },
  ctaBlock: {
    gap: space.sm,
    marginTop: space.sm,
    maxWidth: 360,
  },
  below: {
    paddingHorizontal: layout.screenPadding,
    paddingTop: space.xxl,
  },
  proofRow: {
    gap: space.md,
    marginTop: space.sm,
  },
  proofItem: {
    flexDirection: 'row',
    gap: space.sm,
    alignItems: 'flex-start',
  },
  proofDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
    marginTop: 9,
  },
  proofText: {
    ...type.body,
    color: colors.textMuted,
    flex: 1,
  },
  featureImage: {
    width: '100%',
    height: 240,
    marginTop: space.md,
    marginBottom: space.md,
    borderRadius: layout.radiusMd,
    resizeMode: 'cover',
  },
  featureImageWide: {
    width: '100%',
    height: 280,
    marginTop: space.md,
    marginBottom: space.md,
    borderRadius: layout.radiusMd,
    resizeMode: 'cover',
  },
  inlineBtn: {
    alignSelf: 'flex-start',
    minWidth: 200,
  },
  footer: {
    marginTop: space.lg,
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
