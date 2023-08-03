import { IsNotEmpty, IsString, IsEmail } from 'class-validator'

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  login: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}
