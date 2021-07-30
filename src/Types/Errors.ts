export type AuthErrors = {
    login: ErrorsObject | null;
    registration: ErrorsObject | null;
};
export type ErrorsObject = {
    message: string;
    errors: [];
};
