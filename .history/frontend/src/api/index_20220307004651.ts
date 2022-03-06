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

  convertTokenVk = async ({vkToken}) => {
    const res = await this.post(
        `/social-auth/convert-token/`,
        {
            grant_type: 'convert_token',
            client_id: 'XZuxoKGZ2VdcKAGhGtYAlCJhF0iFxWVGSG1ISEXs',
            client_secret: 'hv6TrF9TEO8zPrVaBMaeoEmefcvujRP0AxudHUKgrvI6BFacrBZQf8VMatGyDsKThCOSMg7KIzEBF6oeUyuFwiuSjQKGlybYEniw30rPRXzfySiaW2tXBf8sritpEXTu',
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
              client_id: 'iAtAnJYaLYVCr5jJdTN1f0m4YDTBPGvRqx4C5UXC',
              client_secret: 'eKaXLML5GbG0zipti1VZnUMdStHjYsTdTV1wMGqqQa8bLqZNeiWJGuF0sHjdBsUv3n6Fs9Dk9np67JDQtJiOfyrezGE73mqc2h69NpjurVQUhryUWG0eWl6kIWYfPnI4',
              backend: 'facebook',
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
              client_id: 'iAtAnJYaLYVCr5jJdTN1f0m4YDTBPGvRqx4C5UXC',
              client_secret: 'eKaXLML5GbG0zipti1VZnUMdStHjYsTdTV1wMGqqQa8bLqZNeiWJGuF0sHjdBsUv3n6Fs9Dk9np67JDQtJiOfyrezGE73mqc2h69NpjurVQUhryUWG0eWl6kIWYfPnI4',
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
              client_id: 'CSDuH8UgHDTFue2GbjZbYJmaRm7VY70QVEFj6A4T',
              client_secret: 'ic0GJAhwLUF12hvrQugXueplPvvtkkXQS6Yno6fYKiWl7wPE5VNmvvxAWvnBPMIirjtuMds9RQ8oT0U7wSpAqmLrI9fnmX1Ft1NYNW9oybo5ECbAwOZUTEV3b1NZlrRb',
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
            client_id: 'CSDuH8UgHDTFue2GbjZbYJmaRm7VY70QVEFj6A4T',
            client_secret: 'ic0GJAhwLUF12hvrQugXueplPvvtkkXQS6Yno6fYKiWl7wPE5VNmvvxAWvnBPMIirjtuMds9RQ8oT0U7wSpAqmLrI9fnmX1Ft1NYNW9oybo5ECbAwOZUTEV3b1NZlrRb',
            backend: 'yandex-id',
            token: token,
        }
    );
    console.log('res', res)
    return {
        'status': true
    }
  }

  convertTokenOdnoklassniki
}

const api = new Api(`${String(API_URL)}`)

export {
  api
}
