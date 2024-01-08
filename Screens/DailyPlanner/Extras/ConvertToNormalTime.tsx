function convertTimeToNormal(militaryString : string) : string {
    const zeroPad = (numString : string, places : number) => String(numString).padStart(places, '0')
    let normalString = ""

    const militaryHours = parseInt(militaryString.substring(0, militaryString.indexOf(":")))
    const militaryMinutes = parseInt(militaryString.substring(militaryString.indexOf(":") + 1))

    if (militaryHours == 0) {
        normalString = "12:" + zeroPad(String(militaryMinutes), 2) + " AM"
    } else if (militaryHours >= 13) {
        normalString = zeroPad(String(militaryHours - 12), 1) + ":" + zeroPad(String(militaryMinutes), 2) + " PM"
    } else if (militaryHours == 12) {
        normalString = zeroPad(String(militaryHours), 1) + ":" + zeroPad(String(militaryMinutes), 2) + " PM" 
    } else {
        normalString = zeroPad(String(militaryHours), 1) + ":" + zeroPad(String(militaryMinutes), 2) + " AM"
    }

    return normalString
}

export default convertTimeToNormal;