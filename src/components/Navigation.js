// pages: account, dashboard, investment, optimisation
import React from 'react';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render = () => {
        const {user, page, openPage} = this.props;

        return (
            <nav>
                <div className="wrapper"> 
                    <button onClick={() => openPage("home")} className={page === "home" ? "active left" : "left"}>Portfolio Optimiser</button>
                    
                    <div className="right">
                        {user ? 
                            <>
                            <button onClick={() => openPage("dashboard")} className={page === "dashboard" ? "active" : ""}>Dashboard</button>
                            <button onClick={() => openPage("investments")} className={page === "investments" ? "active" : ""}>Investments</button>
                            <button onClick={() => openPage("optimiser")} className={page === "optimiser" ? "active" : ""}>Optimiser</button>
                            </>
                        : null}
                    </div>
                </div>
            </nav>
        )
    }
}
