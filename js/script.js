(() => {
    // Example data: replace with your real links/covers
    const musicas = [
        {
            title: "Sample Track 01",
            artist: "Artist",
            cover: "https://picsum.photos/seed/m1/800/400",
            iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Sample Track 02",
            artist: "Artist",
            cover: "https://picsum.photos/seed/m2/800/400",
            iframeSrc: "https://www.youtube.com/embed/3JZ4pnNtyxQ?rel=0",
            link: "https://www.youtube.com/watch?v=3JZ4pnNtyxQ"
        },
        // Add/edit items here
    ];

    const grid = document.getElementById('musicGrid');

    function createCard(m) {
        const card = document.createElement('article');
        card.className = 'music-card';

        card.innerHTML = `
            <div class="cover" style="background-image:url('${m.cover}')"></div>
            <div class="player">
                <iframe loading="lazy" src="${m.iframeSrc}" title="${m.title}"></iframe>
                <a class="iframe-link" href="${m.link}" target="_blank" rel="noopener noreferrer">Open ${m.title}</a>
            </div>
            <div class="card-body">
                <div class="meta">
                    <div>
                        <div class="title">${m.title}</div>
                        <div class="artist">${m.artist}</div>
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    // Render
    musicas.forEach(m => grid.appendChild(createCard(m)));

    // Menu mobile toggle
    const menuBtn = document.getElementById('menuToggle');
    let navOpen = false;
    menuBtn && menuBtn.addEventListener('click', () => {
        navOpen = !navOpen;
        const nav = document.querySelector('.nav');
        if (!nav) return;
        if (navOpen) {
            nav.style.display = 'flex';
            nav.style.position = 'absolute';
            nav.style.right = '18px';
            nav.style.top = '72px';
            nav.style.background = 'var(--glass)';
            nav.style.padding = '12px';
            nav.style.borderRadius = '12px';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
        } else {
            nav.style.display = '';
            nav.style.position = '';
            nav.style.top = '';
            nav.style.right = '';
            nav.style.background = '';
            nav.style.padding = '';
            nav.style.borderRadius = '';
            nav.style.boxShadow = '';
        }
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // close mobile nav if open
                if (navOpen) menuBtn.click();
            }
        });
    });

    // Footer year
    const y = new Date().getFullYear();
    document.getElementById('year').textContent = y;
})();