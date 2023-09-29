
import { Entity, PrimaryGeneratedColumn , Column, OneToMany, ManyToMany, JoinTable} from 'typeorm'
import { Players } from './player.entity'


@Entity({
 name:"clubs"
})

export class Clubs {
   @PrimaryGeneratedColumn('uuid')
   id:string


   @Column({
    type:'varchar',
    length:64,
    nullable:false
   })
   name:string

   @ManyToMany(() => Players, p => p.club)
   @JoinTable()
    players: Players[]
}