# ⚙️ Configurations

> The best configurations is no configuration.

Defaults are there for a reason. Start with the defaults and only change them when you have a good reason to.

However, these are some opinionated configurations to get started for a new project.

For system-wide configurations, see [dotfiles](https://github.com/tomy0000000/dotfiles).

## EditorConfig

```ini
# .editorconfig
# https://editorconfig.org/

# top-most EditorConfig file
root = true

# Global style
[*]
charset = utf-8  # Set default charset
end_of_line = lf  # Unix-style newlines
insert_final_newline = true  # Ensure newline at the end of file

# Go
# https://go.dev/doc/effective_go#formatting
[*.{go}]
indent_style = tab
indent_size = 4

# JavaScript / TypeScript
[*.{css,html,js,json,jsx,scss,ts,tsx,yaml,yml}]
indent_style = space
indent_size = 2
max_line_length = 80  # Prettier default

# Makefiles
[Makefile,*.mk]
indent_style = tab
indent_size = 4

# Python
# https://peps.python.org/pep-0008/#indentation
[*.{py}]
indent_style = space
indent_size = 4
# PEP 8 recommends:
# 72 for docstrings
# 79 for code (or up to 99)
max_line_length = 88

# Ruby
# https://rubystyle.guide/#tabs-or-spaces
[*.{rb}]
indent_style = space
indent_size = 2

# Shell scripts
[*.{sh}]
indent_style = space
indent_size = 4
```

## ESLint

Use `eslint.config.js` and change to `eslint.config.ts` once the feature is stable.

```javascript
// eslint.config.js
// https://eslint.org/docs/latest/use/configure/configuration-files
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
```

## Jest

```typescript
// jest.config.ts
// https://jestjs.io/docs/configuration
```

## Prettier

```json
// .prettierrc
// https://prettier.io/docs/en/configuration.html
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": false
}
```

## TypeScript

```json
// `tsconfig.json`
// https://www.typescriptlang.org/tsconfig/
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

### [`compilerOptions.target`](https://www.typescriptlang.org/tsconfig/#target)

The version to compile down to. Should be the minimum version supported by your users and should never be `esnext`. Typically, the second or third most recent version is a good choice.

### [`compilerOptions.module`](https://www.typescriptlang.org/tsconfig/#module)

See [this guide](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html) for more.
