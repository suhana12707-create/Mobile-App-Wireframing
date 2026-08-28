// Small reusable section header used across screens.
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '@/constants/theme';

interface SectionTitleProps {
  title: string;
  actionText?: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  title: {
    fontFamily: typography.heading,
    fontSize: 19,
    color: colors.textPrimary,
  },
});
