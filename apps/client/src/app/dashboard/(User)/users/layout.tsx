import Banner from "@/components/Common/Banner";
import CreateButton from "@/components/Dashboard/Components/CreateButton";

export default function UsersLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>All User</Banner>
            <CreateButton create="user" />
            {children}
        </>
    );
}
