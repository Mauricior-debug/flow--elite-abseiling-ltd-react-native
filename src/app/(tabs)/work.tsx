import { Image, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BrandLogo } from '../../components/BrandLogo';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Screen } from '../../components/Screen';
import { AccentRule, Section } from '../../components/Section';
import { site } from '../../content/site';
import { colors } from '../../theme/colors';
import { layout, space } from '../../theme/spacing';
import { type } from '../../theme/typography';

export default function WorkScreen() {
  return (
    <Screen>
      <View style={styles.top}>
        <BrandLogo height={36} />
        <AccentRule />
        <Text accessibilityRole="header" style={styles.h1}>
          The work
        </Text>
        <Text style={styles.lede}>{site.workIntro}</Text>
      </View>

      <View style={styles.photoStack}>
        <Image
          source={require('../../../assets/images/the-work.jpg')}
          style={styles.photoPrimary}
          accessibilityLabel="Two rope-access technicians maintaining a glass skyscraper"
        />
        <View style={styles.captionBlock}>
          <Text style={styles.captionLabel}>On the façade</Text>
          <Text style={styles.captionBody}>
            Cleaning, inspection and maintenance at height — harnessed teams with
            certified kit, working the elevation without a full scaffold wrap.
          </Text>
        </View>
      </View>

      <Section
        eyebrow="Where they work"
        title="Commercial height. Controlled access."
        body="From glass grids to plant-heavy elevations, rope access puts technicians on the workface while the building stays in use."
      >
        <Image
          source={require('../../../assets/images/where-they-work.jpg')}
          style={styles.photoSecondary}
          accessibilityLabel="Three rope-access technicians on a glass building at golden hour"
        />
      </Section>

      <Section
        eyebrow="Typical scopes"
        title="What we are called for."
      >
        <View style={styles.chipColumn}>
          {site.whatWeDoList.map((item, i) => (
            <View key={item} style={[styles.chip, i === 0 && styles.chipAccent]}>
              <Text style={[styles.chipText, i === 0 && styles.chipTextAccent]}>{item}</Text>
            </View>
          ))}
        </View>
      </Section>

      <WorkCta />
    </Screen>
  );
}

function WorkCta() {
  const router = useRouter();
  return (
    <Section
      eyebrow="Ready to brief a job"
      title="Share the elevation. We’ll confirm the method."
    >
      <PrimaryButton
        label="Request a quote"
        onPress={() => router.push('/contact')}
        style={styles.cta}
      />
    </Section>
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
  photoStack: {
    marginBottom: space.xxl,
    gap: space.md,
  },
  photoPrimary: {
    width: '100%',
    height: 320,
    borderRadius: layout.radiusMd,
    resizeMode: 'cover',
  },
  photoSecondary: {
    width: '100%',
    height: 260,
    borderRadius: layout.radiusMd,
    resizeMode: 'cover',
    marginTop: space.md,
  },
  captionBlock: {
    gap: space.xs,
    paddingRight: space.lg,
  },
  captionLabel: {
    ...type.label,
    color: colors.accent,
  },
  captionBody: {
    ...type.body,
    color: colors.textMuted,
  },
  chipColumn: {
    gap: space.sm,
    marginTop: space.sm,
  },
  chip: {
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  chipAccent: {
    borderBottomColor: colors.accent,
  },
  chipText: {
    ...type.bodyStrong,
    color: colors.text,
  },
  chipTextAccent: {
    color: colors.accent,
  },
  cta: {
    alignSelf: 'flex-start',
    minWidth: 220,
    marginTop: space.sm,
  },
});
