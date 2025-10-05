interface SectionTitleProps {
  title: string;
  desc: string;
}

const SectionTitle = ({title, desc}: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <h2 className="subHeading">{title}</h2>
      <p className="max-w-md text-center">{desc}</p>
    </div>
  );
};

export default SectionTitle;
