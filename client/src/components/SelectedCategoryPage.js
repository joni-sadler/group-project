import React from "react";
import ItemContainerSmall from "./ItemContainerSmall";

const SelectedCategoryPage = () => {

    return (
        <div>
            Page once category has been selected from dropdown.
            Fetch and map over items from within this category and display.
            <ItemContainerSmall />
        </div>
    )
}

export default SelectedCategoryPage;