import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";

const projects = [
    {
        image: '../../Resturant Website.PNG',
        title: 'Restaurant Website',
        icons: <FiGithub/>
    },
    {
        image: '../../AnalogClock.PNG',
        title: 'Analog Clock',
        icons: <FiGithub/
    },
    {
        image: '../../Weather App.PNG',
        title: 'Weather App',
        icons: <FiGithub/
    }
];

const Projects = () => {
    return (
        <Box>
            <Flex>
                {projects.map((project, key) => (
                    <Box key={key}>
                        <Image src={project.image} alt={project.title} />
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Projects;
