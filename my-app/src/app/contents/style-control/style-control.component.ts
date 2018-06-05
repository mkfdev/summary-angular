import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

interface talign {
    name: string,
    selected: boolean
}

@Component({
  selector: 'app-style-control',
  template: `
    <section>
    <div class="sm-angular__desc">
    <h2>클래스 제어하기</h2>
    <div class="sm-angular__desc-detail">
        <input type="text" [(ngModel)]="alignment" (keyup.enter)="selectAlign(alignment)" placeholder="Fill out Align you want">

        <ul>
            <li *ngFor="let al of taligns">
                <button (click)="editAlign(al)">{{al.name}}</button>
            </li>
        </ul>

        <div class="bg">
            <p class="bg-desc">Hello Angular, Nihao Angular,</p>
        </div>
    </div>
    </div>
    </section>

    {{taligns | json}}
  `,
  styles: [`
      .bg-desc{
          height: 150px;
          background: orange;
      }

      .bg-desc {
          color: #fff;
          font-size: 18px;
      }

  `]
})
export class StyleControlComponent implements OnInit {
    taligns : talign[];
    url: string = 'http://localhost:3000/talign';
    alignment: string;
    
    constructor(private http:HttpClient) { }

    ngOnInit() {
        this.getAligns();
    }

    getAligns(){
        this.http.get<talign[]>(this.url)
            .subscribe(taligns => this.taligns = taligns);
    }

    editAlign(al){
        const {name, selected} = al;
        const payload = {selected: !selected};

        console.log(payload);

        this.http.patch(`${this.url}`, payload)
            .subscribe(()=>this.getAligns());
    }
}
