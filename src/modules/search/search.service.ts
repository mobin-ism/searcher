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

    public getUserIndex(): Index {
        return this._client.index('user')
    }

    public async addSingers(singers: any) {
        const singerIndex = this.getSingerIndex()
        const addedDocument = await singerIndex.addDocuments(singers)
        return addedDocument
    }

    public async addAlbumns(albums: any) {
        const albumIndex = this.getAlbumIndex()
        const addedDocument = await albumIndex.addDocuments(albums)
        return addedDocument
    }

    public async addSongs(songs: any) {
        const songIndex = this.getSongIndex()
        const addedDocument = await songIndex.addDocuments(songs)
        return addedDocument
    }

    public async addUsers(users: any) {
        const userIndex = this.getUserIndex()
        const addedDocument = await userIndex.addDocuments(users)
        return addedDocument
    }
}
