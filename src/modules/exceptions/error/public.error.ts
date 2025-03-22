import { IItemError } from '../interface/item-error.interface';


enum MimeTypeErrorKeys {
  PAGE_REQUIRED = "PAGE_FIELD_PAGINATION_IS_REQUIRED",
  MIN_VALUE_PAGE_REQUIRED = "MIN_VALUE_LIMIT_FIELD_PAGINATION_IS_REQUIRED",
  LIMIT_REQUIRED = "LIMIT_FIELD_PAGINATION_IS_REQUIRED",
  MIN_VALUE_LIMIT_REQUIRED = "MIN_VALUE_PAGE_FIELD_PAGINATION_IS_REQUIRED",
  PATTERN_SORT_CONTAIN_PATTERN =  "SORT_FILED_PAGINATION_SHOULD_BE_CONTAIN_PATTERN" ,
  PATTERN_FILTER_CONTAIN_PATTERN =  "FILTER_FILED_PAGINATION_SHOULD_BE_CONTAIN_PATTERN"


}

let counter=90000
const PublicError: Record<MimeTypeErrorKeys, IItemError> = Object.values(MimeTypeErrorKeys).reduce(
  (acc, key) => {
    acc[key] = { msg: key, code: ++counter ,
      toString() {
        return JSON.stringify({
          msg: key,
          code : counter
        })
      }};
    return acc;
  },
  {} as Record<MimeTypeErrorKeys, IItemError>
);

export { PublicError }

