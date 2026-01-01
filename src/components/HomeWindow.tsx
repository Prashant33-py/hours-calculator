import { useEffect } from "react";
import type { LoginTime } from "../types/LoginTime";
import { Cycle } from "../types/TimeCycle";
import type { WorkingHours } from "../types/WorkingHours";

function HomeWindow() {
    var loginTime: LoginTime = {
        loginHour: 10,
        loginMinute: 30,
        cycle: Cycle.AM
    };
    var workingHours: WorkingHours = {
        hours: 8,
        mins: 30
    };
    var timeObj = {
        "loginTime": loginTime,
        "workingHours": workingHours
    }
    useEffect(() => {
        document.title = "Hours Calculator";
        console.log(timeObj);
        
        const fetchData = async () => {
            await fetch('http://localhost:8080/api/hours', {
                method: "POST",
                body: JSON.stringify(timeObj),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                console.log(response.json()
            );
                
            })
            .then((data) => {
                console.log("Fetched data:", data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        }
        fetchData();

    }, []);

    return <>

    </>;
}

export default HomeWindow;