import { IconDownload, IconMoon, IconSearch, IconSun, IconWorld } from '@tabler/icons-react';
import { ActionIcon, Button, Group } from '@mantine/core';
import classes from './NavigationRightActions.module.css';

interface NavigationRightActionsProps {
  toggleColorScheme: () => void;
  isDark: boolean;
}

export function NavigationRightActions({ toggleColorScheme, isDark }: NavigationRightActionsProps) {
  return (
    <Group gap="xs" wrap="nowrap">
      <>
        <ActionIcon variant="subtle" size="lg" aria-label="Search">
          <IconSearch size="1.2rem" stroke={1.5} />
        </ActionIcon>
        <Group gap="xs" wrap="nowrap">
          <Button variant="subtle" size="sm">
            登录
          </Button>
          <Button variant="filled" size="sm" className={classes.registerButton}>
            注册
          </Button>
        </Group>
        <Group gap="xs" wrap="nowrap">
          <ActionIcon variant="subtle" size="lg" aria-label="Download">
            <IconDownload size="1.2rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            onClick={() => toggleColorScheme()}
            size="lg"
            aria-label="Toggle color scheme"
          >
            {isDark ? (
              <IconSun size="1.2rem" stroke={1.5} />
            ) : (
              <IconMoon size="1.2rem" stroke={1.5} />
            )}
          </ActionIcon>
          <ActionIcon variant="subtle" size="lg" aria-label="Change language">
            <IconWorld size="1.2rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </>
    </Group>
  );
}
