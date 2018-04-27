const articleRef = document.querySelector("#cooper");

const missionStatement = document.createElement("section")
const missionHeader = document.createElement("h3")
missionHeader.textContent = "Mission Statement"

const missionText = document.createElement("p")
missionText.textContent = "Tr la la la Mission Statement is here!"

missionStatement.appendChild(missionHeader)
missionStatement.appendChild(missionText)


articleRef.appendChild(missionStatement)

