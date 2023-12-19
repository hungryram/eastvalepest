import { Poppins } from 'next/font/google';
 
export const bodyFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--body-font'
});
 