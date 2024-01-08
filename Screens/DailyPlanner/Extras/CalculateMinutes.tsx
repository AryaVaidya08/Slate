function calcMinutes(startTimeString : string, endTimeString : string) : number {
    const StartHours = parseInt(startTimeString.substring(0, startTimeString.indexOf(":")))
    const StartMinutes = parseInt(startTimeString.substring(startTimeString.indexOf(":") + 1))
  
    const EndHours = parseInt(endTimeString.substring(0, endTimeString.indexOf(":")))
    const EndMinutes = parseInt(endTimeString.substring(endTimeString.indexOf(":") + 1))
    
    const HoursBetween = EndMinutes - StartMinutes >= 0 ? EndHours - StartHours : EndHours - StartHours - 1
    const minutesBetween = EndMinutes - StartMinutes >= 0 ? EndMinutes - StartMinutes : 60 + EndMinutes - StartMinutes
    const totalMinutesBetween = (HoursBetween * 60) + minutesBetween

    return totalMinutesBetween
}

export default calcMinutes;