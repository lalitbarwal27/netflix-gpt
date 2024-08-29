export const validateBoth = (email, password) => {
  const emailValidate = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const passwordValidate =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!emailValidate) {
    return "Email is Not Valid";
  }

  if (!passwordValidate) {
    return "Password is Not Valid";
  }

  return null;
};
