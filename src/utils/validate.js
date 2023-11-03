export const isValidEmail = (email) =>
  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)

export const isValidPassword = (password) =>
  //   /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=()])(?=\S+$).{8,20}$/.test(
  //     password
  //   )
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  )
