var departments = [
  {id:1,name:"Терапевтичне",floor:2,head:"Коваленко О. В.",beds:40,occupied:31,phone:"+380 44 111-20-01",year:1985},
  {id:2,name:"Хірургічне",floor:3,head:"Мельник А. П.",beds:35,occupied:35,phone:"+380 44 111-20-02",year:1985},
    {id:3,name:"Кардіологічне",floor:4,head:"Шевченко І. М.",beds:30,occupied:22,phone:"+380 44 111-20-03",year:1998},
  {id:4,name:"Неврологічне",floor:5,head:"Бондар Т. С.",beds:25,occupied:18,phone:"+380 44 111-20-04",year:2004}
]

var doctors=[
{id:1, name:"Коваленко Олена Василівна", specialty:"Терапевт", dep:1, exp:22, category:"Вища", rate:1, phone:"+380 67 100-00-01"},
{id:2, name:"Мельник Андрій Петрович", specialty:"Хірург", dep:2, exp:18, category:"Вища", rate:1.5, phone:"+380 67 100-00-02"},
{id:3, name:"Шевченко Ігор Миколайович", specialty:"Кардіолог", dep:3, exp:15, category:"Перша", rate:1.25, phone:"+380 67 100-00-03"},
{id:4, name:"Бондар Тетяна Сергіївна", specialty:"Невролог", dep:4, exp:12, category:"Перша", rate:1, phone:"+380 67 100-00-04"},
{id:5, name:"Ткаченко Максим Олегович", specialty:"Хірург", dep:2, exp:4, category:"Друга", rate:0.75, phone:"+380 67 100-00-05"},
  {id:6, name:"Кравченко Наталія Іванівна", specialty:"Терапевт", dep:1, exp:2, category:"Без категорії", rate:0.5, phone:"+380 67 100-00-06"}
];

let patients = [
    {id:1,name:"Іваненко Петро Степанович",birth:"14.03.1956",gender:"Ч",diagnosis:"Гіпертонічна хвороба II ст.",doctor:3,ward:401,date:"20.10.2026",insurance:true},
    {id:2,name:"Савченко Марія Андріївна",birth:"02.07.1990",gender:"Ж",diagnosis:"Гострий апендицит",doctor:2,ward:305,date:"25.10.2026",insurance:false},
    {id:3,name:"Руденко Василь Іванович",birth:"30.11.1971",gender:"Ч",diagnosis:"Пневмонія",doctor:1,ward:210,date:"18.10.2026",insurance:true},
    {id:4,name:"Лисенко Оксана Петрівна",birth:"09.01.1984",gender:"Ж",diagnosis:"Мігрень",doctor:4,ward:502,date:"23.10.2026",insurance:true},
    {id:5,name:"Гончаренко Дмитро Юрійович",birth:"21.05.2001",gender:"Ч",diagnosis:"Перелом променевої кістки",doctor:5,ward:307,date:"26.10.2026",insurance:false},
    {id:6,name:"Поліщук Галина Миколаївна",birth:"17.09.1948",gender:"Ж",diagnosis:"Ішемічна хвороба серця",doctor:3,ward:403,date:"15.10.2026",insurance:true},
    {id:7,name:"Мороз Артем Вікторович",birth:"04.12.1995",gender:"Ч",diagnosis:"Гастрит",doctor:6,ward:214,date:"24.10.2026",insurance:false}
]


function getDepName(id){
  for(var i=0;i<departments.length;i++){
    if(departments[i].id==id) return departments[i].name
  }
  return ""
}

function getDoctorName(id) {
    for (let i = 0; i < doctors.length; i++) {
        if (doctors[i].id == id) {
            return doctors[i].name;
        }
    }
    return "";
}

function getAge(birth){
var parts=birth.split(".")
var age = new Date().getFullYear() - parts[2]
return age
}

function fillDepartments(){
    var html = "<tr><th>№</th><th>Назва</th><th>Поверх</th><th>Завідувач</th><th>Ліжок</th><th>Зайнято</th><th>Вільно</th><th>Телефон</th><th>Рік відкриття</th></tr>"
    for(var i=0;i<departments.length;i++){
        var d=departments[i]
        html+="<tr>"
        html+="<td>"+d.id+"</td>"
        html += "<td>" + d.name + "</td>"
        html+="<td>"+d.floor+"</td>"
        html+="<td>"+d.head+"</td>"
        html+="<td>"+d.beds+"</td>"
        html+="<td>"+d.occupied+"</td>"
        html+="<td>"+(d.beds-d.occupied)+"</td>"
        html+="<td>"+d.phone+"</td>"
        html+="<td>"+d.year+"</td>"
        html+="</tr>"
    }
    document.getElementById("table1").innerHTML=html
}

function fillDoctors() {
  let html = "<tr><th>№</th><th>ПІБ</th><th>Спеціальність</th><th>Відділення</th><th>Стаж</th><th>Категорія</th><th>Ставка</th><th>Телефон</th></tr>";
  for (let i = 0; i < doctors.length; i++) {
    html += "<tr><td>" + doctors[i].id + "</td><td>" + doctors[i].name + "</td><td>" + doctors[i].specialty + "</td><td>" + getDepName(doctors[i].dep) + "</td><td>" + doctors[i].exp + "</td><td>" + doctors[i].category + "</td><td>" + doctors[i].rate + "</td><td>" + doctors[i].phone + "</td></tr>";
  }
  document.getElementById("table2").innerHTML = html;
}

