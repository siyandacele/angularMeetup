import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../app-config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Category } from './category.model';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Subject } from 'rxjs';

@Injectable()
export class MeetupService {
  newCategories = new Subject<Category[]>();
  private categories: Category[] = [];
  constructor(private http: HttpClient) { }

  private _getApi(path: string, args: string = '') {
    return this.http.get(CONFIG.proxyURL + CONFIG.meetUpURL + path + '?' + args + '&key=' + CONFIG.key + '&sign=true', {
      observe: 'body',
      responseType: 'json'
    });
  }

  getLocalCategories() {
    return this.categories;
  }

  private _setCategories(categories: Category[]) {
    this.categories = categories;
    const allGroups: Category = {
      name: 'All',
      sort_name: 'All',
      id: 0,
      shortname: 'All'
    };
    this.categories.unshift(allGroups);
    this.newCategories.next(this.categories);
  }

  getCategories() {
    return this._getApi(CONFIG.categoriesPath)
      .map(res => {
          return res['results'];
      })
      .subscribe(
        (categories: Category[]) => {
          this._setCategories(categories);
        }
      );
  }

  getGroups(category: string) {
    return this._getApi(CONFIG.groupPath, category);
  }
}
