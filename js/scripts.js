var repository = [
{
  name:'Butterfree',
  height:1.1,
  types:['bug','flying']
},
{
  name:'pidgey',
  height:0.3,
  types:['flying','normal']
},
{
  name:'metapod',
  height:0.5,
  types:['bug']
}
];
for (var i=0; i < repository.length; i++){
    if(repository[i]["height"]>1.0)
    document.write( "<p>" + repository[i].name + repository[i].height + "wow that's big" + "</p>");
  else
    document.write( "<p>" + repository[i].name + repository[i].height + "</p>");

} //pokemon properties forEach loop
repository.forEach(function(repository){
  document.write(repository.name + "<br>")
  document.write(repository.height + "<br>")
  document.write(repository.types + "<br><br>")
});
