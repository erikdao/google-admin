import { TUser } from 'src/types';

/**
 * Simple logic to verify if a user is authenticated
 * @param user TUser - Maybe a user
 * @returns whether the user is authenticated
 */
export function isAuthenticated(user: TUser): boolean {
  return (user !== null && user.email !== null);
}
