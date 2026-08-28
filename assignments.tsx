// Assignments screen — a FlatList of AssignmentCard components with
// a filter toggle between All / Pending / Completed.
import { useState, useMemo, useCallback } from 'react';
import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import AssignmentCard from '@/components/AssignmentCard';
import { colors, typography, radius, shadows, spacing } from '@/constants/theme';
import { assignments } from '@/data/sampleData';
import type { AssignmentStatus } from '@/types';

type Filter = 'All' | 'Pending' | 'Completed';

const filters: Filter[] = ['All', 'Pending', 'Completed'];

export default function AssignmentsScreen() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return assignments;
    return assignments.filter((a) => a.status === (activeFilter as AssignmentStatus));
  }, [activeFilter]);

  const pendingCount = assignments.filter((a) => a.status === 'Pending').length;

  const renderItem = useCallback(
    ({ item }: { item: (typeof assignments)[number] }) => <AssignmentCard assignment={item} />,
    [],
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Header title="Assignments" subtitle={`${pendingCount} pending • ${assignments.length} total`} />
            <View style={styles.filterRow}>
              {filters.map((f) => (
                <Pressable
                  key={f}
                  style={[styles.filterPill, activeFilter === f && styles.filterPillActive]}
                  onPress={() => setActiveFilter(f)}
                >
                  <Text
                    style={[
                      styles.filterText,
                      activeFilter === f && styles.filterTextActive,
                    ]}
                  >
                    {f}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        }
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No {activeFilter.toLowerCase()} assignments.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  filterPill: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  filterPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontFamily: typography.medium,
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  filterTextActive: {
    color: colors.textInverse,
  },
  empty: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: typography.body,
    fontSize: 15,
    color: colors.textMuted,
  },
});