function fillPatients(){
var html="<tr><th>№</th><th>ПІБ</th><th>Дата народження</th><th>Вік</th><th>Стать</th><th>Діагноз</th><th>Лікар</th><th>Палата</th><th>Дата госпіталізації</th><th>Страховка</th></tr>"
for(var i=0;i<patients.length;i++){
    var p = patients[i]
    var ins
    if(p.insurance==true){ins="так"}else{ins="ні"}
    html+="<tr>"
    html+="<td>"+p.id+"</td><td>"+p.name+"</td><td>"+p.birth+"</td><td>"+getAge(p.birth)+"</td>"
    html+="<td>"+p.gender+"</td><td>"+p.diagnosis+"</td><td>"+getDoctorName(p.doctor)+"</td>"
    html+="<td>"+p.ward+"</td><td>"+p.date+"</td><td>"+ins+"</td>"
    html+="</tr>"
}
document.getElementById("table3").innerHTML=html
}

function showTab(n){
    for(var i=1;i<=3;i++){
        document.getElementById("tab"+i).style.display="none"
        document.getElementById("btn"+i).className=""
    }
    document.getElementById("tab"+n).style.display="block"
  document.getElementById("btn"+n).className="active"
}

function showForm(n){
  document.getElementById("form"+n).style.display="block"
}

function hideForm(n) {
    document.getElementById("form"+n).style.display = "none";
    var inputs = document.getElementById("form"+n).getElementsByTagName("input")
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].type=="checkbox") inputs[i].checked=false
        else if(inputs[i].id=="docRate") inputs[i].value=1
        else inputs[i].value=""
    }
}

function fillSelects(){
    var html=""
    for(var i=0;i<departments.length;i++){
        html+="<option value='"+departments[i].id+"'>"+departments[i].name+"</option>"
    }
    document.getElementById("docDep").innerHTML=html
    html = ""
    for (let i = 0; i < doctors.length; i++) {
        html += "<option value='" + doctors[i].id + "'>" + doctors[i].name + " (" + doctors[i].specialty + ")</option>"
    }
    document.getElementById("patDoctor").innerHTML = html
}

function newId(arr){
  if(arr.length==0) return 1
  return arr[arr.length-1].id+1
}

function toDate(value){
var parts = value.split("-")
return parts[2]+"."+parts[1]+"."+parts[0]
}

function addDepartment(){
    var name=document.getElementById("depName").value.trim()
    var floor=document.getElementById("depFloor").value
    var head=document.getElementById("depHead").value.trim()
    var beds=document.getElementById("depBeds").value
    var occupied=document.getElementById("depOccupied").value
    var phone=document.getElementById("depPhone").value.trim()
    var year=document.getElementById("depYear").value

    if(name==""||floor==""||head==""||beds==""||occupied==""||phone==""||year==""){
        alert("Заповніть всі поля!")
        return
    }
    if(Number(occupied)>Number(beds)){
        alert("Зайнятих ліжок не може бути більше ніж ліжок")
        return
    }
    if (Number(year) < 1800 || Number(year) > new Date().getFullYear()) {
      alert("Неправильний рік")
      return
    }

    departments.push({id:newId(departments),name:name,floor:Number(floor),head:head,beds:Number(beds),occupied:Number(occupied),phone:phone,year:Number(year)})
    fillDepartments()
    fillSelects()
    hideForm(1)
}

function addDoctor() {
  let name = document.getElementById("docName").value.trim();
  let specialty = document.getElementById("docSpecialty").value.trim();
  let dep = document.getElementById("docDep").value;
  let exp = document.getElementById("docExp").value;
  let category = document.getElementById("docCategory").value;
  let rate = document.getElementById("docRate").value;
  let phone = document.getElementById("docPhone").value.trim();

  if (name == "" || specialty == "" || exp == "" || rate == "" || phone == "") {
    alert("Заповніть всі поля!");
    return;
  }
  if(Number(exp)<0){
    alert("Стаж не може бути відємним")
    return
  }

  doctors.push({id: newId(doctors), name: name, specialty: specialty, dep: Number(dep), exp: Number(exp), category: category, rate: Number(rate), phone: phone});
  fillDoctors();
  fillSelects();
  hideForm(2);
}

function addPatient(){
var name=document.getElementById("patName").value.trim()
var birth=document.getElementById("patBirth").value
var gender=document.getElementById("patGender").value
var diagnosis=document.getElementById("patDiagnosis").value.trim()
var doctor=document.getElementById("patDoctor").value
var ward=document.getElementById("patWard").value
var date=document.getElementById("patDate").value
var insurance=document.getElementById("patInsurance").checked

if(name==""||birth==""||diagnosis==""||ward==""||date==""){
    alert("Заповніть всі поля!")
    return
}
if(new Date(birth)>new Date()){
    alert("Дата народження не може бути в майбутньому")
    return
}
if(new Date(date)<new Date(birth)){
  alert("Дата госпіталізації раніше дати народження")
  return
}

patients.push({id:newId(patients),name:name,birth:toDate(birth),gender:gender,diagnosis:diagnosis,doctor:Number(doctor),ward:Number(ward),date:toDate(date),insurance:insurance})
fillPatients()
hideForm(3)
}

fillDepartments()
fillDoctors()
fillPatients()
fillSelects()
showTab(1)
