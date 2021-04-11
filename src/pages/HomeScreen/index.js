import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { getAllSurah } from "../../database";

const HomeScreen = ({ navigation }) => {
    const [surah, setSurah] = useState(getAllSurah);
    const renderItem = ({ item }) => {
        return (
            < TouchableOpacity onPress={() => navigation.navigate('Quran', { surah: item.number })}>
                <View style={styles.card}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.numberSurah}>{item.number}</Text>
                    </View>
                    <View style={{ flex: 2, marginRight: 25 }}>
                        <Text style={styles.text.title}>{`${item.name.transliteration.id}`}</Text>
                        <Text style={styles.text.desc}>{`( ${item.name.translation.id} ) - ${item.numberOfVerses} ayah - ${item.revelation.id}`}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.text.arab}>{item.name.short}</Text>
                    </View>
                </View>
            </ TouchableOpacity >
        )
    }

    return (
        <View style={styles.screenWrapper}>
            <View style={styles.containerCard}>
                <FlatList
                    data={surah}
                    renderItem={renderItem}
                    keyExtractor={item => item.number.toString()}
                />
            </View>
        </View>
    )
}

export default HomeScreen;