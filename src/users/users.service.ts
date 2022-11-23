import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { userDto } from './dto/user-dto';
export type User = any;

@Injectable()
export class UsersService {
  
  constructor(private prisma: PrismaService) {}
  



  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  async create(data: userDto) {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }


  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }

  update(id: number, updateUserDto: userDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
