import React from "react";
import "./LandingPage.css";

function LandingPage() {
    return (
        <div class="grid-container">
            <div class="header">
                <h2>Welcome to Project GiveAway</h2>
            </div>
            <div class="left">
               <h3>About:</h3> 
                 <p>   The aim of Project GiveAway is to reduce food waste and increase access. 
                    We work with groceries stores, donors, and volunteers to source and distribute
                    wholesome food items to those who need it in community.
                    </p>
                </div>
            <div class="middle">  <h3>Provider Information:</h3> 
                 <p> The GiveAway Program cannot operate without the generous contributions
                     of providers. We acknowledge that it takes time and effort to select and 
                     package, and arrange suitable and wholesome products to be collected by 
                     volunteers. We are truly grateful for the individuals and corporations 
                     who sponsor, support or provide the products for this effort.

                     <p>We are actively seeking for more donors and providers to try to meet 
                     the growing demand for food and household products to support those 
                     in need in our community. </p>
                     
                     

                     
                    </p></div>
            <div class="right">  <h3>Volunteer Information:</h3> 
                 <p> Without volunteers, the task of collecting and distributing donated
                     products would be overwhelming.

                     We appeal to those who are able to help out to register as volunteers.
                    </p></div>
            <div class="footer">
                <p>2021 © Project GiveAway</p>
            </div>
        </div>
    );
}

export default LandingPage;
