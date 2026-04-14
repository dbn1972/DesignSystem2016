/// <reference types="vite/client" />

// Vite ?raw imports — returns the file content as a string
declare module '*?raw' {
  const content: string;
  export default content;
}
