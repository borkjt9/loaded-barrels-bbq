export default function formatDate(rawDate) {
  if (rawDate.length < 3) {
    return rawDate
  } else if (rawDate.length < 5) {
    return rawDate.substring(0,2) + '/' + rawDate.substring(2,)
  } else if (rawDate.length < 9){
    return rawDate.substring(0,2) + '/' + rawDate.substring(2,4) + '/' + rawDate.substring(4)
  }
}
