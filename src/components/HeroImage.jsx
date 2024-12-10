function HeroImage() {
  return (
    <div className="mb-4 h-56 max-w-72 overflow-hidden rounded-2xl bg-offWhite sm:mb-6 dark:border dark:border-gray-light dark:bg-gray-dark">
      <img
        src="hero-image.jpg"
        alt="Ryne Gandia"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

export default HeroImage;
