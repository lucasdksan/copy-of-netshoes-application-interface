import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    warning: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    warningText: {
        color: '#0096c7',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    warningMiniText: {
        color: '#979dac',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10,
    },
    warningButton: {
        backgroundColor: '#00b4d8',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
    },
    warningButtonText: {
        color: '#ffffff'
    },
    listContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 10,
    },
    textList: {
        alignItems: 'flex-start',
        fontSize: 18,
    },
    listProduct: {
        width: '100%',
        flexDirection: 'row',
    },
});