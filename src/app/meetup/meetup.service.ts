import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../app-config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Category } from './category.model';

@Injectable()
export class MeetupService {
  constructor(private http: HttpClient) { }

  private _getApi(path: string, args: string = '') {
    return this.http.get(CONFIG.proxyURL + CONFIG.meetUpURL + path + '?' + args + '&key=' + CONFIG.key + '&sign=true', {
      observe: 'body',
      responseType: 'json'
    });
  }

  getCategories(): Observable<Category[]> {
    return this._getApi(CONFIG.categoriesPath)
      .map(res => {
          return res['results'];
      });
  }

  getGroups(category: string) {
    return this._getApi(CONFIG.groupPath, category);
  }
}
