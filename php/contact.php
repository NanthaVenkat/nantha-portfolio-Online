<?php
$currentPage = 'contact';
$pageTitle = 'Contact — Nantha Venkat';
require __DIR__ . '/header.php';
?>
<main class="mx-auto max-w-[1560px] px-[clamp(1.25rem,3.1vw,3.5rem)] py-[clamp(65px,10vw,145px)]">
        <p class="font-mono text-[11px] text-orange-600">(005) CONTACT</p>
        <h1 class="mt-6 max-w-[9ch] text-[clamp(4rem,10vw,11rem)] font-extrabold leading-[.79] tracking-[-.095em]">
            LET'S BUILD SOMETHING USEFUL.</h1>
        <div class="mt-24 grid gap-20 md:grid-cols-2">
            <div>
                <p class="text-[clamp(20px,2.4vw,37px)] leading-[1.18] tracking-[-.05em]">Have a project in mind, or
                    simply want to talk through an idea? I would like to hear it.</p>
                <div class="mt-16 border-t border-line">
                    <a class="block border-b border-line py-4"
                        href="mailto:vnanthakumar00@gmail.com">vnanthakumar00@gmail.com ↗</a>
                    <a class="block border-b border-line py-4"
                        href="https://linkedin.com/in/nantha-venkat-268360240">LinkedIn ↗</a>
                    <a class="block border-b border-line py-4" href="https://github.com/NanthaVenkat">GitHub ↗</a>
                </div>
            </div>
            <!-- <form action="mailto:vnanthakumar00@gmail.com" method="post">
                <div class="border-t border-line py-5">
                    <label class="mb-2 block font-mono text-[11px] text-orange-600" for="name">YOUR NAME</label>
                    <input class="w-full bg-transparent text-lg outline-none" id="name" required placeholder="Name">
                </div>
                <div class="border-t border-line py-5">
                    <label class="mb-2 block font-mono text-[11px] text-orange-600" for="email">EMAIL ADDRESS</label>
                    <input class="w-full bg-transparent text-lg outline-none" id="email" type="email" required
                        placeholder="you@company.com">
                </div>
                <div class="border-t border-line py-5">
                    <label class="mb-2 block font-mono text-[11px] text-orange-600" for="message">TELL ME A LITTLE
                        MORE</label>
                    <textarea class="min-h-32 w-full resize-y bg-transparent text-lg outline-none" id="message" required
                        placeholder="Project, timeline, goals...">
</textarea>
                </div>
                <button
                    class="border border-ink bg-ink px-5 py-4 text-xs font-bold tracking-[.04em] text-paper hover:bg-transparent hover:text-ink">SEND
                    MESSAGE →</button>
            </form> -->
        </div>
    </main>
<?php require __DIR__ . '/footer.php'; ?>


