import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  
  // title = "Home Component";
  // name: string;
  
  // setName(name: string){
  //   this.name= name;
  // }

    //인터폴레이션
    name = "Angaulr";
    age = "20";
    admin = true;
    address = {
        city : 'Seoul',
        country: 'Korea'
    }
    sayHi(){
        return 'Hi My name is ${this.name}';
    }

    //프로퍼티 바인딩
    inputValue = 'angular study';
    contents = 'innerHTML property binding text';
    isdisabled = true;

    //어트리뷰트 바인딩
    attrValue = 'angular6';
    number = 2;

    //클래스 바인딩
    isLarge = true;
    myClasses = 'largeText btBorder';

    //스타일 바인딩
    isActive = false;

    //이벤트 바인딩
    testName = '';

    setTestName(ev){
        this.testName = ev.target.value;
    }

    removeTestName(){
        this.testName = '';
    }

    //양방향 바인딩
    longText = '';

}


