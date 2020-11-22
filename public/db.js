
const indexedDB = 
    window.indexedDB || 
    window.mozIndexedDB || 
    window.webkitIndexedDB || 
    window.msIndexedDB;
let db;
const request = window.indexedDB.open("budget",1);
request.onupgradeneeded=({target})=>{
    db = target.result;
    const objectStore=db.createObjectStore("budget");
    objectStore.createIndex("pending",{autoIncrement:true});
};
request.onsuccess=event=>{
    console.log(request.result);
};
request.onerror=function(event){
    console.log("Error"+event.target.errorCode);
};