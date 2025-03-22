import { Base } from '../modules/mongoose/base-schema';


export  class BaseEntity<T > extends Base{
   protected properties: T;
   _id : string

  constructor(properties :T) {
    super();
    this.properties = properties;
  }

  getUpdateAt(): Date {
    return <Date>this.updateAt
  }



  getIdToString() :string {
    return <string>this._id.toString()
  }
  getID() :string {
    return <string>this.id
  }
  setID(ID : string) {
    this.id =ID
  }

  setIdObject(_id : string){
    this._id=_id
  }
  getProperty<K extends keyof T>(key: K): T[K] {
    return this.properties[key];
  }

  setProperty<K extends keyof T>(key: K, value: T[K]): void {
    this.properties[key] = value;
  }

}