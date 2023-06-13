import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"
import { BaseEntity } from "src/common/common.entity";
// import { v4 as uuidv4 } from 'uuid';


@Entity()
export class User extends BaseEntity {

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email:string

    @Column()
    password: string
}