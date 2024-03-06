import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../assets/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    return (
        <SafeAreaView style={[styles.mainContainer,styles.bgDark]}>
            <View>
                <Text>Profile</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile