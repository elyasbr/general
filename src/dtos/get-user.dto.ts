export class GetUserDto {
  private _uid : string
  private _roleId? : string
  constructor(uid: string,  roleId? : string) {
    this._uid = uid;
    this._roleId = roleId;
  }
  get uid(): string {
    return this._uid;
  }

  set uid(value: string) {
    this._uid = value;
  }

  get roleId(): string  | undefined{
    return this._roleId;
  }

  set roleId(value: string) {
    this._roleId = value;
  }
}