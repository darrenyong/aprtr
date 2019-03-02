// Create User
export const createUser = (user) =>  {
  return (
    $.ajax({
      method: "POST",
      url: `/api/users`,
      data: { user: user }
    })
  )
};

// Create Session
export const createSession = (user) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/session`,
      data: { user: user }
    })
  )
};

// Destroy Session
export const deleteSession = () => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/session`
    })
  )
}
