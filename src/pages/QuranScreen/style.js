import { Colors } from '../../utils';

export const styles = {
    screenWrapper: { flex: 1, backgroundColor: Colors.primary },
    containerCard: {
        backgroundColor: 'white',
        flex: 3,
        paddingTop: 10,
        paddingHorizontal: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 60
    },
    card: {
        backgroundColor: 'white',
        minHeight: 100,
        borderRadius: 25,
        borderColor: Colors.primary,
        borderWidth: 1,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    },
    cardPreBismillah: {
        backgroundColor: Colors.primary,
        minHeight: 100,
        borderRadius: 25,
        borderColor: Colors.Secondary,
        borderWidth: 1,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    },
    cardDescSurah: {
        backgroundColor: Colors.primary,
        minHeight: 100,
        borderRadius: 25,
        borderColor: Colors.Secondary,
        borderWidth: 1,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    },
    numberAyah: {
        fontSize: 16, fontWeight: 'bold',
        backgroundColor: Colors.Secondary,
        width: 40,
        height: 40,
        borderRadius: 100,
        display: 'flex',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text: {
        descSurah: {
            namaSurah: { color: Colors.Secondary, fontSize: 30, fontWeight: 'bold', textAlign: 'center' },
            number: {
                fontSize: 16, fontWeight: 'bold',
                color: Colors.Secondary,
                width: 40,
                height: 40,
                borderRadius: 100,
                display: 'flex',
                textAlign: 'center',
                textAlignVertical: 'center',
                borderWidth: 1,
                borderColor: Colors.Secondary,
                borderStyle: 'dashed'
            },
            translation: { color: Colors.Secondary, fontSize: 12, textAlign: 'center', }

        },
        preBismillah: { color: Colors.Secondary, fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginVertical: 30 },
        arab: { color: "black", fontSize: 25, fontWeight: '300', textAlign: 'right', marginVertical: 30 },
        terjemah: { color: "black", fontSize: 14, fontWeight: 'normal', textAlign: 'left', marginVertical: 5 }
    }



}