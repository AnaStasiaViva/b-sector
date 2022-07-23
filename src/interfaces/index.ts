export interface IPost{
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface IQuery {
  limit: number,
  page: number,
}

export interface IPageLimit {
  min: number
  max: number
}

export type SortOrder = "asn" | "desc";