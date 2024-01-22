import Link from 'next/link'
import '../components/style.css'
 
export default function NotFound() {
  return (
    <div id='notFoundError'>
      <h2>404 - Page Not Found</h2>
      <p>Could not find requested resource.<br/>Please click the link below to return to the homepage.</p>
      <div><Link href="/">Return Home</Link></div>
    </div>
  )
}