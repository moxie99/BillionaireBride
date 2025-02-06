import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; // For icons

const ProfileScreen = () => {
  // Dummy User Data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicUrl: 'https://i.pravatar.cc/150?img=8', // Dummy profile image
    rank: 'Gold',
    totalPoints: 2750,
    rewardsClaimed: 15,
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileCard}>
        <Image source={{uri: user.profilePicUrl}} style={styles.profilePic} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.rewardsClaimed}</Text>
          <Text style={styles.statLabel}>Rewards</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.rank}</Text>
          <Text style={styles.statLabel}>Rank</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.totalPoints}</Text>
          <Text style={styles.statLabel}>Total Points</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="settings-outline" size={20} color="white" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color="#FF6347" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: '100%',
    padding: 20,
    borderRadius: 12,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFD700',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF6347',
    width: '100%',
  },
  logoutText: {
    color: '#FF6347',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ProfileScreen;
