export function isEmpty(response: any) {
  return response === null || response === undefined || response.trim() === ''
}

export function requestSuccess(response: any) {
  return response && response.statusCode === 200
}
