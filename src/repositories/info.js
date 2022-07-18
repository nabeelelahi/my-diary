import _httpRequest from './repository'
import message from '~/helpers/message'
import storage from '~/helpers/storage'

async function _create(payload, slug, actions, setIsLoading, navigation, params) {

    setIsLoading(true)

    const url = 'info/' + slug;

    const { _id } = await storage.get('user')

    payload.userId = _id;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };

    const response = await _httpRequest(url, options)

    console.log(response)

    if (response?.success) {
        message.show()
        actions.resetForm()
        setIsLoading(false)
        navigation.navigate('ViewScreen', params)
    }
    else {
        message.show('error', 'Network error')
        setIsLoading(false)
    }

}

async function _find(slug) {

    const { _id } = await storage.get('user')

    const url = 'info/' + slug + '/' + _id;

    const response = await _httpRequest(url)

    return response;

}

export {
    _create,
    _find
}
