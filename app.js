const audienceCards = document.querySelectorAll('[data-audience-card]');
const audienceContents = document.querySelectorAll('[data-audience]');
const phraseTabs = document.querySelectorAll('[data-phrase-tab]');
const phraseGroups = document.querySelectorAll('[data-phrase-group]');

function activateAudience(target) {
  audienceCards.forEach((card) => {
    card.classList.toggle('active', card.dataset.audienceCard === target);
  });

  audienceContents.forEach((content) => {
    content.classList.toggle('active', content.dataset.audience === target);
  });
}

function activatePhrase(target) {
  phraseTabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.phraseTab === target);
  });

  phraseGroups.forEach((group) => {
    group.classList.toggle('active', group.dataset.phraseGroup === target);
  });
}

audienceCards.forEach((card) => {
  card.addEventListener('click', () => activateAudience(card.dataset.audienceCard));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateAudience(card.dataset.audienceCard);
    }
  });
  card.tabIndex = 0;
});

phraseTabs.forEach((tab) => {
  tab.addEventListener('click', () => activatePhrase(tab.dataset.phraseTab));
});

activateAudience('resident');
activatePhrase('hospital');
