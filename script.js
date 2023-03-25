// Menu Toggle

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

document.querySelector('.open').addEventListener('click', openNav);
document.querySelector('.close').addEventListener('click', closeNav);

// Speakers section

const speakersArray = [
  {
    name: 'SohYeong Noh',
    summary: 'Director of Art Centre Nabi and a board member of CC Korea',
    studies:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding.',
    imgSrc: './images/speakers/speaker_01.png',
  },
  {
    name: 'Yochai Benkler',
    summary:
      'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies:
      'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    imgSrc: './images/speakers/speaker_02.png',
  },
  {
    name: 'Ryan Merkley',
    summary:
      'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    imgSrc: './images/speakers/speaker_03.png',
  },
  {
    name: 'Lila Tretikov',
    summary: 'Executive Director of the Wikimedia Foundation',
    studies:
      'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available.',
    imgSrc: './images/speakers/speaker_04.png',
  },
  {
    name: 'Kilnam Chon',
    summary:
      'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. ',
    imgSrc: './images/speakers/speaker_05.png',
  },
  {
    name: 'Julia Reda',
    summary: 'President of Young Pirates of Europe',
    studies:
      'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s reports',
    imgSrc: './images/speakers/speaker_06.png',
  },
];

const speakersContainer = document.getElementById('speaker-list');
const speakersButton = document.getElementById('more-speaker');

function displaySpeakers(speakers) {
  speakersContainer.innerHTML = speakers
    .map(
      ({
        name, summary, studies, imgSrc,
      }) => `
    <div class="speaker">
      <div class="img-container">
          <img src="${imgSrc}" alt="speaker">
      </div>
      <div class="speaker-info-container">
        <h4 class="speaker-name">${name}</h4>
        <p class="speaker-summary">${summary}</p>
        <hr class="speaker-hr">
        <p class="speaker-studies">${studies}</p>
      </div>
    </div>
`,
    )
    .join('');
}

function handleMoreSpeakersClick() {
  displaySpeakers(speakersArray);
  speakersButton.style.display = 'none';
}

if (window.matchMedia('(min-width: 768px)').matches) {
  displaySpeakers(speakersArray);
} else {
  displaySpeakers(speakersArray.slice(-2));
  speakersButton.addEventListener('click', handleMoreSpeakersClick);
}
