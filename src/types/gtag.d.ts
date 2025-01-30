declare global {
    interface Window {
      gtag: (
        command: string,
        target: string | object,
        config?: object | undefined
      ) => void;
    }
  }
  
  export {};