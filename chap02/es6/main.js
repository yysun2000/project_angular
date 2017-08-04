import {Component} from '@angular/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector : 'hello-word',
  template : '<h1>Hello {{name}}</h1>'
})

class HelloWorldComponent{
  constructor(){
    this.name = 'Angular';
  }
}

@NgModule({
  imports : [BrowserModule],
  declarations : [HelloWorldComponent],
  bootstrap : [HelloWorldComponent]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
