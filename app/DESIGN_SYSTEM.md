# Système de Design Uniforme - Portfolio MWD

## Vue d'ensemble

Ce document décrit le système de design uniforme mis en place pour harmoniser l'apparence et la responsivité de toutes les pages du portfolio.

## Variables CSS Globales

### Couleurs
```css
:root {
  /* Couleurs principales */
  --primary-color: #ff4742;        /* Rouge principal */
  --primary-hover: #ff1e1a;        /* Rouge au survol */
  --secondary-color: #333;         /* Gris foncé */
  --accent-color: #0073e6;         /* Bleu accent */
  --accent-hover: #005bb5;         /* Bleu accent au survol */
  
  /* Couleurs de fond */
  --bg-primary: #121212;           /* Fond principal sombre */
  --bg-secondary: #1c1c1c;         /* Fond secondaire */
  --bg-light: #f7f7f7;             /* Fond clair */
  --bg-white: #ffffff;              /* Blanc pur */
  
  /* Couleurs de texte */
  --text-primary: #eeeeee;         /* Texte principal clair */
  --text-secondary: #333;          /* Texte secondaire */
  --text-muted: #666;              /* Texte atténué */
  --text-light: #ffffff;           /* Texte clair */
}
```

### Espacements
```css
:root {
  --spacing-xs: 0.5rem;    /* 8px */
  --spacing-sm: 1rem;      /* 16px */
  --spacing-md: 1.5rem;    /* 24px */
  --spacing-lg: 2rem;      /* 32px */
  --spacing-xl: 3rem;      /* 48px */
  --spacing-xxl: 4rem;     /* 64px */
}
```

### Rayons de bordure
```css
:root {
  --border-radius-sm: 5px;
  --border-radius-md: 10px;
  --border-radius-lg: 15px;
}
```

### Ombres
```css
:root {
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

### Transitions
```css
:root {
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### Breakpoints
```css
:root {
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;
}
```

## Typographie Responsive

### Utilisation de `clamp()`
```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  /* Taille minimale: 2rem, taille maximale: 4rem, 
     s'adapte à la largeur de l'écran (5vw) */
}

p {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
}
```

### Hiérarchie des titres
- **H1**: `clamp(2rem, 5vw, 4rem)` - Titres principaux
- **H2**: `clamp(1.5rem, 4vw, 3rem)` - Sous-titres
- **H3**: `clamp(1.25rem, 3vw, 2rem)` - Titres de section
- **P**: `clamp(1rem, 2.5vw, 1.2rem)` - Texte de paragraphe

## Grilles Responsives

### Classes utilitaires
```css
.grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
```

### Utilisation
```css
.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}
```

## Boutons Uniformes

### Style de base
```css
.btn-primaire {
  background-color: var(--primary-color);
  color: var(--text-light);
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
}
```

### États
```css
.btn-primaire:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

## Responsive Design

### Breakpoints principaux
- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: 480px - 768px
- **Small Mobile**: < 480px

### Media Queries
```css
@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-sm);
  }
  
  section {
    padding: var(--spacing-xl) 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-xs);
  }
  
  section {
    padding: var(--spacing-lg) 0;
  }
}
```

## Classes Utilitaires

### Espacement
```css
.mt-0, .mt-1, .mt-2, .mt-3, .mt-4, .mt-5  /* margin-top */
.mb-0, .mb-1, .mb-2, .mb-3, .mb-4, .mb-5  /* margin-bottom */
.p-0, .p-1, .p-2, .p-3, .p-4, .p-5        /* padding */
```

### Layout
```css
.text-center, .text-left, .text-right      /* alignement de texte */
.d-flex, .flex-column, .justify-center     /* flexbox */
.w-100, .h-100                             /* dimensions */
.rounded, .shadow                           /* apparence */
```

### Animations
```css
.fade-in, .slide-in-left, .slide-in-right  /* animations d'entrée */
```

## Implémentation par Page

### Home
- Utilise les variables CSS pour les couleurs et espacements
- Typographie responsive avec `clamp()`
- Grille responsive pour les projets en vedette
- Animations fluides

### About
- Sections avec espacements uniformes
- Cartes flip avec transitions
- Images responsives
- Grille adaptative pour les compétences

### Projects
- Grille CSS pour la liste des projets
- Cartes avec ombres et transitions
- Boutons uniformes
- Images responsives

### Contact
- Formulaire avec styles cohérents
- Icônes sociales avec transitions
- Boutons uniformes
- Layout responsive

### Skills
- Grille CSS pour les compétences
- Cartes avec effets de survol
- Indicateurs de niveau
- Responsive sur tous les écrans

### Services
- Grille pour les forfaits
- Sections avec espacements uniformes
- Boutons cohérents
- Design responsive

## Avantages du Système

1. **Cohérence visuelle** - Toutes les pages utilisent les mêmes couleurs, espacements et styles
2. **Maintenance facilitée** - Modification centralisée des variables CSS
3. **Responsive par défaut** - Utilisation de `clamp()` et grilles CSS
4. **Performance** - CSS optimisé avec variables et classes utilitaires
5. **Accessibilité** - Contrastes et tailles de police appropriés
6. **Scalabilité** - Facile d'ajouter de nouvelles pages avec le même style

## Bonnes Pratiques

1. **Utiliser les variables CSS** au lieu de valeurs codées en dur
2. **Employer `clamp()`** pour la typographie responsive
3. **Privilégier les grilles CSS** pour les layouts
4. **Tester sur différents écrans** pour vérifier la responsivité
5. **Maintenir la cohérence** des espacements et couleurs
6. **Utiliser les classes utilitaires** pour les styles communs

## Maintenance

Pour modifier le design global :
1. Modifier les variables dans `src/index.css`
2. Tester sur différentes tailles d'écran
3. Vérifier la cohérence sur toutes les pages
4. Documenter les changements importants 