import {useRouter} from 'next/router'


const Job = () => {

    const router = useRouter();
    const {job} = router.query

    return (
        <div>
            <h1>Job {job}</h1>
        </div>
    )
}

export default Job