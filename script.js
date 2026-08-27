// IP-Informationen abrufen (mit kostenlosem API)
async function getIPInfo() {
    try {
        // Verwendet ipapi.co - kostenlos, keine Anmeldung nötig
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // IP anzeigen
        document.getElementById('ip-display').textContent = data.ip || 'Nicht verfügbar';
        
        // Standort anzeigen
        const city = data.city || 'Unbekannt';
        const region = data.region || 'Unbekannt';
        const country = data.country_name || 'Unbekannt';
        document.getElementById('location-display').textContent = 
            `${city}, ${region}, ${country}`;
        
        // Weitere Details
        const isp = data.org || 'Unbekannt';
        const timezone = data.timezone || 'Unbekannt';
        const details = `ISP: ${isp} | Zeitzone: ${timezone}`;
        document.getElementById('details-display').textContent = details;
        
    } catch (error) {
        document.getElementById('ip-display').textContent = 'Fehler beim Abrufen';
        document.getElementById('location-display').textContent = 'Fehler beim Abrufen';
        document.getElementById('details-display').textContent = 'Fehler beim Abrufen';
        console.error('IP-Fehler:', error);
    }
}

// Beim Laden ausführen
getIPInfo();
