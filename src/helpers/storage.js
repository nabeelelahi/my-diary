import AsyncStorage from '@react-native-async-storage/async-storage'

async function get(key) {

    const currentUserString = await AsyncStorage.getItem(key)

    const currentUser = JSON.parse(currentUserString)

    return currentUser || null

}

async function set(key, value) {


    await AsyncStorage.setItem(key, JSON.stringify(value))

    const currentUserString = await AsyncStorage.getItem(key)

    const currentUser = JSON.parse(currentUserString)

    return currentUser || null

}

async function clear() {

    await AsyncStorage.clear()

}

const storage = { get, set, clear };

export default storage;