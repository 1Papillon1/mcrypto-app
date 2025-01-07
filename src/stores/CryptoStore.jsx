import { makeAutoObservable } from "mobx";
import axios from "axios";

class CryptoStore {
    rootStore;

    cryptos = [];
    watchlist = [];
    isLoading = false;

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setCryptos(cryptos) {
        this.cryptos = cryptos;
    }

    setLoading(state) {
        this.isLoading = state;
    }

    async fetchCryptos() {
        this.setLoading(true);

        const API_KEY = process.env.REACT_APP_COINAPI_KEY;
        const endpoint = "https://rest.coinapi.io/v1/assets";

        try {
            const response = await axios.get(endpoint, {
                headers: { "X-CoinAPI-Key": API_KEY },
            });

            // Filtrirajte podatke kako biste prikazali samo osnovne informacije
            const filteredCryptos = response.data
                .filter((crypto) => crypto.price_usd) // Prikažite samo one sa dostupnom cenom
                .slice(0, 10); // Ograničite na prvih 10 kriptovaluta

            this.setCryptos(filteredCryptos);
        } catch (error) {
            console.error("Failed to fetch cryptos from CoinAPI:", error);
        } finally {
            this.setLoading(false);
        }
    }

    addToWatchlist(crypto) {
        if (!this.watchlist.some((c) => c.asset_id === crypto.asset_id)) {
            this.watchlist.push(crypto);
        }
    }

    removeFromWatchlist(cryptoId) {
        this.watchlist = this.watchlist.filter((c) => c.asset_id !== cryptoId);
    }

    clearAll() {
        this.cryptos = [];
        this.watchlist = [];
    }
}

export default CryptoStore;