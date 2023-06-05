async function pickPerson(tp) {  
   let dv = app.plugins.plugins.dataview.api  
   const people = dv  
       .pages("#person")  
       .sort(f => f.file.name)  
       .values  
   const names = people.map(f => f.file.name)  
   let selected = await tp.system.suggester(names, people)  
   return selected ? "- " + selected.file.link : ""  
}  
  
module.exports = pickPerson;