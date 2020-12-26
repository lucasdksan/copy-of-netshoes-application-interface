import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonS: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: 50,
        height: 50,
        borderRadius: 25,
        shadowColor: '#000',
        shadowRadius: 25,
        shadowOffset: {
            height: 40,
            width: 40
        },
        shadowOpacity: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    name: {
        color: '#6c757d',
        fontSize: 10,
    }
});