import { getServerSession } from "next-auth"
import { authOptions } from "../../../api/auth/[...nextauth]/route"
import NoPermission from "../../../components/permissions/NoPermission"

const Events = async () => {
    const session = await getServerSession(authOptions)
    const totalAdminsCount = Number(process.env.TOTAL_ADMIN_EMAILS)!

    let admins = [];
    for (let i = 0; i < totalAdminsCount; i++) {
        admins.push(process.env[`ADMIN_EMAIL_${i + 1}`]!)
    }

    if (session.user.email && !admins.includes(session.user.email)) {
        return <NoPermission />
    }

    return (
        <div className="text-yellow-50">
            {JSON.stringify(session)}
            <h1>Admins</h1>
            <ul>
                {admins.map((admin) => (
                    <li key={admin}>{admin}</li>
                ))}
            </ul>
        </div>
    )
}

export default Events
