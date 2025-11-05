import { GestureResponderEvent } from "react-native";

export type FormButtonProps = {
    currentStep: number,
    onPress?: (e: GestureResponderEvent) => void;
    disabled?: boolean;
    loading?: boolean;
};

export const buttonLabels: string[] = ["Create Farmer Profile", "Next", "Complete", "Complete", "Complete"];
