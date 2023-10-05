import Image from "next/image";
import { Divider, Grid } from "@mui/material";
import { Copyright, ThemedLogo } from "@/exports/mui";
import LayoutTitle from "@/components/Auth/LayoutTitle";

export default function AuthLayout({ children }: React.PropsWithChildren) {
    const gap = { xs: 3, sm: 8, md: 4, lg: 6 };
    const mdHidden = { xs: "none", md: "flex" };

    return (
        <Grid container alignItems="center" flexWrap="nowrap" gap={gap} paddingX={gap} sx={{ minHeight: "100vh" }}>
            <Grid md={5} lg={6} display={mdHidden} direction="column" alignItems="center" gap={4}>
                <LayoutTitle />
                <Image src="/auth-illustration.png" alt="" width={480} height={360} />
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ display: mdHidden }} />
            <Grid xs={12} md={7} lg={6} marginY={4} display="flex" direction="column" gap={4}>
                <ThemedLogo />
                {children}
                <Copyright />
            </Grid>
        </Grid>
    );
}
