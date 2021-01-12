

const Job = ({job}) => {

    return (
        <div>
            <h1>Job {job}</h1>
        </div>
    )
}

export default Job


export async function getStaticPaths(){
    const paths = [
        {params: {job: '1'}},
        {params: {job: '2'}},
        {params: {job: '3'}}
    ]

    return { paths, fallback:false };
}

export async function getStaticProps(params) {
    const job = params.params.job;

    return {
        props: {job},
    }

}