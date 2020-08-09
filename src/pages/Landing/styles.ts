import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#50fa7b',
        justifyContent: 'center',
        padding: 40,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
        textAlign: 'center',
    },

    titleBold: {
        fontWeight: 'bold',
    }
});

export default styles;