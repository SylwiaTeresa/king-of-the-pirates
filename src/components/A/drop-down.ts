const createcategorySelect = () => {
    const categorySelect = document.createElement("select") as HTMLSelectElement;
    categorySelect.classList.add("categorySelect");
    categorySelect.innerHTML = `
    <option value="boats">Boats</option>
    <option value="fruits">Fruits</option>
    `;

    return categorySelect;
};

export default createcategorySelect;