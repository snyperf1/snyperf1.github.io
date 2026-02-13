<?php
if (isset($_GET['sitemap']) && $_GET['sitemap'] == '1') {
    header('Content-Type: application/xml; charset=utf-8');

    $today = date('Y-m-d');
    $urls = [
        ['loc' => 'https://snyperf1.github.io/', 'changefreq' => 'weekly', 'priority' => '1.0'],
        ['loc' => 'https://snyperf1.github.io/about.html', 'changefreq' => 'monthly', 'priority' => '0.9'],
        ['loc' => 'https://snyperf1.github.io/projects.html', 'changefreq' => 'monthly', 'priority' => '0.9'],
        ['loc' => 'https://snyperf1.github.io/experience.html', 'changefreq' => 'monthly', 'priority' => '0.9'],
        ['loc' => 'https://snyperf1.github.io/contact.html', 'changefreq' => 'monthly', 'priority' => '0.8'],
        ['loc' => 'https://snyperf1.github.io/XPD/index.html', 'changefreq' => 'yearly', 'priority' => '0.5']
    ];

    echo '<?xml version="1.0" encoding="UTF-8"?>';
    echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    foreach ($urls as $entry) {
        echo '<url>';
        echo '<loc>' . htmlspecialchars($entry['loc'], ENT_QUOTES, 'UTF-8') . '</loc>';
        echo '<lastmod>' . $today . '</lastmod>';
        echo '<changefreq>' . $entry['changefreq'] . '</changefreq>';
        echo '<priority>' . $entry['priority'] . '</priority>';
        echo '</url>';
    }

    echo '</urlset>';
} else {
    header('HTTP/1.0 404 Not Found');
    echo 'Sitemap not found!';
}
?>
