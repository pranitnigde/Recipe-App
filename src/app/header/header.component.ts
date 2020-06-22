import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
// import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private datastorageservice: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData() { 
    this.datastorageservice.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

}
