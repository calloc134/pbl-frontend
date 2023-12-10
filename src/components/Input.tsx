import { ark } from "@ark-ui/react";
import { styled, type HTMLStyledProps } from "src/lib/styled-system/jsx";
import { input } from "src/lib/styled-system/recipes";

export const Input = styled(ark.input, input);
export interface InputProps extends HTMLStyledProps<typeof Input> {}
