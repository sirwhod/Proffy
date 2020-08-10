import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#50fa7a'
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 24,
        lineHeight:32,
        maxWidth: 160,
        marginVertical: 40
    }
})

export default styles;