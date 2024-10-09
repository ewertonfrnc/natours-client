export interface ILogin {
  email: string;
  password: string;
}

export interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}
