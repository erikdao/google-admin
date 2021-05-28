/**
 * Common props
 */
export interface IErrorProps {
  target: string;
  code?: string;
  message?: string | undefined;
}

export function getErrorsByField(errors: IErrorProps[], key: string): IErrorProps[] {
  return errors.filter((e: IErrorProps) => e.target === key);
}

export function getErrorByField(errors: IErrorProps[], key: string): IErrorProps {
  return getErrorsByField(errors, key)[0];
}

export function hasError(errors: IErrorProps[] | undefined, key: string): boolean {
  if (errors === undefined) {
    return false;
  }
  const found: IErrorProps[] = getErrorsByField(errors, key);
  return found && found.length > 0;
}

export interface IDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Authentication types
 */
export type TLoginCred = {
  email: string;
  password: string;
};

/**
 * User types
 */
export type TUser = {
  email: string | null;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
};
