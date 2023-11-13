export const formatDateToHumanese = (dateString) => {
  let humanDateText = ''
  const tmpUtcDate = new Date(dateString)
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const tmpMonth = monthNames[tmpUtcDate.getMonth()].toUpperCase()
  const tmpDate = tmpUtcDate.getDate()
  const tmpYear = tmpUtcDate.getFullYear()
  humanDateText = `${tmpDate} ${tmpMonth} ${tmpYear} ⌚ ${tmpUtcDate.toLocaleTimeString()}`
  return humanDateText
}
