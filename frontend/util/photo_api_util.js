
export const fetchPhotos = () => {
  return $.ajax({
    method: 'GET' ,
    url: 'api/photos'
  })
}
export const fetchPhoto = (id) => {
  return $.ajax({
    method: 'GET' ,
    url: `api/photos/${id}`
  })
}

export const addPhoto= (photo) => {
  return $.ajax({
    method: 'POST' ,
    url: 'api/photos',
    photo
  })
}
