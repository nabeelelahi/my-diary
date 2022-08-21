import base_url from '~/constants/api'

const _httpRequest = async (url, options) => {
  try {
    let response 
    
    if(!options) response = await fetch(`${base_url}/${url}`);

    if(options) response = await fetch(`${base_url}/${url}`, options);

    response = await response?.json();

    return response;

  } 
  catch (error) {
    console.log('catch')
    console.log(error)
  }
};

export default _httpRequest