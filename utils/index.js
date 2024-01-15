export const checkImageURL = (url) => {
  if (!url) return false
  else {
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i')
    return pattern.test(url)
  }
}
//Leellenörzi hogy adott objektumnak api hivásra, van e kép mellé
