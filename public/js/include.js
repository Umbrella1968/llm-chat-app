async function include(id, url) {
    const res = await fetch(url);
    document.getElementById(id).innerHTML = await res.text();
}

include("header", "partials/header.html");
include("footer", "partials/footer.html");
