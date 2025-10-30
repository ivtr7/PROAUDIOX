# PROAUDIO - Site Profissional

Site estático para empresa de soluções audiovisuais.

## 🚀 Deploy no Vercel

### Opção 1: Via Interface Web
1. Acesse [vercel.com](https://vercel.com)
2. Faça login (GitHub/Google)
3. Clique em "Add New Project"
4. Importe o repositório ou arraste a pasta do projeto
5. Clique em "Deploy"

### Opção 2: Via CLI
```bash
npm i -g vercel
vercel
```

## 📁 Estrutura do Projeto

```
/
├── index.html          # Página principal
├── script.js           # JavaScript
├── styles.css          # CSS personalizado
├── asset/              # Imagens e assets
├── vercel.json         # Configuração do Vercel
└── README.md           # Este arquivo
```

## ✏️ Editar Carrossel

Edite diretamente no `index.html`:
```html
<div class="carousel-slide">
    <img src="asset/sua-imagem.jpg" loading="lazy" />
</div>
```

## 📝 Dimensões Recomendadas

- **Carrossel**: 1920 × 540px (proporção panorâmica)
- **Logo**: Formato PNG com fundo transparente

## 🔧 Tecnologias

- HTML5
- CSS3
- JavaScript (jQuery)
- Tailwind CSS (CDN)
- AOS (Animate On Scroll)

## 🌐 URLs Externas

- Tailwind CSS: CDN
- jQuery: CDN
- AOS: CDN
- Google Fonts: CDN
- Google Maps: Embed iframe
- WhatsApp: Link direto

Todas as URLs estão configuradas e funcionarão no Vercel!

