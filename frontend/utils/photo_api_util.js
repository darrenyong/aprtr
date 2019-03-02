// Index
export const fetchAllPhotos = () => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/photos`
    })
  )
}

// Create
export const createPhoto = (photo) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/photos`,
      data: { photo: photo }
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

// Update
export const updatePhoto = (photo) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/photos/${photo.id}`,
      data: { photo: photo }
    })
  )
}

// Delete
export const deletePost = (id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/photos/${id}`
    })
  )
}