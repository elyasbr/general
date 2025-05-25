export class GetUserDto {
   _uid : string
   _roleId? : string
  constructor(uid: string,  roleId? : string) {
    this._uid = uid;
    this._roleId = roleId;
  }
}