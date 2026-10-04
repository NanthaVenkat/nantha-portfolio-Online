<?php
$currentPage = 'projects';
$pageTitle = 'Projects — Nantha Venkat';
require __DIR__ . '/header.php';
?>
<main class="mx-auto max-w-[1560px] px-[clamp(1.25rem,3.1vw,3.5rem)] py-[clamp(65px,10vw,145px)]">
        <p class="font-mono text-[11px] text-orange-600">(002) SELECTED PROJECTS</p>
        <h1 class="mt-6 text-[clamp(4.3rem,10vw,11rem)] font-extrabold leading-[.79] tracking-[-.095em]">
            SELECTED<br>PROJECTS.</h1>
        <div class="mt-24 space-y-20">
            <article class="grid gap-5 border-t border-line pt-6 md:grid-cols-[75px_1.15fr_1fr]">
                <span class="font-mono text-[11px]">01</span>
                <a href="project-details.php?id=wp-dashboard">
                    <img class="aspect-[1.35] w-full object-cover grayscale transition duration-500 hover:scale-[1.02]"
                        src="Image/projectImg-1.jpeg" alt="Dashboard suite">
                </a>
                <div class="self-end">
                    <p class="font-mono text-[11px] text-orange-600">WORDPRESS / 2024</p>
                    <h2 class="my-5 text-[clamp(2.6rem,5vw,6rem)] font-bold leading-[.87] tracking-[-.08em]">
                        CUSTOM<br>DASHBOARD SUITE.</h2>
                    <p class="text-sm text-orange-600">Purpose-built internal dashboards bringing customer workflows
                        into one clear system.</p>
                    <a class="mt-8 inline-block text-xs font-bold" href="project-details.php?id=wp-dashboard">VIEW
                        PROJECT →</a>
                </div>
            </article>
            <article class="grid gap-5 border-t border-line pt-6 md:grid-cols-[75px_1.15fr_1fr]">
                <span class="font-mono text-[11px]">02</span>
                <a href="project-details.php?id=performance-seo">
                    <img class="aspect-[1.35] w-full object-cover grayscale transition duration-500 hover:scale-[1.02]"
                        src="Image/projectImg-2.jpeg" alt="Performance project">
                </a>
                <div class="self-end">
                    <p class="font-mono text-[11px] text-orange-600">PERFORMANCE / 2023—24</p>
                    <h2 class="my-5 text-[clamp(2.6rem,5vw,6rem)] font-bold leading-[.87] tracking-[-.08em]">WEB
                        VITALS<br>OVERHAUL.</h2>
                    <p class="text-sm text-orange-600">A practical performance programme for high-traffic websites.</p>
                    <a class="mt-8 inline-block text-xs font-bold" href="project-details.php?id=performance-seo">VIEW
                        PROJECT →</a>
                </div>
            </article>
        </div>
    </main>
<?php require __DIR__ . '/footer.php'; ?>


