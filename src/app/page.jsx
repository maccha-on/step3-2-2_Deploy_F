import Link from "next/link";


export default function Home() {
  return (
  <h1>Hello World</h1>,

  <Link href="/customers">
    <p style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
      Go to main Page
    </p>
  </Link>
  )
}