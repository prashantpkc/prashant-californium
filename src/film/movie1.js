const movie = ["DDLJ","Kuch Kuch Hota Hai","Devdas","Don","Bazigar"];

const movie1 = function(i){
    if(i<0){
        return "Invalid Index"
    }else if(i>4){
        return "Please enter a valid index."
    }else{
    return movie[i]
    }
}


module.exports.film1 = movie1;