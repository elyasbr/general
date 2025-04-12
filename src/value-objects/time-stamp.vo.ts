
import { AppError, PublicError, TypeErrorCode } from '../modules';

export class VTimestamp {
  private readonly timestamp: number;

  constructor(timestamp?: number) {
    if (timestamp) {
      if (!this.isValidTimestamp(timestamp)) {
        throw new AppError(PublicError.TIME_STAMPS_PUBLIC_VALIDATE.toString() , TypeErrorCode.ForBIDDEN);
      }
      this.timestamp = timestamp;
    } else {
      this.timestamp = Date.now();
    }
  }

  // متد برای دریافت timestamp
  getTimestamp(): number {
    return this.timestamp;
  }

  getDate() : Date {
    return new Date(this.timestamp)
  }

  // بررسی معتبر بودن timestamp
  private isValidTimestamp(timestamp: number): boolean {
    const unixEpoch = new Date('1970-01-01T00:00:00Z').getTime();
    return !isNaN(timestamp) && timestamp >= unixEpoch;
  }

  // مقایسه دو timestamp
  equals(other: VTimestamp): boolean {
    return this.timestamp === other.getTimestamp();
  }

  // بررسی اینکه آیا timestamp قدیمی است (مثلاً بیشتر از یک سال پیش)
  isOlderThan(years: number): boolean {
    const oneYearInMillis = 365 * 24 * 60 * 60 * 1000;
    return Date.now() - this.timestamp > oneYearInMillis * years;
  }

  // بررسی اینکه آیا timestamp در یک بازه زمانی خاص قرار دارد
  isWithinRange(start: number, end: number): boolean {
    return this.timestamp >= start && this.timestamp <= end;
  }
}
