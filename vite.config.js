import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Update this with your GitHub repo name if it's not a user/organization page
const repoName = 'apple-products-store'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react(), tailwindcss()],
})
