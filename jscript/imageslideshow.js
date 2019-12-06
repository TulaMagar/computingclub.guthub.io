var images=["computerclubimage.jpg","Computing-feat.jpg", "computingimage.jpg","shutterstock.jpg"]
automatic();
var count =0;
function automatic(){
    var heightt = screen.height - 200; 
    
    if(count < images.length-1 || count < 0){
        ++count;
        document.getElementById('slide').src = "image/"+images[count];
        document.getElementById("slide").height = heightt;
        
    }
    else if(typeof count == "undefined")
    {
        document.getElementById('slide').src = "image/"+images[0];
        document.getElementById("slide").height = heightt;
        
    }
    else if (count + 2 >= images.length){
        count=0;
        document.getElementById('slide').src = "image/"+images[0];
        document.getElementById("slide").height = heightt;


    }
    else{
        ++count;
    }
    
}
setInterval(automatic, 6000);
