export type FormButtonProps = {
    buttonLabel: string;
    onPress?: (e: GestureResponderEvent) => void;
    disabled?: boolean;
    loading?: boolean;
};
