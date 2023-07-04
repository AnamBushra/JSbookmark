let inputbt=document.getElementById("inputBtn")
const inputEl=document.getElementById("inputEl")
let ulEl=document.getElementById("list")
const savetab=document.getElementById("savetab")
let myLeads=[]
const dltbtn=document.getElementById("dlt")
inputbt.addEventListener("click",function(){
     myLeads.push(inputEl.value)
     inputEl.value=""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
     renderLeads(myLeads)
})
dltbtn.addEventListener("dblclick",function(){
    localStorage.clear()
  myLeads=[]
  renderLeads(myLeads)
})
savetab.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})
let leadsFromStorage= JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromStorage){
    myLeads=leadsFromStorage
    renderLeads(myLeads)
}
function renderLeads(leads){
let listitems=""

for(let i=0;i<leads.length;i++){
    //listitems+="<li><a target='_blank' href='>"+myLeads[i]+"'>"+myLeads[i]+"</li>"
    listitems+= `
    <li>
    <a target='_blank' href=${leads[i]}> ${leads[i]} </a>
    </li>
    
    `
}
ulEl.innerHTML=listitems}