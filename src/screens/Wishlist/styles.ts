import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    warningsView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        paddingHorizontal: 15,
    },
    warningsTitle: {
        color: '#0096c7',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    warningsText: {
        color: '#979dac',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
        width: '90%',
    },
    warningImage: {
        width: '100%',
        height: 300,
        paddingHorizontal: 5,
    },
    keepBuyingButton: {
        height: 45,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0096c9',
    },
    keepBuyingText: {
        color: '#ffffff',
        fontSize: 15,
    }
});