<?php
// Check if the query parameter ?sitemap=1 is present
if (isset($_GET['sitemap']) && $_GET['sitemap'] == '1') {
    // Set the content type to XML
    header("Content-Type: application/xml; charset=utf-8");

    // Start the XML document
    echo '<?xml version="1.0" encoding="UTF-8"?>';
    echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    // Homepage
    echo '<url>';
    echo '<loc>https://snyperf1.github.io/f1/</loc>';
    echo '<lastmod>' . date('Y-m-d') . '</lastmod>';
    echo '<changefreq>daily</changefreq>';
    echo '<priority>1.0</priority>';
    echo '</url>';

    // Standings Page
    echo '<url>';
    echo '<loc>https://snyperf1.github.io/f1/standings</loc>';
    echo '<lastmod>' . date('Y-m-d') . '</lastmod>';
    echo '<changefreq>weekly</changefreq>';
    echo '<priority>0.9</priority>';
    echo '</url>';

    // Standings Page (with trailing slash)
    echo '<url>';
    echo '<loc>https://snyperf1.github.io/f1/standings/</loc>';
    echo '<lastmod>' . date('Y-m-d') . '</lastmod>';
    echo '<changefreq>weekly</changefreq>';
    echo '<priority>0.9</priority>';
    echo '</url>';

    // Portfolio Page (XPD)
    echo '<url>';
    echo '<loc>https://snyperf1.github.io/XPD</loc>';
    echo '<lastmod>' . date('Y-m-d') . '</lastmod>';
    echo '<changefreq>monthly</changefreq>';
    echo '<priority>1.0</priority>';
    echo '</url>';

    echo '</urlset>';
}
else {
    // Return a 404 or redirect if ?sitemap=1 is not specified
    header("HTTP/1.0 404 Not Found");
    echo "Sitemap not found!";
}
?>
