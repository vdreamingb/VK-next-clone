interface IProfilePage{
    id: number
    text: string
    path: string
}

class ProfileLinkConfig{
    getPaths(username: string):IProfilePage[]{
        const paths = [
            {
                id:1,
                text: "Profile",
                path: `/profile/${username}`
            },
            {
                id:2,
                text: "Settings",
                path: `/profile/${username}/settings`
            },
            {
                id: 3,
                text: "Add new account",
                path: "/add-new-account"
            }
        ]
        return paths
    }
}

export const profileLinksConfig = new ProfileLinkConfig()