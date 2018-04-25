import colors from '../../../../config/Colors'

const styles = {
    base: {
        backgroundColor: colors.white,
        boxShadow: '0 4px 2px -4px grey',
        padding: '10px',
        textAlign: 'center'
    },
    row: {
        alignItems: 'center',
        height: '100px',
        display: 'flex',
        marginTop: '0',
        marginBottom: '0'
    },
    stars: {
        color: '#333',
        fontSize: '.8rem',
        marginRight: '5px'
    },
    title: {
        fontSize: '1.1rem',
        marginBottom: '5px'
    },
    value: {
        fontSize: '2.5rem',
        fontWeight: '600',
        lineHeight: '1'
    },
    icon: {
        background: '#999',
        borderRadius: '50%',
        boxShadow: '0 0 2px #CCC',
        color: '#FFF',
        left: '50%',
        lineHeight: '20px',
        fontSize: '40px',
        marginLeft: '-40px',
        opacity: '1',
        padding: '15px',
        position: 'absolute',
        top: '-30px'
    }
}

export default styles;