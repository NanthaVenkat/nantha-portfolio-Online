<?php
$currentPage = 'home';
$pageTitle = 'Nantha Venkat — Frontend Developer';
require __DIR__ . '/header.php';
?>
<main>
        <section
            class="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1560px] content-between gap-16 px-[clamp(1.25rem,3.1vw,3.5rem)] py-[clamp(40px,7vw,110px)]">
            <p class="font-mono text-[11px] uppercase tracking-[.05em] text-orange-600">Independent frontend developer ·
                India</p>
            <h1 class="max-w-[13ch] text-[clamp(3.8rem,9.2vw,10.1rem)] font-extrabold leading-[.83] tracking-[-.09em]">
                FRONTEND<br>DEVELOPER <span class="ml-[clamp(1.2rem,12vw,14rem)] block">&amp; DIGITAL</span>
                EXPERIENCE<br>BUILDER.</h1>
            <div class="grid grid-cols-2 gap-5 border-t border-line pt-5 md:grid-cols-[3fr_1.4fr_1.3fr]">
                <p class="col-span-2 max-w-[31ch] text-[clamp(17px,1.45vw,22px)] leading-[1.35] md:col-span-1">I build
                    thoughtful, fast and highly usable websites for businesses that care about the details.</p>
                <img class="aspect-square w-[75px] object-cover grayscale md:w-[110px]" src="Image/prof-1.jpeg"
                    alt="Nantha Venkat">
                <p class="text-[13px] leading-5 text-orange-600">Currently<br>
                    <strong class="text-ink">Available for
                        selected projects</strong>
                    <br>Coimbatore, Tamil Nadu
                </p>
            </div>
        </section>
        <section class="border-t border-line py-[clamp(80px,13vw,190px)]">
            <div class="mx-auto max-w-[1560px] px-[clamp(1.25rem,3.1vw,3.5rem)]">
                <div class="mb-[clamp(45px,7vw,100px)] grid gap-5 md:grid-cols-[2fr_5fr_3fr]">
                    <p class="font-mono text-[11px] uppercase text-orange-600">(001) Services</p>
                    <h2 class="text-[clamp(3.6rem,7.4vw,8.7rem)] font-extrabold leading-[.85] tracking-[-.085em]">BUILT
                        WITH<br>INTENTION.</h2>
                    <p class="text-[13px] text-orange-600">A focused practice spanning interface craft, robust
                        engineering and the systems in between.</p>
                </div>
                <div class="border-t border-line">
                    <article class="grid gap-4 border-b border-line py-5 md:grid-cols-[1fr_4fr_3fr_1fr] md:py-[26px]">
                        <span class="font-mono text-[11px]">001</span>
                        <h3 class="text-[clamp(1.6rem,3vw,3.6rem)] font-bold leading-none tracking-[-.065em]">FRONTEND
                            DEVELOPMENT</h3>
                        <p class="text-[13px] text-orange-600">Responsive, accessible interfaces that feel as good as
                            they perform.</p>
                        <span class="font-mono text-[11px]">React / Next.js</span>
                    </article>
                    <article class="grid gap-4 border-b border-line py-5 md:grid-cols-[1fr_4fr_3fr_1fr] md:py-[26px]">
                        <span class="font-mono text-[11px]">002</span>
                        <h3 class="text-[clamp(1.6rem,3vw,3.6rem)] font-bold leading-none tracking-[-.065em]">WORDPRESS
                            DEVELOPMENT</h3>
                        <p class="text-[13px] text-orange-600">Custom themes, plugins and publishing experiences without
                            the clutter.</p>
                        <span class="font-mono text-[11px]">PHP / WooCommerce</span>
                    </article>
                    <article class="grid gap-4 border-b border-line py-5 md:grid-cols-[1fr_4fr_3fr_1fr] md:py-[26px]">
                        <span class="font-mono text-[11px]">003</span>
                        <h3 class="text-[clamp(1.6rem,3vw,3.6rem)] font-bold leading-none tracking-[-.065em]">UI
                            DEVELOPMENT</h3>
                        <p class="text-[13px] text-orange-600">Design systems and considered components made ready for
                            real users.</p>
                        <span class="font-mono text-[11px]">HTML / CSS</span>
                    </article>
                </div>
            </div>
        </section>
    </main>
<?php require __DIR__ . '/footer.php'; ?>


