import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";

const Dashboard = observer(() => {
    const rootStore = useContext(RootStoreContext);

    return(
        <>
        
        </>
    )

})


export default Dashboard;