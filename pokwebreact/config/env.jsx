function env() {
    
    if (process.env.REACT_APP_ENV === 'development') {
      // 本地开发环境
      return {
        ENV: 'development',
        GETEWAY_BASE: 'https:..',
        APIROOT: 'https:..',
        APIVERSION: 'v1.0.0',
        SSO: {
          redirect_url: 'https://...',
          client_id: '',
          client_secret: '',
          authorization: ''
        }
      }
    }else if (process.env.REACT_APP_ENV === 'test') {
      // 线上测试环境
    }else{
      // 生产环境
    }
  }
  export default env()