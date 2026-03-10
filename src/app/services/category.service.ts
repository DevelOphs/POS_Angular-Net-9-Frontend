import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '@shared/services/alert.service';
import { Observable } from 'rxjs';
import { CategoryApi } from '../responses/category.response';
import { environment as env } from 'src/environments/environment';
import { endpoint } from '@shared/apis/endpoint';
import { ListCategoryRequest } from '../requests/category/list-category.request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http: HttpClient,
    private _alert: AlertService,
  ) { }

  GetAll(
    size,
    sort,
    order,
    page,
    getImputs
  ): Observable<CategoryApi> {
    const requestUrl = `${env.api}${endpoint.LIST_CATEGORIES}`
    const params: ListCategoryRequest = new ListCategoryRequest(
      page + 1,
      order,
      sort,
      size,
      getImputs.numFilter,
      getImputs.textFilter,
      getImputs.stateFilter,
      getImputs.startDate,
      getImputs.endDate
    )

    return this._http.post<CategoryApi>(requestUrl, params).pipe(
      map((data: CategoryApi) => {
        data.data.items.forEach(function(e : any){
          switch (e.state){
            case 0:
              e.badgeColor = 'text-gray bg-gray-light'
              break
            case 1:
              e.badgeColor = 'text-green bg-green-light'
              break
            default:
              e.badgeColor = 'text-gray bg-gray-light'
              break
          }
        })
        return data
      })
    )
  }
}
