import {db, ref, get} from "../../../Constants/FirebaseConstants"

/* --------- NOT BEING USED --------- */

let timeStamp = ""

let myPromise : Promise<any[]> = new Promise((resolve, reject) => {
  setTimeout( function(): void { 
    get(ref(db, `UserId/DailyPlanner/${timeStamp}`)).then(async (snapshot) => {
    if (snapshot.exists()) {   
        const data = snapshot.val() 
        const dayStuff = JSON.parse(JSON.stringify(data))
        resolve(dayStuff);
      } else {
        reject("No data found!");
        
      }
    }).catch((error) => {
      console.error(error);
    });   
  }, 1000);
});

async function getData(timeString) : Promise<any[]> {
  timeStamp = timeString;
  const dayData = await myPromise.then((value) => {
      console.log(value, "after")
      return dayData
  });

  return dayData;
}

export default getData;


/*
dayData = await get(ref(db, `UserId/DailyPlanner/${timeString}`)).then(async (snapshot) => {
  if (snapshot.exists()) {   
    const data = snapshot.val() 
    const dayStuff = JSON.parse(JSON.stringify(data))
    return dayStuff;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
*/