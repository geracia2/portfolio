import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Box } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './DarkLightToggle.module.css';

export function DarkLightToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (

    <Box className={classes.wrapper}>
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Box>


  );
}