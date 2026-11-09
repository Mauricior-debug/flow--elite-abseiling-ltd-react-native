import type { ComponentProps } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/typography';

type IconName = ComponentProps<typeof Ionicons>['name'];

const tabs: {
  name: string;
  title: string;
  label: string;
  icon: IconName;
  iconFocused: IconName;
}[] = [
  { name: 'index', title: 'Home', label: 'Home', icon: 'home-outline', iconFocused: 'home' },
  {
    name: 'services',
    title: 'Services',
    label: 'Services',
    icon: 'construct-outline',
    iconFocused: 'construct',
  },
  { name: 'work', title: 'Work', label: 'Work', icon: 'images-outline', iconFocused: 'images' },
  {
    name: 'about',
    title: 'About',
    label: 'About',
    icon: 'shield-checkmark-outline',
    iconFocused: 'shield-checkmark',
  },
  {
    name: 'contact',
    title: 'Contact',
    label: 'Contact',
    icon: 'call-outline',
    iconFocused: 'call',
  },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.bg,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 68,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.bodySemi,
          fontSize: 11,
        },
        sceneStyle: { backgroundColor: colors.bg },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarLabel: tab.label,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? tab.iconFocused : tab.icon}
                size={size}
                color={typeof color === 'string' ? color : colors.textMuted}
              />
            ),
            tabBarAccessibilityLabel: tab.title,
          }}
        />
      ))}
    </Tabs>
  );
}
