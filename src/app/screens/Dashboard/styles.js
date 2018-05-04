import mediaqueries from '../../config/mediaQueries'

const styles = {
    content: {
        backgroundColor: '#EEE',
        boxSizing: 'border-box',
        float: 'right',
        minHeight: '100vh',
        paddingTop: '64px',
        paddingBottom: '15px',
        transition: 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        width: '100%'
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
    }
}

export default styles;