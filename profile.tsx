// Profile screen — student details with an Edit Profile button.
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pencil, Bell, Shield, HelpCircle, ChevronRight, LogOut } from 'lucide-react-native';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import { colors, typography, radius, shadows, spacing } from '@/constants/theme';
import { student } from '@/data/sampleData';

const menuItems = [
  { icon: Bell, label: 'Notifications', color: colors.primary },
  { icon: Shield, label: 'Privacy & Security', color: colors.success },
  { icon: HelpCircle, label: 'Help & Support', color: colors.accent },
];

export default function ProfileScreen() {
  const handleEdit = () => {
    Alert.alert('Edit Profile', 'Profile editing would open here.');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Header title="Profile" subtitle="Manage your account" />

        <View style={styles.section}>
          <ProfileCard student={student} variant="full" />

          <Pressable
            style={({ pressed }) => [styles.editBtn, pressed && styles.pressed]}
            onPress={handleEdit}
          >
            <Pencil size={17} color={colors.textInverse} />
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </Pressable>
        </View>

        {/* Settings menu */}
        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Settings</Text>
          <View style={styles.menuCard}>
            {menuItems.map((item, index) => (
              <Pressable
                key={item.label}
                style={({ pressed }) => [
                  styles.menuRow,
                  index < menuItems.length - 1 && styles.menuBorder,
                  pressed && styles.pressed,
                ]}
                onPress={() => Alert.alert(item.label, 'This section would open here.')}
              >
                <View style={[styles.menuIcon, { backgroundColor: item.color + '1A' }]}>
                  <item.icon size={19} color={item.color} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <ChevronRight size={19} color={colors.textMuted} />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Logout */}
        <View style={styles.menuSection}>
          <Pressable
            style={({ pressed }) => [styles.logoutCard, pressed && styles.pressed]}
            onPress={() => Alert.alert('Log Out', 'You would be logged out here.')}
          >
            <LogOut size={19} color={colors.error} />
            <Text style={styles.logoutText}>Log Out</Text>
          </Pressable>
        </View>

        <Text style={styles.version}>Campus Connect v1.0.0</Text>
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
  marginTop: 4,
  alignItems: 'center',
  gap: 16,
  width: '100%',
  },
  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: radius.lg,
    width: '100%',
    ...shadows.card,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.92,
  },
  editBtnText: {
    fontFamily: typography.medium,
    fontSize: 16,
    color: colors.textInverse,
    fontWeight: '600',
  },
  menuSection: {
    paddingHorizontal: 20,
    marginTop: 28,
  },
  menuTitle: {
    fontFamily: typography.heading,
    fontSize: 18,
    color: colors.textPrimary,
    marginBottom: 12,
  },
  menuCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    overflow: 'hidden',
    ...shadows.card,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    gap: 14,
  },
  menuBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  menuIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLabel: {
    flex: 1,
    fontFamily: typography.body,
    fontSize: 15,
    color: colors.textPrimary,
  },
  logoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.card,
    paddingVertical: 14,
    borderRadius: radius.lg,
    ...shadows.card,
  },
  logoutText: {
    fontFamily: typography.medium,
    fontSize: 16,
    color: colors.error,
    fontWeight: '600',
  },
  version: {
    fontFamily: typography.body,
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 32,
  },
});
