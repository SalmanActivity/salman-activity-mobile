import moment from 'moment'

export default function (date) {
  if (!date) return null
  return moment(date).format('dddd, Do MMMM YYYY, HH:mm [WIB]')
}
