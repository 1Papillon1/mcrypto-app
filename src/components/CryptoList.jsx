import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";

const CryptoList = observer(() => {
    // Pristupite `rootStore` preko konteksta
    const rootStore = useContext(RootStoreContext);

    // Pristupite `cryptoStore` iz `rootStore`
    const { cryptoStore } = rootStore;

    useEffect(() => {
        cryptoStore.fetchCryptos(); // Poziva se kada se komponenta montira.
        console.log(cryptoStore.cryptos);
    }, [cryptoStore]);

    if (cryptoStore.isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Cryptocurrency Prices</h1>
            <ul>
                {cryptoStore.cryptos.map((crypto) => (
                    <li key={crypto.asset_id}>
                        {crypto.name || crypto.asset_id}: ${crypto.price_usd.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default CryptoList;