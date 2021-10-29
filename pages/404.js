import Link from "next/link"

export default function E404() {
  return (
    <div>
      <div className="flex flex-col justify-evenly mb-96 items-stretch text-center	mt-96 text-foreground-100 text-5xl space-y-16 w-1/8">
        <h1 className="text-accent-500 text-8xl animate-bounce">404</h1>
        <p>
          You seem lost wanna go{" "}
          <Link href="/">
            <a className="underline text-accent-500">home</a>
          </Link>
          ?
        </p>
      </div>
    </div>
  )
}
