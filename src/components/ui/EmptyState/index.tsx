import { Box, Stack, StackProps, Text } from "@mantine/core";
import { ReactNode } from "react";
import { IconProps } from "../Icon";

interface EmptyProps extends StackProps {
  label: ReactNode;
  action?: ReactNode;
  icon?: React.FC<IconProps>;
  size?: keyof typeof pxBySize;
}

const pxBySize = {
  sm: 48,
  md: 64,
  lg: 84
};

const EmptyState = ({
  label,
  action,
  icon,
  size = "md",
  ...stackProps
}: EmptyProps) => {
  // const Icon = icon || IconWind;
  return (
    <Stack justify="center" align="center" gap={"xs"} {...stackProps}>
      {/* <Icon size={pxBySize[size]} /> */}
      <Text fw={500}>{label}</Text>
      <Box>{action}</Box>
    </Stack>
  );
};

export default EmptyState;
