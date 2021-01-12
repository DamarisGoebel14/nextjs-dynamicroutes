import React from 'react'
import styles from './jobs.module.css'
import List from '../components/List'
import Link from 'next/link'
import { useRouter } from 'next/router'






const Jobs = () => {

    const router = useRouter()
    const { id } = router.query

    const jobsData = [
        {
            "id": 1,
            "jobTitle": 'Fullstack Javascript Magician with MongoDB',
            "jobGender": 'M | W | D',
            "jobTag":'Fullstack',
            "jobLocation": 'Berlin'
        },
        {
            "id": 2,
            "jobTitle": 'Senior Frontend Engineer',
            "jobGender": 'M | W | D',
            "jobTag":'Frontend',
            "jobLocation": 'Berlin'
        },
        {
            "id": 3,
            "jobTitle": 'Cloud Architect',
            "jobGender": 'M | W | D',
            "jobTag":'DevOps',
            "jobLocation": 'Berlin'
        }

    ]

    return (
            <div >

                <h1 >Jobs</h1>

                <div >
                    <h2>Engineering</h2>

                    {jobsData.map(job =>
                        <List key={job.id}
                              id={job.id}
                              title={job.jobTitle}
                              furtherInfo={job.jobLocation}
                              buttonText={'Bewerben'}
                              tag={job.jobTag}
                        > </List>

                    )
                    }
                </div>


                <Link href={'/'}>
                    <a>back to home</a>
                </Link>
            </div>

    )
}



export default Jobs