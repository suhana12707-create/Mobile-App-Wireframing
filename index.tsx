// Splash screen — shows the Campus Connect logo and name, then
// automatically navigates to the Home tab after a short delay.
import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { GraduationCap } from 'lucide-react-native';
import { colors, typography, radius, shadows } from '@/constants/theme';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)/home');
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <GraduationCap size={56} color={colors.textInverse} strokeWidth={1.8} />
      </View>
      <Text style={styles.appName}>Campus Connect</Text>
      <Text style={styles.tagline}>Your campus, simplified.</Text>
      <View style={styles.loadingBar}>
        <View style={styles.loadingFill} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.elevated,
  },
  appName: {
    fontFamily: typography.heading,
    fontSize: 32,
    color: colors.textInverse,
    marginTop: 24,
  },
  tagline: {
    fontFamily: typography.body,
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
  },
  loadingBar: {
    width: 140,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: radius.pill,
    marginTop: 40,
    overflow: 'hidden',
  },
  loadingFill: {
    width: '40%',
    height: '100%',
    backgroundColor: colors.textInverse,
    borderRadius: radius.pill,
  },
});
