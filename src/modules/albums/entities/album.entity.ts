import { CustomBaseEntity } from 'src/common/entity/custom-base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Album extends CustomBaseEntity {
    @Column({ type: 'varchar', length: 255 })
    title: string

    @Column({ type: 'int' })
    totalNumberOfSongs: number

    @Column({ type: 'varchar', length: 255 })
    totalLength: string
}
