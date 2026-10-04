// Standard page section: vertical spacing + centered container
const Section = ({
  bg = "bg-white",
  container = "max-w-7xl",
  padding = "py-24",
  className = "",
  children,
}) => {
  return (
    <section className={`${bg} ${padding} ${className}`}>
      <div className={`mx-auto ${container} px-6`}>{children}</div>
    </section>
  );
};

export default Section;
