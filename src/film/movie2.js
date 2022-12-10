const movie2 = [
  {
    id: 1,
    name: "The Shining",
  },
  {
    id: 2,
    name: "Incendies",
  },
  {
    id: 3,
    name: "Rang de Basanti",
  },
  {
    id: 4,
    name: "Finding Nemo",
  },
];

function films2 (i){
  let y = movie2.filter(x=> x.id==i)
  if(y.length==1){
  return y[0].name
  }else{
      return 'No movie exists with this id'
  }
}


module.exports.films2 = films2;
