import { CustomBaseEntity } from 'src/common/entity/custom-base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Song extends CustomBaseEntity {
    @Column({ type: 'varchar', length: 255 })
    title: string

    @Column({ type: 'varchar', length: 255 })
    length: string
}
