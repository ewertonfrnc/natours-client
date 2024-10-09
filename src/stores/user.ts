import { defineStore } from "pinia";

import UserService from "../services/user.service.ts";
import { IUser } from "../interfaces/user.interfaces.ts";

interface State {
  user: IUser | null;
}

export const useUserStore = defineStore("user", {
  state(): State {
    return {};
  },
  actions: {
    async updateUser(userId: string, updatedData: IUser) {
      return await UserService.updateUser(userId, updatedData);
    },
  },
});
