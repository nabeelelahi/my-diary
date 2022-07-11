import storage from './storage'

function logout(navigation){
    storage.clear()
    navigation.navigate('Splash')
}

export default logout;