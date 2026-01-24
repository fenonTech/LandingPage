# Como Limpar Cache do Deploy S3

## Problema

Após fazer deploy, as mudanças não aparecem devido ao cache do navegador e S3.

## Soluções

### 1. Hard Refresh no Navegador (Teste Rápido)

- **Windows/Linux**: `Ctrl + Shift + R` ou `Ctrl + F5`
- **Mac**: `Cmd + Shift + R`

### 2. Limpar Cache do S3 (Via AWS Console)

#### Se usar CloudFront:

1. Acesse o AWS CloudFront Console
2. Selecione sua distribuição
3. Vá em "Invalidations"
4. Clique em "Create Invalidation"
5. Digite `/*` para limpar tudo ou `/landingpage/*` para limpar só a landing page
6. Aguarde 5-10 minutos

#### Se usar apenas S3:

1. Acesse o bucket S3
2. Vá em "Properties" > "Static website hosting"
3. Configure os headers de cache:
   - `Cache-Control: max-age=0` para index.html
   - `Cache-Control: max-age=31536000` para assets com hash

### 3. Comando AWS CLI (Mais Rápido)

```bash
# Invalidar CloudFront
aws cloudfront create-invalidation --distribution-id SEU_DISTRIBUTION_ID --paths "/*"

# Ou apenas landing page
aws cloudfront create-invalidation --distribution-id SEU_DISTRIBUTION_ID --paths "/landingpage/*"
```

### 4. Solução Automática (Configurado)

O vite.config.js agora adiciona hash automático nos arquivos:

- `assets/main.[hash].js`
- `assets/style.[hash].css`

Isso força o navegador a baixar novos arquivos em cada deploy! ✅

## Checklist de Deploy

1. ✅ Fazer build: `npm run build`
2. ✅ Fazer upload dos arquivos para S3
3. ✅ Invalidar cache do CloudFront (se usar)
4. ✅ Testar com hard refresh no navegador
