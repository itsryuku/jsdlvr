fetch(
    "https://www.bwin.fr/fr/api/clientconfig/partial?configNames=vnUser",
    {
        credentials: "include",
    }
)
    .then((response) => response.json())
    .then((data) => alert(JSON.stringify(data)));
