"use client";

import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormDatePack from "@/components/Forms/FormDatePack";
import createBlogSchema from "@/validations/createBlogSchema";
import FormImageUpload from "@/components/Forms/FormImageUpload";

const initialValues = { image: "", title: "", content: "", source: "", publishedDate: "" };

export default function CreateBlogForm() {
    const { handleCreate, loading } = useCreateData("blog");

    return (
        <Form initialValues={initialValues} validationSchema={createBlogSchema} onSubmit={handleCreate}>
            <FormImageUpload name="image" />
            <FormInput name="title" label="Title" />
            <FormInput name="content" label="Content" />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="source" label="Source" />
                <FormDatePack name="publishedDate" label="Published Date" />
            </Stack>
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
