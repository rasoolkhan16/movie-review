import {
    Property,
    Entity,
    EntityRepositoryType,
    Unique,
    PrimaryKey
  } from '@mikro-orm/core';
import { UserRepository } from '../user.repository';

@Entity()
export class User {
    [EntityRepositoryType]?: UserRepository;

    @PrimaryKey()
    id!: number;

    @Property()
    name: string;

    @Property()
    @Unique()
    email: string;

    @Property()
    password: string;

    @Property({ nullable: true })
    profile_image?: string;

    @Property()
    createdAt = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

    constructor({
      name,
      email,
      password,
      profile_image,
    }: {
      name: string;
      email: string;
      password: string;
      profile_image: string;
    }) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.profile_image = profile_image;
    }
}
