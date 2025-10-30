# ✅ Dimensões CORRETAS para Imagens do Carrossel

## 📐 Cálculo Baseado nas Dimensões Reais do Carrossel

### Carrossel Configurado:
- **Largura**: 100vw (largura total da tela)
- **Altura**: 50vh (exatamente metade da altura da tela)

---

## 🖥️ Desktop (Resolução Comum 1920×1080px)

### Dimensões Reais do Container:
- **Largura**: 1920px (100% da tela)
- **Altura**: 540px (50vh de 1080px)
- **Proporção Real**: 1920:540 = **3.56:1** (panorâmica)

### ✅ DIMENSÃO CORRETA PARA DESKTOP:
**1920 × 540px** - Esta é a proporção EXATA!

---

## 📱 Mobile (Resolução Comum 375×812px)

### Dimensões Reais do Container:
- **Largura**: 375px
- **Altura**: 406px (50vh de 812px)
- **Proporção Real**: 375:406 = **0.92:1** (quase quadrado)

---

## 🎯 Recomendação Final

### **Para Desktop (prioridade):**
**1920 × 540px** - Proporção 3.56:1

**Por quê:**
- ✅ Proporção EXATA do carrossel no desktop
- ✅ Encaixa perfeitamente sem cortes indesejados
- ✅ Qualidade suficiente para retina displays
- ✅ Arquivo otimizado (menor que 1920×1080)

### **Alternativa (maior qualidade):**
**2560 × 720px** - Mesma proporção 3.56:1
- Para telas 4K/retina
- Arquivo maior, mas qualidade superior

---

## 📊 Por Dispositivo

| Dispositivo | Largura Container | Altura Container (50vh) | Proporção | Dimensão Imagem Recomendada |
|-------------|-------------------|-------------------------|-----------|----------------------------|
| Desktop 1920×1080 | 1920px | 540px | 3.56:1 | **1920 × 540px** |
| Desktop 2560×1440 | 2560px | 720px | 3.56:1 | **2560 × 720px** |
| Desktop 3840×2160 | 3840px | 1080px | 3.56:1 | **3840 × 1080px** |
| Tablet 768×1024 | 768px | 512px | 1.5:1 | Usa a mesma do desktop |
| Mobile 375×812 | 375px | 406px | 0.92:1 | Usa a mesma do desktop |

---

## 💡 Como Funciona no Mobile?

Como o mobile tem proporção quase quadrada (0.92:1) e a imagem será panorâmica (3.56:1):
- O CSS `object-fit: cover` vai **cortar as laterais** da imagem
- A **altura** será preservada
- O centro da imagem será mostrado

**Dica**: Centralize o assunto principal no centro da imagem, pois as laterais serão cortadas no mobile.

---

## ✅ Resumo Final

### **Dimensão Única Recomendada:**

**1920 × 540px** (Proporção 3.56:1)

- ✅ Encaixa PERFEITAMENTE no desktop
- ✅ Funciona bem no mobile (com corte lateral esperado)
- ✅ Qualidade adequada
- ✅ Arquivo otimizado

**Formato**: JPG com qualidade 85-90% ou WebP  
**Tamanho do arquivo**: Máximo 300-400KB

---

## 💡 Dica Extra

Para evitar cortes importantes do assunto principal:
- **Centralize o assunto principal** no centro da imagem
- **Evite elementos importantes nas bordas** (serão cortados em mobile)
- **Use imagens com espaço negativo** nas laterais

