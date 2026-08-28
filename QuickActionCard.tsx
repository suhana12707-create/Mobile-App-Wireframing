// Reusable quick-action card used in the Home screen grid.
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import {
  BookOpen,
  ClipboardList,
  CalendarDays,
  User,
  type LucideIcon,
} from 'lucide-react-native';
import type { QuickAction } from '@/types';
import { colors, typography, radius, shadows, spacing } from '@/constants/theme';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  ClipboardList,
  CalendarDays,
  User,
};

export default function QuickActionCard({ action }: { action: QuickAction }) {
  const router = useRouter();
  const Icon = iconMap[action.icon] ?? BookOpen;

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() => router.push(action.screen as never)}
    >
      <View style={[styles.iconCircle, { backgroundColor: action.color + '1A' }]}>
        <Icon size={26} color={action.color} strokeWidth={2} />
      </View>
      <Text style={styles.label}>{action.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    alignItems: 'center',
    gap: 10,
    ...shadows.card,
  },
  pressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: typography.medium,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});
