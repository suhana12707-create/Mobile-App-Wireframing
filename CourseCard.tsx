// Reusable course card showing course name, faculty, room, and time.
import { View, Text, StyleSheet } from 'react-native';
import { Clock, MapPin, User, Calendar } from 'lucide-react-native';
import type { Course } from '@/types';
import { colors, typography, radius, shadows, spacing } from '@/constants/theme';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <View style={styles.card}>
      <View style={[styles.accentBar, { backgroundColor: course.color }]} />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={[styles.codeBadge, { backgroundColor: course.color + '22' }]}>
            <Text style={[styles.codeText, { color: course.color }]}>{course.code}</Text>
          </View>
        </View>
        <Text style={styles.name} numberOfLines={2}>
          {course.name}
        </Text>

        <View style={styles.detailRow}>
          <User size={15} color={colors.textMuted} />
          <Text style={styles.detailText}>{course.faculty}</Text>
        </View>
        <View style={styles.detailRow}>
          <MapPin size={15} color={colors.textMuted} />
          <Text style={styles.detailText}>{course.room}</Text>
        </View>
        <View style={styles.detailRow}>
          <Clock size={15} color={colors.textMuted} />
          <Text style={styles.detailText}>{course.time}</Text>
        </View>
        <View style={styles.detailRow}>
          <Calendar size={15} color={colors.textMuted} />
          <Text style={styles.detailText}>{course.day}</Text>
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
  accentBar: {
    width: 5,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 6,
  },
  codeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.sm,
  },
  codeText: {
    fontFamily: typography.medium,
    fontSize: 12,
    fontWeight: '600',
  },
  name: {
    fontFamily: typography.heading,
    fontSize: 17,
    color: colors.textPrimary,
    marginBottom: 12,
    lineHeight: 22,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 4,
  },
  detailText: {
    fontFamily: typography.body,
    fontSize: 14,
    color: colors.textSecondary,
  },
});
