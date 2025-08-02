$(document).ready(function() {
    // Animation and scroll effects
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // NOVO CARROSSEL PRINCIPAL - Seção independente
    function initMainCarousel() {
        let currentSlide = 0;
        const slides = $('.carousel-slide');
        const indicators = $('.carousel-indicator');
        const totalSlides = slides.length;
        let autoSlideInterval;

        function showSlide(index) {
            slides.removeClass('active');
            indicators.removeClass('active');
            
            $(slides[index]).addClass('active');
            $(indicators[index]).addClass('active');
            
            currentSlide = index;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % totalSlides;
            showSlide(next);
        }

        function prevSlide() {
            const prev = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prev);
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 2000); // 2 segundos
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Manual controls
        $('.carousel-btn.next-btn').click(function() {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        $('.carousel-btn.prev-btn').click(function() {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        // Indicator controls
        $('.carousel-indicator').click(function() {
            stopAutoSlide();
            const slideIndex = $(this).data('slide');
            showSlide(slideIndex);
            startAutoSlide();
        });

        // Pause on hover
        $('.carousel-container').hover(
            function() { stopAutoSlide(); },
            function() { startAutoSlide(); }
        );

        // Start auto-slide
        startAutoSlide();

        // Keyboard navigation
        $(document).keydown(function(e) {
            if (e.key === 'ArrowLeft') {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            } else if (e.key === 'ArrowRight') {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            }
        });
    }

    // ABOUT GALLERY - Carrossel horizontal
    function initAboutGallery() {
        let currentSlide = 0;
        const slides = $('.about-gallery-slide');
        const indicators = $('.about-gallery-indicator');
        const totalSlides = slides.length;
        let autoSlideInterval;

        function showSlide(index) {
            slides.removeClass('active');
            indicators.removeClass('active');
            
            $(slides[index]).addClass('active');
            $(indicators[index]).addClass('active');
            
            currentSlide = index;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % totalSlides;
            showSlide(next);
        }

        function prevSlide() {
            const prev = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prev);
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 4000); // 4 segundos
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Manual controls
        $('.about-gallery-btn.next-btn').click(function() {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        $('.about-gallery-btn.prev-btn').click(function() {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        // Indicator controls
        $('.about-gallery-indicator').click(function() {
            stopAutoSlide();
            const slideIndex = $(this).data('slide');
            showSlide(slideIndex);
            startAutoSlide();
        });

        // Pause on hover
        $('.about-gallery-container').hover(
            function() { stopAutoSlide(); },
            function() { startAutoSlide(); }
        );

        // Start auto-slide
        startAutoSlide();
    }

    // Updated packages data with images
    const packages = [
        {
            id: 1,
            title: "ESSENCIAL",
            subtitle: "Música ambiente e apresentações",
            description: "Ideal para música ambiente em pequenas confraternizações, apresentações de voz e violão e também para comércios que desejam realizar anúncios com locutor. Um pacote compacto e funcional, com som de qualidade e praticidade na medida certa.",
            price: "R$ 300",
            duration: "4 horas",
            extraHour: "R$ 50/hora extra",
            image: "asset/pac1.jpg",
            equipment: [
                "2 Caixas de 12\" (300w RMS cada)",
                "1 Mesa de som (6 canais)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            highlight: false,
            category: "básico"
        },
        {
            id: 2,
            title: "ESSENCIAL PRO",
            subtitle: "Eventos diurnos até 500 pessoas",
            description: "Este pacote é ideal para eventos diurnos que dispensam iluminação, oferecendo excelente qualidade de som e potência para animar festas com até 500 pessoas.",
            price: "R$ 500",
            duration: "4 horas",
            extraHour: "R$ 100/hora extra",
            image: "asset/pac2.jpg",
            equipment: [
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Sub Grave de 18\" (1.000w RMS cada)",
                "1 Mesa de som (6 canais)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            highlight: false,
            category: "básico"
        },
        {
            id: 3,
            title: "AMBIENT",
            subtitle: "Eventos discretos e sofisticados",
            description: "Com duas caixas de som de 12\" e doze pontos de iluminação decorativa ambiente, este pacote é ideal para eventos discretos e sofisticados. Perfeito para festas residenciais, recepções, lounges, hotéis e lançamentos comerciais.",
            price: "R$ 600",
            duration: "4 horas",
            extraHour: "R$ 100/hora extra",
            image: "asset/pac3.jpg",
            equipment: [
                "2 Caixas de 12\" (300w RMS cada)",
                "1 Mesa de som (6 canais)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "12 Par Led 64 rgbwa (iluminação ambiente)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            highlight: false,
            category: "ambiente"
        },
        {
            id: 5,
            title: "FESTA INFANTIL",
            subtitle: "Experiência inesquecível para crianças",
            description: "Transforme a festa do seu filho em uma experiência inesquecível, cheia de diversão, encanto e momentos emocionantes. Um pacote completo, pensado nos mínimos detalhes para surpreender crianças e adultos.",
            price: "R$ 600",
            duration: "4 horas",
            extraHour: "R$ 100/hora extra",
            image: "asset/pac5.jpg",
            equipment: [
                "2 Caixas de 12\" (300w RMS cada)",
                "1 Mesa de som (6 canais)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "1 Projetor Epson (1600 Lumens)",
                "1 Telão",
                "1 Máquina Bola de Sabão",
                "2 Pontos de fogos indoor Gerbs (faísca fria)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            bonus: "BRINDE: Produção vídeo retrospectiva com as fotos do aniversariante passando no telão",
            highlight: false,
            category: "especial"
        },
        {
            id: 4,
            title: "AMBIENT PRO",
            subtitle: "Eventos sofisticados em ambientes amplos",
            description: "Perfeito para eventos sofisticados em ambientes amplos ou espaços ao ar livre. Som com mais potência e boa presença de graves, com iluminação ambiente que garante um clima intimista e elegante.",
            price: "R$ 800",
            duration: "4 horas",
            extraHour: "R$ 150/hora extra",
            image: "asset/pac4.jpg",
            equipment: [
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Sub Grave de 18\" (1.000w RMS cada)",
                "1 Mesa de som (6 canais)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "12 Par Led 64 rgbwa (iluminação ambiente)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            highlight: false,
            category: "ambiente"
        },
        
        {
            id: 6,
            title: "START PARTY",
            subtitle: "Som potente com clima dançante",
            description: "A escolha ideal para quem deseja uma festa com som potente e bem definido. A iluminação de pista é discreta, mas suficiente para criar um clima dançante e descontraído, enquanto a luz ambiente completa a experiência.",
            price: "R$ 800",
            duration: "4 horas",
            extraHour: "R$ 150/hora extra",
            image: "asset/pac6.jpg",
            equipment: [
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Sub Grave de 18\" (1.000w RMS cada)",
                "1 Mesa de som (6 canais)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "2 Leds RGB (luz colorida pista de dança)",
                "1 Máquina de Fumaça",
                "6 Par Led 64 rgbwa (iluminação ambiente)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            highlight: false,
            category: "festa"
        },
        {
            id: 7,
            title: "SMART PARTY",
            subtitle: "Pista de dança com efeitos dinâmicos",
            description: "Este pacote oferece som com pressão sonora e uma pista de dança com efeitos dinâmicos. A iluminação de pista elevada por uma trave tubular traz mais impacto visual, criando uma pista dançante envolvente e cheia de energia.",
            price: "R$ 1.000",
            duration: "6 horas",
            extraHour: "R$ 150/hora extra",
            image: "asset/pac7.jpg",
            equipment: [
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Sub Grave de 18\" (1.000w RMS cada)",
                "1 Mesa de som (6 canais)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "1 Trave tubular + 2 Tripés",
                "2 Leds RGB (luz colorida pista de dança)",
                "1 Laser show (efeito especial)",
                "2 Sputniks (inflável com luz negra)",
                "1 Máquina de Fumaça",
                "6 Par Led 64 rgbwa (iluminação ambiente)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            highlight: false,
            category: "festa"
        },
        {
            id: 8,
            title: "MASTER PARTY",
            subtitle: "Casamentos, Formaturas e Festas de 15 anos",
            description: "Eleve sua festa a outro nível! Com uma estrutura robusta em alumínio, iluminação de pista de dança moderna e de alta qualidade, som potente cheio de graves e uma iluminação ambiente que valoriza cada detalhe do espaço.",
            price: "R$ 1.600",
            duration: "6 horas",
            extraHour: "R$ 160/hora extra",
            image: "asset/pac8.jpg",
            equipment: [
                "1 Box Truss (Trave palco robusta em treliça Alumínio Q30)",
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Sub Grave de 18\" (1.000w RMS cada)",
                "1 Mesa de som (6 canais)",
                "1 Mesa DMX 8 canais (controle total da iluminação)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "2 Moving Heads grandes (250 watts cada)",
                "2 Leds RGB + 1 Moonflower",
                "1 Laser show + 2 Sputniks",
                "1 Globo espelhado giratório",
                "1 Máquina de Fumaça",
                "12 Par Led 64 rgbwa (iluminação ambiente)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            highlight: false,
            category: "premium"
        },
        {
            id: 9,
            title: "ULTIMATE PARTY",
            subtitle: "Mais luz, mais emoção, mais impacto!",
            description: "Ideal para Casamentos, Formaturas e Festas de 15 anos. Com um som potente cheio de pressão sonora e mais efeitos visuais, a pista de dança fica ainda mais surpreendente e imersiva. O telão com fotos e vídeos deixa a festa mais intimista e especial.",
            price: "R$ 2.000",
            duration: "8 horas",
            extraHour: "R$ 200/hora extra",
            image: "asset/pac9.jpg",
            equipment: [
                "1 Box Truss (Trave palco robusta em treliça Alumínio Q30)",
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Sub Grave de 18\" (1.000w RMS cada)",
                "1 Mesa de som (6 canais)",
                "1 Mesa DMX 8 canais (controle total da iluminação)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "2 Moving Heads grandes (250 watts cada)",
                "2 Leds RGB + 1 Moonflower",
                "1 Laser show + 2 Sputniks",
                "1 Globo espelhado giratório",
                "1 Máquina de Fumaça",
                "1 Projetor Epson 1600 Lumens + 1 Telão",
                "12 Par Led 64 rgbwa (iluminação ambiente salão)",
                "12 Spot light (iluminação ambiente área externa)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            bonus: "BRINDE: Produção vídeo retrospectiva com fotos passando no telão",
            highlight: false,
            category: "premium"
        },
        {
            id: 10,
            title: "PREMIUM EXPERIENCE",
            subtitle: "O pacote mais completo da ProAudio",
            description: "Indicado para Casamentos, Formaturas e Festas de 15 anos, esse é o pacote mais completo da ProAudio, ideal para quem não abre mão do melhor. Transformamos seu evento em uma experiência deslumbrante com efeitos especiais únicos!",
            price: "R$ 2.500",
            duration: "8 horas",
            extraHour: "R$ 250/hora extra",
            image: "asset/pac10.jpg",
            equipment: [
                "1 Box Truss (Trave palco robusta em treliça Alumínio Q30)",
                "1 Tapete Pista de dança Quadriculado",
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Sub Grave de 18\" (1.000w RMS cada)",
                "1 Mesa de som (6 canais)",
                "1 Mesa DMX 8 canais (controle total da iluminação)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "2 Moving Heads grandes (250 watts cada)",
                "2 Leds RGB + 1 Moonflower",
                "1 Laser Show + 2 Sputniks",
                "1 Globo espelhado giratório",
                "1 Máquina de Fumaça",
                "1 Projetor Epson 1600 Lumens + 1 Telão",
                "1 Máquina de papel picado (chuva de prata)",
                "1 Máquina de bola de sabão",
                "2 Pontos fogos indoor gerbs (faísca fria)",
                "12 Par Led 64 rgbwa (iluminação ambiente salão)",
                "12 Spot light (iluminação ambiente área externa)",
                "DJ com vasto acervo musical atualizado",
                "Suporte técnico durante todo evento"
            ],
            bonus: "BRINDE: Produção vídeo retrospectiva com fotos passando no telão",
            highlight: false,
            category: "premium"
        },
        {
            id: 11,
            title: "EMPRESARIAL",
            subtitle: "Destaque, profissionalismo e credibilidade",
            description: "Soluções completas para empresas que desejam realizar eventos marcantes, com estrutura profissional e suporte técnico especializado. Ideal para palestras, feiras, treinamentos, reuniões de equipe e apresentações de resultados.",
            price: "R$ 1.200",
            duration: "9 horas",
            extraHour: "R$ 100/hora extra",
            image: "asset/pac11.jpg",
            equipment: [
                "1 Mesa de som (6 canais)",
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "1 Projetor Epson 1600 lumens",
                "1 Telão",
                "1 Laser para apresentação slides",
                "12 Par Led 64 rgbwa (iluminação ambiente nas cores da empresa)",
                "Técnico de áudio modulando som e disparando músicas, propagandas e anúncios",
                "Suporte técnico durante todo evento"
            ],
            highlight: false,
            category: "profissional"
        },
        {
            id: 12,
            title: "EMPRESARIAL PLUS",
            subtitle: "Impacto, profissionalismo e mais presença de marca",
            description: "O pacote mais completo para eventos empresariais que desejam causar impacto, reforçar sua identidade visual e transmitir ainda mais credibilidade. Inclui Backdrop 3x3m para destacar sua marca e patrocinadores.",
            price: "R$ 1.600",
            duration: "9 horas",
            extraHour: "R$ 150/hora extra",
            image: "asset/pac12.jpg",
            equipment: [
                "1 Backdrop com treliça de 3x3 metros em Alumínio Q30",
                "1 Mesa de som (6 canais)",
                "2 Caixas de 12\" (300w RMS cada)",
                "2 Sub Grave de 18\" (1.000w RMS cada)",
                "2 Microfones sem fio (TAG Sound UHF)",
                "1 Projetor Epson 1600 lumens",
                "1 Telão",
                "1 Laser para apresentação slides",
                "12 Par Led 64 rgbwa (iluminação ambiente nas cores da empresa)",
                "Técnico de áudio modulando som e disparando músicas, propagandas e anúncios",
                "Suporte técnico durante todo evento"
            ],
            note: "*Não fornecemos a lona impressa para o backdrop",
            highlight: false,
            category: "profissional"
        }
    ];

    // Equipment data
    const equipment = [
        {
            id: 1,
            title: "Box Truss",
            image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "xx"
        },
        {
            id: 2,
            title: "Caixas de 12'",
            image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "."
        },
        {
            id: 3,
            title: "Sub Grave de 18\" (1.000w RMS cada)",
            image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: ""
        },
        {
            id: 4,
            title: "Mesa de som",
            image: "https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Microfones profissionais sem fio com excelente qualidade de áudio e alcance estendido para máxima liberdade. Sistema anti-interferência e bateria de longa duração."
        },
        {
            id: 5,
            title: "Mesa DMX",
            image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Subwoofers de alta potência para graves profundos e impactantes que fazem a diferença em qualquer evento. Resposta de frequência otimizada para máximo impacto."
        },
        {
            id: 6,
            title: "Microfones sem fio",
            image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "xxxx."
        },
        {
            id: 7,
            title: "Moving Heads",
            image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "xx."
        },
     {
            id: 1,
            title: "Leds RGB",
            image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Sistema de caixas de som em linha para grandes eventos e festivais com potência excepcional e qualidade de áudio cristalina. Ideal para shows, festivais e eventos de grande porte."
        },
        {
            id: 2,
            title: "Moonflower",
            image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Mesa de mixagem digital com múltiplos canais, efeitos integrados e controle total sobre o áudio do seu evento. Tecnologia de ponta para profissionais exigentes."
        },
        {
            id: 3,
            title: "Laser Show",
            image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Sistema completo de iluminação LED colorida programável para criar ambientes únicos e memoráveis. Controle via DMX com infinitas possibilidades criativas."
        },
        {
            id: 4,
            title: "Sputiniks",
            image: "https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Microfones profissionais sem fio com excelente qualidade de áudio e alcance estendido para máxima liberdade. Sistema anti-interferência e bateria de longa duração."
        },
        
        {
            id: 6,
            title: "Globo espelhado giratório",
            image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "xxxx."
        },
        {
            id: 7,
            title: "Máquina de Fumaça",
            image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "xx."
        },
     {
            id: 1,
            title: "Projetor Epson 1600 Lumens ",
            image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Sistema de caixas de som em linha para grandes eventos e festivais com potência excepcional e qualidade de áudio cristalina. Ideal para shows, festivais e eventos de grande porte."
        },
        {
            id: 2,
            title: "Telão",
            image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Mesa de mixagem digital com múltiplos canais, efeitos integrados e controle total sobre o áudio do seu evento. Tecnologia de ponta para profissionais exigentes."
        },
        {
            id: 3,
            title: "Máquina de papel picado",
            image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Sistema completo de iluminação LED colorida programável para criar ambientes únicos e memoráveis. Controle via DMX com infinitas possibilidades criativas."
        },
        {
            id: 4,
            title: "Máquina de bola de sabão",
            image: "https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Microfones profissionais sem fio com excelente qualidade de áudio e alcance estendido para máxima liberdade. Sistema anti-interferência e bateria de longa duração."
        },
        {
            id: 5,
            title: "Pontos fogos indor gerbs",
            image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "Subwoofers de alta potência para graves profundos e impactantes que fazem a diferença em qualquer evento. Resposta de frequência otimizada para máximo impacto."
        },
        {
            id: 6,
            title: "tapete Pista de dança Quadriculado",
            image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "xxxx."
        },
        {
            id: 7,
            title: " Par Led 64 rgbwa",
            image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "xx."
        },
        {
            id: 7,
            title: "Spot light",
            image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            description: "xx."
        }
    ];

    // Load packages with ALTURA DINÂMICA e APENAS 2 EQUIPAMENTOS
    function loadPackages() {
        const container = $('#packages-container');
        packages.forEach((pkg, index) => {
            const highlightClass = pkg.highlight ? 'highlight' : '';
            const categoryClass = `category-${pkg.category}`;
            
            // MOSTRAR APENAS OS 2 PRIMEIROS EQUIPAMENTOS
            const visibleEquipment = pkg.equipment.slice(0, 2);
            const hiddenEquipment = pkg.equipment.slice(2);
            
            const packageCard = $(`
                <div class="package-card ${highlightClass} ${categoryClass} animate-on-scroll" style="animation-delay: ${index * 0.1}s">
                    ${pkg.highlight ? '<div class="package-badge">DESTAQUE</div>' : ''}
                    
                    <!-- IMAGEM SEMPRE VISÍVEL NO MOBILE -->
                    <div class="package-image mobile-visible">
                        <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
                        <div class="package-overlay">
                            <div class="package-category-overlay">${pkg.category.toUpperCase()}</div>
                        </div>
                    </div>
                    
                    <div class="package-content">
                        <div class="package-header">
                            <h3 class="package-title">${pkg.title}</h3>
                            <p class="package-subtitle">${pkg.subtitle}</p>
                        </div>
                        
                        <!-- DESCRIÇÃO SEMPRE COMPLETA - SEM BOTÃO -->
                        <div class="package-description">
                            <p class="description-text">${pkg.description}</p>
                        </div>
                        
                        <!-- EQUIPAMENTOS - APENAS 2 PRIMEIROS VISÍVEIS -->
                        <div class="package-equipment">
                            <h4 class="equipment-title">
                                <span class="equipment-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9 18V5l12-2v13"/>
                                        <circle cx="6" cy="18" r="3"/>
                                        <circle cx="18" cy="16" r="3"/>
                                    </svg>
                                </span>
                                Equipamentos Inclusos
                            </h4>
                            
                            <!-- EQUIPAMENTOS VISÍVEIS (2 primeiros) -->
                            <div class="equipment-list-visible">
                                ${visibleEquipment.map(item => `
                                    <div class="equipment-item-detail">
                                        <div class="equipment-dot"></div>
                                        <span>${item}</span>
                                    </div>
                                `).join('')}
                            </div>
                            
                            <!-- EQUIPAMENTOS OCULTOS (restantes) -->
                            ${hiddenEquipment.length > 0 ? `
                                <div class="equipment-list-hidden" style="display: none;">
                                    ${hiddenEquipment.map(item => `
                                        <div class="equipment-item-detail">
                                            <div class="equipment-dot"></div>
                                            <span>${item}</span>
                                        </div>
                                    `).join('')}
                                </div>
                                <button class="equipment-toggle">Equipamentos Inclusos </button>
                            ` : ''}
                        </div>
                        
                        ${pkg.bonus ? `
                            <div class="package-bonus">
                                <div class="bonus-icon">🎁</div>
                                <span>${pkg.bonus}</span>
                            </div>
                        ` : ''}
                        
                        ${pkg.note ? `
                            <div class="package-note">
                                <div class="note-icon">ℹ️</div>
                                <span>${pkg.note}</span>
                            </div>
                        ` : ''}
                        
                        <div class="package-pricing-info">
                            <div class="pricing-main">
                                <span class="package-price">${pkg.price}</span>
                                <span class="package-duration">${pkg.duration}</span>
                            </div>
                            <div class="pricing-extra">
                                <span class="extra-hour">${pkg.extraHour}</span>
                            </div>
                        </div>
                        
                        <div class="package-actions">
                            <button class="package-btn primary" data-package="${pkg.title}">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                                </svg>
                                Contratar Agora
                            </button>
                        </div>
                    </div>
                </div>
            `);
            
            container.append(packageCard);
        });

        // Add click handlers for package buttons
        $('.package-btn').click(function() {
            const packageName = $(this).data('package');
            const message = `Olá, Marcio! Gostaria de contratar o pacote ${packageName}. Podem me enviar mais informações sobre disponibilidade e como proceder?`;
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });

        // TOGGLE EQUIPAMENTOS - MOSTRAR/ESCONDER RESTANTES
        $('.equipment-toggle').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const packageCard = $(this).closest('.package-card');
            const hiddenList = $(this).siblings('.equipment-list-hidden');
            const isExpanded = hiddenList.is(':visible');
            
            if (isExpanded) {
                hiddenList.slideUp(300);
                $(this).text($(this).text().replace('Ver Menos', 'Ver Tudo'));
            } else {
                hiddenList.slideDown(300);
                $(this).text($(this).text().replace('Ver Tudo', 'Ver Menos'));
            }
        });
    }

    // Load equipment with staggered animation
    function loadEquipment() {
        const container = $('#equipment-container');
        equipment.forEach((item, index) => {
            const equipmentCard = $(`
                <div class="equipment-item animate-on-scroll" 
                     style="animation-delay: ${index * 0.1}s" 
                     data-id="${item.id}">
                    <div class="equipment-image">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                        <div class="equipment-overlay">
                            <div class="play-button">▶️</div>
                        </div>
                    </div>
                    <div class="equipment-info">
                        <h3>${item.title}</h3>
                        <p>${item.description.substring(0, 100)}...</p>
                    </div>
                </div>
            `);
            
            container.append(equipmentCard);
        });
    }

    // Modal functionality with enhanced animations
    function initModal() {
        $('.equipment-item').click(function() {
            const itemId = $(this).data('id');
            const item = equipment.find(eq => eq.id === itemId);
            
            $('#modalTitle').text(item.title);
            $('#modalDescription').text(item.description);
            
            // Show modal with animation
            $('#equipmentModal').fadeIn(300);
            $('body').addClass('modal-open');
        });

        // Close modal handlers
        $('.modal-close, .modal-backdrop').click(function(e) {
            if (e.target === this) {
                $('#equipmentModal').fadeOut(300);
                $('body').removeClass('modal-open');
            }
        });

        // Close modal with Escape key
        $(document).keydown(function(e) {
            if (e.key === 'Escape' && $('#equipmentModal').is(':visible')) {
                $('#equipmentModal').fadeOut(300);
                $('body').removeClass('modal-open');
            }
        });
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        $('a[href^="#"]').click(function(e) {
            e.preventDefault();
            const target = $($(this).attr('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 800, 'easeInOutCubic');
            }
        });
    }

    // Performance optimizations
    function initPerformanceOptimizations() {
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Debounced scroll handler
        let scrollTimeout;
        $(window).scroll(function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(function() {
                // Add scroll-based effects here if needed
            }, 10);
        });
    }

    // WhatsApp button enhancements
    function initWhatsAppButton() {
        const whatsappBtn = $('.whatsapp-float');
        
        // Add tooltip on hover
        whatsappBtn.attr('title', 'Fale conosco no WhatsApp - Resposta rápida!');
        
        // Track clicks for analytics (if needed)
        whatsappBtn.click(function() {
            // Analytics tracking can be added here
            console.log('WhatsApp button clicked');
        });

        // Show/hide based on scroll position
        let lastScrollTop = 0;
        $(window).scroll(function() {
            const scrollTop = $(this).scrollTop();
            
            if (scrollTop > 300) {
                whatsappBtn.addClass('visible');
            } else {
                whatsappBtn.removeClass('visible');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Error handling for failed image loads
    function initErrorHandling() {
        $('img').on('error', function() {
            $(this).attr('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+PC9zdmc+');
        });
    }

    // Initialize all functionality
    function init() {
        loadPackages();
        loadEquipment();
        initMainCarousel(); // NOVO carrossel principal
        initAboutGallery(); // About gallery horizontal
        initModal();
        initScrollAnimations();
        initSmoothScrolling();
        initPerformanceOptimizations();
        initWhatsAppButton();
        initErrorHandling();

        // Add loaded class to body for CSS transitions
        $('body').addClass('loaded');
        
        console.log('PROAUDIO website initialized successfully!');
    }

    // Start initialization
    init();

    // Handle window resize
    $(window).resize(function() {
        // Recalculate layouts if needed
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(function() {
            // Resize handling code here
        }, 250);
    });

    // Add CSS for modal-open state
    $('<style>')
        .prop('type', 'css')
        .html(`
            body.modal-open {
                overflow: hidden;
            }
            .whatsapp-float.visible {
                opacity: 1;
                transform: scale(1);
            }
            .whatsapp-float:not(.visible) {
                opacity: 0.7;
                transform: scale(0.9);
            }
        `)
        .appendTo('head');
});

// Add easing function for smooth scrolling
$.easing.easeInOutCubic = function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
};