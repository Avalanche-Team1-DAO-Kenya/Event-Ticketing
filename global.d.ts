// global.d.ts
declare global {
    interface Window {
      ethereum: any; // This will allow you to access window.ethereum without TypeScript errors
    }
  }
  
  export {};
  