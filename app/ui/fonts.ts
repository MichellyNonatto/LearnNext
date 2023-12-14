import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const poppins = Poppins({weight: ['300', '600', '800'], subsets: ['latin'] });
export const inter = Inter({subsets: ['latin']});
export const lusitana = Poppins({weight: ['400'], subsets: ['latin']});