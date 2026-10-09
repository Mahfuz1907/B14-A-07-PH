import { Metadata } from "next";

export const metadata: Metadata = {
  title: "সাইন আপ — বাজার দর",
  icons:{
    icon: '/logo-icon.png'
  }
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className='h-full bg-[#f0f5f0]'
    >
      <body className={`min-h-full flex flex-col antialiased`}>
          {children}
      </body>
    </html>
  );
}
