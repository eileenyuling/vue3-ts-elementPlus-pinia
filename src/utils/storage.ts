import { isArray, isObject } from 'element-plus/es/utils/index'

interface IStorageLocal extends Partial<Storage> {
  setItem: (key: string, value: any) => void
  getItem: <T>(key: string) => T | null
}
export const storageLocal: IStorageLocal = {
  getItem: (key: string) => {
    const res = localStorage.getItem(key)
    if (res) {
      return JSON.parse(res)
    }
    return null
  },
  setItem: (key: string, value: any) => {
    if (isObject(value) || isArray(value)) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
  }
}
