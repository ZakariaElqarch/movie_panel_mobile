import { View, Text,Platform ,TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import styles from '../../assets/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ArrowLeftPrimary from "../../assets/icons/arrowLeftPrimary.svg"

const Header = (props) => {
    const navigation = useNavigation();
    const title = props.title ?? "";
    const showConfigIcon = props.showConfigIcon ?? false;
    const disabledTouche = props.disabledTouche ?? 0;
    const showTitle = props.showTitle ?? true;
    const showIconHeader = props.showIconHeader ?? false;
    const showLogo = props.showLogo ?? false;
  

    let styleAndroidBar = (Platform.OS === 'android')?styles.marginTop10:{};
    let centerLogo = (showLogo)?{ alignItems: "center" }:{};

    return(
        <View style={styles.TopHeader}>
            <View style={styles.shadow}>

                <TouchableOpacity activeOpacity={disabledTouche}
                                  style={[styles.vw_top_header,centerLogo,styleAndroidBar]}
                                  onPress={props.onPress}
                >
                    <View style={[styles.flex_center_horizontal_row,styles.marginBottom(5)]}>
                        <View  style={[styles.flex1]}>
                            {
                                disabledTouche !== 1 && ( <ArrowLeftPrimary  style={ styles.icon_top_header} width={35} /> )
                            }
                        </View>

                        <View style={[styles.widthPercent(80),centerLogo]}>
                            <Text style={[styles.title_top_header]}>{title}</Text>
                        </View>

                        <View style={[styles.flex1]} />

                    </View>

                </TouchableOpacity>

            </View>
        </View>

    )
}

export default Header