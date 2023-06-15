import { ActivityService } from './../../services/activity.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-other-activity',
  templateUrl: './other-activity.component.html',
  styleUrls: ['./other-activity.component.scss']
})
export class OtherActivityComponent {
  data:any;
  constructor(private activitySer:ActivityService){}
  ngOnInit(): void {
    this.activitySer.get().subscribe({
      next:(res:any)=>{
        this.data = res
        this.data=this.data.activity
        },
      error:(err:any)=>{console.log(err)}
    });
  }

}
