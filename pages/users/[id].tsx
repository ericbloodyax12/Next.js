import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {IUser} from "../../state/initialUsers";

type TUserPageProps = {
    user: IUser;
};

export default function ({user}: TUserPageProps) {

    const {query} = useRouter()


    return (
        <div>
            <h1> {`Email of ${query.id} :`}</h1>
            <div>
                Name - {user.name}
            </div>
        </div>
    )
}

export const getServerSideProps = (async ({params}) => {
    if (!params || typeof params.id !== 'string') {
        return { notFound: true };
    }
    console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json()

    return { props: { user } }
}) satisfies GetServerSideProps<{ user: IUser }>