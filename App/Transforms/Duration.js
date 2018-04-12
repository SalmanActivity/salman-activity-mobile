import moment from 'moment'

export default function (timeX, timeY) {
  const momentX = moment(timeX)
  const momentY = moment(timeY)

  return moment.duration(momentY.diff(momentX)).as('hours')
}
