export const SimpleMiddleware = (req, res, next) => {
  console.log('Simple MiddleWare');
  next();
};
