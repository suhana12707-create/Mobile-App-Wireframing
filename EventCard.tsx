// Reusable event card showing title, date, time, location, and category.
import { View, Text, StyleSheet } from 'react-native';
import { CalendarDays, Clock, MapPin } from 'lucide-react-native';
import type { CampusEvent } from '@/types';
import { colors, typography, radius, shadows, spacing } from '@/constants/theme';

export default function EventCard({ event }: { event: CampusEvent }) {
  return (
    <View style={styles.card}>
      <View style={[styles.colorStrip, { backgroundColor: event.color }]} />
      <View style={styles.body}>
        <View style={[styles.categoryBadge, { backgroundColor: event.color + '1A' }]}>
          <Text style={[styles.categoryText, { color: event.color }]}>{event.category}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {event.title}
        </Text>

        <View style={styles.infoRow}>
          <CalendarDays size={15} color={colors.textMuted} />
          <Text style={styles.infoText}>{event.date}</Text>
        </View>
        <View style={styles.infoRow}>
          <Clock size={15} color={colors.textMuted} />
          <Text style={styles.infoText}>{event.time}</Text>
        </View>
        <View style={styles.infoRow}>
          <MapPin size={15} color={colors.textMuted} />
          <Text style={styles.infoText}>{event.location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    flexDirection: 'row',
    overflow: 'hidden',
    ...shadows.card,
  },
  colorStrip: {
    width: 5,
  },
  body: {
    flex: 1,
    padding: spacing.md,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.sm,
    marginBottom: 8,
  },
  categoryText: {
    fontFamily: typography.medium,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontFamily: typography.heading,
    fontSize: 17,
    color: colors.textPrimary,
    lineHeight: 22,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 3,
  },
  infoText: {
    fontFamily: typography.body,
    fontSize: 14,
    color: colors.textSecondary,
  },
});
