const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove leading "a", "an", "the" for sorting
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort without mutating original array
const sortedBands = bands.slice().sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

// Render sorted original names
const ul = document.getElementById("band");
sortedBands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band; // show original full name
  ul.appendChild(li);
});
