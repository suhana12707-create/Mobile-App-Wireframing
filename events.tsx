// Events screen — a FlatList of reusable EventCard components.
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import EventCard from '@/components/EventCard';
import { colors } from '@/constants/theme';
import { events } from '@/data/sampleData';

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Header title="Campus Events" subtitle={`${events.length} upcoming events`} />
        }
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
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
});
