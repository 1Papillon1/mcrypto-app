import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";

const CryptoView = observer(() => {

    const rootStore = useContext(RootStoreContext);

  
    const { cryptoStore } = rootStore;

   

    return (
        <div>
            
        </div>
    );
});

export default CryptoView;