var L1=label("label","for","text1","FirstName");
var br1=linebreaker("br");
var I1=inputelement("input","type","text","id","text1");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L2=label("label","for","text2","MiddletName");
var br3=linebreaker("br");
var I=inputelement("input","type","text","id","text2");
var br4=linebreaker("br");
document.body.append(L2,br3,I2,br4);

var L3=label("label","for","text3","LastName");
var br5=linebreaker("br");
var I3=inputelement("input","type","text","id","text3");
var br6=linebreaker("br");
document.body.append(L3,br5,I3,br6);

var L4=label("label","for","email","Email");
var br7=linebreaker("br");
var I4=inputelement("input","type","email","id","email");
var br8=linebreaker("br");
document.body.append(L4,br7,I4,br8);

var L5=label("label","for","text4","Contact");
var br9=linebreaker("br");
var I5=inputelement("input","type","text","id","text4");
var br10=linebreaker("br");
document.body.append(L5,br9,I5,br10);




//label function
function label(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
 ele.setAttribute(attrname,attrvalue);
 ele.innerHTML=content;
 return ele;
}
//linebreaker
function linebreaker(element){
var ele=document.createElement(element);
return ele;
}

//inputelement
function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.setAttribute(attrname1,attrvalue1);
return ele;

}
