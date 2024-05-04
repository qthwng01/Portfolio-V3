interface ITechnologies {
  technologies: string[];
}

const TechStack = ({ technologies }: ITechnologies) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 mt-6">
      {technologies?.map((item, index) => (
        <span className="text-slate-300" key={index}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
