import mediaqueries from '../../../../config/MediaQueries'

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
            width: 'calc(100% - 80px)'
        }
    }
}

export default styles;