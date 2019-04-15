// Index
export const fetchAllUserAlbums = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/users/${id}/albums`
    })
  )
}

// Create
export const createAlbum = () => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/albums`
    })
  )
}

// Show
export const fetchAlbum = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/albums/${id}`
    })
  )
}

// Update
export const updateAlbum = (album) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/albums/${album.id}`
    })
  )
}

// Delete
export const deleteAlbum = (id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/albums/${id}`
    })
  )
}

