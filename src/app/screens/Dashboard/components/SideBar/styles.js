import mediaqueries from '../../../../config/MediaQueries'
import ScreenSizes from '../../../../config//ScreenSizes'

const styles = {
    drawerClosed: {
        [mediaqueries.medium_and_up]: {
            transform: 'translate(-176px, 0px)'
        }
    },
    drawerClosed_Style:{
        '.sideBarDrawer': {
            transform: 'translate(-176px, 0px)'
        }
    }
}

export default styles;