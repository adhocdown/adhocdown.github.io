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

async function includeHTML() {
  /* Find all elements with the "include-html" attribute */
  const elements = document.querySelectorAll("[include-html]");
  if (elements.length === 0) return;

  for (const elmnt of elements) {
    const file = elmnt.getAttribute("include-html");
    /* Remove the attribute immediately to prevent infinite loops if fetch fails */
    elmnt.removeAttribute("include-html");

    if (file) {
      try {
        const response = await fetch(file);
        elmnt.innerHTML = response.ok ? await response.text() : "Page not found.";
      } catch (err) {
        elmnt.innerHTML = "Error loading content.";
        console.error("Inclusion error:", err);
      }
    }
  }
  /* Recursively call to handle potential nested includes in newly added content */
  await includeHTML();
}