export default async () => {
  const tailwindcss = (await import('tailwindcss')).default;
  const autoprefixer = (await import('autoprefixer')).default;

  return {
    plugins: [tailwindcss, autoprefixer],
  };
};
