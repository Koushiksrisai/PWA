function getfile(file,callback)
{
    var htp = new XMLHttpRequest();
    htp.overrideMimeType("application/json");
    htp.open('GET',file,true)
    htp.onreadystatechange=function(){
        if(htp.readyState===4 && htp.status=="200")
        {
            callback(htp.responseText);
        }
    }
    htp.send(null);
}
getfile("dynamic.json",function(text){
    let data = JSON.parse(text);
    console.log(data);
    profile(data.profile);
    career(data.career);
    Edu(data.Education);
    lang(data.languages);
    skills(data.skills);
})
var left=document.querySelector(".leftbox");
function profile(p){
    var profile_img = document.createElement("img");
    profile_img.src = p.img;
    left.appendChild(profile_img);
    var profile_name = document.createElement("h3");
    profile_name.textContent = p.name;
    left.appendChild(profile_name);
    var profile_roll = document.createElement("p");
    profile_roll.textContent = p.roll;
    left.appendChild(profile_roll);
    var line = document.createElement("hr");
    left.appendChild(line);
    var profile_institute = document.createElement("p");
    profile_institute.textContent = p.institute;
    left.appendChild(profile_institute);
    var profile_mail = document.createElement("p");
    profile_mail.textContent = p.mail;
    left.appendChild(profile_mail);
    var profile_place = document.createElement("p");
    profile_place.textContent = p.place;
    left.appendChild(profile_place);
    var profile_num = document.createElement("p");
    profile_num.textContent = p.phone;
    left.appendChild(profile_num);
}
var right = document.querySelector(".rightbox");
function career(c){
    var car = document.createElement("h2");
    car.textContent = c.car;
    right.appendChild(car);
    var line = document.createElement("hr");
    right.appendChild(line);
    var career_info = document.createElement("p");
    career_info.textContent = c.info;
    right.appendChild(career_info);
}
function Edu(e)
{
    var ed = document.createElement("h2");
    ed.innerHTML = "EDUCATIONAL DETAILS:";
    right.append(ed);
    var tab = document.createElement("table");
    tab.border = "1";
    var tr1 = "<tr><td>S.no</td><td>degree</td><td>institute</td><td>percentage</td></tr>";
    var tr2 = "";
    for(i=0;i<e.length;i++)
    {
        tr2 = tr2+"<tr><td>"+e[i].Sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].percentage+"</td></tr>";
        /*tr2 = tr2+e[i].Sno+e[i].degree+e[i].institute+e[i].percentage;*/
    }
    tab.innerHTML = tr1+tr2;
    right.appendChild(tab);
}
function lang(l)
{
    var lang = document.createElement("h2");
    lang.innerHTML="languages";
    right.appendChild(lang);
    var language = document.createElement("ul");
    for(i=0;i<l.length;i++)
    {
        var lang1 = document.createElement("li");
        lang1.innerHTML = l[i];
        right.appendChild(lang1);
    }
}
function skills(s)
{
    var skill = document.createElement("h2");
    skill.innerHTML="Skills";
    right.appendChild(skill);
    var skills = document.createElement("ul");
    for(i=0;i<s.length;i++)
    {
        var skill1 = document.createElement("li");
        skill1.innerHTML = s[i];
        right.appendChild(skill1);
    }
}