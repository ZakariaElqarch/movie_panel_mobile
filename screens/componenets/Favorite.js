import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../assets/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Favorite = () => {
    return (
        <SafeAreaView style={[styles.mainContainer]}>
            <Text>Favorite</Text>
        </SafeAreaView>
    )
}

export default Favorite