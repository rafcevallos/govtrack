// Challenge #1

// targets the "hook" in html to place DOM elements
const articleRef = document.querySelector("#cooper");

// Creating DOM Elements
// Create Section
const missionFunction = () => {
const missionStatement = document.createElement("section")

// Create Header and add text content
const missionHeader = document.createElement("h3")
missionHeader.textContent = "Mission Statement"

// Create Paragraph and add text content
const missionText = document.createElement("p")
missionText.textContent = "Tr la la la Mission Statement is here!"

// Append Section/Header/Paragraph to DOM
missionStatement.appendChild(missionHeader)
missionStatement.appendChild(missionText)
articleRef.appendChild(missionStatement)
}

missionFunction()   

// Advanced Challenge
// In JavaScript, there is a method that creates a new attribute node for any DOM 
// element. Discover that method and use it to create a custom attribute named 
// congressional-district and its value should be your congressional district number. 
// Then attach that attribute to the <article> container you made for your representative
// component.

function createAttribute() {
    newAttribute = document.createAttribute("congressional-district")
    newAttribute.value = "5"
    articleRef.setAttributeNode(newAttribute)
    }
    
    createAttribute()
    
