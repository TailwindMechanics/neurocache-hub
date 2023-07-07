//path: src\app\features\settings\team\team.tsx

import moment from "moment";
import { useState, FC } from "react";
import { useDispatch } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";

interface TeamMember {
    name: string;
    avatar: string;
    email: string;
    role: string;
    joinedOn: string;
    lastActive: string;
}

const TopSideButtons: FC = () => {
    const dispatch = useDispatch();

    const addNewTeamMember = () => {
        dispatch(showNotification({ message: "Add New Member clicked", status: 1 }));
    };

    return (
        <div className="inline-block float-right">
            <button
                className="btn px-6 btn-sm normal-case btn-primary"
                onClick={addNewTeamMember}
            >
                Invite New
            </button>
        </div>
    );
};

const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Alex",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
        email: "alex@dashwind.com",
        role: "Owner",
        joinedOn: moment(new Date()).add(-5 * 1, "days").format("DD MMM YYYY"),
        lastActive: "5 hr ago",
    },
    // ... other members
];

const Team: FC = () => {
    const [members, setMembers] = useState<TeamMember[]>(TEAM_MEMBERS);

    const getRoleComponent = (role: string) => {
        if (role === "Admin") return <div className="badge badge-secondary">{role}</div>;
        if (role === "Manager") return <div className="badge">{role}</div>;
        if (role === "Owner") return <div className="badge badge-primary">{role}</div>;
        if (role === "Support") return <div className="badge badge-accent">{role}</div>;
        else return <div className="badge badge-ghost">{role}</div>;
    };

    return (
        <>

            <TitleCard title="Active Members" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Team Member list in table format loaded constant */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Joined On</th>
                                <th>Role</th>
                                <th>Last Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-circle w-12 h-12">
                                                            <img src={l.avatar} alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{l.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.email}</td>
                                            <td>{l.joinedOn}</td>
                                            <td>{getRoleComponent(l.role)}</td>
                                            <td>{l.lastActive}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}


export default Team