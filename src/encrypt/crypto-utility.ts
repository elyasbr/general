import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class UTCrypto {
  private readonly algorithm = 'aes-256-cbc';
  private _secretKey: string;
  private _salt: string;
  private _key: Buffer;
  private _iv: Buffer; // بردار مقدار اولیه (IV)

  constructor() {}

  generateAesKey() {
    if (!this._secretKey || !this._salt) {
      throw new Error('secretKey و salt باید قبل از تولید کلید تنظیم شوند');
    }
    this._key = crypto.scryptSync(this.secretKey, this.salt, 32);
  }

  generateAesIv() {
    this._iv = crypto.randomBytes(16);
  }

  get secretKey(): string {
    return this._secretKey;
  }

  set secretKey(value: string) {
    this._secretKey = value;
  }

  get salt(): string {
    return this._salt;
  }

  set salt(value: string) {
    this._salt = value;
  }

  get iv(): string {
    return this._iv ? this._iv.toString('hex') : null;
  }

  set iv(value: string) {
    this._iv = Buffer.from(value, 'hex');
  }

  get key(): string {
    return this._key ? this._key.toString('hex') : null;
  }

  set key(value: string) {
    this._key = Buffer.from(value, 'hex');
  }

  encrypt(text: string): { iv: string; encryptedData: string } {
    if (!this._key) this.generateAesKey();
    if (!this._iv) this.generateAesIv();

    const cipher = crypto.createCipheriv(this.algorithm, this._key, this._iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return {
      iv: this.iv,
      encryptedData: encrypted,
    };
  }

  decrypt(ivHex: string, encryptedData: string): string {
    if (!this._key) {
      throw new Error('کلید AES تنظیم نشده است. ابتدا generateAesKey را صدا بزنید.');
    }

    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, this._key, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
