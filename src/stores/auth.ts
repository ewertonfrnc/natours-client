import { defineStore } from "pinia";
import AuthService from "../services/auth.service.ts";
import { ILogin, IUpdatePassword } from "../interfaces/auth.interfaces.ts";
import { IUser } from "../interfaces/user.interfaces.ts";

const userStr = localStorage.getItem("user");
const user = JSON.parse(userStr) || null;

interface State {
  user: IUser | null;
}
export const useAuthStore = defineStore("auth", {
  state(): State {
    return {
      user: user || null,
    };
  },
  actions: {
    async login(formValues: ILogin) {
      const { user, token } = await AuthService.login(formValues);
      this.user = user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.reload();
    },
    async updatePassword(formValues: IUpdatePassword) {
      const { token } = await AuthService.updatePassword(formValues);
      localStorage.setItem("token", token);
    },
    logout() {
      this.user = null;
      localStorage.clear();
      window.location.reload();
    },
  },
});
