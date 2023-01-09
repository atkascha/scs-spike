// build mock data;
let DATA = {
  'new followers': [],
  'subscribers': [],
  'donations': [],
  'gifters': [],
  'bits': []
}

function getRandomName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
}

function buildData() {
  const FOLLOWERS = parseInt(document.querySelector('#followers').value);
  const DONATIONS = parseInt(document.querySelector('#donations').value);
  const SUBSCRIBERS = parseInt(document.querySelector('#subscribers').value);
  const BITS = parseInt(document.querySelector('#bits').value);
  const GIFTERS = parseInt(document.querySelector('#gifters').value)

  const map = {
    'new followers': FOLLOWERS,
    'donations': DONATIONS,
    'subscribers': SUBSCRIBERS,
    'gifters': GIFTERS,
    'bits': BITS
  }

  for (let key in DATA) {
    let count = map[key];
    for (let i = 0; i < count; i++) {
      DATA[key].push(getRandomName());
    }
  }
}
