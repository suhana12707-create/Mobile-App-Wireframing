// Reusable screen header with a title and optional subtitle.
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '@/constants/theme';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    fontFamily: typography.heading,
    fontSize: 28,
    color: colors.textPrimary,
    lineHeight: 34,
  },
  subtitle: {
    fontFamily: typography.body,
    fontSize: 15,
    color: colors.textSecondary,
    marginTop: 4,
  },
});
