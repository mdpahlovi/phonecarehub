import { Box, Divider } from "@mui/material";
import SideBar from "@/layouts/Dashboard/SideBar";
import { ModeToggle } from "@/layouts/Main/Button";
import ThemedLogo from "@/components/Common/ThemedLogo";
import { PermanentSideBar, TemporarySideBar, SideBarButton } from "@/layouts/Dashboard/Client";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
    return (
        <Box display="flex">
            <Box width={{ md: 240 }} flexShrink={{ md: 0 }}>
                <TemporarySideBar>
                    <SideBar />
                </TemporarySideBar>
                <PermanentSideBar>
                    <SideBar />
                </PermanentSideBar>
            </Box>
            <Box width={{ md: `calc(100% - 240px)` }} flexGrow={1}>
                <Box height={64} display="flex" alignItems="center" mx={3} gap={3}>
                    <SideBarButton />
                    <ThemedLogo />
                    <Box width="100%" />
                    <ModeToggle />
                </Box>
                <Divider />
                {children}
            </Box>
        </Box>
    );
}
