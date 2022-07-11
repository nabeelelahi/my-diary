import _httpRequest from './repository'
import message from '~/helpers/message'
import storage from '~/helpers/storage'

async function _signUp(values, navigation, setIsLoading) {

    setIsLoading(true)

    const url = 'auth/signup'

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    };


    const response = await _httpRequest(url, options)

    console.log(response)

    if (response?.success) {
        setIsLoading(false)
        message.show()
        navigation.navigate('Login')
    }
    else {
        message.show('error', response.message)
    }

}

async function _login(values, navigation, setIsLoading) {

    setIsLoading(true)

    const url = 'auth/login'

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    };


    const response = await _httpRequest(url, options)

    console.log(response)

    if (response?.success) {
        await storage.set('user', response.data)
        setIsLoading(false)
        message.show('success', response.message)
        navigation.navigate('Home')
    }
    else {
        setIsLoading(false)
        message.show('error', response.message)
    }

}

export {
    _signUp,
    _login
}
