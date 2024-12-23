document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#warrant-table tbody");

    fetch("data/warrants.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((warrant) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${warrant.id}</td>
                    <td>${warrant.name}</td>
                    <td>${warrant.offense}</td>
                    <td>${warrant.warrantDate}</td>
                    <td>${warrant.status}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch((error) => console.error("Error loading data:", error));
});
