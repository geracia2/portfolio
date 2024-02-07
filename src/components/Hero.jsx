import { Container, Text, Button, Group, Box, Collapse, Grid } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import { useDisclosure } from '@mantine/hooks';
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";


import classes from './Hero.module.css';

export function Hero() {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <div className={classes.wrapper}>
            <Container size={750} className={classes.inner} >
                <h1 className={classes.title}>
                    Aaron Geraci {" "}
                    <Text component="span" color='#6680FD' inherit>
                        Full Stack Developer{" "}
                    </Text>
                    / {" "}
                    <Text component="span" color='#FB931D' inherit>
                        Motion Designer,
                    </Text>
                    {" "} connecting right and left brained thinking.
                </h1>
                <Text className={classes.description} color="dimmed">
                    I'm a seasoned Motion Graphic Designer acquiring new career skills in Full Stack Development, exploring the world of tech to enhance my creative toolkit.
                </Text>
                <Grid style={{marginTop:'20px'}} >
                    <Grid.Col span={{ xs: 12, sm: 4 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap:'wrap' }}>
                        <Button component="a" href="https://github.com/geracia2" size="xl" variant="default" className={classes.control} leftSection={<GithubIcon size={20} />} >
                            My GitHub
                        </Button>
                        <Button component="a" href="https://www.linkedin.com/in/aaron-geraci/" size="xl" variant="default" className={classes.control} leftSection={<IoLogoLinkedin size={20} />} >
                            LinkedIn
                        </Button>
                        <Button component="a" href="https://docs.google.com/document/d/1-3mBPiyLRa14nv4TMan_BD6lsJ7p21tl/edit?usp=drive_link&ouid=116708027853520128681&rtpof=true&sd=true" size="xl" variant="default" className={classes.control} leftSection={<IoDocumentAttach size={20} />} >
                            Resume
                        </Button>
                        <Button component="a" href="mailto:geracia2@gmail.com" size="xl" variant="default" className={classes.control} leftSection={<MdEmail size={20} />} >
                            geracia2@gmail.com
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={{ xs: 12, sm: 8 }} className={classes.controls} >
                        <Button onClick={toggle} size="xl" variant="gradient" gradient={{ from: '#9CAEFF', to: '#6680FD' }} >
                            About Me
                        </Button>
                        <Collapse in={opened} transitionDuration={800} transitionTimingFunction="ease">
                            <Text >
                                Bridging the Gap: My mission? To seamlessly unite the realms of design and code, with a particular focus on creating experiences that resonate with the end user, especially children. I thrive on breaking down barriers between function and beauty, bringing a unique perspective to the table.
                                <br />
                                <br />
                                Crafting Compelling Narratives: Whether it's through animation, design, or a touch of tech wizardry, I specialize in weaving captivating stories with a purpose. Building on 8 years of design expertise, I've embraced the challenge of creating brand identities and experiences that not only captivate but also drive meaningful change for the youngest audience.
                                <br />
                                <br />
                                Why Me? I thrive on challenges and believe in the power of effective, beautiful, and memorable creations. My diverse skill set allows me to navigate the intersection of creativity and technology, ensuring that every project I touch becomes a harmonious blend of innovation and aesthetic appeal, especially tailored for the delight of children.
                                <br />
                                <br />
                                Let's connect and explore the limitless possibilities at the crossroads of design, coding, and creating magical experiences for young minds!
                            </Text>
                        </Collapse>
                    </Grid.Col>
                    
                </Grid>
            </Container>
        </div>
    );
}