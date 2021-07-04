var images=
    [
     "Mom.png", 
     "https://webstockreview.net/images/businessman-clipart-vector-3.png", 
     "https://tse3.mm.bing.net/th?id=OIP.xrSp9nzjk4EDdCAzpWW0uwHaKj&pid=Api&P=0&w=300&h=300"];

     var names=
     ["Alka Sethi", 
     "Gautam Prabhakar", "Saiditya Prabhakar"];

     var i=0;
     function update(){
         i++;
         var number_of_family_members_in_array=2
         if(i>number_of_family_members_in_array)
         {
             i=0;
         }
         var Updated_image=images[i];
         var Updated_name=names[i];
         document.getElementById("family_member_image").src= Updated_image;
         document.getElementById("family_member_name").innerHTML= Updated_name;
     }