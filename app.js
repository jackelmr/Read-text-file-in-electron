
function AniList(){
var AniArry = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./AnimalList.txt')
});
   
lineReader.on('line', function (line) {
    AniArry.push(line);
});

lineReader.on('close', function (line) {
    
var Ncount = 0;
for(var x =0; x < AniArry.length; x++){
    if (AniArry[x] == 'cat'){
      
      do { 
      Ncount +=1;    
      x +=1;
       if (AniArry[x] == "") {
           Ncount = 700;
        }
       
       console.log(AniArry[x]);
  } while (Ncount<700 );
      
     
 }
    
}
        
   
});

}

module.exports = AniList;
