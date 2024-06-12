export type Project = {
  id: number
  name: string
  country: string
  added_dstamp: string
}

export type Country = {
  name: string,
  code: string,
  population: number,
  emissionsTons: number,
}
