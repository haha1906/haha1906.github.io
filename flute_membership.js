function checkEverything() {
    //slangCheck();
    //genderControl();
    //isPhone();
    var check1 = slangCheck();
    console.log("check1 =" + check1);
    var check2 = genderControl();
    console.log("genderControl =" + check2);
    var check3 = isPhone();
    console.log("isPhone =" + check3);
    var check4 = contactCheck("contactChecks1", 1);
    console.log("contactCheck1 =" + check4);
    if (checkWantTel.checked) {
        var check5 = contactCheck("contactChecks2", 1)
        console.log("contactCheck2 =" + check5);
    }
    else {
        var check5 = true;
    }
    
    return check1 && check2 && check3 && check4 && check5;
}
function colorBorder(id, bool, note) {
    var id = document.getElementById(id);
    if (bool == true) {
        if (id.className == "wrongInput") {
            id.className = "trueInput";
        }
        else {
            id.className = "normalInput";
        }
    }
    else {
        id.className = "wrongInput";
        if (note != null) {
            alert(note);
        }
    }
}

function slangCheck() {
    var slang = ["fuck", "muck", "slang", "administrator","president"]
    var fName = document.getElementById('fName');
    var lName = document.getElementById('lName');
    //console.log("fName= " + fName.value + ". lName= " + lName.value);
    for (var i = 0; i <= slang.length; i++) {
        //console.log("deneme " + i);
        if (fName.value == slang[i]) {
            //console.log(i+" slang " + fName.value);
            slangInput(fName);
            return false;
            break;
        }
        else {
            if (fName.className == "slangInput") {
                notSlangInput(fName);
                
            }
            return true;
        }
    }
}

function slangInput(x) {
    x.className = "slangInput";
    alert("No slang words please");
    
}

function notSlangInput(x) {
    x.className = "notSlangInput";    
}


var maleNames = ["Ahmet", "Mehmet", "Ali", "Veli", "Daniel"];
var femaleNames = ["Ayşe", "Fatma", "Düriye"];
var unisexNames = ["Deniz", "Derya", "Tsubasa"]
var genderSure;
var genderIndex;
var otherGender;
var otherGenderNames;
var genderNames;


function genderControl() {
    if (contactCheck("gender", 1) == false) {
        colorBorder("genderDiv", false,"Bir cinsiyet seçiniz");
        return false;
    }
    else {


        var gender = document.querySelector('input[name="gender"]:checked').value;
        findOtherGender(gender);
        //console.log("gender= " + gender + ". Other gender= " + otherGender);


        //console.log("1 aynı mı? " + genderSure + " " + fName.value);
        if (browseName(fName.value, otherGenderNames)) {
            if (genderSure === fName.value) {
                alert("We are adding your name to unisexName list");
                genderSure = "";
                unisexNames[unisexNames.length] = fName.value;
                //console.log("unisexNames " + unisexNames);
                otherGenderNames.splice(genderIndex, 1);
                //console.log(otherGender + "Names " + otherGenderNames);
                colorBorder("genderDiv", true);
                return true;

            }
            else {
                genderSure = fName.value;
                //console.log("2 aynı mı? " + genderSure + " " + fName.value);
                colorBorder("genderDiv", false, "You say " + gender + ", but " + fName.value + " is a " + otherGender + " name.Are you sure? ");
                return false;
            }
        }
        else {
            if (browseName(fName.value, unisexNames)) {
                //console.log("zaten unisexNames listte kayıtlı.")
            }
            else {
                if (browseName(fName.value, genderNames)) {
                    //console.log("zaten " + genderNames + " listte kayıtlı.")
                }
                else {
                    genderNames[genderNames.length] = fName.value;
                    //console.log(gender + "Names " + genderNames);
                }
            }
            colorBorder("genderDiv", true);
            return true;

        }
    }
}    

