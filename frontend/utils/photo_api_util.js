// Index
export const fetchAllPhotos = () => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/photos`
    })
  )
}

// Show
export const fetchPhoto = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/photos/${id}`
    })
  )
}

// Create
export const createPhoto = (photo) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/photos`,
      data: { photo }
    })
  )
}

// Update
export const updatePhoto = (photo) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/photos/${photo.id}`,
      data: { photo }
    })
  )
}

// Delete
export const deletePhoto = (id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/photos/${id}`
    })
  )
}