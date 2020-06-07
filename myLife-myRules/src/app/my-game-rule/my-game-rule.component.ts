import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-game-rule',
  templateUrl: './my-game-rule.component.html',
  styleUrls: ['./my-game-rule.component.scss']
})
export class MyGameRuleComponent implements OnInit {
	
gameOptions: Observable<String[]>;

ruleForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.gameOptions = of(['Carrom', 'Cricket']);
  	this.ruleForm = this.formBuilder.group({
  		gameName: [''],
  		gameRule: ['']
  	})
  }
  ruleSubmit(){
  	
  }

}
