<?php
$currentPage = $currentPage ?? '';
$pageTitle = $pageTitle ?? 'Nantha Venkat — Frontend Developer';
$navItems = [
    'home' => ['Home', 'index.php'],
    'projects' => ['Projects', 'projects.php'],
    'about' => ['About', 'about.php'],
    'experience' => ['Experience', 'experience.php'],
    'contact' => ['Contact', 'contact.php'],
];
?>
<!doctype html>
<html lang="en">

<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-89EX12J4MX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-89EX12J4MX');
</script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Manrope', 'sans-serif'],
                        mono: ['DM Mono', 'monospace']
                    },
                    colors: {
                        paper: '#f4f3ef',
                        ink: '#171716',
                        muted: '#73736e',
                        line: '#cfcec7'
                    }
                }
            }
        }
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="icon" sizes="32x32" href="./Image/envy.svg">
</head>

<body class="bg-paper font-sans text-ink antialiased">
    <header class="h-16 border-b border-line md:h-[77px]">
        <div class="mx-auto grid h-full w-full max-w-[1560px] grid-cols-[1fr_auto] items-center px-[clamp(1.25rem,3.1vw,3.5rem)] md:grid-cols-[1fr_auto_1fr]">
            <a class="flex items-center gap-1 text-[15px] font-extrabold tracking-[-.04em]" href="/index.php"><img src="Image/envy.svg" alt="" class="h-16 w-16">NANTHA VENKAT<sup>®</sup></a>
            <nav class="hidden gap-[clamp(15px,2vw,34px)] text-xs md:flex" aria-label="Main navigation">
                <?php foreach ($navItems as $key => [$label, $url]): ?>
                    <a href="<?= $url ?>" <?= $currentPage === $key ? ' class="underline decoration-1 underline-offset-8" aria-current="page"' : '' ?>><?= $label ?></a>
                <?php endforeach; ?>
            </nav>
            <a class="hidden justify-self-end text-[11px] font-bold tracking-[.04em] md:block" href="contact.php">START A PROJECT →</a>
            <button class="menu-toggle justify-self-end p-2 md:hidden" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span class="my-[5px] block h-px w-[22px] bg-ink"></span><span class="my-[5px] block h-px w-[22px] bg-ink"></span></button>
        </div>
    </header>
    <nav id="mobile-menu" class="mobile-menu fixed inset-x-0 top-16 z-10 hidden h-[calc(100vh-4rem)] flex-col gap-5 bg-paper px-[clamp(1.25rem,3.1vw,3.5rem)] py-8 text-[clamp(2.2rem,10vw,4rem)] font-bold leading-none tracking-[-.07em] md:hidden" aria-label="Mobile navigation">
        <?php foreach ($navItems as $key => [$label, $url]): ?>
            <a href="<?= $url ?>" <?= $currentPage === $key ? ' aria-current="page"' : '' ?>><?= $label ?></a>
        <?php endforeach; ?>
    </nav>