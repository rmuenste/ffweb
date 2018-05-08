function showPic (whichpic, placeholder, desc) {
  placeholder = typeof(placeholder) != 'undefined' ? placeholder : 'placeholder';
  desc = typeof(desc) != 'undefined' ? desc : 'desc';
 
  if (document.getElementById) {
    document.getElementById(placeholder).src = whichpic.href;
  
    if (whichpic.title) {
      document.getElementById(desc).childNodes[0].nodeValue = whichpic.title;
    } else {
      document.getElementById(desc).childNodes[0].nodeValue = whichpic.childNodes[0].nodeValue;
    }
    
    document.getElementById(desc).href = whichpic.href;
    return false;
  } else {
    return true;
  }
}