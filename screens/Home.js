import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../assets/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Header from './componenets/Header';

import { movies } from '../Movies';
const Home = () => {
    const navigation = useNavigation();
    // const [movies, setMovies] = useState(movies);

    // useEffect(() => {
    //     setMovies(movies)
    // }, []);

    useEffect(() => {
        navigation.navigate('inner')
    }, [])

    const renderNewMovie = (item) => {

        return (
            <View style={[styles.newMoviesView, styles.flex1]}>
                <Image
                    style={[styles.newMoviesImg,]}
                    source={{
                        uri: item.Poster,
                    }}
                />
                <View style={[styles.movietitleContainer]}>
                    <Text style={[styles.movieTitle]}>{item.Title}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.mainView, styles.bgDark]}>
            <ScrollView style={[styles.mainContainer, styles.bgDark]}>
                <View style={[styles.categoryView]}>
                    <Text style={[styles.MoviesBigTitle]}>Newest Movies:</Text>
                    <FlatList
                        horizontal
                        data={movies}
                        renderItem={({ item }) => renderNewMovie(item)}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View>
                    <Text style={[styles.MoviesBigTitle]}>Newest Series:</Text>
                    <FlatList
                        horizontal
                        data={movies}
                        renderItem={({ item }) => renderNewMovie(item)}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home