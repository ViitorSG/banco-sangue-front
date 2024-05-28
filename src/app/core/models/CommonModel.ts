export interface Pageable {
  page: number
  size: number
  sort?: string
  direction?: string
}

export interface CommonResponse {
  total_elements: number
  size: number
  total_pages: number
  empty: boolean
  first: boolean
  last: boolean
  number: number
  aggregations: any
}
