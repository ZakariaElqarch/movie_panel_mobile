import { Dimensions, StyleSheet, useColorScheme } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const vH = percent => percent * windowHeight / 100;
export const vW = percent => percent * windowWidth / 100;

const { vars } = require("./StyleDark");

const styles = StyleSheet.create({
    flex: (n) => ({
        flex: n ?? 1,
    }),
    mainContainer: {
        backgroundColor: vars._background_primary,
        flex: 1,
        padding:16
    }

});


export default styles