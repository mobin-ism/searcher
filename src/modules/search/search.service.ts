import { Injectable } from '@nestjs/common'
import MeiliSearch, { Index } from 'meilisearch'

@Injectable()
export class SearchService {
    private _client: MeiliSearch
    constructor() {
        this._client = new MeiliSearch({ host: 'http://localhost:7700' })
    }

    public getSingerIndex(): Index {
        return this._client.index('singer')
    }

    public getAlbumIndex(): Index {
        return this._client.index('album')
    }

    public getSongIndex(): Index {
        return this._client.index('song')
    }

    public async addSingers(singers: any) {
        const singerIndex = this.getSingerIndex()
        const addedDocument = await singerIndex.addDocuments(singers)
        return addedDocument
    }
}
