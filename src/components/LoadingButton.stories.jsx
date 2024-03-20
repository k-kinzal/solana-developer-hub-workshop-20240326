import { LoadingButton } from "./LoadingButton";

export default {
  title: "Components/LoadingButton",
  component: LoadingButton,
};

export const Default = {
  args: undefined,
  render: () => (
    <LoadingButton onClick={() => {}}>Button</LoadingButton>
  ),
};

export const Disabled = {
  args: undefined,
  render: () => (
    <LoadingButton onClick={() => {}} disabled>Button</LoadingButton>
  ),
};
