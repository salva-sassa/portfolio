import { Poppins } from 'next/font/google';

// Import Poppins with all available weights
export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], // Optional: Specify the character set if needed
});
