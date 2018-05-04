import colors from '../../../../config/colors'

const styles = {
    base: {
        backgroundColor: colors.white,
        boxShadow: '#bbb 0px 5px 3px -4px',
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
        lineHeight: '1.3',
        marginBottom: '5px'
    },
    value: {
        fontSize: '2.5rem',
        fontWeight: '600',
        lineHeight: '1'
    },
    icon: {
        background: '#FFF',
        borderRadius: '50%',
        color: '#FFF',
        left: '50%',
        lineHeight: '20px',
        fontSize: '35px',
        marginLeft: '-30px',
        opacity: '1',
        padding: '12px',
        position: 'absolute',
        top: '-30px'
    }
}

export default styles;