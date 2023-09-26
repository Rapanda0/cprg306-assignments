import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className='font-bold text-xl text-center'>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href='/week2'>Week 2</Link>
      <Link href='/week3'>Week 3</Link>
    </main>
  )
}
