import { DATA_PROJECT } from './DATA_PROJECT';
// import ProjectCard from './ProjectCard';
import  ThreeDCardDemo  from './ThreeDCardDemo';

export default function ProjectSection() {
  return (
    <section className=" w-full flex flex-col space-y-10 justify-center items-center" id="project">
      <h2 className="text-center uppercase font-medium text-[var(--primary-color)] text-5xl">Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {DATA_PROJECT.map((data, idx) => (
          // <ProjectCard data={data} key={idx} />
          <ThreeDCardDemo data={data} key={idx} />
        ))}
      </div>
    </section>
  );
}
