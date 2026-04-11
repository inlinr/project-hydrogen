const steps = [
    {
        title: "1. Pobór i Filtracja Wody",
        text: "Proces rozpoczynamy od pobrania wody z mórz lub oceanów. Woda ta poddawana jest zaawansowanej filtracji i odsoleniu, aby uzyskać czyste H<sub>2</sub>O gotowe do reakcji. Dzięki temu wykorzystujemy zasób, którego na Ziemi mamy pod dostatkiem.",
        media: '<div class="video-container"><iframe src="https://www.youtube-nocookie.com/embed/1xcGmv25rxM?si=z3gjR2_Zghg1b1F3" frameborder="0" allowfullscreen></iframe></div>'
    },
    {
        title: "2. Elektroliza - Serce Systemu",
        text: 'Wykorzystując nadwyżki energii z OZE, przeprowadzamy elektrolizę. Prąd elektryczny rozbija wodę na tlen i wodór: </p><p class="chemical-equation">2H<sub>2</sub>O + energia → 2H<sub>2</sub> + O<sub>2</sub></p> <br> <p>Tlen uwalniamy, a wodór staje się naszym magazynem energii.',
        media: '<div class="video-container"><iframe src="https://www.youtube-nocookie.com/embed/38ULHoKWZag?si=CsltgMyrl3p9LKWP" frameborder="0" allowfullscreen></iframe></div>'
    },
    {
        title: "3. Magazynowanie Energii",
        text: "Wodór w formie gazowej jest sprężany i trafia do zbiorników. Działa jak gigantyczny magazyn, który w przeciwieństwie do baterii, może przechowywać energię przez wiele miesięcy bez żadnych strat.",
        media: '<div class="description-emotes">📂🔋</div>'
    },
    {
        title: "4. Ogniwa - Czysty Odzysk",
        text: 'Gdy potrzebujemy prądu, wodór łączy się z tlenem w ogniwie paliwowym. </p><p class="chemical-equation">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O + energia</p> <br> <p>Jedynym produktem ubocznym jest czysta para wodna. Żadnego CO<sub>2</sub>, żadnych spalin.',
        media: '<div class="description-emotes">⚡💨</div>'
    },
    {
        title: "5. Powrót do Natury",
        text: "Wytworzona para wodna trafia do atmosfery i wraca na Ziemię jako deszcz. Woda ponownie zasila oceany, zamykając idealną pętlę. To technologia, która w pełni szanuje naturalne cykle naszej planety.",
        media: '<div class="description-emotes">🌧️🌊</div>'
    }
];

let currentStep = 0;

function updateStep() {
    const content = document.getElementById('step-content');
    const step = steps[currentStep];
    
    // Instead of hardcoding, fetch logic from translations
    const titleKey = 'step' + (currentStep + 1) + '_title';
    const textKey = 'step' + (currentStep + 1) + '_text';
    
    let displayTitle = titleKey;
    let displayText = textKey;
    if (typeof translations !== 'undefined' && translations[currentLang]) {
        displayTitle = translations[currentLang][titleKey] || step.title;
        displayText = translations[currentLang][textKey] || step.text;
    }

    content.innerHTML = `
        <h2 class="card-title">${displayTitle}</h2>
        <p class="card-description">${displayText}</p>
        ${step.media}
    `;

    document.getElementById('prev-btn').className = currentStep === 0 ? 'btn-prev hidden' : 'btn-prev';
    if (typeof translations !== 'undefined' && translations[currentLang]) {
        document.getElementById('next-btn').innerText = currentStep === steps.length - 1 ? translations[currentLang].btn_home : translations[currentLang].btn_next;
    } else {
        document.getElementById('next-btn').innerText = currentStep === steps.length - 1 ? 'Powr\u00f3t do strony g\u0142\u00f3wnej' : 'Nast\u0119pny krok';
    }

    lucide.createIcons();
}

document.addEventListener('languageChanged', () => {
    updateStep();
});

function nextStep() { currentStep === steps.length - 1 ? goHome() : currentStep = (currentStep + 1) % steps.length; updateStep(); }
function prevStep() { if (currentStep > 0) { currentStep--; updateStep(); } }
function goHome() { if (currentStep === steps.length - 1) { window.location.href = 'index.html'; } }

updateStep();


