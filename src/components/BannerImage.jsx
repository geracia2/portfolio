import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Button, Badge, Group, Center, Avatar, ActionIcon, } from '@mantine/core';
import classes from './BannerImage.module.css';
import { IoLogoGithub } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";

const cardData = [
  {
    title: 'Space Invaders',
    description: 'This is my first project in Software Engineering! A simple retro game made in JavaScript',
    image: './images/spaceInvaders_16x9.jpg',
    github: 'https://github.com/geracia2/Space_Invaders',
    live: 'https://geracia2.github.io/Space_Invaders/',
  },
  {
    title: 'Dungeon Master Visualizer',
    description: 'Browse two APIs to conjure taverns, caves, weapons - whatever your budding D&D campaign craves!',
    image: './images/DMV_1_screen_16x9.jpg',
    github: 'https://github.com/geracia2/dungeon-master-visualizer',
    live: 'https://master--euphonious-mooncake-53c4ad.netlify.app/',
  },
  {
    title: 'Dungeon Master Visualizer v2',
    description: 'An update to Dungeon Master Visualizer making it a true MERN stack app with authentication and users.',
    image: './images/DMV_2_16x9.jpg',
    github: 'https://github.com/geracia2/dungeon-master-visualizer-v2',
    live: 'https://animated-otter-4d1e1f.netlify.app/home',
  },

];

export function BannerImage() {
  const cards = cardData.map((card) => (
    <Card withBorder radius="md" className={classes.card} key={card.title}>
      <Card.Section>
        <AspectRatio ratio={16 / 9} >
          <Image src={card.image} />
        </AspectRatio>
      </Card.Section>

      {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
      In-Process
    </Badge> */}

      <Text className={classes.title} fw={500} component="a" >
        {card.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {card.description}
      </Text>

      <Group justify="space-between" className={classes.footer}>


        <Group gap={8} mr={0}>
          <a href={card.github} target='_blank' rel='noopener noreferrer'>
            <ActionIcon size={40} className={classes.action} aria-label='GitHub link' alt="GitHub link">
              <IoLogoGithub />
            </ActionIcon>
          </a>
          <a href={card.live} target='_blank' rel='noopener noreferrer'>
            <ActionIcon size={40} className={classes.action}>
              <RiPagesFill />
            </ActionIcon>
          </a>
        </Group>
      </Group>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}