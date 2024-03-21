import Link from "next/link";

function Users({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="text-white bg-zinc-900 mb-4 p4 rounded-md p-6 w-96"
          >
            <Link className="flex justify-between" href={`/users/${user.id}`}>
              <div>
                <h3 className="">
                  {user.id}. {user.first_name}
                </h3>
                <p className="text-white">{user.email}</p>
              </div>
              <img
                src={user.avatar}
                alt={user.alt}
                className="rounded-full w-20"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
