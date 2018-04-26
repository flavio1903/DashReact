import ScreenSizes from './ScreenSizes'

export default {
    small_and_up: '@media screen and (min-width: ' + ScreenSizes.width.small + 'px)',
    medium_and_up: '@media screen and (min-width: ' + ScreenSizes.width.medium + 'px)',
    large_and_up: '@media screen and (min-width: ' + ScreenSizes.width.large + 'px)',
    extralarge_and_up: '@media screen and (min-width: ' + ScreenSizes.width.extralarge + 'px)',
}