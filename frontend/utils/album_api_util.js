export const fetchAllUserAlbums = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/users/${id}/albums`
    })
  )
}

export const createAlbum = () => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/albums`
    })
  )
}

export const fetchAlbum = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/albums/${id}`
    })
  )
}

export const updateAlbum = (album) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/albums/${album.id}`
    })
  )
}

export const deleteAlbum = (id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/albums/${id}`
    })
  )
}

