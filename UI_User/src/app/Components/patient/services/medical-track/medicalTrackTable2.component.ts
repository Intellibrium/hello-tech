import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({


template: ` <div class="form-group">
<h2 class="label label-success col-md-offset-5 col-sm-offset-4 col-xs-offset-2" style="font-size:100%;background-color:white;color:#47b2d8">All Medical Files</h2><br><br>
<div class="span5 table-responsive">
            <table class="table table-striped table-condensed table-bordered col-md-9 col-xs-9 col-lg-9 col-sm-9">
                  <thead>
                  <tr style="color: #4286f4">
                      <th>Date</th>
                      <th>Uploaded Files</th>  
                      <th>Reports</th>                                          
                  </tr>
              </thead>   
              <tbody>
                <tr>
                    <td>05/06/2015</td>
                    <td><a href="">File name</a></td>
                    <td><a href="">Download Report</a></td>                                     
                </tr>
                <tr>
                    <td>12/07/2015</td>
                    <td><a href="">File name</a></td>
                    <td><a href="">Download Report </a></td>                                     
                                     
                </tr>
                <tr>
                  
                    <td>08/09/2015</td>
                    <td><a href="">File name</a></td>
                    <td><a href="">Download Report </a></td>                                     
                                      
                </tr>
                <tr>
                  
                    <td>04/11/2015</td>
                    <td><a href="">File name</a></td>
                    <td><a href="">Download Report </a></td>                                     
                                      
                </tr>
                <tr>
                
                    <td>02/01/2016</td>
                    <td><a href="">File name</a></td>
          <td><a href="">Download Report </a></td>                                     
                                        
                </tr>   
                <tr>
         
                    <td>12/01/2016</td>
                    <td><a href="">File name</a></td>
                    <td><a href="">Download Report </a></td>                                     
                                     
                </tr>
                <tr>
                
                    <td>26/02/2016</td>
                    <td><a href="">File name</a></td>
                    <td><a href="">Download Report </a></td>                                     
                                       
                </tr>    
                <tr>
                
                    <td>30/02/2016</td>
                    <td><a href="">File name</a></td>
                    <td><a href="">Download Report </a></td>                                     
                                     
                </tr>                                     
              </tbody>
            </table>
            </div>
  

</div> `,
styleUrls: ['./medical-track.component.css']
  

})
export class Table2Component
{
  
}