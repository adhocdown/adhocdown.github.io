/* 
Traverse the collection of all HTML elements.
Search for elements with specific attributes.
Create an HTTP request with the attribute value as the file name.
Delete the attribute and call this function again.
Exit function. 
*/

// window.onload = function() {
//   includeHTML(); // Call your function here
// };



function includeHTML() {
  /* Loop through a collection of all HTML elements: */
  id = document.getElementsByTagName("*");
  for (i = 0; i < id.length; i++) {
    elmnt = id[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}