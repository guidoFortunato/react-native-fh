import React from "react";
import { Text, Pressable, PressableProps, View } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  className?: string;

  variant?: "contained" | "text-only";
}

const CustomButton = React.forwardRef(
  (
    { children, color = "primary", variant = "contained", className, ...rest }: Props,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color];

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color];

    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3 ${className}`}
          {...rest}
          ref={ref}
        >
          <Text className={`text-center ${textColor}`}>{children}</Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 ${btnColor} rounded-md active:opacity-90 ${className}`}
        {...rest}
        ref={ref}
      >
        <Text className="text-white text-center">{children}</Text>
      </Pressable>
    );
  }
);
export default CustomButton;
