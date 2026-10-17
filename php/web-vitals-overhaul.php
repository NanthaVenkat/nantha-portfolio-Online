<?php
$currentPage = 'projects';
$pageTitle = 'Web Vitals Overhaul — Nantha Venkat';
require __DIR__ . '/header.php';
?>
<main class="mx-auto max-w-[1560px] px-[clamp(1.25rem,3.1vw,3.5rem)] py-[clamp(65px,10vw,145px)]">
    <p class="font-mono text-[11px] text-orange-600">(02) PERFORMANCE / 2023—2024</p>
    <div class="mt-8 grid gap-12 md:grid-cols-[1.25fr_.75fr]">
        <h1 class="text-[clamp(4.3rem,10vw,11rem)] font-extrabold leading-[.79] tracking-[-.095em]">WEB VITALS OVERHAUL.</h1>
        <div class="self-end text-lg text-orange-600">
            <p>A practical performance programme for high-traffic websites.</p>
            <div class="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-4 font-mono text-[11px]">
                <p>YEAR<br><strong class="font-sans text-ink">2023—2024</strong></p>
                <p>ROLE<br><strong class="font-sans text-ink">Performance Engineer</strong></p>
                <p>TECHNOLOGY<br><strong class="font-sans text-ink">Lighthouse · SCSS · JavaScript · Schema</strong></p>
            </div>
        </div>
    </div>
    <img class="mt-16 aspect-[1.9] w-full object-cover grayscale" src="Image/projectImg-2.jpeg" alt="Website performance project">
    <section class="my-24 grid gap-12 md:grid-cols-[1fr_2fr]">
        <h2 class="text-[clamp(2.5rem,5vw,6rem)] font-bold leading-[.86] tracking-[-.08em]">PROJECT<br>OVERVIEW.</h2>
        <div>
            <p class="text-[clamp(18px,2vw,28px)]">Slow pages, visual instability and unoptimised media were diluting organic reach and everyday usability.</p>
            <p class="mt-6 text-orange-600">Measured audits led into an asset strategy, component refactoring and technical SEO improvements.</p>
        </div>
    </section>
    <div class="grid gap-5 md:grid-cols-[1.5fr_1fr]">
        <img class="w-full grayscale" src="Image/projectImg-2.jpeg" alt="Performance project website">
        <img class="w-full grayscale" src="Image/responsive-website.avif" alt="Responsive website design">
    </div>
    <a class="mt-20 block border-t border-line pt-6" href="custom-plugin-development.php">
        <span class="font-mono text-[11px] text-orange-600">PREVIOUS PROJECT →</span>
        <strong class="block text-[clamp(2.5rem,5vw,6rem)] leading-[.9] tracking-[-.08em]">CUSTOM PLUGIN DEVELOPMENT.</strong>
    </a>
</main>
<?php require __DIR__ . '/footer.php'; ?>
