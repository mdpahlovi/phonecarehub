import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";
import UpdateOnlineAppointmentForm from "@/components/Appointment/UpdateOnlineAppointmentForm";

export default async function SetOnlineAppointment({ params }: { params: { id: string } }) {
    const appointment = await prisma.onlineAppointment.findUnique({ where: { id: params?.id } });
    if (!appointment) notFound();

    async function action(data: any) {
        "use server";

        const appointment = await prisma.onlineAppointment.update({ where: { id: params?.id }, data });
        if (!appointment) return { success: false, message: "Something went wrong!" };

        return {
            success: true,
            message: "Appointment Updated Successfully",
            redirect: `/dashboard/mOnlineAppointments?status=${appointment?.status}`,
        };
    }

    return <UpdateOnlineAppointmentForm appointment={appointment} action={action} />;
}
