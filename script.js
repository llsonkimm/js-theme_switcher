const themes = [{
    name: "light", 
    message: "Hello sunshine — Light theme is on!"
},
{
    name: "dark", 
    message: "The night is yours — Dark theme is on!"
},
{
    name: "visual-dark", 
    message: "Visual-studio-code mode - Visual-dark theme is on!"
},
{
    name: "abyss", 
    message: "Into the Abyss — Abyss theme is on!"
}]



const button = document.getElementById("theme-switcher-button")
const themesDropDown = document.getElementById("theme-dropdown")
const menuItem = document.querySelectorAll('[role="menuitem"]')
const body = document.querySelector("body");
const themeMessage = document.getElementById("status")



    button.addEventListener("click", () => {
    const isHidden = themesDropDown.hasAttribute("hidden");
    
    if (isHidden) {
        themesDropDown.removeAttribute("hidden");
        button.setAttribute("aria-expanded", "true");
    } else {
        themesDropDown.setAttribute("hidden", "");
        button.setAttribute("aria-expanded", "false");
    }
});

menuItem.forEach(menu => {
        menu.addEventListener("click", () => {
            const selectedThemeName = menu.textContent.toLowerCase();
            const themeData = themes.find(t => t.name === selectedThemeName);

            if (themeData) {
                body.className = "";
                body.classList.add(`theme-${themeData.name}`);
                themeMessage.textContent = themeData.message;
               
            }
             themesDropDown.hidden = true;
                button.setAttribute("aria-expanded", "false");
        })
    

    })
   


