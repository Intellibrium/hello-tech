import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({

	template:`<div class="form-group">
<h2 class="label label-success col-md-offset-1 col-sm-offset-4 col-xs-offset-2 " style="font-size:20px;background-color:white;color:#47b2d8">Medical History</h2><br><br>
<div class="col-md-12 col-xs-12 col-lg-12 col-sm-12 table-responsive">
            <table class="table table-striped table-condensed table-bordered">
                  <thead>
                  <tr style="color: #4286f4">
                      <th>Account_Id</th>
                      <th>Patient_Id</th>
                      <th>Patient Name</th>
                      <th>Case_Id</th>
                      <th>Digital Prescription</th>
                     <th>Status</th> 
                     <th>Date</th>
                      <th>Time</th>
                       
                                                                
                  </tr>
              </thead>   
              <tbody>
                    <tr>
                    <td>FC_BN007</td>
                    <td>BNKS007</td>
                    <td>Faheem</td>
                    <td>BNKS007</td>
                    <td><a href=""  target="">Yet To Come </a></td> 
                    <td><span class="label label-success">Active</span></td> 
                    <td>05/06/2012</td>
                    <td>10 pm</td>                                     
                </tr>
                <tr>
                    <td>FC_BN007</td>
                    <td>BNKS001</td>
                    <td>Shyam</td>
                    <td>BNKS008</td>
                    <td><a href=""  target="">Download Report </a></td>   
                    <td><span class="label label-info">Canceled</span></td>                         
                    <td>12/07/2012</td> 
                    <td>11 am</td>                
                </tr>
                <tr>
                    <td>FC_BN007</td>
                    <td>BNKS002</td>
                    <td>Shina</td>
                    <td>BNKS009</td>
                    <td><a href=""  target="">Download Report </a></td>
                    <td><span class="label label-danger">Inactive</span></td>                     
                    <td>08/09/2012</td>
                    <td>09 pm</td>            
                </tr>
                <tr>
                  <td>FC_BN007</td>
                    <td>BNKS003</td>
                    <td>Raj</td>
                    <td>BNKS010</td>
                    <td><a href=""  target="">Download Report </a></td>
                    <td><span class="label label-warning">Pending</span></td>                     
                    <td>03/10/2012</td>
                    <td>07 pm</td>
                    
                                      
                </tr>
                <tr>
                <td>FC_BN007</td>
                    <td>BNKS004</td>
                    <td>Kishor</td>
                    <td>BNKS011</td>
                    <td><a href="" target="">Yet To Come </a></td>                                    
                    <td><span class="label label-success">Active</span></td>
                    <td>02/01/2013</td>
                    <td>2 pm</td>
                    
                                        
                </tr>   
                <tr>

                 <td>FC_BN007</td>
                    <td>BNKS005</td>
                    <td>Shankar</td>
                    <td>BNKS012</td>
                    <td><a href="" target="">Download Report </a></td>                                      
                   <td><span class="label label-warning">Pending</span></td> 
                    <td>07/02/2013</td>
                    <td>08 pm</td>   
                                                      
                                     
                </tr>
                <tr>

                 <td>FC_BN007</td>
                    <td>BNKS004</td>
                    <td>Payal</td>
                    <td>BNKS011</td>
                    <td><a href="" target="">Download Report </a></td>                                      
                   <td><span class="label label-warning">Pending</span></td> 
                    <td>07/02/2013</td>
                    <td>2 pm</td>                                  
                                       
                </tr>    
                <tr>

                <td>FC_BN007</td>
                    <td>BNKS004</td>
                    <td>Kiran</td>
                    <td>BNKS011</td>
                    <td><a href="" target="">Download Report </a></td>                                      
                    <td><span class="label label-danger">Inactive</span></td>
                    <td>07/04/2013</td>
                    <td>2 pm</td>                           
                                     
                </tr>                                     
              </tbody>
            </table>
            </div>
  

</div>`

})

export class Table0Component
{
	

}
