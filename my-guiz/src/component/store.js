import {combineReducers,configureStore} from '@reduxjs/toolkit'
import resultreducer from '../redux/resultreducer'
import  questionreducer from '../redux/questionreducer'
const rootreducer=combineReducers({
question:questionreducer,
result:resultreducer


})
export default configureStore({reducer:rootreducer})