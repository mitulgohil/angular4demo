import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tabledata = {"parentdata":[{"campaign":"ACTHAR 2017","Partner":"TTD","BillableImpressions":"3,81,397","Clicks":"224","CTR":"0.00058%","BillableRevenue":"$3387.33","Conversions":"150","CPA":"$22.58","CPC":"$15.12","Yield":"0.00039%","Delivered":"25%","IdealPace":"62%","RevenueRemaining":"$10,620","ImpressionsRemaining":"12,36,732","InView":"79%","showchild":"false","childData":[{"c1":"CLG campaign","c2":"VNN partner","c3":"data 1","c4":"data 2","c5":"data 3","c6":"data 4","c7":"data 5","c8":"data 6","c9":"data 7","c10":"data 8","c11":"data 9","c12":"data10","c13":"data11","c14":"data12","c15":"data13"},{"c1":"CLG campaign","c2":"VNN partner","c3":"data 1","c4":"data 2","c5":"data 3","c6":"data 4","c7":"data 5","c8":"data 6","c9":"data 7","c10":"data 8","c11":"data 9","c12":"data10","c13":"data11","c14":"data12","c15":"data13"}]},{"campaign":"BL-OFev","Partner":"TTD","BillableImpressions":"3,74,654","Clicks":"123","CTR":"0.00033%","BillableRevenue":"$3776.15","Conversions":"70","CPA":"$53.945","CPC":"$30.7","Yield":"0.00019%","Delivered":"22%","IdealPace":"62%","RevenueRemaining":"$14,421","ImpressionsRemaining":"13,87,718","InView":"39%","showchild":"false","childData":[{"c1":"- child two","c2":"data 1","c3":"data 1","c4":"data 2","c5":"data 3","c6":"data 4","c7":"data 5","c8":"data 6","c9":"data 7","c10":"data 8","c11":"data 9","c12":"data10","c13":"data11","c14":"data12","c15":"data13"}]},{"campaign":"NASACORT 2017","Partner":"ADOBE","BillableImpressions":"2,81,123","Clicks":"361","CTR":"0.00013%","BillableRevenue":"$2524.75","Conversions":"167","CPA":"$15.12","CPC":"$6.99","Yield":"0.00059%","Delivered":"23%","IdealPace":"62%","RevenueRemaining":"$11,423","ImpressionsRemaining":"9,22,978","InView":"0%","showchild":"false","childData":[{"c1":"- child three","c2":"data 1","c3":"data 1","c4":"data 2","c5":"data 3","c6":"data 4","c7":"data 5","c8":"data 6","c9":"data 7","c10":"data 8","c11":"data 9","c12":"data10","c13":"data11","c14":"data12","c15":"data13"}]}]}

  openchild(data,index){
  	for(var i=0;i<this.tabledata.parentdata.length;i++){
  		if(this.tabledata.parentdata[i].showchild=="true" && i==index){
  			this.tabledata.parentdata[i].showchild="false";
  		}
  		else if(i==index){
  			this.tabledata.parentdata[i].showchild="true";
  		}
  	}
  }

}
