import randomstring  from 'randomstring';

export class SecureRandomKeyGenerator {
  // ایجاد رشته تصادفی با تایم‌استمپ
  public static generateWithTimestamp(length: number = 64): string {
    if (length < 16) {
      throw new Error('Length should be at least 16 characters to include timestamp.');
    }

    // دریافت تایم‌استمپ فعلی (در میلی‌ثانیه)
    const timestamp = Date.now().toString(36); // تبدیل تایم‌استمپ به سیستم عددی 36 (حروف و اعداد)

    // تعداد کاراکترهایی که باید از رشته تصادفی تولید شوند
    const remainingLength = length - timestamp.length;

    // تولید رشته تصادفی با استفاده از randomstring
    const randomString = randomstring.generate({
      length: remainingLength,
      charset: 'alphabetic+numeric+symbols', // شامل حروف، اعداد و علائم خاص
    });

    // ترکیب تایم‌استمپ با رشته تصادفی
    const combinedString = timestamp + randomString;

    // شفل کردن رشته برای تصادفی‌تر بودن
    return this.shuffleString(combinedString);
  }

  // شفل کردن رشته
  private static shuffleString(str: string): string {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
    return arr.join('');
  }
}


