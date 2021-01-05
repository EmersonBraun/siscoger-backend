export const jwtConfig = () => {
  return {
    secret: process.env.SECRETKEY,
    signOptions: {
      expiresIn: process.env.EXPIRESIN,
    },
  };
};

export const passportConfig = () => {
  return {
    defaultStrategy: 'jwt',
    property: 'user',
    session: false,
  };
};
