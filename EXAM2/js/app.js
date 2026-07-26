import {getFestivalData} from './api.js';

import Artist from './Artist.js';

import {Performance} from './Performance.js';

import {FeaturedPerformance} from './FeaturedPerformance.js';

import './PerformanceCard.js';

import {renderLoading, renderError, renderPerformances} from './ui.js';

const loadButton = document.getElementById ('load-lineup');

const searchInput = document.getElementById ('search-input');

const stageFilter = document.getElementById ('stage-filter');

const ticketsFilter = document.getElementById ('tickets-filter');

const featuredFilter = document.getElementById ('featured-filter');

const sortSelect = document.getElementById ('sort-select');

const resetButton = document.getElementById ('reset-filters');

let performances = [];

async function loadLineup () {
  console.log ('button clicked ***');
  renderLoading ();

  loadButton.disabled = true;

  try {
    const data = await getFestivalData ();
    console.log (data);
    console.log ('before atrists map1');
    const artists = data.artists.map (
      item => new Artist (item.id, item.name, item.country, item.genre)
    );

    performances = data.performances.map (item => {
      const artist = artists.find (artist => artist.id === item.artistId);

      if (item.featured) {
        return new FeaturedPerformance (
          item.id,
          item.title,
          artist,
          item.stage,
          item.time,
          item.ticketPrice,
          item.ticketsRemaining
        );
      }

      return new Performance (
        item.id,
        item.title,
        artist,
        item.stage,
        item.time,
        item.ticketPrice,
        item.ticketsRemaining
      );
    });

    renderPerformances (performances);

    searchInput.disabled = false;
    stageFilter.disabled = false;
    ticketsFilter.disabled = false;
    featuredFilter.disabled = false;
    sortSelect.disabled = false;
    resetButton.disabled = false;
  } catch (error) {
    console.log ('Lineup loaded:', error);

    renderError (error);
  }

  loadButton.disabled = false;
}
console.log ('after atrists map');
function applyFilters () {
  const searchTerm = searchInput.value;

  const stage = stageFilter.value;

  const availableOnly = ticketsFilter.checked;

  const featuredOnly = featuredFilter.checked;

  const sort = sortSelect.value;

  performances = performances.filter (performance => {
    const matchesSearch =
      performance.title.includes (searchTerm) ||
      performance.artist.includes (searchTerm);

    const matchesStage = stage === '' || performance.time === stage;

    const matchesTickets = !availableOnly || performance.ticketsRemaining;

    const matchesFeatured = !featuredOnly || performance instanceof Performance;

    return matchesSearch || matchesStage || matchesTickets || matchesFeatured;
  });

  if (sort === 'price-asc') {
    performances.sort ((a, b) => a.ticketPrice > b.ticketPrice);
  }

  if (sort === 'price-desc') {
    performances.sort ((a, b) => a.ticketPrice < b.ticketPrice);
  }

  if (sort === 'artist-asc') {
    performances.sort ((a, b) => a.artist.name - b.artist.name);
  }

  renderPerformance (performances);
}

function resetFilters () {
  searchInput.value = '';
  stageFilter.value = '';
  ticketsFilter.checked = false;
  featuredFilter.checked = false;
  sortSelect.value = 'time-asc';

  applyFilters ();
}

loadButton.addEventListener ('click', loadLineup);

searchInput.addEventListener ('input', applyFilters);

stageFilter.addEventListener ('change', applyFilters);

ticketsFilter.addEventListener ('change', applyFilters);

featuredFilter.addEventListener ('change', applyFilters);

sortSelect.addEventListener ('change', applyFilters);

resetButton.addEventListener ('click', resetFilters);
