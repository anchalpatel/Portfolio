const SectionWrapper = ({ id, children, withGradient = false }) => {
  return (
    <section
      id={id}
      className={withGradient ? "bg-gradient-to-b from-transparent to-[#111827]/60" : ""}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;