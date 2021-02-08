import React from "react";
import ItemContainerSmall from "./ItemContainerSmall";

const SelectedCompanyPage = () => {

    return (
        <div>
            Page once company has been selected from dropdown.
            Fetch and map over items from this company and display.
            <ItemContainerSmall />
        </div>
    )
}

export default SelectedCompanyPage;