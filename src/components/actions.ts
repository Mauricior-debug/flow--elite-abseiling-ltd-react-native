import { Linking, Platform } from 'react-native';
import { site } from '../content/site';

export async function openTel(telUrl: string = site.phones[0].tel) {
  await Linking.openURL(telUrl);
}

export async function openEmail() {
  await Linking.openURL(site.mailto);
}

export async function openQuote() {
  await Linking.openURL(site.quoteUrl);
}

export function formatPhoneDisplay(tel: string) {
  return tel.replace('tel:', '');
}

export const isWeb = Platform.OS === 'web';
