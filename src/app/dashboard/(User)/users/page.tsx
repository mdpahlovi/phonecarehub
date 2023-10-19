import { Column } from "@/types/global";
import { getallusers } from "@/libs/fetch";
import { format, parseISO } from "date-fns";
import { getServerSession } from "next-auth";
import Table from "@/components/Table/Table";
import Banner from "@/components/Common/Banner";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CreateButton from "@/components/Dashboard/Components/CreateButton";
import { TableRow, TableCell, TableBody, Avatar } from "@mui/material";
import ChangePasswordButton from "@/components/Dashboard/Components/ChangePasswordButton";

type SearchParams = { searchParams: { search?: string; page?: string; size?: string } };

export const metadata = { title: "All User" };

const columns: readonly Column[] = [
    { label: "Image" },
    { label: "Name" },
    { label: "Email" },
    { label: "BirthDate" },
    { label: "Gender", align: "right" },
    { label: "Phone", align: "right" },
    { label: "Change Password", align: "right" },
    { label: "Delete", align: "right" },
];

export default async function ManageUsers({ searchParams }: SearchParams) {
    const session = await getServerSession(authOptions);
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 0);
    const size = Number(searchParams?.size ? searchParams.size : 5);
    const users = await getallusers(session?.token, search, page, size);
    const total = users?.meta?.total;

    return (
        <>
            <Banner>All User</Banner>
            <CreateButton href="user" />
            <Table columns={columns} total={total!} page={page} size={size} search={search} label="User">
                <TableBody>
                    {users?.data?.map(({ id, image, name, email, phone, birthdate, gender }, idx) => (
                        <TableRow key={idx} hover>
                            <TableCell>
                                <Avatar src={image} alt="" />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell>{birthdate && format(parseISO(birthdate), "PPP")}</TableCell>
                            <TableCell align="right">{gender}</TableCell>
                            <TableCell align="right">{phone}</TableCell>
                            <TableCell align="right">
                                <ChangePasswordButton id={id} path="user" />
                            </TableCell>
                            <TableCell align="right">
                                <DeleteButton id={id} path="user" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}