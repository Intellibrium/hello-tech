import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({


template:`<div class="form-group">
<h2 class="label label-success col-md-offset-5 col-sm-offset-4" style="font-size:100%;background-color:white;color:#47b2d8">My Sub-Patient's Profile</h2><br><br>
<div class="span5 table-responsive">
            <table class="table table-striped table-condensed table-bordered">
                  <thead>
                  <tr style="color: #4286f4">
                      <th>Patient Name</th>
                      <th>Relation</th>
                      <th>D.O.B</th>
                      <th>Mobile No.</th>
                      <th>Age</th>  
                      <th>Blood Gr.</th>  
                      <th>Place</th>  
                      <th>Edit Profile</th>                                          
                  </tr>
              </thead>   
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Uncle</td>
                  <td>02/10/1970</td>
                  <td>9835826487</td>
                  <td>47</td>
                  <td>A-</td>
                  <td>Bangalore</td>
                  <td><a href="">Edit</a></td>

                </tr>

                <tr>
                  <td>Name</td>
                  <td>Brother</td>
                  <td>04/09/2001</td>
                  <td>7898264873</td>
                  <td>16</td>
                  <td>O+</td>
                  <td>Bangalore</td>
                  <td><a href="">Edit</a></td>

                </tr>

                <tr>
                  <td>Name</td>
                  <td>Father</td>
                  <td>06/12/1975</td>
                  <td>8264873467</td>
                  <td>42</td>
                  <td>A+</td>
                  <td>Bangalore</td>
                  <td><a href="">Edit</a></td>

                </tr>
                <tr>
                  <td>Name</td>
                  <td>Sister</td>
                  <td>04/08/2002</td>
                  <td>9482648734</td>
                  <td>15</td>
                  <td>B+</td>
                  <td>Bangalore</td>
                  <td><a href="">Edit</a></td>

                </tr>
                <tr>
                  <td>Name</td>
                  <td>Brother</td>
                  <td>02/10/2000</td>
                  <td>8264873467</td>
                  <td>18</td>
                  <td>B+</td>
                  <td>Bangalore</td>
                  <td><a href="">Edit</a></td>

                </tr>
                <tr>
                  <td>Name</td>
                  <td>Mother</td>
                  <td>08/11/1980</td>
                  <td>9826487346</td>
                  <td>37</td>
                  <td>B+</td>
                  <td>Bangalore</td>
                  <td><a href="">Edit</a></td>

                </tr>
                                             
              </tbody>
            </table>
            </div>
</div> `,
 styleUrls: ['./medical-track.component.css']
	

})
export class Table3Component
{
	
}