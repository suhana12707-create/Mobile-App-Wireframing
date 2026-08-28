// Home screen — welcome message, profile card, quick actions, and
// summary sections for classes, assignments, events, and notices.
import { View, Text, StyleSheet, ScrollView, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import {
  ArrowRight,
  Bell,
  AlertCircle,
  Clock,
  MapPin,
  CalendarDays,
} from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import QuickActionCard from '@/components/QuickActionCard';
import SectionTitle from '@/components/SectionTitle';
import { colors, typography, radius, spacing, shadows } from '@/constants/theme';
import { student, courses, assignments, events, notices, quickActions } from '@/data/sampleData';

export default function HomeScreen() {
  const router = useRouter();
  const todayCourse = courses[0];
  const pendingAssignments = assignments.filter((a) => a.status === 'Pending');
  const upcomingEvent = events[0];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Header title="Campus Connect" subtitle="Stay on top of your day." />

        {/* Student profile card */}
        <View style={styles.section}>
          <ProfileCard student={student} variant="compact" />
        </View>

        {/* Quick actions grid */}
        <SectionTitle title="Quick Actions" />
        <View style={styles.grid}>
          {quickActions.map((action) => (
            <QuickActionCard key={action.id} action={action} />
          ))}
        </View>

        {/* Today's class */}
        <SectionTitle title="Today's Class" />
        <Pressable
          style={({ pressed }) => [styles.summaryCard, pressed && styles.pressed]}
          onPress={() => router.push('/(tabs)/courses')}
        >
          <View style={[styles.summaryIcon, { backgroundColor: todayCourse.color + '1A' }]}>
            <Clock size={22} color={todayCourse.color} />
          </View>
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryTitle} numberOfLines={1}>
              {todayCourse.name}
            </Text>
            <Text style={styles.summarySub}>
              {todayCourse.time} • {todayCourse.room}
            </Text>
          </View>
          <ArrowRight size={20} color={colors.textMuted} />
        </Pressable>

        {/* Pending assignments */}
        <SectionTitle title="Pending Assignments" />
        <Pressable
          style={({ pressed }) => [styles.summaryCard, pressed && styles.pressed]}
          onPress={() => router.push('/(tabs)/assignments')}
        >
          <View style={[styles.summaryIcon, { backgroundColor: colors.pendingBg }]}>
            <CalendarDays size={22} color={colors.pending} />
          </View>
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryTitle}>
              {pendingAssignments.length} assignments due
            </Text>
            <Text style={styles.summarySub} numberOfLines={1}>
              Next: {pendingAssignments[0].title}
            </Text>
          </View>
          <ArrowRight size={20} color={colors.textMuted} />
        </Pressable>

        {/* Upcoming event */}
        <SectionTitle title="Upcoming Event" />
        <Pressable
          style={({ pressed }) => [styles.summaryCard, pressed && styles.pressed]}
          onPress={() => router.push('/(tabs)/events')}
        >
          <View style={[styles.summaryIcon, { backgroundColor: upcomingEvent.color + '1A' }]}>
            <CalendarDays size={22} color={upcomingEvent.color} />
          </View>
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryTitle} numberOfLines={1}>
              {upcomingEvent.title}
            </Text>
            <Text style={styles.summarySub}>
              {upcomingEvent.date} • {upcomingEvent.location}
            </Text>
          </View>
          <ArrowRight size={20} color={colors.textMuted} />
        </Pressable>

        {/* Notices */}
        <SectionTitle title="Notices" />
        <View style={styles.noticesContainer}>
          {notices.map((notice) => (
            <View key={notice.id} style={styles.noticeCard}>
              <View style={styles.noticeHeader}>
                {notice.urgent ? (
                  <AlertCircle size={16} color={colors.error} />
                ) : (
                  <Bell size={16} color={colors.primary} />
                )}
                <Text style={styles.noticeDate}>{notice.date}</Text>
              </View>
              <Text style={styles.noticeTitle}>{notice.title}</Text>
              <Text style={styles.noticeBody}>{notice.body}</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingBottom: 20,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  summaryCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    ...shadows.card,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.92,
  },
  summaryIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryInfo: {
    flex: 1,
  },
  summaryTitle: {
    fontFamily: typography.heading,
    fontSize: 16,
    color: colors.textPrimary,
  },
  summarySub: {
    fontFamily: typography.body,
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  noticesContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  noticeCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadows.card,
  },
  noticeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  noticeDate: {
    fontFamily: typography.body,
    fontSize: 12,
    color: colors.textMuted,
  },
  noticeTitle: {
    fontFamily: typography.heading,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  noticeBody: {
    fontFamily: typography.body,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
});
