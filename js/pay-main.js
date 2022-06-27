/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */
var parser = document.createElement('a');

var parserhostname = 'upier-pp.vercel.app';
parser.href = new URLSearchParams(location.search);

function hideF() {
    document.getElementById("outputd").style.display = "none";
    document.getElementById("invalid").style.visibility = "hidden";
}
var amountset ='1';
var vpaset='';
function genLink() {
    if (vpa.value.indexOf("@") != -1) {
        document.getElementById("outputd").style.display = "block";
        document.getElementById("inputd").style.display = "none";
        document.getElementById("copiedtext").style.visibility = "hidden";
        // var amountset = document.getElementById("amount").value;
        vpaset = document.getElementById("vpa").value;
        if (amountset == "") {
            var linkset = "https://" + parserhostname + "/pay?vpa=" + vpaset;
            document.getElementById("outlink").value = linkset;
            document.getElementById("outlink").select();
        } else {
            var linkset = "https://" + parserhostname + "/pay?vpa=" + vpaset + "&amount=" + amountset;
            document.getElementById("outlink").value = "";
            document.getElementById("outlink").select();
        }
        // https://upier-pp.vercel.app/api?url=upi://pay?pn=kmlkantsrma-1@oksbi~tn=KAMAL~pa=kmlkantsrma-1@oksbi~cu=INR~am=1
        var payWith = 'https://'+parserhostname+'/api?url=upi://pay?pn='+vpaset+'~tn=KAMAL~pa='+vpaset+'~cu=INR~am='+amountset;
        var UpiToPay = 'upi://pay?pn='+vpaset+'&tn=KAMAL&pa='+vpaset+'&cu=INR&am='+amountset;
        document.getElementById("qrcodescan").src = payWith;
        document.getElementById("upibtn").href = UpiToPay;
        document.getElementById("holder").innerHTML = vpaset;
        document.getElementById("amountPaying").innerHTML = " "+amountset+" ₹";

        
    } else {
        document.getElementById("invalid").style.visibility = "visible";
        document.getElementById("vpa").value = "";
    }
}

function payLink() {
    // https://upier-pp.vercel.app/api?url=upi://pay?pn=kmlkantsrma-1@oksbi~tn=KAMAL~pa=kmlkantsrma-1@oksbi~cu=INR~am=1
    document.getElementById("qrcode1").src = 'https://upier-pp.vercel.app/api?url=upi://pay?pn='+vpaset+'~tn=KAMAL~pa='+vpaset+'~cu=INR~am='+amountset;
}

function share() {
    if (navigator.share) {
        navigator.share({
                title: 'Share | KAMAL',
                text: "*KAMAL* \n\nShareable Secure Payment's Scan for UPI :\n",
                url: window.location.href
            }).then(() => {
                console.log('Thanks for sharing!');
            })
            .catch(err => {
                console.log(`Couldn't share because of`, err.message);
            });
    } else {
        console.log('web share not supported');
    }
}



/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */