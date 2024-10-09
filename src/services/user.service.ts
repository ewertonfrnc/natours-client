import api from "./api.service.ts";
import { ILogin } from "../interfaces/auth.interfaces.ts";
import { IUser } from "../interfaces/user.interfaces.ts";

class UserService {
  async updateUser(userId: string, updatedData: IUser): Promise<ILogin> {
    const { data } = await api().patch(`/users/${userId}`, updatedData);
    console.log("data", data);
    return data;
  }
}

export default new UserService();
