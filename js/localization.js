const DEFAULT_LANG = 'pl';

const translations = {
    en: {
        // index.html
        title_main: "Energy Storage: Hydrogen Loop",
        subtitle_main: "From seawater to clean energy.",
        przewodnik_title: "Cycle Guide",
        przewodnik_desc: "Discover the chemical journey from seawater electrolysis to rainfall.",
        kalkulator_title: "Energy Calculator",
        kalkulator_desc: "Calculate energy storage efficiency based on renewable energy surpluses.",
        zastosowania_title: "Other Applications",
        zastosowania_desc: "Hydrogen in industry, transport, and as rocket fuel.",
        
        // General / Shared
        back_menu: "Back to menu",
        back_home: "Back to home",
        source: "Source",
        
        // kalkulator.html
        kalkulator_page_title: "Efficiency Calculator",
        kalkulator_page_desc: "Enter the renewable energy surplus to see the hydrogen storage potential.",
        input_label: "Renewable energy surplus (kWh):",
        btn_calc: "Calculate result",
        result_recovered: "Recovered energy:",
        result_loss: "Process losses:",
        expand_text_show: "Show details",
        expand_text_hide: "Hide details",
        detail_h2_mass: "Generated hydrogen (H₂):",
        detail_home_days: "Home power (12 kWh/d):",
        detail_efficiency: "Efficiency vs Pumped-storage:",
        efficiency_value: "approx. 30% lower",
        info_note: "Hydrogen allows for long-term energy storage without self-discharge, which is crucial for seasonal cycles.",
        day_single: "day",
        day_plural: "days",
        alert_invalid_energy: "Please enter a valid energy value.",
        
        // przewodnik.html actions
        btn_prev: "Previous",
        btn_next: "Next step",
        btn_home: "Back to home",
        step1_title: "1. Water Intake and Filtration",
        step1_text: "We start the process by taking water from seas or oceans. This water undergoes advanced filtration and desalination to get pure H<sub>2</sub>O ready for reaction. This way we use a resource that is abundant on Earth.",
        step2_title: "2. Electrolysis - The Heart of the System",
        step2_text: "Using renewable energy surpluses, we perform electrolysis. Electric current splits water into oxygen and hydrogen: </p><p class=\"chemical-equation\">2H<sub>2</sub>O + energy → 2H<sub>2</sub> + O<sub>2</sub></p> <br> <p>We release oxygen, and hydrogen becomes our energy storage.",
        step3_title: "3. Energy Storage",
        step3_text: "Hydrogen in gaseous form is compressed and stored in tanks. It acts as a giant reservoir, which, unlike batteries, can store energy for many months without any losses.",
        step4_title: "4. Fuel Cells - Clean Recovery",
        step4_text: "When we need electricity, hydrogen combines with oxygen in a fuel cell. </p><p class=\"chemical-equation\">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O + energy</p> <br> <p>The only byproduct is pure water vapor. No CO<sub>2</sub>, no exhaust.",
        step5_title: "5. Return to Nature",
        step5_text: "The generated water vapor goes into the atmosphere and returns to Earth as rain. Water feeds the oceans again, closing a perfect loop. It's a technology that fully respects our planet's natural cycles.",

        // zastosowania.html
        zast_header: "Other Applications of Hydrogen",
        zast_subheader: "Click the icons below to discover how hydrogen is transforming various industries.",
        tab_transport: "Transport",
        tab_metallurgy: "Metallurgy",
        tab_space: "Space",
        tab_medicine: "Medicine",
        tab_agriculture: "Agriculture",
        
        trans_h3: "Heavy and Long-Distance Transport",
        trans_p: "Electric batteries (like in Tesla cars) are great for passenger vehicles, but in trucks and trains they would weigh too much. This is where hydrogen comes in.",
        trans_li1_strong: "Hydrogen trains:",
        trans_li1: " Trains like the <em>Alstom Coradia iLint</em> are already running in Europe, replacing diesel locomotives where there are no overhead lines.",
        trans_li2_strong: "Fast refueling:",
        trans_li2: " Instead of charging a battery for several hours, a truck's hydrogen tank fills up in a few minutes.",
        trans_li3_strong: "Range:",
        trans_li3: " Fuel cell vehicles can travel over 1000 km on a single tank.",
        
        hut_h3: "Metallurgy and Green Steel (DRI Process)",
        hut_p: "Steel production accounts for about 7-9% of global CO2 emissions. Traditionally, coking coal is used to reduce iron ore. This can be changed by using hydrogen.",
        hut_math: "Hydrogen reduction reaction:",
        hut_li1_strong: "No CO2:",
        hut_li1: " The byproduct is water vapor (H2O), not carbon dioxide.",
        hut_li2_strong: "Massive demand:",
        hut_li2: " The chemical (fertilizer) and refining industries are the largest consumers of hydrogen today.",
        
        kos_h3: "The Most Powerful Rocket Fuel",
        kos_p: "When every gram of weight matters, space engineers reach for hydrogen. Liquid hydrogen (LH2) combined with liquid oxygen (LOX) gives very high efficiency.",
        kos_li1_strong: "Low temperature:",
        kos_li1: " For hydrogen to become a liquid, it must be cooled to approx. <strong>-253°C</strong>.",
        kos_li2_strong: "History:",
        kos_li2: " This fuel powered the upper stages of the <em>Saturn V</em> rocket in the Apollo missions.",
        kos_li3_strong: "Present:",
        kos_li3: " Modern rocket systems also use liquid hydrogen.",
        
        med_h3: "Medicine and medical technologies",
        med_p: "Hydrogen is being studied as a support for therapies related to oxidative stress and inflammation. In pharmacy, it also participates in the synthesis of selected active substances.",
        med_li1_strong: "Clinical trials:",
        med_li1: " Its protective potential is analyzed in inflammatory and neurological diseases, among others.",
        med_li2_strong: "Drug production:",
        med_li2: " It takes part in hydrogenation reactions, important in the production of pharmaceutical compounds.",
        med_li3_strong: "Hospital infrastructure:",
        med_li3: " Fuel cells can provide emergency power for medical equipment.",
        
        rol_h3: "Fertilizer production",
        rol_p: "Hydrogen is crucial in the production of ammonia (NH3) in the Haber-Bosch process. Ammonia is the basis of nitrogen fertilizers, so this process is of immense importance for agriculture and global food production.",
        rol_math: "Ammonia synthesis (Haber-Bosch):",
        rol_li1_strong: "Nitrogen fertilizers:",
        rol_li1: " Most industrial ammonia production goes to fertilizers supporting crop yields.",
        rol_li2_strong: "Chemical raw material:",
        rol_li2: " Ammonia and derived nitrogen compounds are also used in plastics, household chemistry and industry."
    },
    pl: {
        // index.html
        title_main: "Magazynowanie Energii: Pętla Wodorowa",
        subtitle_main: "Od wody morskiej do czystej energii.",
        przewodnik_title: "Przewodnik po Cyklu",
        przewodnik_desc: "Poznaj chemiczną drogę od elektrolizy wody morskiej po opad deszczu.",
        kalkulator_title: "Kalkulator Energii",
        kalkulator_desc: "Oblicz wydajność magazynowania energii na podstawie nadwyżek z OZE.",
        zastosowania_title: "Inne Zastosowania",
        zastosowania_desc: "Wodór w przemyśle, transporcie i jako paliwo rakietowe.",
        
        // General / Shared
        back_menu: "Wróć do menu",
        back_home: "Wróć do strony głównej",
        source: "Źródło",
        
        // kalkulator.html
        kalkulator_page_title: "Kalkulator Wydajności",
        kalkulator_page_desc: "Wpisz wartość nadwyżki energii, aby zobaczyć potencjał magazynowania w wodorze.",
        input_label: "Nadwyżka energii z OZE (kWh):",
        btn_calc: "Oblicz wynik",
        result_recovered: "Energia po odzyskaniu:",
        result_loss: "Straty procesu:",
        expand_text_show: "Pokaż szczegóły",
        expand_text_hide: "Ukryj szczegóły",
        detail_h2_mass: "Wygenerowany wodór (H₂):",
        detail_home_days: "Zasilanie domu (12 kWh/d):",
        detail_efficiency: "Wydajność vs Pompowo-szczytowa:",
        efficiency_value: "ok. 30% niższa",
        info_note: "Wodór pozwala na długoterminowe magazynowanie energii bez strat samoistnych, co jest kluczowe w cyklach sezonowych.",
        day_single: "dzień",
        day_plural: "dni",
        alert_invalid_energy: "Proszę wpisać poprawną wartość energii.",
        
        // przewodnik.html actions
        btn_prev: "Wstecz",
        btn_next: "Następny krok",
        btn_home: "Powrót do strony głównej",
        step1_title: "1. Pobór i Filtracja Wody",
        step1_text: "Proces rozpoczynamy od pobrania wody z mórz lub oceanów. Woda ta poddawana jest zaawansowanej filtracji i odsoleniu, aby uzyskać czyste H<sub>2</sub>O gotowe do reakcji. Dzięki temu wykorzystujemy zasób, którego na Ziemi mamy pod dostatkiem.",
        step2_title: "2. Elektroliza - Serce Systemu",
        step2_text: 'Wykorzystując nadwyżki energii z OZE, przeprowadzamy elektrolizę. Prąd elektryczny rozbija wodę na tlen i wodór: </p><p class=\"chemical-equation\">2H<sub>2</sub>O + energia → 2H<sub>2</sub> + O<sub>2</sub></p> <br> <p>Tlen uwalniamy, a wodór staje się naszym magazynem energii.',
        step3_title: "3. Magazynowanie Energii",
        step3_text: "Wodór w formie gazowej jest sprężany i trafia do zbiorników. Działa jak gigantyczny magazyn, który w przeciwieństwie do baterii, może przechowywać energię przez wiele miesięcy bez żadnych strat.",
        step4_title: "4. Ogniwa - Czysty Odzysk",
        step4_text: 'Gdy potrzebujemy prądu, wodór łączy się z tlenem w ogniwie paliwowym. </p><p class=\"chemical-equation\">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O + energia</p> <br> <p>Jedynym produktem ubocznym jest czysta para wodna. Żadnego CO<sub>2</sub>, żadnych spalin.',
        step5_title: "5. Powrót do Natury",
        step5_text: "Wytworzona para wodna trafia do atmosfery i wraca na Ziemię jako deszcz. Woda ponownie zasila oceany, zamykając idealną pętlę. To technologia, która w pełni szanuje naturalne cykle naszej planety.",

        // zastosowania.html
        zast_header: "Inne Zastosowania Wodoru",
        zast_subheader: "Kliknij w poniższe ikony, aby odkryć, jak wodór zmienia różne gałęzie przemysłu.",
        tab_transport: "Transport",
        tab_metallurgy: "Hutnictwo",
        tab_space: "Kosmos",
        tab_medicine: "Medycyna",
        tab_agriculture: "Rolnictwo",
        
        trans_h3: "Transport Ciężki i Dalekobieżny",
        trans_p: "Baterie elektryczne (jak w autach Tesli) są świetne do osobówek, ale w ciężarówkach i pociągach ważyłyby zbyt wiele. Tutaj wkracza wodór.",
        trans_li1_strong: "Pociągi wodorowe:",
        trans_li1: " Składy takie jak <em>Alstom Coradia iLint</em> już kursują w Europie, zastępując lokomotywy spalinowe tam, gdzie nie ma trakcji elektrycznej.",
        trans_li2_strong: "Szybkie tankowanie:",
        trans_li2: " Zamiast ładować baterię przez kilka godzin, zbiornik wodoru w ciężarówce napełnia się w kilkanaście minut.",
        trans_li3_strong: "Zasięg:",
        trans_li3: " Pojazdy na ogniwa paliwowe mogą pokonać ponad 1000 km na jednym tankowaniu.",
        
        hut_h3: "Hutnictwo i Zielona Stal (Proces DRI)",
        hut_p: "Produkcja stali odpowiada za ok. 7-9% globalnej emisji CO<sub>2</sub>. Tradycyjnie do redukcji rudy żelaza używa się węgla koksowego. Można to zmienić, używając wodoru.",
        hut_math: "Reakcja redukcji wodorem:",
        hut_li1_strong: "Brak CO<sub>2</sub>:",
        hut_li1: " Produktem ubocznym jest para wodna (H<sub>2</sub>O), a nie dwutlenek węgla.",
        hut_li2_strong: "Potężny popyt:",
        hut_li2: " Przemysł chemiczny (nawozy) i rafineryjny to dziś najwięksi konsumenci wodoru.",
        
        kos_h3: "Najpotężniejsze Paliwo Rakietowe",
        kos_p: "Gdy liczy się każdy gram masy, inżynierowie kosmiczni sięgają po wodór. Ciekły wodór (LH<sub>2</sub>) w połączeniu z ciekłym tlenem (LOX) daje bardzo wysoką efektywność.",
        kos_li1_strong: "Niska temperatura:",
        kos_li1: " Aby wodór stał się cieczą, trzeba go schłodzić do ok. <strong>-253°C</strong>.",
        kos_li2_strong: "Historia:",
        kos_li2: " To paliwo napędzało górne stopnie rakiety <em>Saturn V</em> w misjach Apollo.",
        kos_li3_strong: "Teraźniejszość:",
        kos_li3: " Także nowoczesne systemy rakietowe wykorzystują ciekły wodór.",
        
        med_h3: "Medycyna i technologie medyczne",
        med_p: "Wodór jest badany jako wsparcie terapii związanych ze stresem oksydacyjnym i stanem zapalnym. W farmacji uczestniczy też w procesach syntezy wybranych substancji czynnych.",
        med_li1_strong: "Badania kliniczne:",
        med_li1: " Analizuje się jego potencjał ochronny m.in. w chorobach zapalnych i neurologicznych.",
        med_li2_strong: "Produkcja leków:",
        med_li2: " Bierze udział w reakcjach uwodorniania, ważnych przy wytwarzaniu związków farmaceutycznych.",
        med_li3_strong: "Infrastruktura szpitalna:",
        med_li3: " Ogniwa paliwowe mogą zapewnić awaryjne zasilanie aparatury medycznej.",
        
        rol_h3: "Produkcja nawozów",
        rol_p: "Wodór jest kluczowy w produkcji amoniaku (NH<sub>3</sub>) w procesie Habera-Boscha. Amoniak to podstawa nawozów azotowych, dlatego ten proces ma ogromne znaczenie dla rolnictwa i globalnej produkcji żywności.",
        rol_math: "Synteza amoniaku (Haber-Bosch):",
        rol_li1_strong: "Nawozy azotowe:",
        rol_li1: " Większość przemysłowej produkcji amoniaku trafia do nawozów wspierających plony.",
        rol_li2_strong: "Surowiec chemiczny:",
        rol_li2: " Amoniak i pochodne związki azotu są wykorzystywane również w tworzywach, chemii gospodarczej i przemyśle."
    }
};

let currentLang = localStorage.getItem('site_lang') || DEFAULT_LANG;

function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML is needed for some tags with spans/strong etc.
        }
    });

    const langToggleBtn = document.getElementById('lang-switch-checkbox');
    if (langToggleBtn) {
        langToggleBtn.checked = (currentLang === 'en');
    }
    
    // Set html lang attribute
    document.documentElement.lang = currentLang;

    // Trigger an event so other scripts (like kalkulator.js) know about the change
    const event = new Event('languageChanged');
    document.dispatchEvent(event);
}

function toggleLanguage() {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    localStorage.setItem('site_lang', currentLang);
    updateTranslations();
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    // Inject the language switcher HTML dynamically into the body if it doesn't exist but let's let html do it so there is no layout shift.
    updateTranslations();
});
