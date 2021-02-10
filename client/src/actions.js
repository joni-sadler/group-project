export const receiveCategories=(categories)=>({
    type: "RECEIVE_CATEGORIES",
    categories,
});

export const receiveItems=(items)=>({
    type: "RECEIVE_ITEMS",
    items,
});

export const receiveCompanies = (companies) => ({
    type: "RECEIVE_COMPANIES",
    companies,
});

export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    item,
});