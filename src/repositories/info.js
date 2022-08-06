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

async function _update(_id, payload, slug, actions, setIsLoading) {

    setIsLoading(true)

    const url = 'info/' + slug + '/' + _id;

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };

    const response = await _httpRequest(url, options)

    if (response?.success) {
        message.show()
        actions.resetForm()
        setIsLoading(false)
    }
    else {
        message.show('error', 'Network error')
        setIsLoading(false)
    }

}

async function _delete(_id, slug, setIsLoading) {

    setIsLoading(true)

    const url = 'info/' + slug + '/' + _id;

    const options = {
        method: 'DELETE',
    };

    const response = await _httpRequest(url, options)

    console.log(response)

    if (response?.success) {
        message.show()
        setIsLoading(false)
    }
    else {
        message.show('error', 'Network error')
        setIsLoading(false)
    }

}

export {
    _create,
    _find,
    _update,
    _delete
}
