function generate() {

    // Getting input values
    var grNum = document.getElementById("grNum").value;
    var issueDate = document.getElementById("issueDate").value;
    var fullname = document.getElementById("name").value;
    var father = document.getElementById("father").value;
    var religion = document.getElementById("religion").value;
    var cast = document.getElementById("cast").value;
    var birthPlace = document.getElementById("birthPlace").value;
    var birthDate = document.getElementById("birthDate").value;
    var birthDateNWord = document.getElementById("birthDateNWord").value;
    var lastSchool = document.getElementById("lastSchool").value;
    var admissionDate = document.getElementById("admissionDate").value;
    var currentClass = document.getElementById("currentClass").value;
    var admissionClass = document.getElementById("admissionClass").value;
    var dues = document.getElementById("dues").value;
    var leavingDate = document.getElementById("leavingDate").value;
    var reason = document.getElementById("reason").value;
    var progress = document.getElementById("progress").value;
    var conduct = document.getElementById("conduct").value;
    var remark = document.getElementById("remark").value;
    var note = document.getElementById("note").value;

    // Load image
    var img = new Image();
    img.src = "https://codewriter027.github.io/pecs/assets/LC-image.png";
    img.onload = function () {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        
        canvas.width = img.width;
        canvas.height = img.height;
        
        ctx.drawImage(img, 0, 0);
        ctx.font = "45px PlusJakartaSans-SemiBold";
        ctx.fillStyle = "black";

        // Drawing text on image
        ctx.fillText(fullname, 650, 1410);
        ctx.fillText(father, 650, 1530);
        ctx.fillText(religion, 650, 1645);
        ctx.fillText(birthPlace, 650, 1765);
        ctx.fillText(birthDateNWord, 650, 1885);
        ctx.fillText(lastSchool, 650, 2000);
        ctx.fillText(admissionDate, 650, 2125);
        ctx.fillText(currentClass, 650, 2245);
        ctx.fillText(reason, 750, 2360);
        ctx.fillText(leavingDate, 650, 2480);

        ctx.textAlign = "center";

        ctx.fillText(grNum, 420, 1290);
        ctx.fillText(issueDate, 1950, 1290);
        ctx.fillText(cast, 1810, 1645);
        ctx.fillText(admissionClass, 1970, 2125);
        ctx.fillText(birthDate, 1870, 1765);
        ctx.fillText(dues, 1810, 2245);
        ctx.fillText(progress, 425, 2600);
        ctx.fillText(conduct, 980, 2600);
        ctx.fillText(remark, 1700, 2600);

        ctx.font = "36px PlusJakartaSans-SemiBold";

        ctx.fillText(note, 1090, 2660);
        
        // Convert to base64
        var base64 = canvas.toDataURL("image/png");
        document.getElementById("output").src = base64;
        document.getElementById("output").style.display = "block";
        document.getElementById("print").style.display = "block";
    }
};


function generateLc(){
    window.location.href = "https://codewriter027.github.io/pecs/lc-generate.html";
}
