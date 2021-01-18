import { CreateUserDto } from '../../modules/user/dtos';
import { User } from '../../modules/user/entity/user.entity';

const serializeUserDto = (data: User): CreateUserDto => {
  delete data.password;
  const userDto: CreateUserDto = { ...data };
  return userDto;
};

export default serializeUserDto;
