import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import RegisterForm from "@/components/Auth/RegisterForm";

export default function Signup() {
    return (
        <>
            <Stack gap={1}>
                <Typography variant="h4" fontWeight={800}>
                    Register
                </Typography>
                <Typography color="text.secondary">
                    Already have an account? <Link href="/register">Login</Link>
                </Typography>
            </Stack>
            <RegisterForm />
        </>
    );
}