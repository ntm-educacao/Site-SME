/* Função de Acessibilidade */
(function () {
    var DEFAULT_FONT = 16;
    var STEP = 2;
    var MIN_FONT = 12;
    var MAX_FONT = 24;

    function getFontSize() {
        return parseInt(localStorage.getItem('fontSize')) || DEFAULT_FONT;
    }

    function applyFontSize(size) {
        size = Math.max(MIN_FONT, Math.min(MAX_FONT, size));
        document.documentElement.style.fontSize = size + 'px';
        localStorage.setItem('fontSize', size);
    }

    window.aumentarFonte = function () {
        applyFontSize(getFontSize() + STEP);
    };

    window.diminuirFonte = function () {
        applyFontSize(getFontSize() - STEP);
    };

    function applyAltoContraste(ativo) {
        var html = document.documentElement;
        var btn = document.getElementById('btn-alto-contraste');
        if (ativo) {
            html.classList.add('alto-contraste');
        } else {
            html.classList.remove('alto-contraste');
        }
        if (btn) {
            btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
        }
    }

    window.toggleAltoContraste = function () {
        var ativo = localStorage.getItem('altoContraste') === 'true';
        localStorage.setItem('altoContraste', String(!ativo));
        applyAltoContraste(!ativo);
    };

    /* Sincroniza o aria-pressed do botão após o DOM estar pronto */
    document.addEventListener('DOMContentLoaded', function () {
        var ativo = localStorage.getItem('altoContraste') === 'true';
        var btn = document.getElementById('btn-alto-contraste');
        if (btn) btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });
})();

      const defaultConfig = {
            site_title: 'Secretaria Municipal de Educação',
            hero_title: 'Educação de qualidade para todos os mossoroenses',
            hero_subtitle: 'Transformando vidas através do conhecimento. Acesse nossos serviços, acompanhe notícias e conheça nossas escolas.',
            news_section_title: 'Últimas Notícias',
            footer_address: 'Rua Pedro Álvares Cabral, 01\nCentro, Mossoró/RN\nCEP: 59600-010',
            footer_phone: '(84) 3315-4900',
            background_color: '#f8fafc',
            primary_color: '#1e3a5f',
            text_color: '#1e293b',
            accent_color: '#f59e0b',
            surface_color: '#ffffff'
        };

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavContent = document.getElementById('mobile-nav-content');

        const menuData = [
            { title: 'Início', icon: 'fas fa-home', href: '#inicio' },
            {
                title: 'Institucional',
                icon: 'fas fa-building',
                items: [
                    { icon: 'fas fa-landmark', label: 'Sobre a Secretaria', href: '#sobre' },
                    { icon: 'fas fa-user', label: 'Secretário(a)', href: '#secretario' },
                    { icon: 'fas fa-project-diagram', label: 'Organograma', href: '#organograma' },
                    { icon: 'fas fa-map-marker-alt', label: 'Contato e Localização', href: '#contato' }
                ]
            },
            {
                title: 'Ensino',
                icon: 'fas fa-graduation-cap',
                items: [
                    { icon: 'fas fa-child', label: 'Educação Infantil', href: '#infantil' },
                    { icon: 'fas fa-book-open', label: 'Ensino Fundamental', href: '#fundamental' },
                    { icon: 'fas fa-users', label: 'EJA', href: '#eja' },
                    { icon: 'fas fa-heart', label: 'Educação Especial', href: '#especial' },
                    { icon: 'fas fa-star', label: 'Tempo Integral', href: '#integral' }
                ]
            },
            {
                title: 'Unidades',
                icon: 'fas fa-school',
                items: [
                    { icon: 'fas fa-list', label: 'Unidades de Ensino', href: 'https://www.google.com/maps/d/u/2/edit?mid=18eGd24SPaZ237mnihV0zV1MTFcVPzME&usp=sharing', target: '_blank' },
                    { icon: 'fas fa-map', label: 'Mapa das Escolas', href: 'https://www.google.com/maps/d/u/2/edit?mid=1r__wV_HYfRDqTNQajDeaBcVRFKqoqDk&usp=sharing', target: '_blank' },
                    { icon: 'fas fa-tree', label: 'Zona Rural', href: 'https://www.google.com/maps/d/u/2/edit?mid=1Fo-l3G8UaDIuyZDRTvdKYqP-J_e9eio&usp=sharing', target: '_blank' },
                    { icon: 'fas fa-arrow-up', label: 'Zona Norte', href: 'https://www.google.com/maps/d/edit?mid=1ncplmy-S5MUv10NvSBz5rJwtj78ouAE&usp=sharing', target: '_blank' },
                    { icon: 'fas fa-arrow-down', label: 'Zona Sul', href: 'https://www.google.com/maps/d/edit?mid=1KFLrCOog5lrWXaU78SmQ-QQVfkg2HVI&usp=sharing', target: '_blank' },
                    { icon: 'fas fa-arrow-right', label: 'Zona Leste', href: 'https://www.google.com/maps/d/edit?mid=1x_VzGcNhgatDbHsSlyjMqPax152PijU&usp=sharing', target: '_blank' },
                    { icon: 'fas fa-arrow-left', label: 'Zona Oeste', href: 'https://www.google.com/maps/d/edit?mid=1wuLpSA2_bJZhWundXne_fLHjIDXwmRY&usp=sharing', target: '_blank' },
                    { icon: 'fa-brands fa-centercode', label: 'Zona Central', href: 'https://www.google.com/maps/d/edit?mid=1h5M4mlJz-6o0dXif7p4i1Vg8S_REPcg&usp=sharing', target: '_blank' },
                    { icon: 'fas fa-baby', label: 'UEIs', href: 'https://www.google.com/maps/d/u/2/edit?mid=1r__wV_HYfRDqTNQajDeaBcVRFKqoqDk&usp=sharing', target: '_blank' },
                    { icon: 'fas fa-palette', label: 'CMEIs', href: 'https://www.google.com/maps/d/u/2/edit?mid=1MeCtFskVHwdq62NSyEbPoIN-1LNtHs0&usp=sharing', target: '_blank' }
                ]
            },
            {
                title: 'Serviços',
                icon: 'fas fa-concierge-bell',
                items: [
                    { icon: 'fas fa-pen-to-square', label: 'Matrícula Online', href: '#matricula' },
                    { icon: 'fas fa-bus', label: 'Transporte Escolar', href: '#transporte' },
                    { icon: 'fas fa-apple-whole', label: 'Alimentação Escolar', href: '#merenda' },
                    { icon: 'fas fa-shirt', label: 'Uniforme e Material', href: '#uniforme' },
                    { icon: 'fas fa-file-contract', label: 'Documentos', href: '#documentos' },
                    { icon: 'fas fa-bullhorn', label: 'Ouvidoria', href: '#ouvidoria' }
                ]
            },
            {
                title: 'NTM',
                icon: 'fas fa-laptop-code',
                items: [
                    { icon: 'fas fa-circle-info', label: 'Sobre o NTM', href: '/ntm/sobre' },
                    { icon: 'fas fa-users-gear', label: 'Nossa Equipe', href: '#contratos' },
                    { icon: 'fas fa-computer', label: 'O NTM nas Escolas', href: '/NTM/na-escola' },
                    { icon: 'fas fa-file-invoice', label: 'Prestação de Contas', href: '#prestacao' },
                    { icon: 'fas fa-coins', label: 'FUNDEB', href: '#fundeb' },
                    { icon: 'fas fa-chart-line', label: 'Indicadores', href: '#indicadores' }
                ]
            },
            {
                title: 'Sistemas',
                icon: 'fas fa-desktop',
                items: [
                    { icon: 'fas fa-landmark', label: 'SIGEduc', href: 'https://sigeduc.rn.gov.br/sigeduc/public/home.jsf', target: '_blank' },
                    { icon: 'fas fa-user', label: 'Moodle', href: 'https://moodle.com/pt-br/', target: '_blank' },
                    { icon: 'fas fa-project-diagram', label: 'SAEM', href: 'https://saem.sme.mossoro.rn.gov.br/', target: '_blank' }
                ]
            }
        ];

        const mobileDropdownArea = document.getElementById('mobile-dropdown-area');
        let activeMobileNav = null;

        function generateMobileMenu() {
            mobileNavContent.innerHTML = menuData.map((item, index) => {
                if (!item.items) {
                    return `<a href="${item.href}" class="mobile-nav-item" onclick="closeMobileMenuAfterClick()">
                        <i class="${item.icon}"></i> ${item.title}
                    </a>`;
                }
                return `<button class="mobile-nav-item" data-menu-index="${index}" onclick="toggleMobileDropdown(${index})">
                    ${item.title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>`;
            }).join('');
        }

        function toggleMobileDropdown(index) {
            const allBtns = mobileNavContent.querySelectorAll('.mobile-nav-item[data-menu-index]');
            const clickedBtn = mobileNavContent.querySelector(`[data-menu-index="${index}"]`);
            const item = menuData[index];

            if (activeMobileNav === index) {

                clickedBtn.classList.remove('active');
                mobileDropdownArea.classList.remove('active');
                mobileDropdownArea.innerHTML = '';
                activeMobileNav = null;
                return;
            }

            allBtns.forEach(btn => btn.classList.remove('active'));
            clickedBtn.classList.add('active');
            activeMobileNav = index;

            mobileDropdownArea.innerHTML = `
                <div class="mobile-dropdown-grid">
                    ${item.items.map(subItem => `
                        <a href="${subItem.href}"${subItem.target ? ` target="${subItem.target}"` : ''} onclick="closeMobileMenuAfterClick()">
                            <i class="${subItem.icon}"></i>
                            ${subItem.label}
                        </a>
                    `).join('')}
                </div>
            `;
            mobileDropdownArea.classList.add('active');
        }

        function closeMobileMenuAfterClick() {
            mobileMenu.classList.remove('active');
            mobileDropdownArea.classList.remove('active');
            mobileDropdownArea.innerHTML = '';
            activeMobileNav = null;
            const allBtns = mobileNavContent.querySelectorAll('.mobile-nav-item[data-menu-index]');
            allBtns.forEach(btn => btn.classList.remove('active'));
        }

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            if (!mobileMenu.classList.contains('active')) {
                closeMobileMenuAfterClick();
            }
        });

        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('active') &&
                !mobileMenu.contains(e.target) &&
                !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                closeMobileMenuAfterClick();
            }
        });

        const mainHeader = document.getElementById('main-header');

        document.addEventListener('touchstart', (e) => {
            if (mobileMenu.classList.contains('active') && !mainHeader.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                closeMobileMenuAfterClick();
            }
        }, { passive: true });

        generateMobileMenu();

        (function () {
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.hero-dot');
            if (slides.length === 0) return;
            let current = 0;

            function goToSlide(index) {
                slides[current].classList.remove('opacity-100');
                slides[current].classList.add('opacity-0');
                dots[current].classList.remove('bg-white/80');
                dots[current].classList.add('bg-white/40');

                current = index;

                slides[current].classList.remove('opacity-0');
                slides[current].classList.add('opacity-100');
                dots[current].classList.remove('bg-white/40');
                dots[current].classList.add('bg-white/80');
            }

            // função que passa automaticamente para o próximo slide. 6000  milissegundos = 6 segundos
            setInterval(() => {
                goToSlide((current + 1) % slides.length);
            }, 6000);

            dots.forEach((dot) => {
                dot.addEventListener('click', () => {
                    goToSlide(Number(dot.dataset.slide));
                });
            });
        })();

        // Element SDK integration
        async function onConfigChange(config) {
            const siteTitle = document.getElementById('site-title');
            const heroTitle = document.getElementById('hero-title');
            const heroSubtitle = document.getElementById('hero-subtitle');
            const newsSectionTitle = document.getElementById('news-section-title');
            const footerAddress = document.getElementById('footer-address');
            const footerPhoneDisplay = document.getElementById('footer-phone-display');
            const headerPhone = document.getElementById('header-phone');

            if (siteTitle) siteTitle.textContent = config.site_title || defaultConfig.site_title;
            if (heroTitle) heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
            if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
            if (newsSectionTitle) newsSectionTitle.textContent = config.news_section_title || defaultConfig.news_section_title;
            if (footerAddress) footerAddress.innerHTML = (config.footer_address || defaultConfig.footer_address).replace(/\n/g, '<br>');
            if (footerPhoneDisplay) footerPhoneDisplay.textContent = config.footer_phone || defaultConfig.footer_phone;
            if (headerPhone) headerPhone.textContent = config.footer_phone || defaultConfig.footer_phone;

            const bgColor = config.background_color || defaultConfig.background_color;
            const primaryColor = config.primary_color || defaultConfig.primary_color;
            const textColor = config.text_color || defaultConfig.text_color;
            const accentColor = config.accent_color || defaultConfig.accent_color;
            const surfaceColor = config.surface_color || defaultConfig.surface_color;

            document.body.style.backgroundColor = bgColor;

            const heroOverlay = document.querySelector('#hero .absolute.inset-0.bg-black\\/50');
            if (heroOverlay) {
                heroOverlay.style.background = `linear-gradient(135deg, ${primaryColor}cc 0%, ${adjustColor(primaryColor, 20)}99 50%, ${adjustColor(primaryColor, 40)}80 100%)`;
            }

            const stats = document.getElementById('stats');
            if (stats) {
                stats.style.background = `linear-gradient(to right, ${primaryColor}, ${adjustColor(primaryColor, 15)})`;
            }
        }

        function adjustColor(hex, percent) {
            const num = parseInt(hex.replace('#', ''), 16);
            const amt = Math.round(2.55 * percent);
            const R = Math.min(255, (num >> 16) + amt);
            const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
            const B = Math.min(255, (num & 0x0000FF) + amt);
            return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => { config.background_color = value; window.elementSdk.setConfig({ background_color: value }); }
                    },
                    {
                        get: () => config.surface_color || defaultConfig.surface_color,
                        set: (value) => { config.surface_color = value; window.elementSdk.setConfig({ surface_color: value }); }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => { config.text_color = value; window.elementSdk.setConfig({ text_color: value }); }
                    },
                    {
                        get: () => config.primary_color || defaultConfig.primary_color,
                        set: (value) => { config.primary_color = value; window.elementSdk.setConfig({ primary_color: value }); }
                    },
                    {
                        get: () => config.accent_color || defaultConfig.accent_color,
                        set: (value) => { config.accent_color = value; window.elementSdk.setConfig({ accent_color: value }); }
                    }
                ],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ['site_title', config.site_title || defaultConfig.site_title],
                ['hero_title', config.hero_title || defaultConfig.hero_title],
                ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
                ['news_section_title', config.news_section_title || defaultConfig.news_section_title],
                ['footer_address', config.footer_address || defaultConfig.footer_address],
                ['footer_phone', config.footer_phone || defaultConfig.footer_phone]
            ]);
        }

        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }

    (function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;

        if (b) {
            var d = b.createElement('script');

            d.innerHTML = "window.__CF$cv$params={r:'9c91bff555f227f1',t:'MTc3MDI4NzYwOS4wMDAwMDA='};" +
                          "var a=document.createElement('script');" +
                          "a.nonce='';" +
                          "a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';" +
                          "document.getElementsByTagName('head')[0].appendChild(a);";

            b.getElementsByTagName('head')[0].appendChild(d);
        }
    }

    if (document.body) {
        var a = document.createElement('iframe');

        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';

        document.body.appendChild(a);

        if ('loading' !== document.readyState) {
            c();
        } else if (window.addEventListener) {
            document.addEventListener('DOMContentLoaded', c);
        } else {
            var e = document.onreadystatechange || function () {};

            document.onreadystatechange = function (b) {
                e(b);

                if ('loading' !== document.readyState) {
                    document.onreadystatechange = e;
                    c();
                }
            };
        }
    }
})();
