# 📐 Cálculo Correto das Dimensões do Carrossel

## Dimensões do Container do Carrossel

### Desktop (1920×1080px - Full HD)
- **Largura**: 1920px (100vw)
- **Altura**: 540px (50vh de 1080px)
- **Proporção**: 1920:540 = **3.56:1** (panorâmica)

### Desktop 4K (3840×2160px)
- **Largura**: 3840px
- **Altura**: 1080px (50vh de 2160px)
- **Proporção**: 3840:1080 = **3.56:1** (mesma proporção)

### Mobile iPhone (375×812px)
- **Largura**: 375px
- **Altura**: 406px (50vh de 812px)
- **Proporção**: 375:406 = **0.92:1** (quase quadrado!)

### Mobile Android comum (360×800px)
- **Largura**: 360px
- **Altura**: 400px (50vh de 800px)
- **Proporção**: 360:400 = **0.9:1** (quase quadrado)

---

## ✅ DIMENSÃO RECOMENDADA CORRETA

### Para Desktop (mais importante):
**1920 × 540px** - Proporção 3.56:1

Esta é a proporção EXATA que vai encaixar perfeitamente no desktop.

### Para Mobile:
Como a proporção muda muito (fica quase quadrado), o `object-fit: cover` vai cortar, mas se você centralizar o assunto na imagem, funcionará bem.

---

## 🎯 Recomendação Final

### **Use: 1920 × 540px**

Por quê:
- ✅ Proporção EXATA do carrossel no desktop (3.56:1)
- ✅ Funciona perfeitamente sem corte na maioria dos desktops
- ✅ No mobile o CSS ajusta automaticamente
- ✅ Qualidade suficiente para retina displays

### Alternativa (mais seguro):
**2560 × 720px** - Proporção 3.56:1
- Maior resolução para telas 4K
- Mesma proporção
- Arquivo um pouco maior

---

## 📊 Tabela de Proporções por Resolução

| Dispositivo | Largura | Altura (50vh) | Proporção |
|-------------|---------|---------------|-----------|
| Desktop 1920×1080 | 1920px | 540px | 3.56:1 |
| Desktop 2560×1440 | 2560px | 720px | 3.56:1 |
| Desktop 3840×2160 | 3840px | 1080px | 3.56:1 |
| Tablet 768×1024 | 768px | 512px | 1.5:1 |
| Mobile 375×812 | 375px | 406px | 0.92:1 |
| Mobile 360×800 | 360px | 400px | 0.9:1 |

**Conclusão**: Desktop usa proporção 3.56:1, mobile usa ~1:1

