export interface LocalStorage {
  token?: string;
  userData?: {};
  formData?: {};
  currentTask?: {
    id: string,
    name: string
  },
  selectTask?: string;
}

export type LocalStorageKeys = keyof LocalStorage;


export function setStoredToken(token: string): Promise<void> {
  const vals: LocalStorage = {
    token
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve()
    })
  })
}


export async function getStoredToken(): Promise<string> {
  const keys: LocalStorageKeys[] = ['token']
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.token ?? '')
    })
  })
}

export function setFormData(formData: any): Promise<void> {
  const vals: LocalStorage = {
    formData
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve()
    })
  })
}


export async function getFormData(): Promise<any> {
  const keys: LocalStorageKeys[] = ['formData']
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.formData ?? {})
    })
  })
}

export function setCurrentTask(currentTask: any): Promise<void> {
  const vals: LocalStorage = {
    currentTask
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve()
    })
  })
}


export async function getCurrentTask(): Promise<any> {
  const keys: LocalStorageKeys[] = ['currentTask']
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.currentTask ?? {})
    })
  })
}

export function setSelectTask(selectTask: any): Promise<void> {
  const vals: LocalStorage = {
    selectTask
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve()
    })
  })
}


export async function getSelectTask(): Promise<any> {
  const keys: LocalStorageKeys[] = ['selectTask']
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.selectTask ?? {})
    })
  })
}