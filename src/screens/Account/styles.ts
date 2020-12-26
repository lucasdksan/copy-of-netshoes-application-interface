import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f7ff',
        alignItems: 'center',
    },
    welCome: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
        height: 100,
        width: '100%'
    },
    welComeText: {
        color: '#000000',
        fontSize: 24,
        marginBottom: 2,
    },
    welComeLink: {
        color: '#0077b6',
        fontSize: 15,
        fontWeight: 'bold',
    },
    scrollview: {
        width: '100%',
        height: '100%',
    },
    FirstArea: {
        backgroundColor: '#fff',
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#adb5bd',
        borderTopWidth: 1,
        borderTopColor: '#adb5bd',
        marginBottom: 30,
    },
    SecondArea: {
        backgroundColor: '#fff',
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#adb5bd',
        borderTopWidth: 1,
        borderTopColor: '#adb5bd',
    }
});