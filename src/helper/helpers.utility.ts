export const getKey = (obj : any,  val : any, fallback = null) =>
  Object.entries(obj).find(([_, v]) => v === val)?.[0] || fallback;