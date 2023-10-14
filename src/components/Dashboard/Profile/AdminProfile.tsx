"use client";

import { useState } from "react";
import { Admin } from "@/types/response";
import Form from "@/components/Forms/Form";
import { Box, Stack, Button } from "@mui/material";
import FormInput from "@/components/Forms/FormInput";
import useAxiosRequest from "@/hooks/useAxiosRequest";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormProfileUpload from "@/components/Forms/FormProfileUpload";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import useUpdateProfile from "@/hooks/useUpdateProfile";

type AdminProfileValue = { name: string; email: string; phone: string };

export default function AdminProfile({ profile }: { profile: Admin }) {
    const [editing, setEditing] = useState(false);
    const { updateProfile, loading } = useUpdateProfile();

    const { name, email, phone, image } = profile;
    const initialValues = { name, email, phone };

    return (
        <Box position="relative" my={3}>
            <Button sx={{ width: "max-content", position: "absolute", right: 0 }} onClick={() => setEditing(!editing)}>
                {editing ? "Cancel" : "Edit"}
            </Button>
            <Form initialValues={initialValues} onSubmit={updateProfile}>
                <FormProfileUpload image={image} name="image" disabled={!editing} />
                <FormInput name="name" label="Name" disabled={!editing} />
                <Stack direction={{ sm: "row" }} gap={3}>
                    <FormInput type="email" name="email" label="Email" disabled={true} />
                    <FormInput name="phone" label="Phone" disabled={!editing} />
                </Stack>
                {editing ? <FormSubmit loading={loading}>Submit</FormSubmit> : null}
            </Form>
        </Box>
    );
}