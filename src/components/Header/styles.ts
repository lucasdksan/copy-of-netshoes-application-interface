import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0; 

export const styles = StyleSheet.create({
    contentHeader: {
        backgroundColor: '#5A2D82',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 60,
        marginTop: statusBarHeight,
        width: '100%'
    },
    contentText: {
        color: '#ffffff',
        fontSize: 22,
        marginHorizontal: 20
    },
});