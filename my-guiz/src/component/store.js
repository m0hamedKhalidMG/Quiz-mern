import {combineReducers,configureStore} from '@reduxjs/toolkit'
import resultreducer from '../redux/resultreducer'
import  questionreducer from '../redux/questionreducer'
import  coverR from '../redux/coverR'

const rootreducer=combineReducers({
question:questionreducer,
result:resultreducer,
cover:coverR

})
export default configureStore({reducer:rootreducer})