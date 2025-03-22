import { Base } from '../modules';


export  class BaseEntity<T > {
   protected properties: T;
   _id : string
   id: string
   createdAt :Date
   updatedAt:Date

  constructor(properties :T) {

    this.properties = properties;
  }
  setUpdatedAt(date : Date ) {
     this.updatedAt = date
  }
  getUpdatedAt(): Date {
    return <Date>this.updatedAt
  }

  setCreatedAt(date : Date ) {
    this.createdAt = date
  }
  getCreatedAt(): Date {
    return <Date>this.createdAt
  }

  getIdToString() :string {
    return <string>this._id.toString()
  }
  setIdObject(_id : string){
    this._id=_id
  }

  getId() :string {
    return <string>this.id
  }
  setId(id : string) {
    this.id =id
  }


  getProperty<K extends keyof T>(key: K): T[K] {
    return this.properties[key];
  }

  setProperty<K extends keyof T>(key: K, value: T[K]): void {
    this.properties[key] = value;
  }

}