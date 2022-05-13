import { Dimensions } from 'react-native'

const metrices = {
    HEIGHT: (number) => {
        if (number) return number * Dimensions.get('screen').height
        else return Dimensions.get('screen').height
    },
    WIDTH: (number) => {
        if (number) return number * Dimensions.get('screen').width 
        else return Dimensions.get('screen').width
    }
}

export default metrices;