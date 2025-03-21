document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the fresh start! 🚀");
  
    // Add a simple click effect on list items
    const listItems = document.querySelectorAll("ul li");
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        alert(`You clicked on: ${item.textContent}`);
      });
    });
  });
  