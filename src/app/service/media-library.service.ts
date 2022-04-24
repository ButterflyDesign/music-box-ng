import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaFile } from '../domain/media-file';
import { environment } from 'src/environments/environment';


@Injectable()
export class MediaLibraryService {

    uri: string= environment.server+'/api/MediaLibrary';

    constructor(private http: HttpClient) {}



    getFiles() : Observable<MediaFile[]> {
        return this.http.get<MediaFile[]>(`${this.uri}`);
    }

    import(link: string) : Observable<MediaFile[]> {
        return this.http.post<MediaFile[]>(`${this.uri}`, { 'link': link });
    }
}
