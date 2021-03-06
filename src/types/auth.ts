/**
 * Auth type modules
 */
export interface IAuthUser {
  email: string;
  emailVerified?: boolean;
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
}

export type TAuthUserPayload = Partial<IAuthUser>
