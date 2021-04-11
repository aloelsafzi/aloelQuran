import React, { useEffect } from 'react';
import { View, Text, Image, } from 'react-native';
import { Logo } from '../../assets';
import { styles } from './style';


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
    });
    return (
        <View style={styles.componenWrapper}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.text.title}>Assalamu'alaikum</Text>
            <Text style={styles.text.desc} >Yuk, Baca Al-Qur'an</Text>
        </View>
    )
}

export default SplashScreen;
