import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";

const Welcome = observer(() => {
    const rootStore = useContext(RootStoreContext);

    const { cryptoStore } = rootStore;

    return (
        <section className="hero">
            {/* <h1 className="hero__title">Welcome to Our Platform</h1>
            <p className="hero__subtitle">Your gateway to the world of cryptocurrency.</p> */}
            <h1 className="hero__title">Currently The site is under maintenance!</h1>
            <p className="hero__subtitle">We are working hard to bring you the best experience possible as soon as possible</p>
            {/* <button className="hero__button">Get Started</button> */}
        </section>
    )

})

export default Welcome;