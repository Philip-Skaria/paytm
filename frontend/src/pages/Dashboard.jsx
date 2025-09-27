import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/User";

export function Dashboard(){
    return <div>
        <Appbar/>
        <div className="n-8">
            <Balance value={"10,000"}/>
            <Users/>
        </div>
    </div>
}