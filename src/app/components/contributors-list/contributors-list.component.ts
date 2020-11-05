import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import {ContributorListService} from '../../services/contributor-list.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable, forkJoin} from 'rxjs';
import { promise } from 'protractor';

@Component({
  selector: 'pg-contributors-list',
  templateUrl: './contributors-list.component.html',
  styleUrls: ['./contributors-list.component.css']
})
export class ContributorsListComponent implements OnInit {
 
   contributorlist:any[];
  
  constructor(private contributorListService : ContributorListService,private httpClient: HttpClient) {
   this.contributorListService.getContributorUrlList()
      .subscribe((results) => {         
           this.getFinalContributorList(results);        
        },
        (err: any) => {
          console.log(err);
        },
        () => { 
          console.log('complete')
        }
      );
   }

   getFinalContributorList(contributor_url_link) {

    let finalContributorNames = [];
    forkJoin(contributor_url_link).subscribe(data => {       
      
      for(var i=0;i<data.length;i++)
      {       
        var inner_array=data[i];
        if(Array.isArray(inner_array))
        {
           for(var j=0;j<inner_array.length;j++){           
             finalContributorNames.push(inner_array[j].login);
           }
        }       
      }
      this.contributorlist = finalContributorNames;        
    }); 
   }  

  ngOnInit(): void {           
    }
}
