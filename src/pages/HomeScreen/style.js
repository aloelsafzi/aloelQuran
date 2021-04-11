import { Colors } from '../../utils';

export const styles = {
    screenWrapper: { flex: 1, backgroundColor: Colors.primary, },
    searchInput: {
        borderRadius: 50,
        borderColor: Colors.Secondary,
        borderWidth: 1,
        paddingHorizontal: 16,
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderStyle: 'dotted',
        marginBottom: 25
    },
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
        backgroundColor: Colors.primary,
        minHeight: 100,
        borderRadius: 25,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    numberSurah: {
        fontSize: 16, fontWeight: 'bold', backgroundColor: Colors.Secondary,
        width: 40,
        height: 40,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text: {
        title: { color: 'white', fontSize: 18, fontWeight: 'bold' },
        desc: { color: 'white', fontSize: 12, },
        arab: { color: Colors.Secondary, fontSize: 20, fontWeight: 'bold', textAlign: 'right' }
    }



}