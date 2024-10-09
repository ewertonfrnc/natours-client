import api from "./api.service.ts";
import { ILogin, IUpdatePassword } from "../interfaces/auth.interfaces.ts";

class AuthService {
  async login(formValues: ILogin) {
    const { data } = await api().post("/auth/login", formValues);
    return data;
  }

  async updatePassword(formValues: IUpdatePassword) {
    const { data } = await api().patch("/auth/update-password", formValues);
    return data;
  }
}

export default new AuthService();
