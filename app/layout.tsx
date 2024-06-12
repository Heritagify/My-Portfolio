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
        <link rel="icon" href={Logo.src} type="image/png" />
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