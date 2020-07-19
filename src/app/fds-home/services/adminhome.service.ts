import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Restaurent} from '../../fds-home/models/restaurent'


@Injectable({
	providedIn : 'root'
})
export class AdminHomeService{

	constructor(private http:HttpClient){}
	
	public getRestaurentsList():Observable<Restaurent[]>{
		return this.http.get<Restaurent[]>(`/api/restaurents`);
	}
	
	public getRestaurentsListByItem(searchText1:string):Observable<Restaurent[]>{
		return this.http.get<Restaurent[]>(`/api/restaurents/`+searchText1);
	}

}