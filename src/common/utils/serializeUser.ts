import { CreateUserDto } from "src/modules/user/dtos";
import { User } from "src/modules/user/entity/user.entity";

export const serializeUserDto = (data: User): CreateUserDto => {
  delete data.password;
  const userDto: CreateUserDto = { ...data  };
  return userDto;
};