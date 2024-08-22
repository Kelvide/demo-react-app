import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const JwtGuard = ({ location, app }: { location: string, app: React.ReactElement }) => {
    const navigate = useNavigate()
    const [renderComponet, setRenderComponet] = React.useState<React.ReactElement | null>()

    React.useEffect(() => {
        if (location === "home") {
            setRenderComponet(app)
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <>
            {renderComponet}
            <Link to='/'>Home page</Link>
        </>
    )
}

export default JwtGuard