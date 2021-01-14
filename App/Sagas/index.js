import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import { EndPoint } from '../Constants/ApiEndPointConstant'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { MasterTypes } from '../Redux/MasterRedux'
import { UploadImageTypes } from '../Redux/UploadImageRedux'
import { CorrectiveTypes } from '../Redux/CorrectiveRedux'
import { CorrectiveDetailTypes } from '../Redux/CorrectiveDetailRedux'
import { HomeTypes } from '../Redux/HomeRedux'
import { AccountTypes } from '../Redux/AccountRedux'
import { LoginTypes } from '../Redux/LoginRedux'
/* ------------- Sagas ------------- */

import { startup, checkToken, saveToAsyncStorage } from './StartupSagas'
import { getRootCause, getNewRootCause, getArea } from './MasterSagas'
import { postImage } from './UploadImageSagas'
import { getCorrectiveList } from './CorrectiveSagas'
import { getCorrectiveDetail, patchCorrectiveOpen } from './CorrectiveDetailSagas'
import { getCorrectiveToday } from './HomeSagas'
import { login } from './LoginSagas'
import { authenticate, refreshToken } from './AccountSagas'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const apiKeyCloak = API.create(EndPoint.API.BOOST_KEYCLOAK_URL)
/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.LOCAL_SAVE_REQUEST, saveToAsyncStorage),
    takeLatest(MasterTypes.GET_ROOT_CAUSE_REQUEST, getRootCause, api),
    takeLatest(MasterTypes.GET_NEW_ROOT_CAUSE_REQUEST, getNewRootCause, api),
    takeLatest(MasterTypes.GET_AREA_REQUEST, getArea, api),
    takeLatest(UploadImageTypes.POST_IMAGE_REQUEST, postImage, api),
    takeLatest(CorrectiveTypes.CORRECTIVE_LIST_REQUEST, getCorrectiveList, api),
    takeLatest(CorrectiveDetailTypes.CORRECTIVE_DETAIL_REQUEST, getCorrectiveDetail, api),
    takeLatest(CorrectiveDetailTypes.CORRECTIVE_OPEN_PATCH_REQUEST, patchCorrectiveOpen, api),
    takeLatest(HomeTypes.CORRECTIVE_REQUEST, getCorrectiveToday, api),
    takeLatest(AccountTypes.ACCOUNT_REQUEST, authenticate, api),
    takeLatest(AccountTypes.ACCOUNT_REFRESH_TOKEN, refreshToken, apiKeyCloak),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(StartupTypes.TOKEN_CHECK_REQUEST, checkToken),
    takeLatest(StartupTypes.STARTUP, startup)
  ])
}
