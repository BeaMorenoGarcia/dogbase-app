export const validateEmail = (email: string) => {
  // Expresión regular para validar un correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.length === 0 || emailRegex.test(email);
};
