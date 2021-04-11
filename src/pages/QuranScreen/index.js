import React from 'react';
import { Text, View, FlatList } from 'react-native';;
import { styles } from './style';
import { getSurah } from "../../database";

const QuranScreen = ({ route, navigation }) => {
    const { surah } = route.params;
    const { preBismillah, verses, number, numberOfVerses, name, revelation } = getSurah(surah);

    const renderItem = ({ item }) => {
        return (
            <View>
                {
                    item.number.inSurah == 1 ?
                        <View style={styles.cardDescSurah}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text.descSurah.number}>{number}</Text>
                                <Text style={styles.text.descSurah.number}>{revelation.arab}</Text>
                            </View>
                            <Text style={styles.text.descSurah.namaSurah}>{name.short}</Text>
                            <Text style={styles.text.descSurah.namaSurah}>{name.transliteration.id}</Text>
                            <Text style={styles.text.descSurah.translation}>( {name.translation.id} ) {numberOfVerses} - Ayah</Text>

                        </View> : <View></View>
                }
                {
                    item.number.inSurah == 1 && preBismillah != null
                        ?
                        <View style={styles.cardPreBismillah}>
                            <Text style={styles.text.preBismillah}>{preBismillah.text.arab}</Text>
                        </View>
                        : <View></View>
                }

                <View style={styles.card}>
                    <Text style={styles.numberAyah}>{item.number.inSurah}</Text>
                    <Text style={styles.text.arab}>{item.text.arab}</Text>
                    <Text style={styles.text.terjemah}>{item.translation.id}</Text>
                </View>
            </View>

        )
    }


    return (
        <View style={styles.screenWrapper}>
            <View style={styles.containerCard}>
                <FlatList
                    data={verses}
                    renderItem={renderItem}
                    keyExtractor={item => item.number.inQuran.toString()}
                />
            </View>
        </View>
    )
}

export default QuranScreen;