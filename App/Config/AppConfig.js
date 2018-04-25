// Simple React Native specific changes
import moment from 'moment'
import 'moment/locale/id'

moment.locale('id')
const defaultConfig = {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  baseURL: 'http://pplk1h.if.itb.ac.id/api/v1/'
}

const debugConfig = {
  // baseURL: 'http://localhost:8080/api/v1/'
}

export default __DEV__ ? {...defaultConfig, ...debugConfig} : defaultConfig
