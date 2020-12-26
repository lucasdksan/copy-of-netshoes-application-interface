import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import { ceil } from 'react-native-reanimated';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTop: {
        backgroundColor: '#5A2D82',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    image: {
        width: '45%',
        height: 56,
        marginTop: statusBarHeight,
    },
    search: {
        width: '95%',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#bc96e6',
    },
    nameSearch: {
        color: '#ffffff',
        marginHorizontal: 10,
    },
    Cep: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: '#370f53',
    },
    CepStruct: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 130,
    },
    CepStructName: {
        color: '#ffffff',
        fontSize: 13
    },
    exclusive: {
        backgroundColor: '#5A2D82',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 35,
        paddingVertical: 10,
        width: '100%',
    },
    textExclusive: {
        color: '#dee2e6',
        fontStyle: 'italic',
        fontSize: 15,
    },
    textFree: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    content: {
        borderColor: '#ffffff',
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderWidth: 1,
    },
    contentText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 8,
    },
    listProduct: {
        width: '100%',
        flexDirection: 'column',
    },
    singStyle: {
        height: 250,
        width: '100%',
        marginBottom: 10,
    },
    listButtons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
    },
    listContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 5,
        marginTop: 10,
    },
    textList: {
        alignItems: 'flex-start',
        fontSize: 18,
    },
    listProducts: {
        width: '100%',
        flexDirection: 'row',
    },
    coronaContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coronaContent: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5bc0be',
        width: '100%',
        paddingVertical: 5,
        marginBottom: 10
    },
    coronaTextone: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 26,
    },
    colorTexttwo: {
        color: '#ffffff',
        fontStyle: 'italic',
        fontSize: 10,
    },
    buttonClick: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5bc0be',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    buttonClickText: {
        color: '#fff',
        fontSize: 8
    },
    esportsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#5A2D82',
        width: '100%',
        marginTop: 5,
    },
    esportImage: {
        width: 120,
        height: 120,
    },
    esportsTexts: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        marginLeft: 30,
    },
    esportsExclusive: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 2,
    },
    esportsExclusiveText: {
        color: '#5A2D82',
        fontSize: 18,
        fontWeight: 'bold',
    },
    esportsTextone: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    esportsTexttwo: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
    },
    exportBox: {
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    exportButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exportColorButton: {
        color: '#ffffff',
        fontSize: 8,
    }
});