document.getElementById('warrantForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const warrantData = {
        warrantType: document.getElementById('warrantType').value,
        dateOfFiling: document.getElementById('dateOfFiling').value,
        officerName: document.getElementById('officerName').value,
        officerPosition: document.getElementById('officerPosition').value,
        department: document.getElementById('department').value,
        defendantName: document.getElementById('defendantName').value,
        defendantAddress: document.getElementById('defendantAddress').value,
        additionalInfo: document.getElementById('additionalInfo').value,
        pdfLink: document.getElementById('pdfLink').value,
    };

    // Log to Discord
    const webhookUrl = 'https://discord.com/api/webhooks/1320571670272151633/uhfALqIwR-5wYdz9wczepYYvy_08sN6OMIxto7vTVdu1CUHYCf4D16clj4Bofaf8OUph'; // Replace with your webhook URL
    const discordPayload = {
        embeds: [
            {
                title: 'New Warrant Request',
                fields: Object.entries(warrantData).map(([key, value]) => ({
                    name: key.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase()),
                    value: value || 'N/A',
                    inline: false,
                })),
                color: 3447003, // Blue
            },
        ],
    };

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(discordPayload),
        });
        alert('Warrant request submitted and logged to Discord!');
    } catch (err) {
        alert('Failed to log the request to Discord.');
        console.error(err);
    }

    // Display submitted request locally
    const list = document.getElementById('warrantList');
    const listItem = document.createElement('li');
    listItem.textContent = `Warrant Type: ${warrantData.warrantType}, Officer: ${warrantData.officerName}`;
    list.appendChild(listItem);

    this.reset();
});
