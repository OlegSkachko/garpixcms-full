import { runtimeConfig } from '../config'
import BaseApi from '@garpix/base-api'
import { Page, PageModelType } from './interfaces/Page'

const API_URL = runtimeConfig.API_URL

const defaultSerializer = (data: any): any => data

const PAGES: { [key in PageModelType]: (data: any) => any } = {
  Page: defaultSerializer,
  MainPage: defaultSerializer,
  500: defaultSerializer,
  404: defaultSerializer
}

class Api extends BaseApi {
  AUTH_TOKEN_KEY: string

  constructor (MAIN_URL) {
    super(MAIN_URL)
    this.AUTH_TOKEN_KEY = 'auth_token_key'
  }

  getLanguage = (): string => 'ru'

  axiosOverride = (axios): any => {
    axios.defaults.headers.common['Accept-Language'] = this.getLanguage()
    return axios
  }

  getPage = async (pathname: string, queryParams = {}, axiosParams = {}): Promise<{ pageType: string, page: any }> => {
    try {
      const res: { data: Page } = await this.get(
          `/page/${pathname}`,
          queryParams,
          axiosParams
      )
      const page = res.data
      const serializer = PAGES[page.page_model]
      return {
        pageType: page.page_model,
        page: serializer(page)
      }
    } catch (error: any) {
      if (error?.response?.status === 404) {
        const serializer = PAGES['404']
        return {
          pageType: '404',
          page: serializer({})
        }
      }
      const serializer = PAGES['500']
      return {
        pageType: '500',
        page: serializer({})
      }
    }
  }

  convertTokenAmazon = async ({token}) => {
    const res = await this.post(
        `/social-auth/convert-token/`,
        {
            grant_type: 'convert_token',
            client_id: process.env.REACT_APP_CLIENT_ID_AMAZON,
            client_secret: process.env.REACT_APP_CLIENT_SECRET_AMAZON,
            backend: 'amazon-oauth2',
            token: token,
        }
    );
    console.log('res', res)
    return {
        'status': true
    }
}

  convertTokenVk = async ({vkToken}) => {
    const res = await this.post(
        `/social-auth/convert-token/`,
        {
            grant_type: 'convert_token',
            client_id: process.env.REACT_APP_CLIENT_ID_VK,
            client_secret: process.env.REACT_APP_CLIENT_SECRET_VK,
            backend: 'vk-oauth2',
            token: vkToken,
        }
    );
    console.log('res', res)
    return {
        'status': true
    }
}

  convertTokenFacebook = async ({token}) => {
      const res = await this.post(
          `/social-auth/convert-token/`,
          {
              grant_type: 'convert_token',
              client_id:  process.env.REACT_APP_CLIENT_ID_FACEBOOK,
              client_secret: process.env.REACT_APP_CLIENT_SECRET_FACEBOOK,
              backend: 'facebook-oauth2',
              token: token,
          }
      );
      console.log('res', res)
      return {
          'status': true
      }
  }

  convertTokenGoogle = async ({token}) => {
      const res = await this.post(
          `/social-auth/convert-token/`,
          {
              grant_type: 'convert_token',
              client_id: process.env.REACT_APP_CLIENT_ID_GOOGLE,
              client_secret: process.env.REACT_APP_CLIENT_SECRET_GOOGLE,
              backend: 'google-oauth2',
              token: token,
          }
      );
      console.log('res', res)
      return {
          'status': true
      }
  }

  convertTokenApple = async ({token}) => {
      const res = await this.post(
          `/social-auth/convert-token/`,
          {
              grant_type: 'convert_token',
              client_id: process.env.REACT_APP_CLIENT_ID_APPLE,
              client_secret: process.env.REACT_APP_CLIENT_SECRET_APPLE,
              backend: 'apple-id',
              token: token,
          }
      );
      console.log('res', res)
      return {
          'status': true
      }
  }

  convertTokenYandex = async ({token}) => {
    const res = await this.post(
        `/social-auth/convert-token/`,
        {
            grant_type: 'convert_token',
            client_id: process.env.REACT_APP_CLIENT_ID_YANDEX,
            client_secret: process.env.REACT_APP_CLIENT_SECRET_YANDEX,
            backend: 'yandex-id',
            token: token,
        }
    );
    console.log('res', res)
    return {
        'status': true
    }
  }

  convertTokenOdnoklassniki = async ({token}) => {
    const res = await this.post(
        `/social-auth/convert-token/`,
        {
            grant_type: 'convert_token',
            client_id: process.env.REACT_APP_CLIENT_ID_OK,
            client_secret: process.env.REACT_APP_CLIENT_SECRET_OK,
            backend: 'ok-id',
            token: token,
        }
    );
    console.log('res', res)
    return {
        'status': true
    }
  }

  convertTokenGitHub = async ({token}) => {
    const res = await this.post(
        `/social-auth/convert-token/`,
        {
            grant_type: 'convert_token',
            client_id: process.env.REACT_APP_CLIENT_ID_GITHUB,
            client_secret: process.env.REACT_APP_CLIENT_SECRET_GITHUB,
            backend: 'github-oauth2',
            token: token,
        }
    );
    console.log('res', res)
    return {
        'status': true
    }
  }

  convertTokenInstagram = async ({token}) => {
    const res = await this.post(
        `/social-auth/convert-token/`,
        {
            grant_type: 'convert_token',
            client_id: process.env.REACT_APP_CLIENT_ID_,
            client_secret: process.env.REACT_APP_CLIENT_SECRET_GITHUB,
            backend: 'github-oauth2',
            token: token,
        }
    );
    console.log('res', res)
    return {
        'status': true
    }
  }
}

const api = new Api(`${String(API_URL)}`)

export {
  api
}
