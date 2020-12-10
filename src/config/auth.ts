export const jwtConfig = () => {
  return {
    secret: '12345',//process.env.SECRETKEY, 
    signOptions: {
      expiresIn: '360s',//process.env.EXPIRESIN,
    },
  }
}

export const passportConfig = () => {
  return {
    defaultStrategy: 'jwt',
    property: 'user',
    session: false,
  }
}