// html for this js code Date 1th may 2023 
{/* <p>
  <label><input type="checkbox" id="checkbox" /> Checked</label>
</p>
<p>
  <button id="button">Click me to send a MouseEvent to the checkbox</button>
</p> */}




// Date 17th of may 2023 
// Humberger : A hamburger menu icon is a feature common to UI that uses three lines, like a burger between two buns, to depict a menu of items. A hamburger menu is a minimal button that reveals a hidden menu, typically represented with a three-line icon (hence the colloquial name "hamburger menu").

// What is the purpose of a hamburger button?
// The main purpose of the hamburger button is to preserve screen space by hiding navigational elements. The icon itself is small and implies a hidden list that can be revealed with a click or press.


function simulateClick() {
    // Get the element to send a click event
    const cb = document.getElementById("checkbox");
  
    // Create a synthetic click MouseEvent
    let evt = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
  
    // Send the event to the checkbox element
    cb.dispatchEvent(evt);
  }
  document.getElementById("button").addEventListener("click", simulateClick);
  