import mediaqueries from '../../../../config/mediaQueries'

const styles = {
    base: {
        position: 'fixed',
        right: '0',
        transition: 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        width: '100%',
        zIndex: '1200',
    },
    pushed: {
        [mediaqueries.medium_and_up]: {
            width: 'calc(100% - 256px)'
        }
    },
    pulled: {
        [mediaqueries.medium_and_up]: {
            width: 'calc(100% - 60px)'
        }
    },
    rightitems: {
        display: 'inline-block',
        color: '#FFF',
        fontSize: '25px',
        marginLeft: '30px',
        position: 'relative',
        verticalAlign: 'middle',

        notifications: {
            backgroundColor: '#CCC',
            borderRadius: '50%',
            bottom: '-9px',
            color: '#FFF',
            display: 'inline-block',
            fontSize: '12px',
            lineHeight: '1',
            padding: '3px 0',
            position: 'absolute',
            right: '-9px',
            textAlign: 'center',
            width: '18px'
        }
    }
}

export default styles;