# Éve Estética — Site Institucional

Site institucional (one-page) da Éve Estética, clínica de estética facial e
corporal em Campinas-SP. Construído em HTML, CSS e JavaScript puros (sem
build step, sem dependências), para publicação simples em qualquer host
estático.

## Estrutura

```
index.html          página única com todas as seções
css/style.css        estilos (tokens de cor, tipografia, layout, responsivo)
js/main.js           menu mobile, animações de entrada, ano do rodapé
assets/favicon.svg   favicon (monograma "E")
```

## Seções do site

1. **Header** — logo (monograma "Éve" em SVG inline), navegação âncora, CTAs
   fixos (WhatsApp e Agendar Online).
2. **Hero** — proposta de valor, CTAs primário/secundário, nota do Google.
3. **Conceito** — posicionamento contra o exagero estético / harmonia natural.
4. **Serviços** — os 6 destaques da clínica (Harmonização Facial, Depilação a
   Laser Lavieen, Ultraformer, CO2, HIPRO, MPT).
5. **Para quem é** — checklist de público-alvo.
6. **Diferenciais** — prova social (nota 5,0 / 95 avaliações) e portfólio
   tecnológico.
7. **Localização** — endereço, horário, telefone e mapa incorporado (Google
   Maps, sem necessidade de chave de API).
8. **Footer** + botão flutuante de WhatsApp.

## Integrações

- **Agendamento**: todos os botões "Agendar Online" apontam para
  `https://www.trinks.com/eve-estetica` (fluxo externo já usado pela clínica).
- **WhatsApp**: `https://wa.me/5519986064055` com mensagem pré-preenchida.
- Não há agendamento nem automação de IA/SDR construídos neste site —
  conforme o tier Institucional.

## Identidade visual

Paleta e tipografia seguem a marca já existente da Éve:

- Dourado/champagne `#b8935f` / `#d4b483` como cor de destaque
- Preto/grafite `#17140f` como base escura
- Off-white/creme `#f7f1e6` para respiro e contraste
- Tipografia: `Cormorant Garamond` (títulos), `Alex Brush` (monograma do
  logo), `Jost` (texto corrido e rótulos em caixa alta espaçada)

O logo foi recriado em SVG inline (não havia arquivo vetorial fornecido)
seguindo a descrição do briefing: emblema circular dourado com monograma
cursivo "Éve" e wordmark "ESTÉTICA" abaixo.

## Pendências para o cliente (ver briefing)

- [ ] Confirmar se o tier **Institucional** é de fato o contratado.
- [ ] Receber arquivo vetorial original do logo (o SVG atual é uma
      recriação fiel à descrição, mas o ideal é usar a arte oficial).
- [ ] Fotos em alta resolução dos procedimentos/ambiente (as disponíveis
      eram capturas de tela do Instagram/Google). Até lá, o hero e a seção
      "Para quem é" usam tratamento tipográfico sobre fundo escuro
      (consistente com o moodboard da marca) no lugar de fotos.
- [ ] Confirmar prazo de entrega.
- [ ] Validar textos institucionais (About e descrições de serviço foram
      escritos do zero a partir do briefing, já que o conteúdo do Instagram
      era fragmentado).

## Rodando localmente

Qualquer servidor estático funciona, por exemplo:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Deploy

Site 100% estático — pode ser publicado em qualquer host (Netlify, Vercel,
GitHub Pages, S3, etc.) apenas copiando os arquivos, sem processo de build.
