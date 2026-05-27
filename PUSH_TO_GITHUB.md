# Push Astro-code naar GitHub

> Eenmalige setup om de Astro-projectfolder naar de zojuist aangemaakte GitHub-repo te pushen.
>
> **Repo:** https://github.com/oneselfbv/rolvink-premium-car-imports (Private)

## Vereisten

- **Git** geïnstalleerd op je laptop ([download voor Windows](https://git-scm.com/download/win))
- **GitHub Personal Access Token** (PAT) of GitHub Desktop voor authenticatie

## Optie A — Command-line (snelst, ~1 minuut)

Open een terminal (PowerShell of CMD) en run:

```bash
cd "C:\Users\theow\OneDrive\Documenten\Claude\Projects\Japan car import bedrijf\astro-website"

git init
git add .
git commit -m "Initial commit: Astro projectstructuur + homepage + brand pages"
git branch -M main
git remote add origin https://github.com/oneselfbv/rolvink-premium-car-imports.git
git push -u origin main
```

Bij `git push` vraagt Git om authenticatie:
- **Username:** `oneselfbv`
- **Password:** een [Personal Access Token](https://github.com/settings/tokens) (NIET je GitHub-wachtwoord)

Geen PAT? Maak er één aan op https://github.com/settings/tokens/new:
- Note: "rolvink-website-push"
- Expiration: 30 days
- Scopes: ✓ `repo` (full control)
- Generate token → kopieer en plak als password

## Optie B — GitHub Desktop (visueel, ~3 minuten)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Log in met je GitHub-account (oneselfbv)
3. File → Add Local Repository
4. Browse naar: `C:\Users\theow\OneDrive\Documenten\Claude\Projects\Japan car import bedrijf\astro-website`
5. "create a repository" wanneer gevraagd — sla over (we hebben al een remote)
6. Publish repository → kies `oneselfbv/rolvink-premium-car-imports`
7. ✓ Keep code private — Publish

## Wat er gebeurt na de push

1. Alle 27 bestanden staan online op GitHub
2. Vercel kan de repo importeren en automatisch builden
3. Elke `git push` daarna trigger Vercel automatisch een nieuwe deploy

## Verifieren

Open https://github.com/oneselfbv/rolvink-premium-car-imports — je zou alle bestanden moeten zien:
- `package.json`
- `astro.config.mjs`
- `src/pages/`
- `src/components/`
- `README.md`
- enz.

---

*Zodra de code online staat, ga ik door met Vercel-setup en domein-koppeling.*
