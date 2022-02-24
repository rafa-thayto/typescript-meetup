export const fetchApi = (timer: number, text?: string): Promise<string> =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve(text ?? 'promise resolved'), timer)
  })
