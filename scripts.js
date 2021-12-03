// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
    console.log('window loaded');
    let flightStatus=document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let takeoff=document.getElementById("takeoff");
    let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    rocket.style.position='absolute';
    rocket.style.left='0px';
    rocket.style.bottom='0px';

   
        takeoff.addEventListener("click",function(){
            let response=window.confirm("Confirm that the shuttle is ready for takeoff");       
                flightStatus.innerHTML = "Shuttle in flight.";
                shuttleBackground.style.background="blue";
                spaceShuttleHeight.innerHTML="10000";
            })
            landing.addEventListener("click",function(){
            let landing = document.getElementById("landing");
                window.alert("The shuttle is landing. Landing gear engaged.")
                flightStatus.innerHTML =  "The shuttle has landed";   
                shuttleBackground.style.background="green";
                spaceShuttleHeight.innerHTML="0";
            
            })
            missionAbort.addEventListener("click",function(){
            let missionAbort=document.getElementById("missionAbort");           
                let response1=window.confirm("Confirm that you want to abort the mission."); 
                flightStatus.innerHTML = "Mission aborted.";
                shuttleBackground.style.background="green";
                spaceShuttleHeight.innerHTML="0";
                })
            let right = this.document.getElementById("right")
            right.addEventListener("click",function(){
                movement = parseInt(rocket.style.left)+10+'px'
                rocket.style.left=movement;
            })
            let left = this.document.getElementById("left");
            left.addEventListener("click",function(){
                movement=parseInt(rocket.style.left)-10+'px'
                rocket.style.left=movement;
            })
        
            let down  = this.document.getElementById("down");
            down.addEventListener("click",function(){
                movement = parseInt(rocket.style.bottom)-10+'px';
                rocket.style.bottom=movement;
                spaceShuttleHeight.innerHTML =parseInt(spaceShuttleHeight.innerHTML)-10000
            })
        
            let up = this.document.getElementById("up")
                up.addEventListener("click",function(){
                    movement=parseInt(rocket.style.bottom)+10+'px';
                    rocket.style.bottom =movement;
                    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+10000
        
                })

        })
