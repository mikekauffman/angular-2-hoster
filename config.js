System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  map: {
    app: "./app",
    'redux': 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.0.4/redux.js'
  },
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    }
  }
});
