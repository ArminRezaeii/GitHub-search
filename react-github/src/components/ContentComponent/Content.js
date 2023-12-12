import { useEffect } from "react"
import { useQueryFecth } from "../../hooks/FeatchHook"

function Content(props) {
    const { data, isLoading } = useQueryFecth(props.search)

    if (props.search !== "" && isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>No data found.</p>
            </div>
        );
    }


    return (
        <div className="container mx-auto mt-8 p-4">
            <header className="text-center">
                <img
                    src={data?.avatar_url}
                    alt="Profile Image"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold">{data?.avatar_url.name}</h1>
                <p className="text-gray-600">@{data?.login}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="md:col-span-1 bg-white p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4">User Information</h2>
                    <p>Email: {data?.email}</p>
                    <p>Location: {data?.location}</p>
                    <p>Followers: {data?.followers}</p>
                    <p>Following: {data?.following}</p>
                </div>

                <div className="md:col-span-2 flex justify-between p-4 rounded-md shadow-md">
                    <div className="w-full flex justify-around">
                        <div className="flex flex-col flex-grow mb-8">
                            <h2 className="text-xl font-semibold mb-4">Following</h2>
                            {data?.followersData && data?.followersData.length > 0 ? (
                                <ul>
                                    {data?.followersData.map((follower) => (
                                        <li key={follower.id} className="flex items-center mb-2">
                                            <img
                                                src={follower.avatar_url}
                                                alt={`${follower.login}'s Avatar`}
                                                className="w-8 h-8 rounded-full mr-2"
                                            />
                                            <span>{follower.login}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No followers found.</p>
                            )}
                        </div>

                        <div className="flex flex-col flex-grow">
                            <h2 className="text-xl font-semibold mb-4">Repositories</h2>
                            {data?.repourl && data?.repourl.length > 0 ? (
                                <ul>
                                    {data?.repourl.map((repo) => (
                                        <li key={repo.id} className="flex items-center mb-2">
                                            <span>{repo.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No repositories found.</p>
                            )}
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )





}

export default Content