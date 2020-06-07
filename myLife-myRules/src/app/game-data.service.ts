import { Injectable } from '@angular/core';
import { GameRule } from './my-game-rule/game-rule-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GameDataService{
	constructor(private http: HttpClient){	}

	getAllRules():Observable<GameRule[]>{
		return this.http.get<GameRule[]>('/api/gameRules');
	}
}