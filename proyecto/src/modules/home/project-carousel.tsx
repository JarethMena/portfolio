import React from 'react';
import { Carousel } from 'flowbite-react';

interface Project {
    image: string;
    title: string;
    description: string;
    repoLink: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    return (
        <div className="w-full h-96 my-10">
            <Carousel>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative w-full h-96 bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute bottom-0 p-6 text-white">
                            <h2 className="text-4xl font-bold">{project.title}</h2>
                            <p className="text-md">{project.description}</p>
                            <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-yellow-500 dark:bg-blue-600 text-black dark:text-white py-2 px-4 rounded-lg"
                            >
                                Repo
                            </a>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProjectCarousel;
