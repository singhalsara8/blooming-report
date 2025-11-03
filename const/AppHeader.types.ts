import { TextStyle, ViewStyle } from "react-native";

export type AppHeaderProps = {
    title?: string;
    onBack?: () => void;
    showBack?: boolean;
    style?: ViewStyle;
    titleStyle?: TextStyle;
};
