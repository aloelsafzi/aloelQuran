import { Colors } from '../../utils';

export const styles = {
    componenWrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        maxWidth: 192,
        maxHeight: 192
    },
    text: {
        title: {
            fontSize: 30,
            marginVertical: 20
        },
        desc: {
            backgroundColor: Colors.primary,
            borderRadius: 100,
            width: 166, color: 'white',
            textAlign: 'center',
            paddingVertical: 10,
            fontSize: 12
        }
    }
}