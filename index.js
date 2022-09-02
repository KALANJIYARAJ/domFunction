var L1=label("label","for","text1","FirstName");
var br1=linebreaker("br");
var I1=inputelement("input","type","text","id","text1");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L1=label("label","for","text2","MiddletName");
var br1=linebreaker("br");
var I1=inputelement("input","type","text","id","text2");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L1=label("label","for","text3","LastName");
var br1=linebreaker("br");
var I1=inputelement("input","type","text","id","text3");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L1=label("label","for","email","FirstName");
var br1=linebreaker("br");
var I1=inputelement("input","type","email","id","email");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);






//label function
function label(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
 ele.setAttribute(attrname,attrvalue);
 ele.innerHTML=content;
 return ele;
 //<label for="email">Email</label>
 //<div class="container">this is container</div>
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
