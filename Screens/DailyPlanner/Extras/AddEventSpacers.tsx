function addSpacers(dayData: any[]) : any[] {
    try {
        let extras : any[] = []
        let eventKeys : any[] = []
        let lastStartTime = "0:00"
        let lastEndTime = "0:00"
        
        for (const key in dayData) {
            eventKeys.push(key)
        }
        eventKeys.sort()

        for (let i = 0; i < eventKeys.length; i++) {

            extras.push({"Title" : "Placeholder", "Description" : "Placeholder", "Color" : "#fff", "Start" : lastEndTime, "End" : dayData[eventKeys[i]].Start, "Visible" : false})
            extras.push(dayData[eventKeys[i]])

            lastStartTime = dayData[eventKeys[i]].Start
            lastEndTime = dayData[eventKeys[i]].End
        }
        extras.push({"Title" : "Placeholder", "Description" : "Placeholder", "Color" : "#fff", "Start" : lastEndTime, "End" : "24:00", "Visible" : false})
        return extras;
    } catch {
        console.log("Shi is fucked up gang")
        return [];
    }
    
}

export default addSpacers;