function findOtherGender(gender) {
    if (gender == "male") {
        otherGender = "female";
        otherGenderNames = femaleNames;
        genderNames = maleNames;
    }
    else {
        if (gender == "female") {
            otherGender = "male";
            otherGenderNames = maleNames;
            genderNames = femaleNames;
        }
        else {
            //console.log("cinsiyet seçin")
        }
    }
}

function browseName(browsedName, group) {
    for (var i = 0; i <= group.length-1; i++) {
        //console.log(i + " deneme " + group[i]);
        if (sameName(browsedName, group[i])) {
            //console.log(i + " hmmm " + browsedName);
            genderIndex = i;
            return true;
            break;
        }
    }
}

function sameName(a, b) {
    return typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
        : a === b;

}


function isPhone() {
    var phoneCountry = document.getElementById("phoneCountry").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var pattern = /^5(0[5-7]|[3-5]\d)\d{7}$/;
    var wantTel = checkWantTel.checked;
    console.log("wantTel =" + wantTel + "   phoneCountry= " + phoneCountry + "phoneNumber= " + phoneNumber);
    if (wantTel == true) {

        if (isPhone2() == false) {
            colorBorder("phoneDiv2", false, "Write a valid phone number for Turkey please!");
            return false;
        }
        else { colorBorder("phoneDiv2", true)}
    }
    if (phoneCountry == 90) {
        var a = pattern.test(phoneNumber);
        console.log(phoneNumber + a);
        if (a == false)
            colorBorder("phoneDiv1", a, "Write a valid phone number for Turkey please!");
        else {colorBorder("phoneDiv1", a);
        }
            return a;
    }
    else {
        colorBorder("phoneDiv1", true)
        colorBorder("phoneDiv2", true)
        return true;
    }   
}


function isPhone2() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var phoneCountry2 = document.getElementById("phoneCountry2").value;
    var phoneNumber2 = document.getElementById("phoneNumber2").value;
    var pattern = /^5(0[5-7]|[3-5]\d)\d{7}$/;
    console.log("phoneCountry2= " + phoneCountry2 + "phoneNumber2= " + phoneNumber2);
    if (phoneCountry2 == 90) {
        console.log(phoneNumber2 + pattern.test(phoneNumber2));
        if (phoneNumber == phoneNumber2) {
            alert("You entered same number twice!");
            return false;
        }
        else {
            return pattern.test(phoneNumber2);
        }
    }
    else { return true; }

}

function showWantTel() {
    var wantTel = checkWantTel.checked;
    console.log("showWantTel = " + wantTel);
    if (wantTel == true) {
        wantTelArea.style.display = "block";
    }
    else {
        wantTelArea.style.display = "none";
    }
    
}

function contactCheck(name,piece) {
    var boxes = document.getElementsByName(name)
    var l=boxes.length;
    console.log(boxes);
    found = 0;
    for (var i = 0; i<l; i++) {
        if (boxes[i].checked == true) {
            found = found + 1;
            console.log(found);
        }
    }
    if (found >= piece) {
        return true;
        alert("checkbox succesfull");
    }
    else {
        return false;
        alert("please check a checkbox");
    }
    //var c = boxes[0].checked || boxes[1].checked || boxes[2].checked 
}



function billingFunction() {
    if (document.getElementById('same').checked) {
        console.log("checked");
        document.getElementById('billingName').removeAttribute('required');
        document.getElementById('billingZip').removeAttribute('required');
        var bName = document.getElementById('shippingName');
        var bZip = document.getElementById('shippingZip');
        document.getElementById('shippingName')
        console.log("bName= " + bName.value + "    bZip= " + bZip.value);
        console.log(bName);
        document.getElementById('billingName').value = bName.value;
        document.getElementById('billingZip').value = bZip.value;
        document.getElementById('billingName').disabled = true;
        document.getElementById('billingZip').disabled = true;
    }
    else {
        console.log("unchecked")
        document.getElementById('billingName').setAttribute('required', true);
        document.getElementById('billingZip').setAttribute('required', true);
        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";
        document.getElementById('billingName').disabled = false;
        document.getElementById('billingZip').disabled = false;
    }
}


