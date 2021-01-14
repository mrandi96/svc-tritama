// a library to wrap and simplify api calls
import { Platform } from 'react-native'
import apisauce from 'apisauce'
import { EndPoint } from '../Constants/ApiEndPointConstant'
import qs from 'querystringify'
// our "constructor"
const create = (baseURL = EndPoint.API.API_URL) => {

  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  // const getRoot = () => api.get('')
  // const getCorrectiveList = (query) => api.get('/v1/corrective', query)
  const getRootCause = () => api.get(`/v1/root-cause`)
  const getNewRootCause = () => api.get(`/v1/new-root-cause`)
  const getArea = () => api.get(`/v1/area/zone`)

  const getCorrectiveList = (employeeId, query) => api.get('/v1/corrective/mobile',
    query,
    {
      headers: { 'x-employee-id': 1 }
    }
  )
  const getCorrectiveDetail = (ttCorrective) => api.get(`/v1/corrective/${ttCorrective}`)
  const patchCorrectiveOpen = (ttCorrective) => api.patch(`/v1/corrective/${ttCorrective}/open`)
  const auth = (email, password) => api.post('/v1/auth/serpo/login',
    {
      email: email,
      password: password
    },
    { headers: { 'Content-Type': 'application/json' } }
  )

  const refreshTokenKeycloak = (param) =>
    api.post('protocol/openid-connect/token', qs.stringify({ param }),
      {
        headers: { 'Content-Type': 'x-www-form-urlencoded' }
      }
    )

  const createFormDataUpload = (photo, body) => {
    const formdata = new FormData();
    formdata.append('file', {
      name: 'testingaja',
      type: 'image/jpeg',
      uri: photo.uri
    });
    Object.keys(body).forEach(key => {
      formdata.append(key, body[key]);
    });
    console.log(formdata)
    return formdata;
  };

  const uploadImage = (dataupload) => api.post('/v1/upload',
    {
      dataupload: createFormDataUpload(dataupload, {})
    }
    ,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
  )



  // const getUser = (username) => api.get('search/users', {q: username})

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRootCause,
    getNewRootCause,
    getArea,
    getCorrectiveList,
    getCorrectiveDetail,
    auth,
    refreshTokenKeycloak,
    patchCorrectiveOpen,
    uploadImage
    // getRate,
    // getUser
  }
}

// let's return back our create method as the default.
export default {
  create
}
