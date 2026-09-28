import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica",
  description:
    "Dr. Maya Reynolds offers warm, collaborative therapy for adults in Santa Monica and throughout California, specializing in anxiety, trauma, burnout, and perfectionism.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}