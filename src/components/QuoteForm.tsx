import { useState } from 'react';
import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { site } from '../content/site';
import { colors } from '../theme/colors';
import { layout, space } from '../theme/spacing';
import { type } from '../theme/typography';
import { PrimaryButton } from './PrimaryButton';

type Status = 'idle' | 'sent' | 'error';

export function QuoteForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function submit() {
    setError('');
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setStatus('error');
      setError('Add your name, phone number, and a short note about the work.');
      return;
    }

    const subject = encodeURIComponent(`Quote request — ${name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        company.trim() ? `Company: ${company.trim()}` : null,
        `Phone: ${phone.trim()}`,
        email.trim() ? `Email: ${email.trim()}` : null,
        '',
        message.trim(),
      ]
        .filter(Boolean)
        .join('\n'),
    );

    const url = `mailto:${site.email}?subject=${subject}&body=${body}`;
    try {
      await Linking.openURL(url);
      setStatus('sent');
    } catch {
      setStatus('error');
      setError('Could not open email. Call us or use the online quote link.');
    }
  }

  if (status === 'sent') {
    return (
      <View style={styles.confirm} accessibilityLiveRegion="polite">
        <Text style={styles.confirmTitle}>Request ready to send</Text>
        <Text style={styles.confirmBody}>
          Your email app should open addressed to {site.email}. If it did not,
          call {site.phones[0].label} or use the online quote form.
        </Text>
        <Pressable onPress={() => setStatus('idle')} accessibilityRole="button">
          <Text style={styles.reset}>Edit details</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.form}>
      <Field label="Name" value={name} onChangeText={setName} autoComplete="name" />
      <Field
        label="Company"
        value={company}
        onChangeText={setCompany}
        autoComplete="organization"
      />
      <Field
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        autoComplete="tel"
      />
      <Field
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoComplete="email"
        autoCapitalize="none"
      />
      <Field
        label="What do you need?"
        value={message}
        onChangeText={setMessage}
        multiline
        placeholder="Building type, access notes, timing…"
      />
      {error ? (
        <Text style={styles.error} accessibilityRole="alert">
          {error}
        </Text>
      ) : null}
      <PrimaryButton label="Send quote request" onPress={submit} />
      <Text style={styles.hint}>Opens your email to {site.email}. No account required.</Text>
    </View>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  autoComplete?: 'name' | 'organization' | 'tel' | 'email' | 'off';
  autoCapitalize?: 'none' | 'sentences' | 'words';
};

function Field({
  label,
  value,
  onChangeText,
  multiline,
  placeholder,
  keyboardType = 'default',
  autoComplete = 'off',
  autoCapitalize = 'sentences',
}: FieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777777"
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        style={[styles.input, multiline && styles.multiline]}
        accessibilityLabel={label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: space.md,
  },
  field: {
    gap: space.xs,
  },
  label: {
    ...type.label,
    color: colors.textMuted,
  },
  input: {
    ...type.body,
    color: colors.text,
    backgroundColor: colors.bgElevated,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: layout.radiusSm,
    paddingHorizontal: space.md,
    paddingVertical: space.sm + 2,
    minHeight: 52,
  },
  multiline: {
    minHeight: 120,
    paddingTop: space.md,
  },
  error: {
    ...type.caption,
    color: colors.danger,
  },
  hint: {
    ...type.caption,
    color: colors.textMuted,
  },
  confirm: {
    gap: space.sm,
    padding: space.lg,
    backgroundColor: colors.bgElevated,
    borderRadius: layout.radiusMd,
    borderWidth: 1,
    borderColor: colors.border,
  },
  confirmTitle: {
    ...type.h3,
    color: colors.accent,
  },
  confirmBody: {
    ...type.body,
    color: colors.textMuted,
  },
  reset: {
    ...type.bodyStrong,
    color: colors.cta,
    marginTop: space.xs,
  },
});
