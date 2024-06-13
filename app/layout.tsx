import { ThemeProvider } from "@/components/theme-provider";
import 'aos/dist/aos.css';
import Logo from ".././public/heritagifyLogo1.png";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Heritagify&#x2019;s</title>
        <link rel="icon" href={Logo.src} type="image/png" sizes="64x64"/>
      </head>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}