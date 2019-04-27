import {Injectable}  from '@angular/core';

@Injectable()
export class PrevioiusConsultation{

    consultedWithDoctor(record:Object[]):boolean{
            sessionStorage.setItem("medhistory",JSON.stringify(record));
        return true;
    }

    consultedWithDoctorC(record:Object[]):boolean{
             sessionStorage.setItem("medhistory",JSON.stringify(record));
        return true;
    }
    consultedWithDoctorH(record:object[]):boolean{
 sessionStorage.setItem("medhistory",JSON.stringify(record));
        return true;
    }

}