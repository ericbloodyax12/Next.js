import React, {useEffect, useState} from 'react';
import {initialUsers, TUsers} from "../state/initialUsers";
import Link from "next/link";
import {GetStaticProps} from "next";

type TUsersProps = {
    users: TUsers;
}

const Users: React.FC<TUsersProps> = ({users}) => {

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <Link key={user.id} href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Users;

export const getStaticProps = (async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json()

    return { props: { users } }
}) satisfies GetStaticProps<TUsersProps>