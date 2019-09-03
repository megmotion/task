import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	list=[]
  newForm;
  constructor(
    private formBuilder: FormBuilder,
  	private apiService: ApiService) { 
      this.newForm = this.formBuilder.group({
        name: '',
      });
    }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
  	this.apiService.getData()
    .subscribe(data => this.list = data);
  }
  
  addNew() {
    const val = this.newForm.value;
    if (val.name)  {
        this.apiService.addItem(val.name)  
            .subscribe(
                err => console.log(err),            
            );
    } else alert('Enter name to add new item')
    this.ngOnInit()
  }
}
