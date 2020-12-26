import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#5e6472',
        width: '100%',
        height: 100,
        marginTop: 10,
    },
    buttom: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    img: {
        width: 90,
        height: 80,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});