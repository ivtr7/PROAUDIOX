# 📸 Como Editar as Imagens do Carrossel

## 🎯 Guia Rápido

### Para trocar uma imagem existente:

1. Abra o arquivo `index.html`
2. Encontre a seção do carrossel (linha ~105)
3. Localize o slide que deseja editar (estão comentados como "SLIDE 1", "SLIDE 2", etc.)
4. Altere o caminho no atributo `src=""`:

```html
<!-- Exemplo: SLIDE 1 -->
<div class="carousel-slide">
    <img src="asset/carousel1.jpg"  <!-- ← ALTERE AQUI -->
         alt="Evento com sistema audiovisual profissional" />
    <div class="carousel-overlay">
        <h3>Eventos Corporativos</h3>  <!-- ← Ou altere o título -->
        <p>Soluções completas para empresas</p>  <!-- ← Ou o texto -->
    </div>
</div>
```

---

## ➕ Adicionar Novo Slide

1. Copie um dos blocos de slide existente
2. Cole após o último slide
3. Altere o `src=""` para sua nova imagem
4. Altere o `alt=""`, título e texto
5. **Pronto!** Os indicadores são gerados automaticamente

**Exemplo:**

```html
<!-- SLIDE 6 - Novo slide -->
<div class="carousel-slide">
    <img src="asset/carousel6.jpg" 
         alt="Sua descrição aqui" 
         loading="lazy" />
    <div class="carousel-overlay">
        <h3>Seu Novo Título</h3>
        <p>Seu texto descritivo</p>
    </div>
</div>
```

---

## ➖ Remover Slide

1. Encontre o bloco `<div class="carousel-slide">` que deseja remover
2. Delete todo o bloco (incluindo o comentário acima dele)
3. **Pronto!** Os indicadores se ajustam automaticamente

---

## 📐 Dimensão Recomendada das Imagens

### **1920 × 1080px** (proporção 16:9)

- ✅ Funciona perfeitamente em desktop e mobile
- ✅ Qualidade Full HD
- ✅ O carrossel ajusta automaticamente com `object-fit: cover`

### Onde colocar as imagens:

Coloque suas imagens na pasta `asset/` com os nomes:
- `carousel1.jpg`
- `carousel2.jpg`
- `carousel3.jpg`
- etc.

Ou use qualquer caminho que preferir, como:
- `asset/imagens/meu-evento.jpg`
- `fotos/casamento.jpg`

---

## ✨ Funcionalidades Automáticas

O JavaScript detecta automaticamente:
- ✅ Quantidade de slides
- ✅ Gera os indicadores (bolinhas na parte inferior)
- ✅ Navegação funciona automaticamente
- ✅ Auto-play a cada 4 segundos
- ✅ Pause ao passar o mouse

**Você não precisa mexer no JavaScript!**

---

## 📝 Campos para Editar

Em cada slide você pode editar:

1. **`src=""`** - Caminho da imagem (obrigatório)
2. **`alt=""`** - Descrição para acessibilidade (obrigatório)
3. **`<h3>`** - Título que aparece sobre a imagem
4. **`<p>`** - Texto que aparece abaixo do título

---

## 💡 Dicas

- **Primeira imagem**: Use `loading="eager"` (carrega imediatamente)
- **Outras imagens**: Use `loading="lazy"` (carrega sob demanda - já configurado)
- **Ordem dos slides**: O primeiro será exibido inicialmente
- **Nomes das imagens**: Use nomes descritivos (ex: `evento-corporativo.jpg`)

---

## 🔧 Exemplo Completo

```html
<!-- SLIDE 1 - Evento Corporativo -->
<div class="carousel-slide">
    <img src="asset/eventos/corporativo-2024.jpg" 
         alt="Evento corporativo com som e iluminação profissional" 
         loading="eager" />
    <div class="carousel-overlay">
        <h3>Eventos Corporativos</h3>
        <p>Transforme sua empresa com eventos memoráveis</p>
    </div>
</div>
```

---

**Pronto! Agora é só adicionar suas imagens! 🚀**

