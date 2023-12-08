
import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className='font-bold text-xl text-center'>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <div className='flex flex-col'>
        <Link href='/week2'>Week 2</Link>
        <Link href='/week3'>Week 3</Link>
        <Link href='/week4'>Week 4</Link>
        <Link href='/week5'>Week 5</Link>
        <Link href='/week6'>Week 6</Link>
        <Link href='/week7'>Week 7</Link>
        <Link href='/week8'>Week 8</Link>
        <Link href='/week10'>Week 10</Link>
      </div>
    </main>
  )
}
