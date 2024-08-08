import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//     cors: false
//   },
//   plugins: [react()],
// });

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://defivaultservice.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
    cors: false
  },
  build: {
    target: 'es2020'
  },
  plugins: [react()],
});