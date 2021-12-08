module.exports = {
  "compilerOptions": {
    "baseUrl": ".",
    "target": "ES6",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "skipLibCheck": true,
    "strict": true,
    "allowJs": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "plugins": [
      {
        "name": "typescript-plugin-css-modules",
        "options": {
          "classnameTransform": "camelCaseOnly",
          "postcssOptions": {
            "useConfig": true
          }
        }
      }
    ],
    "typeRoots": ["./node_modules/@types", "./types"],
    "paths": {
      "@/*": ["./src/*"],
      "src/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "build"]
}
