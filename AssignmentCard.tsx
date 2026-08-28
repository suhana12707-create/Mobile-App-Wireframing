// Reusable assignment card with distinct styling for Pending vs Completed.
import { View, Text, StyleSheet } from 'react-native';
import { ClipboardList, CalendarClock, CheckCircle2, Circle } from 'lucide-react-native';
import type { Assignment } from '@/types';
import { colors, typography, radius, shadows, spacing } from '@/constants/theme';

export default function AssignmentCard({ assignment }: { assignment: Assignment }) {
  const isCompleted = assignment.status === 'Completed';
  const statusColor = isCompleted ? colors.completed : colors.pending;
  const statusBg = isCompleted ? colors.completedBg : colors.pendingBg;

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.subjectRow}>
          <View style={[styles.iconWrap, { backgroundColor: statusBg }]}>
            <ClipboardList size={18} color={statusColor} />
          </View>
          <Text style={styles.subject} numberOfLines={1}>
            {assignment.subject}
          </Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: statusBg }]}>
          {isCompleted ? (
            <CheckCircle2 size={13} color={statusColor} />
          ) : (
            <Circle size={13} color={statusColor} />
          )}
          <Text style={[styles.statusText, { color: statusColor }]}>{assignment.status}</Text>
        </View>
      </View>

      <Text style={styles.title}>{assignment.title}</Text>

      <View style={styles.dueRow}>
        <CalendarClock size={15} color={colors.textMuted} />
        <Text style={styles.dueText}>Due {assignment.dueDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadows.card,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  subjectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subject: {
    fontFamily: typography.medium,
    fontSize: 13,
    color: colors.textSecondary,
    flexShrink: 1,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radius.pill,
  },
  statusText: {
    fontFamily: typography.medium,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontFamily: typography.heading,
    fontSize: 16,
    color: colors.textPrimary,
    lineHeight: 21,
    marginBottom: 12,
  },
  dueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dueText: {
    fontFamily: typography.body,
    fontSize: 13,
    color: colors.textMuted,
  },
});
