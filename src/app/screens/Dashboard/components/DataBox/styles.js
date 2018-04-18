import colors from '../../../../config/Colors'

const styles = {
    base: {
        backgroundColor: colors.white,
        boxShadow: '0 4px 2px -4px grey',
        padding: '10px',
        textAlign: 'center'
    },
    android: {
        backgroundColor: colors.android
    },
    ios: {
        backgroundColor: colors.ios
    },

    row: {
        marginTop: '0',
        marginBottom: '0'
    },

    stars: {
        color: '#333',
        fontSize: '.8rem',
        marginRight: '5px'
    },
    title: {
        fontSize: '1.2rem',
        marginBottom: '5px'
    },
    value: {
        fontSize: '2.5rem',
        fontWeight: '600'
    },
    icon: {
        left: '50%',
        fontSize: '152px',
        marginLeft: '-63.5px',
        opacity: '.2',
        position: 'absolute',
        top: '-41px',
    }
}

export default styles;