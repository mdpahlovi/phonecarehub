export type ActionProps = {
    action: (data: any) => Promise<{ success: boolean; message: string; redirect?: string }>;
};

export type DeletePath =
    | "service"
    | "onlineAppointment"
    | "offlineAppointment"
    | "deviceShipping"
    | "payment"
    | "deviceReturned"
    | "review"
    | "user"
    | "admin"
    | "blog"
    | "faq";
