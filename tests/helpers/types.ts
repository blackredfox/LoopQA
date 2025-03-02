export enum UserRole {
  Admin = "Admin",
}

export interface AdminUser {
  email: string;
  password: string;
  role: UserRole;
}
