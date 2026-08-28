// Courses screen — a FlatList of reusable CourseCard components.
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import { colors } from '@/constants/theme';
import { courses } from '@/data/sampleData';

export default function CoursesScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Header title="My Courses" subtitle={`${courses.length} courses this semester`} />
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
