
var areas = [ 
    { 
    key :"Bangalore North",values:
    [{
        "name":"Abbigere"
    },
    {
        "name":"Dollars Colony"
    },
    {
        "name":"Ganga Nagar"
    },
    {
        "name":"Sanjay Nagar"
    },
    {
        "name":"Malleswaram"
    }
    ]
    },
    {
        key :"Bangalore South" ,values:[{
        "name":"HSR Layout"
    },
    {
        "name":"Bannerghatta"
    },
    {
        "name":"Hosur"
    },
    {
        "name":"Anekal"
    },
    {
        "name":"Attibele"
    }
]},{
     key:"Bangalore East",values
     :[{
        "name":"Marathahalli"
    },
    {
        "name":"Kadugodi"
    },
    {
        "name":"Brookfield"
    },
    {
        "name":"Whitefield"
    },
    {
        "name":"ITPL"
    }
]},{
    key:"Bangalore West",values:[{
        "name":"Kengeri"
    },
    {
        "name":"Mathikere"
    },
    {
        "name":"Magadi Road"
    },
    {
        "name":"Mahalakshmi Layout"
    },
    {

        "name":"Bidadi"
    }
]}
]
console.log("Enter");
const Allregions=areas.map(data=>data.key);
// console.log(Allregions);
// console.log(Allregions.length);
//  blrsouth = areas.filter(data=>data.key === 'Bangalore South');
// console.log(blrsouth);
// console.log(blrsouth[0].values.map(value=>value.name));
// window.onload(function () {
//     regions = areas.map(data=>data.key)
//     var region = Document.getElementById("region");
//     var options = Document.getElementById("regionOptions");
//     options.appendChild(regions.forEach(element => { element
//     }));
    
// })

// function getRegions() {
//     return areas.map(data=>data.key)
// }
// function getAreasByRegion(region){
//     Region = document.getElementById()

// }
function makeDropDown(data,level1Filter){
    const filteredArray = data.filter(data=>data.key === level1Filter);
    console.log(level1Filter);
    let areasArr = filteredArray[0].values.map(value=>value.name);
    const selectLevel2 = document.getElementById("level2");
    populateDropDown(selectLevel2,areasArr);

}
function populateFirstLevelDropDown(){

    const elValue = document.getElementById("level1").value;
    const el = document.getElementById("level1");
    populateDropDown(el,Allregions);
}
function populateDropDown(el,list){
    el.innerHTML = "";
    console.log(list);
    list.forEach(item=>{
        const option = document.createElement("OPTION"),
        txt = document.createTextNode(item);
        option.appendChild(txt);
        el.insertBefore(option,el.lastChild);

        // option.textContent = item;
        // el.appendChild(option);
    });
}
function appDropDown(){
    const selectLevel1 = document.getElementById("level1").value;
    makeDropDown(areas,selectLevel1)
}
function afterDocumentLoads(){
    console.log("Hello");
    populateFirstLevelDropDown();
    appDropDown();
}
document.getElementById("level1").addEventListener("change",afterDocumentLoads);
afterDocumentLoads();
// document.getElementById("level1").addEventListener("DOMContentLoaded",()=>{afterDocumentLoads});