function calculate() {
    const energyInput = document.getElementById('energyInput');
    const energyIn = parseFloat(energyInput.value);
    const resultsDiv = document.getElementById('results');

    if (energyIn >= 0) {
        const efficiencyEle = 0.75;
        const efficiencyCell = 0.60;
        const h2Density = 33.3;
        const homeUsagePerDay = 12;

        const hydrogenKg = (energyIn * efficiencyEle) / h2Density;
        const energyOut = energyIn * efficiencyEle * efficiencyCell;
        const losses = energyIn - energyOut;
        const days = Math.floor(energyOut / homeUsagePerDay);

        document.getElementById('energyOut').innerText = energyOut.toFixed(2) + " kWh";
        document.getElementById('loss').innerText = losses.toFixed(2) + " kWh";
        document.getElementById('h2Mass').innerText = hydrogenKg.toFixed(3) + " kg";

        const daySuffix = " " + ((days === 1) ? translations[currentLang].day_single : translations[currentLang].day_plural);
        document.getElementById('homeDays').innerText = days + daySuffix;

        resultsDiv.classList.add('visible');
    } else {
        alert(translations[currentLang].alert_invalid_energy);
    }
}

function stepUp() {
    const input = document.getElementById('energyInput');
    input.stepUp();
}

function stepDown() {
    const input = document.getElementById('energyInput');
    input.stepDown();
}

function toggleDetails() {
    const wrapper = document.getElementById('details-wrapper');
    const icon = document.getElementById('expand-icon');
    const text = document.getElementById('expand-text');

    wrapper.classList.toggle('expanded');
    icon.classList.toggle('rotate');

    if (wrapper.classList.contains('expanded')) {
        text.innerText = translations[currentLang].expand_text_hide;
    } else {
        text.innerText = translations[currentLang].expand_text_show;
    }
}

document.addEventListener('languageChanged', () => {
    // Refresh texts
    const wrapper = document.getElementById('details-wrapper');
    const text = document.getElementById('expand-text');
    if (wrapper.classList.contains('expanded')) {
        text.innerText = translations[currentLang].expand_text_hide;
    } else {
        text.innerText = translations[currentLang].expand_text_show;
    }
    
    // Retry calculation translation if value exists
    if (document.getElementById('homeDays').innerText !== "0 dni" && document.getElementById('homeDays').innerText !== "0 days" && document.getElementById('energyIn')) {
        calculate();
    }
});
