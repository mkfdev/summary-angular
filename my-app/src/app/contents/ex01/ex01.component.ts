import { Component } from '@angular/core';

interface User {
	id: number;
	name: string
}

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html'
})

export class Ex01Component{

	users: User[] = [
		{ id: 1, name: 'Lee'},
		{ id: 2, name: 'Kim'},
		{ id: 3, name: 'Baek'},
		{ id: 4, name: 'Choi'}
	];

	//user를 추가한다
	addUser(name: string) {
		if(name){
			this.users.push({ id: this.getNewUserId(), name });
		}
	}

	//해당 user를 제거한다
	removeUser(userid: number){
		this.users = this.users.filter(({ id }) => id !== userid );
	}

	//추가될 users의 id를 반환한다
	getNewUserId(): number {
		return this.users.length ? Math.max(...this.users.map(({id}) => id)) + 1 : 1;
	}

	//변경 트래킹 기준을 반환한다
	trackByUserId(index: number, user: User){
		//user.id를 기준으로 변경을 트래킹한다.
		return user.id; // or index
	}

}
