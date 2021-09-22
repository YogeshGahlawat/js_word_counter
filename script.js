count = () => {

    var value = document.getElementById("input").value
    var total = value.length
    var count=0

    for(var i=0; i<total; i++){
        if(value[i]=='.' || value[i]==',' || value[i]==' ')
            count+=1
    }

    document.getElementById("msg").innerHTML="key strokes: " + total + ", Words: " + count
}