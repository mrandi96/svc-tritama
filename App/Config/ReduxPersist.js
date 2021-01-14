import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'
import AsyncStorage from '@react-native-community/async-storage'
import createSensitiveStorage from "redux-persist-sensitive-storage";


// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
console.log('createSensitiveStorage', createSensitiveStorage().getAllKeys())
const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: createSensitiveStorage({
      keychainService: "primary",
      sharedPreferencesName: "mySharedPrefs"
    }),
    // storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: [],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: ['account', 'startup'],
    //whitelist: ['account'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
