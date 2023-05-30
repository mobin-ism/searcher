import { CustomBaseEntity } from 'src/common/entity/custom-base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Singer extends CustomBaseEntity {
    @Column({ type: 'varchar', length: 255 })
    name: string

    @Column({ type: 'varchar', length: 255 })
    madeUpName: string
}
