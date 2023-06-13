import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"
import { v4 as uuidv4 } from 'uuid';


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email:string

    @Column()
    password: string
}