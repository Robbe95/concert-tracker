export const base64Util = {
  base64ToFile(base64: string) {
    // make a file object from base64
    const arr = base64.split(',')
    const mime = arr[0].match(/:(.*?);/)![1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)

    while (n > 0) {
      n--
      u8arr[n] = bstr.charCodeAt(n)
    }

    return new File([
      u8arr,
    ], 'file', { type: mime })
  },
  fileToBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = function () {
        resolve(reader.result?.toString() ?? '')
      }
      reader.onerror = function (error) {
        reject(error)
      }
    })
  },
}
