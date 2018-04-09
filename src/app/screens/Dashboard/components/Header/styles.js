import mediaqueries from '../../../../config/MediaQueries'

const styles = {
    base: {
        float: 'right',
        transition: 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        width: '100%'
    },
    pushed: {
        [mediaqueries.medium_and_up]: {
            width: 'calc(100% - 256px)'
        }
    }
}

export default styles;