import Link from "next/link";

async function fetchUser(userId) {
  const res = await fetch(`https://reqres.in/api/users/${userId}`);
  const data = await res.json();

  return data.data;
}

async function UsersPage({ params }) {
  const user = await fetchUser(params.userId);
  return (
    <div
      key={user.id}
      className="text-white bg-zinc-900 mb-4 rounded-md p-6 w-96 h-[8rem]"
    >
      <Link className="flex justify-between" href={`/users/${user.id}`}>
        <div>
          <h3 className="">
            {user.id}. {user.first_name}
          </h3>
          <p className="text-white">{user.email}</p>
        </div>
        <img src={user.avatar} alt={user.alt} className="rounded-full w-20" />
      </Link>
    </div>
  );
}

export default UsersPage;
