export type FormData = {
    title: string;
    from: string;
    message: string;
};

export type ContactFormProps = {
    t: (key: string) => string;
};