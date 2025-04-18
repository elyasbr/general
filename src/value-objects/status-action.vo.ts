import { AppError, PublicError, TypeErrorCode } from '../modules';
import { EStatusAction } from '../enums';

export class VStatusAction {
  private readonly _statusAction: EStatusAction;

  constructor(status: string) {
    this.validate(status);
    this._statusAction = EStatusAction[status];
  }

  private validate(statusAction: string): void {
    if (!(statusAction in EStatusAction)) {
      throw new AppError(
        PublicError.STATUS_ACTION_VALIDATE.toString(),
        TypeErrorCode.ForBIDDEN,
      );
    }
  }

  equals(other: VStatusAction): boolean {
    return this._statusAction === other._statusAction;
  }

  getValue():EStatusAction {
    return this._statusAction
  }
}
