function call() {
    var dis=document.getElementById("get").value;

  
    if(dis=="Mohandas Karamchand Gandhi"||dis=="MOHANDAS KARAMCHAND GANDHI"){
      window.open("https://en.wikipedia.org/wiki/Mahatma_Gandhi");
      }
    else if(dis=="Volunteering"||dis=="VOLUNTEERING" )
     {
       window.open("https://en.wikipedia.org/wiki/Volunteering");
     }
     else if(dis=="Grassroots"||dis=="GRASSROOTS" )
     {
       window.open("https://en.wikipedia.org/wiki/Grassroots");
     }
     else if(dis=="Julian Assange"||dis=="JULIAN ASSANGE" )
     {
       window.open("https://en.wikipedia.org/wiki/Julian_Assange");
     }
     else if(dis=="Nelson Mandela"||dis=="NELSON MANDELA" )
     {
       window.open("https://en.wikipedia.org/wiki/Nelson_Mandela");
     }
     else{
        document.write("Google’s no results found page.");
     }
 
  }
