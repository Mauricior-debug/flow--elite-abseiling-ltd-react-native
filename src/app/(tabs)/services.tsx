import { StyleSheet, Text, View } from 'react-native';
import { BrandLogo } from '../../components/BrandLogo';
import { PrimaryButton } from '../../components/PrimaryButton';
import { Screen } from '../../components/Screen';
import { AccentRule, Section } from '../../components/Section';
import { openQuote, openTel } from '../../components/actions';
import { site } from '../../content/site';
import { colors } from '../../theme/colors';
import { layout, space } from '../../theme/spacing';
import { type } from '../../theme/typography';

export default function ServicesScreen() {
  const [lead, ...rest] = site.serviceGroups;

  return (
    <Screen>
      <View style={styles.top}>
        <BrandLogo height={36} />
        <AccentRule />
        <Text accessibilityRole="header" style={styles.h1}>
          Services
        </Text>
        <Text style={styles.lede}>{site.servicesIntro}</Text>
      </View>

      <View style={styles.leadBlock}>
        <Text style={styles.leadTitle}>{lead.title}</Text>
        <Text style={styles.leadBody}>{lead.body}</Text>
      </View>

      <View style={styles.list}>
        {rest.map((service, index) => (
          <View
            key={service.id}
            style={[styles.item, index % 2 === 0 ? styles.itemWide : styles.itemTight]}
          >
            <Text style={styles.itemIndex}>{String(index + 2).padStart(2, '0')}</Text>
            <Text style={styles.itemTitle}>{service.title}</Text>
            <Text style={styles.itemBody}>{service.body}</Text>
          </View>
        ))}
      </View>

      <Section
        eyebrow="Next step"
        title="Brief the scope. Get a clear quote."
        body="Call with access notes, building type and timing — or open the online quote form."
      >
        <View style={styles.actions}>
          <PrimaryButton label={`Call ${site.phones[0].label}`} onPress={() => openTel()} />
          <PrimaryButton label="Request a quote" onPress={openQuote} variant="outline" />
        </View>
      </Section>
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
  leadBlock: {
    backgroundColor: colors.bgElevated,
    padding: space.lg,
    borderRadius: layout.radiusMd,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    gap: space.sm,
    marginBottom: space.xl,
  },
  leadTitle: {
    ...type.h2,
    color: colors.text,
  },
  leadBody: {
    ...type.body,
    color: colors.textMuted,
  },
  list: {
    gap: space.xl,
    marginBottom: space.xxl,
  },
  item: {
    gap: space.xs,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: space.lg,
  },
  itemWide: {
    paddingRight: space.md,
  },
  itemTight: {
    marginLeft: space.lg,
  },
  itemIndex: {
    ...type.label,
    color: colors.accent,
  },
  itemTitle: {
    ...type.h3,
    color: colors.text,
  },
  itemBody: {
    ...type.body,
    color: colors.textMuted,
    maxWidth: 520,
  },
  actions: {
    gap: space.sm,
    marginTop: space.sm,
    maxWidth: 360,
  },
});
