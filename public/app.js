var student1 = {
    name: "Zahoor Abbas",
    fatherName: "Abdus Samad",
    contact: "0333366333",
    age: 21,
    isClearInAllSubject:true,
 };
 var student2 ={
    name: "Muhammad Anver",
    fatherName: "Ali Shakoor",
    contact: "03333383333",
    age: 28,
    isClearInAllSubject:true,
 };
 var student3 ={
    name: "Ashfaq Ali Mazahir",
    fatherName: "Jaffer Ali",
    contact: "035777555",
    age: 30,
    isClearInAllSubject:true,
 };
 var student4 ={
    name: "Atif",
    fatherName: " Apo Yousuf",
    contact: "0777733",
    age: 20,
    isClearInAllSubject:true,
 };
 var student5 ={
    name: "Amir",
    fatherName: " Latif",
    contact: "0388833333",
    age: 25,
    hobbies: ["a", "b", "c"],
    address:{
       country:"Pakistan",
       city:"Karachi",
       area:"Hussainabad",
    },
    isClearInAllSubject:true,
    calculatedDiscount:function (){
       console.log("play Function");
    },
 };
 
 
 var studentList = [student1, student2, student3, student4, student5]
 for (var i = 0; i < studentList.length; i++) {
     studentList[i].rollNumber = i +1;
    
 }
 console.log(studentList) 
 
 var studentData = document.getElementById("atomata")
 for (var i=0; i < studentList.length; i++){
    var obj = studentList[i];
    studentData.innerHTML+= "<tr><td>"+obj.rollNumber+"</td><td>"+obj.name+"</td><td>"+obj.fatherName+"</td><td>"+obj.contact+"</td><td>"+obj.isClearInAllSubject+"</td><td>"+obj.age   +"</td></tr>"
 }
 
 
    var inpVal = document.getElementById("inpVal");
    var showRollNumber = document.getElementById("showRollNumber");
    var showName = document.getElementById("showName");
    var showFatherName = document.getElementById("showFAtherName");
    var showContact = document.getElementById("showContact");
    var showResult = document.getElementById("showResult");
 
    function searchStd() {
    for (let i = 0; i < studentList.length; i++) {
       var std = studentList[i];
       if (inpVal.value == std.rollNumber){
          showRollNumber.innerHTML= std.rollNumber;
          showName.innerHTML= std.name;
          showFatherName.innerHTML = std.fatherName;
          showContact.innerHTML = std.contact;
          showResult.innerHTML = std.isClearInAllSubject;
       }
       
    }
 }