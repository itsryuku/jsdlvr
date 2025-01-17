fetch('https://www.bwin.de/de/api/clientconfig', {
  credentials: 'include',
  headers: { 'X-Bwin-Browser-Referrer': 'https://sports.bwin.de/' }
})
  .then(res => res.json())
  .then(console.log);

