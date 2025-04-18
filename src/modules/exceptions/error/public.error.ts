import { IItemError } from '../interface/item-error.interface';
import {
  EEnumRequired,
  ENumberRequired,
  EPatternUUIDWrong,
  EStringEmpty,

  EFieldValidate ,
} from '../../../helper';

const section = "PUBLIC";

const PublicErrorKeys = Object.freeze({
  PAGE_REQUIRED : ENumberRequired("PAGE" ,"PAGINATION") ,
  MIN_VALUE_PAGE_REQUIRED : "MIN_VALUE_LIMIT_FIELD_PAGINATION_IS_REQUIRED",
  LIMIT_REQUIRED : ENumberRequired("LIMIT" ,"PAGINATION"),
  MIN_VALUE_LIMIT_REQUIRED : "MIN_VALUE_PAGE_FIELD_PAGINATION_IS_REQUIRED",
  PATTERN_SORT_CONTAIN_PATTERN :  "SORT_FILED_PAGINATION_SHOULD_BE_CONTAIN_PATTERN" ,
  PATTERN_FILTER_CONTAIN_PATTERN :  "FILTER_FILED_PAGINATION_SHOULD_BE_CONTAIN_PATTERN" ,
  PATTERN_UUID_WRONG : "PATTER_UUID_IS_WRONG" ,
  TIME_STAMPS_PUBLIC_VALIDATE : EFieldValidate("TIME_STAMPS" , section),
  PATTERN_USER_ID_WRONG: EPatternUUIDWrong("USER_ID" , section) ,
  STATUS_ACTION_REQUIRED : EEnumRequired("STATUS" , section) ,
  STATUS_ACTION_EMPTY : EStringEmpty("STATUS" , section) ,
  STATUS_ACTION_VALIDATE : EFieldValidate("STATUS" , section) ,

} as const);

// ایجاد نوع برای کلیدهای شیء MimeTypeErrorKeys
type ErrorKeysType = keyof typeof PublicErrorKeys;

// مقداردهی ارورهای مربوط به هر کلید
let counter = 1000;
const PublicError: Record<ErrorKeysType, IItemError> = Object.keys(PublicErrorKeys).reduce(
  (acc, key) => {
    const currentCode = ++counter;

    // @ts-ignore - برای استفاده از کلید به عنوان نوع از typeof
    acc[key as MimeTypeErrorKeysType] = {
      msg: PublicErrorKeys[key as ErrorKeysType],
      code: currentCode,
      toString() {
        return JSON.stringify({
          msg: PublicErrorKeys[key as ErrorKeysType],
          code: currentCode
        });
      }
    };

    return acc;
  },
  {} as Record<ErrorKeysType, IItemError>
);

export { PublicError };
