// Reusable student profile card shown on the Home and Profile screens.
import { View, Text, StyleSheet, Image } from 'react-native';
import { Mail, Hash, GraduationCap, Building2 } from 'lucide-react-native';
import type { Student } from '@/types';
import { colors, typography, radius, shadows, spacing } from '@/constants/theme';

interface ProfileCardProps {
  student: Student;
  variant?: 'compact' | 'full';
}

export default function ProfileCard({ student, variant = 'full' }: ProfileCardProps) {
  if (variant === 'compact') {
    return (
      <View style={styles.compactCard}>
        <Image source={{ uri: student.avatar }} style={styles.compactAvatar} />
        <View style={styles.compactInfo}>
          <Text style={styles.compactName}>Welcome back,</Text>
          <Text style={styles.compactStudentName}>{student.name}</Text>
          <Text style={styles.compactDept} numberOfLines={1}>
            {student.department}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.avatarWrap}>
        <Image source={{ uri: student.avatar }} style={styles.avatar} />
      </View>
      <Text style={styles.name}>{student.name}</Text>
      <Text style={styles.studentId}>{student.studentId}</Text>

      <View style={styles.divider} />

      <View style={styles.detailRow}>
        <Building2 size={18} color={colors.primary} />
        <Text style={styles.detailText}>{student.department}</Text>
      </View>
      <View style={styles.detailRow}>
        <GraduationCap size={18} color={colors.primary} />
        <Text style={styles.detailText}>{student.year}</Text>
      </View>
      <View style={styles.detailRow}>
        <Mail size={18} color={colors.primary} />
        <Text style={styles.detailText}>{student.email}</Text>
      </View>
      <View style={styles.detailRow}>
        <Hash size={18} color={colors.primary} />
        <Text style={styles.detailText}>{student.studentId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Compact variant (Home screen)
  compactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadows.elevated,
  },
  compactAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: colors.textInverse,
  },
  compactInfo: {
    marginLeft: 14,
    flex: 1,
  },
  compactName: {
    fontFamily: typography.body,
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  compactStudentName: {
    fontFamily: typography.heading,
    fontSize: 20,
    color: colors.textInverse,
    marginTop: 2,
  },
  compactDept: {
    fontFamily: typography.body,
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 2,
  },

  // Full variant (Profile screen)
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.lg,
    alignItems: 'center',
    ...shadows.card,
  },
  avatarWrap: {
    marginBottom: 14,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.primaryLight,
  },
  name: {
    fontFamily: typography.heading,
    fontSize: 22,
    color: colors.textPrimary,
  },
  studentId: {
    fontFamily: typography.medium,
    fontSize: 14,
    color: colors.primary,
    marginTop: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 6,
    width: '100%',
  },
  detailText: {
    fontFamily: typography.body,
    fontSize: 15,
    color: colors.textSecondary,
    flex: 1,
  },
});
