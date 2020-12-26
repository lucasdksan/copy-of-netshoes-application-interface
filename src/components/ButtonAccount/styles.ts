import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    buttonArea: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 0,
        borderBottomColor: '#adb5bd',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
    }
});