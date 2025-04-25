const translations = {
  ru: {
    title: "Что такое EFHC?",
    description: "EFHC (Energy For Humanity Coin) — это криптовалюта, обеспеченная энергией, которая будет использоваться для реализации базового дохода для всего человечества."
  },
  uk: {
    title: "Що таке EFHC?",
    description: "EFHC (Energy For Humanity Coin) — це криптовалюта, забезпечена енергією, яка буде використовуватися для реалізації базового доходу для всього людства."
  },
  en: {
    title: "What is EFHC?",
    description: "EFHC (Energy For Humanity Coin) is a cryptocurrency backed by energy, which will be used for implementing a universal basic income for all humanity."
  }
};

function switchLanguage(language) {
  document.getElementById("title").textContent = translations[language].title;
  document.getElementById("description").textContent = translations[language].description;
}
