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
    margin: (m = 5) => ({
        margin: m
    }),
    marginTop: (mT = 5) => ({
        marginTop: mT
    }),
    marginBottom: (mB = 5) => ({
        marginBottom: mB
    }),
    marginRight: (mR = 5) => ({
        marginRight: mR
    }),
    marginLeft: (mL = 5) => ({
        marginLeft: mL
    }),
    marginVertical: (mV = 5) => ({
        marginVertical: mV
    }),
    marginHorizontal: (mH = 5) => ({
        marginHorizontal: mH
    }),
    padding: (p = 5) => ({
        padding: p
    }),
    paddingTop: (pT = 5) => ({
        paddingTop: pT
    }),
    paddingBottom: (pB = 5) => ({
        paddingBottom: pB
    }),
    paddingRight: (pR = 5) => ({
        paddingRight: pR
    }),
    paddingLeft: (pL = 5) => ({
        paddingLeft: pL
    }),
    paddingVertical: (pV = 5) => ({
        paddingVertical: pV
    }),
    paddingHorizontal: (pH = 5) => ({
        paddingHorizontal: pH
    }),
    heightPercent: (percent) => ({
        height: vH(percent),
        //width: active === item ? COLORS.secondary : COLORS.gray2,
    }),
    widthPercent: (percent) => ({
        width: vW(percent),
        //width: active === item ? COLORS.secondary : COLORS.gray2,
    }),
    flex1: {
        flex: 1
    },
    shadow: {
        backgroundColor: vars.theme_color_3,
        width: "100%",
        elevation: 5, // Android elevation
        shadowColor: '#red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    flex_center_horizontal_row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    icon_top_header: {
        flexDirection: "column",
        marginLeft: 10
    },
    title_top_header: {
        flexDirection: "column",
        color: vars._background_primary,
        fontSize: 22,
        paddingHorizontal: 24,
        // fontFamily: "NotoSansBold",
        width: "100%",
        //marginLeft : -40
    },
    bgDark: {
        backgroundColor: vars._background_color_btn_primary2
    },
    mainContainer: {
        backgroundColor: vars._background_primary,
        flex: 1,
        padding: 16,
        paddingBottom:52,
    },
    mainView: {
        backgroundColor: vars._background_primary,
        flex: 1,
    },
    icon_bottom_nav: {
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: -4,
    },
    active_nav: {
        // backgroundColor: vars._color_primary_100,
        alignItems: "center",
    },
    text_tab_bottom: {
        fontSize: 12,
        marginTop: 6,
        textAlign: "center",
        color: "#a1a1a1", //vars._color_text_btn_primary,
        // fontFamily: "MulishMedium",
    },
    text_tab_bottom_active: {
        // fontFamily: "MulishBold",
        color: "#C84843", //vars._color_text_btn_primary,
    },
    TopHeader: {
        backgroundColor: vars.theme_color_3,
        marginTop: "-30%",
        paddingTop: "30%",
        borderBottomWidth: 1,
        borderColor: vars._color_badge_Primary,
    },
    newMoviesView: {
        marginHorizontal: 8,
        padding: 10,
        borderRadius: 26,
        alignItems: "center",
        justifyContent: "center",
    },
    newMoviesImg: {
        width: 200,
        height: 300,
        borderRadius: 16,
        marginBottom: 8,
    },
    MoviesBigTitle: {
        color: "#C84843",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    },
    categoryView: {
        marginBottom: 32,
    },
    movietitleContainer: {
        width: 200,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
    }

});


export default styles