import { InMemoryDbService } from 'angular-in-memory-web-api';

export class GameData implements InMemoryDbService{
	createDb(){
		let gameDetails = [
			{
				id: 1,
				gameName: 'Cricket',
				rule: 'RULE'
			},
			{
				id: 2,
				gameName: 'Carrom',
				rule: 'RULE2'
			}
		];
		return { gameRules: gameDetails}
	}
}