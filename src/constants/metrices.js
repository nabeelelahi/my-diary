import { Dimension } from 'react-native'

const metrices = {
    HEIGHT: (number) => {
        number ? number * Dimension.get('screen').height : Dimension.get('screen').height 
    },
    WIDTH: (number) => {
        number ? number * Dimension.get('screen').width : Dimension.get('screen').width 
    }
}

export default metrices;