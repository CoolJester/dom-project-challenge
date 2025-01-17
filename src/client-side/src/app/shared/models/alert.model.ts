export interface AlertPayload {
    type?: AlertType,
    heading?: string,
    body?: string
}

export enum AlertType {
    primary = "primary",
    danger  = 'danger',
    warning = 'warning',
    secondary = 'secondary'
}