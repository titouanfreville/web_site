function emptyField(s) {
    if (s.value.length == 0) return true ;
    for (var i = 0; i < s.value.length; i++) {
   var ch = s.value.charAt(i);
   if (ch != ' ' && ch != ' ') return false ;
    }
    return true;
}

function get_radio_value(radio) {
    var val = ''
    for (var i = 0; i < radio.length; i++) {
   if (radio[i].checked) {
       val = radio[i].value
   }
    }
    return val
}

function valid_email(e) {
    if (e.value.length == 0) return true ;
    var has_aro = false ;
    for (var i = 0; i < e.value.length; i++) {
   var ch = e.value.charAt(i);
   if (ch == '@') has_aro = true ;
   if (ch == '.' && has_aro) return true ;
   }
   return false ;
}

function valid_adresse_site(f) {
    var debut = '' ;
    for (var i = 0; i < f.value.length; i++) {
   debut = debut + f.value.charAt(i);
   if (debut == 'http://') return true ;
   if (debut == 'https://') return true ;
    }
   return false ;
}

function isHtmlFile(f) {
    var fin = '' ;
    for (var i = f.value.length - 1 ; i > 0 ; i--) {
   fin = fin + f.value.charAt(i) ;
   if (fin == 'lmth.' || fin == 'mth.' || fin == 'LMTH.' || fin == 'MTH.') return true ;
   if (fin == 'php.' || fin == 'PHP.' || fin == 'lmths.' || fin == 'LMTHS.') return true ;
    }
    return false ;
}


function apercu(formid) {
    newwin = window.open( "form2mail.cgi?session=&mode=apercu&formid=" + formid, 'apercu')
    newwin.focus()
}

function aide_generale(file) {
    var url = 'http://www.mon-formulaire.com/aide/' + file ;
    newwin = window.open(url, 'aide','toolbar=0, location=0, directories=0, status=0, scrollbars=1, resizable=1, copyhistory=0, menuBar=0, width=500, height=400') ;
    newwin.focus() ;
}



var msgWindow ;

function close_msgWindow() {
    if (msgWindow) {
   msgWindow.close() ;
    }
}

function validate(f) {
    var isOK = true && valid_n133374(f) && valid_n133375(f) && valid_n133377(f) && valid_n133376(f) ;

    if (false) {

   if (isOK) {
       var url = 'http://www.mon-formulaire.com/aide/patienter.html';
       msgWindow = window.open(url, 'msg','toolbar=0, location=0, directories=0, status=0, scrollbars=0, resizable=0, copyhistory=0, menuBar=0, titlebar=0, alwaysRaised=1, left=300, top=300, width=300, height=200') ;
       msgWindow.focus() ;
   }

    }
    return isOK ;
}

function valid_n133374(f) {
    if (f.n133374.value == '' || emptyField(f.n133374)) {
        alert("Merci de renseigner le champ Votre nom") ;
   f.n133374.focus() ;
   return false ;
    }

    return true ;
}

function valid_n133375(f) {
    if (f.n133375.value == '' || emptyField(f.n133375)) {
        alert("Merci de renseigner le champ Votre prénom") ;
   f.n133375.focus() ;
   return false ;
    }

    return true ;
}

function valid_n133377(f) {
    if (f.n133377.value == '' || emptyField(f.n133377)) {
        alert("Merci de renseigner le champ Votre e-mail") ;
   f.n133377.focus() ;
   return false ;
    }

   if (!(valid_email(f.n133377))) {
       alert("Cette adresse e-mail n'est pas correcte") ;
       f.n133377.focus() ;
       return false ;
   }

    return true ;
}

function valid_n133376(f) {
    if (f.n133376.value == '' || emptyField(f.n133376)) {
        alert("Merci de renseigner le champ Votre message") ;
   f.n133376.focus() ;
   return false ;
    }

    return true ;
}