// Simple React Native specific changes

const defaultConfig = {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  baseURL: 'http://google.com/' // belum ada
}

const debugConfig = {
  // baseURL: 'http://localhost:8080/api/v1/'
  baseURL: 'http://salman-activity.herokuapp.com/api/v1/'
}

export default __DEV__ ? {...defaultConfig, ...debugConfig} : defaultConfig
