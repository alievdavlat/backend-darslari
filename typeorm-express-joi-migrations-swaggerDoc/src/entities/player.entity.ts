
import { Entity, PrimaryGeneratedColumn , Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm'
import { Clubs } from './clubs.entity'


@Entity({
 name:"players"
})

export class Players {
   @PrimaryGeneratedColumn('uuid')
   id:string


   @Column({
    type:'varchar',
    length:64,
    nullable:false
   })
   name:string

   @ManyToMany(() => Clubs, c => c.players)
   @JoinTable()
   club: Clubs[]
}