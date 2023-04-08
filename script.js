function Calculate()
{
    
    let a=Number(document.getElementById('SubjectOne').value);
    let b=Number(document.getElementById('SubjectTwo').value);
    let c=Number(document.getElementById('SubjectThree').value);
    let d=Number(document.getElementById('SubjectFour').value);
    let e=Number(document.getElementById('SubjectFive').value);
    let f=Number(document.getElementById('SubjectSix').value);
    let g=Number(document.getElementById('SubjectSeven').value);
    
    if (a > 100 , b > 100 , c > 100 , d > 100 , e > 100, f > 100, g > 100) {
        alert("Please Enter Correct Value");
    }

    else    { 
        let obtain = a + b + c + d + e + f + g ;

        document.getElementById('obtain').innerHTML=obtain;


        let per = obtain / 700 * 100  ;
        

        document.getElementById('per').innerHTML=per;

        if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {

            document.getElementById('Remarks').innerHTML="<span style='color:#292'>Pass</span>";
        }

        else
        {
            document.getElementById('Remarks').innerHTML="<span style='color:red'>Fail</span>";

        }

        if (per < 100 && per > 90) { document.getElementById('hak').textContent="Outstanding"; 

        }

        else if  (per < 89 && per > 85) { document.getElementById('hak').textContent="Very Satisfactory"; 
        
        }

        else if  (per < 84 && per > 80) { document.getElementById('hak').textContent="Satisfactory"; 
        
        }
        
        else if  (per < 79 && per > 75) { document.getElementById('hak').textContent="Fairly Sastisfactory"; 
        
        }


        else if  (per < 74 && per > 1) { document.getElementById('hak').textContent="Did Not Meet Expectations"; 
        

        }


        else if (per < 101 && per > 99999 ) { document.getElementById('hak').textContent="Does Not Exist"; 
        
        }

        return false;  
     }    
    }