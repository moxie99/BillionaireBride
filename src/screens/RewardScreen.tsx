import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import * as Progress from 'react-native-progress';

// Dummy data for leaderboard
const leaderboard = [
  {
    id: '1',
    name: 'Alice Johnson',
    points: 1200,
    profilePic: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: '2',
    name: 'Bob Williams',
    points: 1100,
    profilePic: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    points: 1050,
    profilePic: 'https://i.pravatar.cc/100?img=3',
  },
  {
    id: '4',
    name: 'Diana Ross',
    points: 990,
    profilePic: 'https://i.pravatar.cc/100?img=4',
  },
  {
    id: '5',
    name: 'Ethan Hunt',
    points: 950,
    profilePic: 'https://i.pravatar.cc/100?img=5',
  },
];

const RewardScreen = () => {
  // Dummy user data
  const user = {
    name: 'John Doe',
    profilePicUrl: 'https://i.pravatar.cc/100', // Dummy profile image
    points: 650,
    nextLevelPoints: 1000,
  };

  const progress = user.points / user.nextLevelPoints; // Progress calculation

  return (
    <View style={styles.container}>
      {/* User Info */}
      <View style={styles.header}>
        <Image source={{uri: user.profilePicUrl}} style={styles.profilePic} />
        <Text style={styles.customerName}>{user.name}</Text>
      </View>

      {/* Reward Progress */}
      <View style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>Your Rewards</Text>
        <Text style={styles.points}>
          {user.points} / {user.nextLevelPoints} Points
        </Text>

        {/* Progress Bar */}
        <Progress.Bar
          progress={progress}
          width={null}
          height={10}
          color="#FFD700"
          borderWidth={0}
          unfilledColor="#e0e0e0"
          style={styles.progressBar}
        />

        {/* Next Reward */}
        <Text style={styles.nextRewardText}>
          🔥 350 more points to unlock a $10 discount!
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Claim Reward</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonTextSecondary}>View History</Text>
        </TouchableOpacity>
      </View>

      {/* Leaderboard Title */}
      <Text style={styles.leaderboardTitle}>🏆 Leaderboard</Text>

      {/* Leaderboard List */}
      <FlatList
        data={leaderboard}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View style={styles.leaderboardItem}>
            <Text style={styles.rank}>#{index + 1}</Text>
            <Image
              source={{uri: item.profilePic}}
              style={styles.leaderboardPic}
            />
            <Text style={styles.leaderboardName}>{item.name}</Text>
            <Text style={styles.leaderboardPoints}>{item.points} pts</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={styles.leaderboardList}
      />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  customerName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  rewardCard: {
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
  rewardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  points: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  progressBar: {
    width: '100%',
    marginBottom: 10,
  },
  nextRewardText: {
    fontSize: 14,
    color: '#FF4500',
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#FFD700',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonSecondary: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  leaderboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  leaderboardList: {
    width: '100%',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    width: 30,
  },
  leaderboardPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  leaderboardName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  leaderboardPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777',
  },
});

export default RewardScreen;
