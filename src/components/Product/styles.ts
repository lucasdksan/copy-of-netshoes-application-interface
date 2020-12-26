import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 15,
        width: 150,
        height: 250,
    },
    imageProduct: {
        width: '100%',
        height: 80,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    nameProduct: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 10,
    },
    shippingSituation: {
        fontSize: 14,
        color: '#20bf55',
        marginBottom: 10,
    },
    oldValue: {
        color: '#dee2e6',
        textDecorationLine:"line-through",
        marginBottom: 5,
    },
    newValue: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});