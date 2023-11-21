import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <footer className={'font-medium text-center'}>
          <p> Create by <span className='text-blue-500'>Michelly Nonato</span> &copy;</p>
        </footer>
      </body>
    </html>
  );
}
