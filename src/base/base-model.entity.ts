import { Base } from '../modules';
import {v7 as uuidv7} from "uuid"
import { IMetaDataEvent } from '../interface';

export  class BaseModelEntity<T > {
   protected properties: T;
   private _id: string
   private _createdAt :Date
   private _updatedAt:Date
   private _deletedAt:Date

  constructor(properties :T) {
    this.properties = properties;
  }

  getProperty<K extends keyof T>(key: K): T[K] {
    return this.properties[key];
  }

  setProperty<K extends keyof T>(key: K, value: T[K]): void {
    this.properties[key] = value;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  get deletedAt(): Date {
    return this._deletedAt;
  }

  set deletedAt(value: Date) {
    this._deletedAt = value;
  }
}