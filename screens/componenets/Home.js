import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../../assets/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.navigate('inner')
    }, [])
    return (
        <SafeAreaView style={[styles.mainContainer]}>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home