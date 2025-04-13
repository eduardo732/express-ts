import { User, UserRepository } from "../interfaces";

export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password",
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      password: "password",
    },
    {
      id: "3",
      name: "John Smith",
      email: "john.smith@example.com",
      password: "password",
    },
  ];
  findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return Promise.resolve(user || null);
  }
  create(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }
  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return Promise.resolve(user || null);
  }
  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

}

